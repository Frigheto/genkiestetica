import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Edit, Image as ImageIcon, Video as VideoIcon, AlertCircle, CheckCircle, Images, Layers } from 'lucide-react';
import { Servico } from '@/types/servicos';
import { useServicos } from '@/contexts/ServicosContext';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { toast } from 'sonner';
import { converterParaEmbed, validarUrlYoutube } from '@/utils/youtubeUtils';
import { uploadFoto } from '@/lib/supabase';
import imageCompression from 'browser-image-compression';

export default function AdminServicosPage() {
  const { servicos, atualizarServico } = useServicos();
  const [servicoEditandoId, setServicoEditandoId] = useState<string | null>(null);
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [urlVideoEditando, setUrlVideoEditando] = useState('');
  const [erroVideo, setErroVideo] = useState<string | null>(null);
  const [videoValido, setVideoValido] = useState(false);
  const [urlEmbed, setUrlEmbed] = useState<string | null>(null);

  // Estado para edição de hero image
  const [heroUrls, setHeroUrls] = useState<Record<string, string>>({});
  const [heroUploading, setHeroUploading] = useState<Record<string, boolean>>({});
  const heroFileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Estado para edição de subserviços
  const [subUrls, setSubUrls] = useState<Record<string, string>>({});
  const [subUploading, setSubUploading] = useState<Record<string, boolean>>({});
  const subFileRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const SUBSERVICOS_CONFIG: Record<string, { key: string; nome: string }[]> = {
    estetica: [
      { key: 'rugas-linhas', nome: 'Rugas e linhas de expressão' },
      { key: 'rejuvenescimento', nome: 'Rejuvenescimento e firmeza' },
      { key: 'manchas', nome: 'Manchas' },
      { key: 'flacidez-facial', nome: 'Flacidez facial' },
      { key: 'flacidez-corporal', nome: 'Flacidez corporal' },
      { key: 'gordura-localizada', nome: 'Gordura localizada' },
    ],
    fisioterapia: [
      { key: 'ortopedica', nome: 'Fisioterapia Ortopédica' },
      { key: 'neurologica', nome: 'Fisioterapia Neurológica' },
      { key: 'rpg', nome: 'RPG (Reeducação Postural Global)' },
      { key: 'pilates-clinico', nome: 'Pilates Clínico' },
      { key: 'eletroterapia', nome: 'Eletroterapia' },
      { key: 'respiratoria', nome: 'Fisioterapia Respiratória' },
    ],
    massoterapia: [
      { key: 'relaxante', nome: 'Massagem Relaxante' },
      { key: 'desportiva', nome: 'Massagem Desportiva' },
      { key: 'drenagem-linfatica', nome: 'Drenagem Linfática' },
      { key: 'modeladora', nome: 'Massagem Modeladora' },
      { key: 'quick-massage', nome: 'Quick Massage' },
      { key: 'pedras-quentes', nome: 'Massagem com Pedras Quentes' },
    ],
    pilates: [
      { key: 'gestantes', nome: 'Pilates para Gestantes' },
      { key: 'aparelhos', nome: 'Pilates com Aparelhos' },
    ],
  };

  const abrirEditar = (servico: Servico) => {
    setServicoEditandoId(servico.id);
    setUrlVideoEditando(servico.videoUrl || '');
    setErroVideo(null);
    setVideoValido(false);
    setUrlEmbed(null);
    setDialogoAberto(true);
  };

  const validarVideo = (url: string) => {
    setUrlVideoEditando(url);

    if (!url.trim()) {
      setErroVideo(null);
      setVideoValido(false);
      setUrlEmbed(null);
      return;
    }

    const validacao = validarUrlYoutube(url);
    if (!validacao.valida) {
      setErroVideo(validacao.erro || 'URL inválida');
      setVideoValido(false);
      setUrlEmbed(null);
      return;
    }

    const embed = converterParaEmbed(url);
    if (embed) {
      setErroVideo(null);
      setVideoValido(true);
      setUrlEmbed(embed);
    }
  };

  const salvarVideo = () => {
    if (!servicoEditandoId) return;

    if (urlVideoEditando.trim() && !videoValido) {
      toast.error('Validar a URL do vídeo antes de salvar');
      return;
    }

    atualizarServico(servicoEditandoId, {
      videoUrl: urlEmbed || undefined,
      videoTitulo: urlEmbed ? `Vídeo de ${servicoEditandoId}` : undefined,
    });

    setDialogoAberto(false);
    setServicoEditandoId(null);
    setUrlVideoEditando('');
    setErroVideo(null);
    setVideoValido(false);
    setUrlEmbed(null);
    toast.success('Vídeo atualizado com sucesso!');
  };

  const handlePhotosChange = async (servicoId: string, photos: Servico['fotos']) => {
    try {
      await atualizarServico(servicoId, { fotos: photos });
      toast.success('Fotos atualizadas com sucesso!');
    } catch {
      toast.error('Erro ao salvar fotos. Verifique a conexão com o Supabase.');
    }
  };

  const handleHeroUrlChange = (servicoId: string, url: string) => {
    setHeroUrls((prev) => ({ ...prev, [servicoId]: url }));
  };

  const handleHeroSaveUrl = async (servicoId: string) => {
    const url = heroUrls[servicoId]?.trim();
    if (!url) {
      toast.error('Digite uma URL válida');
      return;
    }
    try {
      new URL(url);
    } catch {
      toast.error('URL inválida');
      return;
    }
    try {
      await atualizarServico(servicoId, { heroImage: url });
      toast.success('Imagem de capa atualizada!');
      setHeroUrls((prev) => ({ ...prev, [servicoId]: '' }));
    } catch {
      toast.error('Erro ao salvar. Verifique a conexão com o Supabase.');
    }
  };

  const handleSubUrlChange = (subKey: string, url: string) => {
    setSubUrls((prev) => ({ ...prev, [subKey]: url }));
  };

  const handleSubSaveUrl = async (servicoId: string, subKey: string) => {
    const url = subUrls[subKey]?.trim();
    if (!url) { toast.error('Digite uma URL válida'); return; }
    try { new URL(url); } catch { toast.error('URL inválida'); return; }
    const servico = servicos.find((s) => s.id === servicoId);
    if (!servico) return;
    try {
      await atualizarServico(servicoId, {
        subservicos: { ...(servico.subservicos ?? {}), [subKey]: url },
      });
      toast.success('Imagem do subserviço atualizada!');
      setSubUrls((prev) => ({ ...prev, [subKey]: '' }));
    } catch {
      toast.error('Erro ao salvar. Verifique a conexão com o Supabase.');
    }
  };

  const handleSubFileUpload = async (servicoId: string, subKey: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { toast.error('Selecione uma imagem válida'); return; }
    const refKey = `${servicoId}-${subKey}`;
    setSubUploading((prev) => ({ ...prev, [refKey]: true }));
    try {
      const compressed = await imageCompression(file, { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true });
      const publicUrl = await uploadFoto(compressed, `subservicos/${servicoId}`);
      const servico = servicos.find((s) => s.id === servicoId);
      if (!servico) return;
      await atualizarServico(servicoId, {
        subservicos: { ...(servico.subservicos ?? {}), [subKey]: publicUrl },
      });
      toast.success('Imagem do subserviço atualizada!');
      if (subFileRefs.current[refKey]) subFileRefs.current[refKey]!.value = '';
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      toast.error(`Erro no upload: ${msg}`);
    } finally {
      setSubUploading((prev) => ({ ...prev, [refKey]: false }));
    }
  };

  const handleHeroFileUpload = async (servicoId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Selecione uma imagem válida');
      return;
    }
    setHeroUploading((prev) => ({ ...prev, [servicoId]: true }));
    try {
      const compressed = await imageCompression(file, { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true });
      const publicUrl = await uploadFoto(compressed, 'hero');
      await atualizarServico(servicoId, { heroImage: publicUrl });
      toast.success('Imagem de capa atualizada!');
      if (heroFileRefs.current[servicoId]) {
        heroFileRefs.current[servicoId]!.value = '';
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      toast.error(`Erro no upload: ${msg}`);
    } finally {
      setHeroUploading((prev) => ({ ...prev, [servicoId]: false }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Gerenciar Serviços</h1>
        <p className="text-gray-600">
          Administre fotos e vídeos de Estética, Fisioterapia, Massoterapia e Pilates
        </p>
      </div>

      <Tabs defaultValue="capa" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="capa" className="flex items-center gap-2">
            <Images className="h-4 w-4" />
            Capa
          </TabsTrigger>
          <TabsTrigger value="fotos" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Fotos
          </TabsTrigger>
          <TabsTrigger value="subservicos" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            Subserviços
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <VideoIcon className="h-4 w-4" />
            Vídeos
          </TabsTrigger>
        </TabsList>

        {/* Aba de Imagem de Capa (Hero) */}
        <TabsContent value="capa" className="mt-6">
          <p className="text-sm text-muted-foreground mb-6">
            A imagem de capa é exibida como fundo no topo da página de cada serviço.
          </p>
          <div className="grid gap-6">
            {servicos.map((servico) => (
              <Card key={`hero-${servico.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{servico.nome}</CardTitle>
                  <p className="text-sm text-muted-foreground">Imagem de capa de {servico.nome.toLowerCase()}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Preview atual */}
                  <div className="relative rounded-lg overflow-hidden h-40 bg-slate-100">
                    <img
                      src={servico.heroImage}
                      alt={`Capa ${servico.nome}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 flex items-end p-2">
                      <span className="text-white text-xs bg-slate-900/60 px-2 py-1 rounded">Imagem atual</span>
                    </div>
                  </div>

                  {/* Upload de arquivo */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Fazer upload</label>
                    <Input
                      type="file"
                      accept="image/*"
                      ref={(el) => { heroFileRefs.current[servico.id] = el; }}
                      onChange={(e) => handleHeroFileUpload(servico.id, e)}
                      disabled={heroUploading[servico.id]}
                    />
                    {heroUploading[servico.id] && (
                      <p className="text-xs text-genki-forest">Enviando imagem...</p>
                    )}
                  </div>

                  {/* Ou URL */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium">Ou cole uma URL</label>
                    <div className="flex gap-2">
                      <Input
                        type="url"
                        placeholder="https://exemplo.com/imagem.jpg"
                        value={heroUrls[servico.id] ?? ''}
                        onChange={(e) => handleHeroUrlChange(servico.id, e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleHeroSaveUrl(servico.id)}
                      />
                      <Button onClick={() => handleHeroSaveUrl(servico.id)} variant="outline">
                        Salvar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba de Fotos */}
        <TabsContent value="fotos" className="mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-blue-900 mb-1">Como funciona</p>
            <p className="text-sm text-blue-800">
              Cada foto corresponde a um card de tratamento na ordem em que aparecem na página do serviço.
              A <strong>1ª foto</strong> substitui o 1º tratamento, a <strong>2ª foto</strong> o 2º, e assim por diante.
              Se não houver foto, a imagem padrão é exibida.
            </p>
          </div>
          <div className="grid gap-6">
            {servicos.map((servico) => (
              <Card key={`photos-${servico.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{servico.nome}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fotos dos cards de tratamento de {servico.nome.toLowerCase()}
                  </p>
                </CardHeader>
                <CardContent>
                  <ImageUploader
                    photos={servico.fotos}
                    onPhotosChange={(photos) => handlePhotosChange(servico.id, photos)}
                    maxPhotos={10}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba de Subserviços */}
        <TabsContent value="subservicos" className="mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-medium text-blue-900 mb-1">Como funciona</p>
            <p className="text-sm text-blue-800">
              Cada subserviço tem sua própria imagem de capa (hero). Estas imagens aparecem no fundo
              da página individual de cada tratamento (ex: Massagem Relaxante, Pilates para Gestantes, etc.).
            </p>
          </div>
          <div className="grid gap-8">
            {servicos.map((servico) => {
              const subConfig = SUBSERVICOS_CONFIG[servico.id];
              if (!subConfig || subConfig.length === 0) return null;
              return (
                <Card key={`sub-${servico.id}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{servico.nome}</CardTitle>
                    <p className="text-sm text-muted-foreground">{subConfig.length} subserviços</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {subConfig.map(({ key, nome }) => {
                        const refKey = `${servico.id}-${key}`;
                        const currentUrl = servico.subservicos?.[key];
                        return (
                          <div key={key} className="border rounded-lg p-4 space-y-3">
                            <p className="font-medium text-sm">{nome}</p>
                            {/* Preview */}
                            <div className="relative rounded-lg overflow-hidden h-28 bg-slate-100">
                              {currentUrl ? (
                                <>
                                  <img
                                    src={currentUrl}
                                    alt={nome}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-slate-900/20 flex items-end p-2">
                                    <span className="text-white text-xs bg-slate-900/60 px-2 py-1 rounded">Imagem atual</span>
                                  </div>
                                </>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                                  Sem imagem personalizada — usando padrão
                                </div>
                              )}
                            </div>
                            {/* Upload */}
                            <div className="space-y-1">
                              <label className="text-xs font-medium text-slate-600">Fazer upload</label>
                              <Input
                                type="file"
                                accept="image/*"
                                ref={(el) => { subFileRefs.current[refKey] = el; }}
                                onChange={(e) => handleSubFileUpload(servico.id, key, e)}
                                disabled={subUploading[refKey]}
                              />
                              {subUploading[refKey] && (
                                <p className="text-xs text-genki-forest">Enviando imagem...</p>
                              )}
                            </div>
                            {/* URL */}
                            <div className="space-y-1">
                              <label className="text-xs font-medium text-slate-600">Ou cole uma URL</label>
                              <div className="flex gap-2">
                                <Input
                                  type="url"
                                  placeholder="https://exemplo.com/imagem.jpg"
                                  value={subUrls[refKey] ?? ''}
                                  onChange={(e) => handleSubUrlChange(refKey, e.target.value)}
                                  onKeyDown={(e) => e.key === 'Enter' && handleSubSaveUrl(servico.id, key)}
                                />
                                <Button onClick={() => handleSubSaveUrl(servico.id, key)} variant="outline" size="sm">
                                  Salvar
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Aba de Vídeos */}
        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6">
            {servicos.map((servico) => (
              <Card key={`video-${servico.id}`}>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{servico.nome}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Vídeo explicativo de {servico.nome.toLowerCase()}
                    </p>
                  </div>
                  <Dialog open={dialogoAberto && servicoEditandoId === servico.id} onOpenChange={(open) => {
                    if (!open) {
                      setDialogoAberto(false);
                      setServicoEditandoId(null);
                    }
                  }}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => abrirEditar(servico)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Editar Vídeo de {servico.nome}</DialogTitle>
                        <DialogDescription>
                          Adicione ou atualize o vídeo explicativo do serviço
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4 pr-4">
                        <div>
                          <label className="text-sm font-medium">URL do Vídeo (YouTube)</label>
                          <Input
                            placeholder="Cole o link do YouTube aqui..."
                            value={urlVideoEditando}
                            onChange={(e) => validarVideo(e.target.value)}
                            className={erroVideo ? 'border-red-500' : videoValido ? 'border-green-500' : ''}
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            Aceita qualquer formato do YouTube:
                            <br />• https://www.youtube.com/watch?v=VIDEO_ID
                            <br />• https://youtu.be/VIDEO_ID
                            <br />• Apenas o ID do vídeo
                          </p>
                        </div>

                        {/* Feedback de Validação */}
                        {urlVideoEditando && (
                          <div className="mt-4 p-3 rounded-lg border flex items-start gap-3">
                            {erroVideo ? (
                              <>
                                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium text-red-900">Erro na URL</p>
                                  <p className="text-xs text-red-700 mt-1 whitespace-pre-wrap">{erroVideo}</p>
                                </div>
                              </>
                            ) : videoValido ? (
                              <>
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm font-medium text-green-900">URL válida</p>
                                  <p className="text-xs text-green-700 mt-1">Vídeo pronto para salvar</p>
                                </div>
                              </>
                            ) : null}
                          </div>
                        )}

                        {/* Pré-visualização */}
                        {urlEmbed && videoValido && (
                          <div className="mt-4">
                            <p className="text-sm font-medium mb-2">Pré-visualização:</p>
                            <div className="h-40 rounded-lg overflow-hidden bg-black">
                              <iframe
                                src={urlEmbed}
                                className="w-full h-full"
                                allowFullScreen
                                title="Pré-visualização do vídeo"
                              />
                            </div>
                          </div>
                        )}

                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 space-y-2">
                          <p className="text-xs font-medium text-blue-900">💡 Qual usar?</p>
                          <div className="text-xs text-blue-800 space-y-1">
                            <div>
                              <strong>Google Drive (Recomendado):</strong> Controle total, sem propagandas
                            </div>
                            <div>
                              <strong>YouTube:</strong> Mais fácil compartilhar, alguns elementos visuais do YouTube
                            </div>
                          </div>

                          <div className="bg-white p-2 rounded border border-blue-200 mt-3">
                            <p className="text-xs font-medium text-blue-900 mb-1">Como compartilhar do Google Drive:</p>
                            <ol className="text-xs text-blue-800 space-y-0.5 list-decimal list-inside">
                              <li>Abra seu vídeo no Google Drive</li>
                              <li>Clique em "Compartilhar" → Configure como "Qualquer pessoa com o link"</li>
                              <li>Copie o link compartilhado (será como: https://drive.google.com/file/d/...)</li>
                              <li>Cole aqui!</li>
                            </ol>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setUrlVideoEditando('');
                              setErroVideo(null);
                              setVideoValido(false);
                              setUrlEmbed(null);
                            }}
                          >
                            Limpar
                          </Button>
                          <Button
                            onClick={salvarVideo}
                            className="flex-1 bg-genki-forest hover:bg-genki-forest/90"
                            disabled={urlVideoEditando && !videoValido}
                          >
                            Salvar Vídeo
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {servico.videoUrl ? (
                      <>
                        <div className="aspect-video rounded-lg overflow-hidden bg-slate-100">
                          <iframe
                            src={servico.videoUrl}
                            className="w-full h-full"
                            allowFullScreen
                            title={`Vídeo de ${servico.nome}`}
                          />
                        </div>
                        <div className="flex gap-2 items-center">
                          <Badge className="bg-green-100 text-green-800">✓ Vídeo Configurado</Badge>
                          <Badge variant="outline" className="text-xs">
                            {servico.videoUrl.includes('drive.google.com') ? '🔗 Google Drive' : '📺 YouTube'}
                          </Badge>
                        </div>
                      </>
                    ) : (
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <div className="text-center">
                          <VideoIcon className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-600 font-medium">Nenhum vídeo configurado</p>
                          <p className="text-slate-500 text-sm">Clique em editar para adicionar</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
