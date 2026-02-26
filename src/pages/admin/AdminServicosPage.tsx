import { useState } from 'react';
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
import { Edit, Image as ImageIcon, Video as VideoIcon, AlertCircle, CheckCircle } from 'lucide-react';
import { Servico } from '@/types/servicos';
import { useServicos } from '@/contexts/ServicosContext';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { toast } from 'sonner';
import { converterParaEmbed, validarUrlYoutube } from '@/utils/youtubeUtils';

export default function AdminServicosPage() {
  const { servicos, atualizarServico } = useServicos();
  const [servicoEditandoId, setServicoEditandoId] = useState<string | null>(null);
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [urlVideoEditando, setUrlVideoEditando] = useState('');
  const [erroVideo, setErroVideo] = useState<string | null>(null);
  const [videoValido, setVideoValido] = useState(false);
  const [urlEmbed, setUrlEmbed] = useState<string | null>(null);

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

  const handlePhotosChange = (servicoId: string, photos: Servico['fotos']) => {
    atualizarServico(servicoId, { fotos: photos });
    toast.success('Fotos atualizadas com sucesso!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Gerenciar Serviços</h1>
        <p className="text-gray-600">
          Administre fotos e vídeos de Estética, Fisioterapia, Massoterapia e Pilates
        </p>
      </div>

      <Tabs defaultValue="fotos" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="fotos" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Fotos
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <VideoIcon className="h-4 w-4" />
            Vídeos
          </TabsTrigger>
        </TabsList>

        {/* Aba de Fotos */}
        <TabsContent value="fotos" className="mt-6">
          <div className="grid gap-6">
            {servicos.map((servico) => (
              <Card key={`photos-${servico.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{servico.nome}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Gerenciar fotos de {servico.nome.toLowerCase()}
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
