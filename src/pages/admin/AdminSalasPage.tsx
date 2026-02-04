import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { Edit, Trash2, Plus, Upload, Play } from 'lucide-react';
import { salas, atualizarSala } from '@/data/salasData';
import { Sala, Foto, Video } from '@/types';

export default function AdminSalasPage() {
  const [salasSelecionadas, setSalasSelecionadas] = useState<Sala[]>(salas);
  const [salaEditandoId, setSalaEditandoId] = useState<string | null>(null);
  const [novaFoto, setNovaFoto] = useState('');
  const [novoVideo, setNovoVideo] = useState('');

  const abrirEditar = (sala: Sala) => {
    setSalaEditandoId(sala.id);
  };

  const adicionarFoto = (salaId: string) => {
    if (!novaFoto.trim()) return;

    const sala = salasSelecionadas.find((s) => s.id === salaId);
    if (!sala) return;

    if (sala.fotos.length >= 5) {
      alert('Máximo de 5 fotos atingido!');
      return;
    }

    const novaFotoObj: Foto = {
      id: `foto-${Date.now()}`,
      url: novaFoto,
      titulo: `Foto ${sala.fotos.length + 1}`,
      ordem: sala.fotos.length + 1,
    };

    const salaAtualizada = {
      ...sala,
      fotos: [...sala.fotos, novaFotoObj],
    };

    atualizarSala(salaId, salaAtualizada);
    setSalasSelecionadas(
      salasSelecionadas.map((s) => (s.id === salaId ? salaAtualizada : s))
    );
    setNovaFoto('');
  };

  const removerFoto = (salaId: string, fotoId: string) => {
    const sala = salasSelecionadas.find((s) => s.id === salaId);
    if (!sala) return;

    const salaAtualizada = {
      ...sala,
      fotos: sala.fotos.filter((f) => f.id !== fotoId),
    };

    atualizarSala(salaId, salaAtualizada);
    setSalasSelecionadas(
      salasSelecionadas.map((s) => (s.id === salaId ? salaAtualizada : s))
    );
  };

  const adicionarVideo = (salaId: string) => {
    if (!novoVideo.trim()) return;

    const sala = salasSelecionadas.find((s) => s.id === salaId);
    if (!sala) return;

    const novoVideoObj: Video = {
      id: `video-${Date.now()}`,
      url: novoVideo,
      titulo: `Vídeo da ${sala.nome}`,
    };

    const salaAtualizada = {
      ...sala,
      video: novoVideoObj,
    };

    atualizarSala(salaId, salaAtualizada);
    setSalasSelecionadas(
      salasSelecionadas.map((s) => (s.id === salaId ? salaAtualizada : s))
    );
    setNovoVideo('');
  };

  const removerVideo = (salaId: string) => {
    const sala = salasSelecionadas.find((s) => s.id === salaId);
    if (!sala) return;

    const salaAtualizada = {
      ...sala,
      video: undefined,
    };

    atualizarSala(salaId, salaAtualizada);
    setSalasSelecionadas(
      salasSelecionadas.map((s) => (s.id === salaId ? salaAtualizada : s))
    );
  };

  const alternarAtivo = (salaId: string) => {
    const sala = salasSelecionadas.find((s) => s.id === salaId);
    if (!sala) return;

    const salaAtualizada = {
      ...sala,
      ativo: !sala.ativo,
    };

    atualizarSala(salaId, salaAtualizada);
    setSalasSelecionadas(
      salasSelecionadas.map((s) => (s.id === salaId ? salaAtualizada : s))
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Gerenciar Salas</h1>
        <p className="text-gray-600">
          Adicione e atualize informações das salas, fotos e vídeos
        </p>
      </div>

      <Tabs defaultValue="salas" className="w-full">
        <TabsList>
          <TabsTrigger value="salas">Salas</TabsTrigger>
          <TabsTrigger value="midia">Mídias</TabsTrigger>
        </TabsList>

        {/* Aba de Salas */}
        <TabsContent value="salas" className="mt-6">
          <div className="grid gap-6">
            {salasSelecionadas.map((sala) => (
              <Card key={sala.id}>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle>{sala.nome}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      {sala.descricao}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={sala.ativo ? 'default' : 'secondary'}
                      onClick={() => alternarAtivo(sala.id)}
                      className="cursor-pointer"
                    >
                      {sala.ativo ? 'Ativo' : 'Inativo'}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => abrirEditar(sala.id)}>
                          <Edit size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Editar {sala.nome}</DialogTitle>
                        </DialogHeader>
                        {/* Formulário de edição pode ser adicionado aqui */}
                        <div className="space-y-4 mt-4">
                          <div>
                            <label className="text-sm font-medium">Nome</label>
                            <Input defaultValue={sala.nome} />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Descrição</label>
                            <Textarea defaultValue={sala.descricao} rows={3} />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Área</label>
                              <Input defaultValue={sala.area} />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Preço por Hora</label>
                              <Input
                                type="number"
                                defaultValue={sala.preco}
                                step="0.01"
                              />
                            </div>
                          </div>
                          <Button className="w-full">Salvar Alterações</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">ÁREA</p>
                      <p className="text-lg font-semibold">{sala.area}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">PREÇO/HORA</p>
                      <p className="text-lg font-semibold">R$ {sala.preco.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">FOTOS</p>
                      <p className="text-lg font-semibold">{sala.fotos.length}/5</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Equipamentos:</p>
                    <div className="flex flex-wrap gap-2">
                      {sala.equipamentos.map((equip, idx) => (
                        <Badge key={idx} variant="secondary">
                          {equip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba de Mídias */}
        <TabsContent value="midia" className="mt-6">
          <div className="grid gap-6">
            {salasSelecionadas.map((sala) => (
              <Card key={`media-${sala.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{sala.nome}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Fotos */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Fotos ({sala.fotos.length}/5)</h3>
                      {sala.fotos.length < 5 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">
                              <Plus size={16} className="mr-1" />
                              Adicionar Foto
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Adicionar Foto</DialogTitle>
                              <DialogDescription>
                                Cole a URL da imagem abaixo
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              <Input
                                placeholder="https://exemplo.com/foto.jpg"
                                value={novaFoto}
                                onChange={(e) => setNovaFoto(e.target.value)}
                              />
                              <Button
                                onClick={() => adicionarFoto(sala.id)}
                                className="w-full"
                              >
                                <Upload size={16} className="mr-2" />
                                Adicionar Foto
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>

                    {sala.fotos.length > 0 ? (
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {sala.fotos.map((foto) => (
                          <div
                            key={foto.id}
                            className="relative group rounded-lg overflow-hidden bg-gray-100 aspect-square"
                          >
                            <img
                              src={foto.url}
                              alt={foto.titulo}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() => removerFoto(sala.id, foto.id)}
                              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
                            >
                              <Trash2 size={20} className="text-white" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">Nenhuma foto adicionada</p>
                    )}
                  </div>

                  <div className="border-t pt-6">
                    {/* Vídeo */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Vídeo</h3>
                        {!sala.video && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline">
                                <Plus size={16} className="mr-1" />
                                Adicionar Vídeo
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Adicionar Vídeo</DialogTitle>
                                <DialogDescription>
                                  Cole a URL do embed do YouTube (ex: https://www.youtube.com/embed/...)
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                <Input
                                  placeholder="https://www.youtube.com/embed/..."
                                  value={novoVideo}
                                  onChange={(e) => setNovoVideo(e.target.value)}
                                />
                                <Button
                                  onClick={() => adicionarVideo(sala.id)}
                                  className="w-full"
                                >
                                  <Upload size={16} className="mr-2" />
                                  Adicionar Vídeo
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>

                      {sala.video ? (
                        <div className="space-y-3">
                          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                            <iframe
                              src={sala.video.url}
                              title={sala.video.titulo}
                              className="w-full h-full"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removerVideo(sala.id)}
                          >
                            <Trash2 size={16} className="mr-2" />
                            Remover Vídeo
                          </Button>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">Nenhum vídeo adicionado</p>
                      )}
                    </div>
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
