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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Edit, Calendar as CalendarIcon, Image as ImageIcon, Settings } from 'lucide-react';
import { salas, atualizarSala } from '@/data/salasData';
import { Sala } from '@/types';
import { ImageUploader } from '@/components/admin/ImageUploader';
import { SalaCalendar } from '@/components/admin/SalaCalendar';
import { WeeklyScheduleEditor } from '@/components/admin/WeeklyScheduleEditor';
import { useSalaAvailability } from '@/hooks/useSalaAvailability';
import { toast } from 'sonner';

export default function AdminSalasPage() {
  const [salasSelecionadas, setSalasSelecionadas] = useState<Sala[]>(salas);
  const [salaEditandoId, setSalaEditandoId] = useState<string | null>(null);
  const [salaCalendarioId, setSalaCalendarioId] = useState<string>(salas[0]?.id || '');

  // Hook para gerenciar disponibilidade da sala selecionada no calendário
  const { availability, setWeeklySchedule } = useSalaAvailability(salaCalendarioId);

  const abrirEditar = (sala: Sala) => {
    setSalaEditandoId(sala.id);
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
    toast.success(`Sala ${sala.ativo ? 'desativada' : 'ativada'} com sucesso`);
  };

  /**
   * Atualiza as fotos da sala
   */
  const handlePhotosChange = (salaId: string, photos: Sala['fotos']) => {
    const sala = salasSelecionadas.find((s) => s.id === salaId);
    if (!sala) return;

    const salaAtualizada = {
      ...sala,
      fotos: photos,
      updatedAt: new Date(),
    };

    atualizarSala(salaId, salaAtualizada);
    setSalasSelecionadas(
      salasSelecionadas.map((s) => (s.id === salaId ? salaAtualizada : s))
    );
  };

  const salaSelecionadaCalendario = salasSelecionadas.find((s) => s.id === salaCalendarioId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Gerenciar Salas</h1>
        <p className="text-gray-600">
          Administre informações, fotos e disponibilidade das salas
        </p>
      </div>

      <Tabs defaultValue="salas" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="salas" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Informações
          </TabsTrigger>
          <TabsTrigger value="midia" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Fotos
          </TabsTrigger>
          <TabsTrigger value="calendario" className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            Disponibilidade
          </TabsTrigger>
        </TabsList>

        {/* Aba de Informações das Salas */}
        <TabsContent value="salas" className="mt-6">
          <div className="grid gap-6">
            {salasSelecionadas.map((sala) => (
              <Card key={sala.id}>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle>{sala.nome}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{sala.descricao}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={sala.ativo ? 'default' : 'secondary'}
                      onClick={() => alternarAtivo(sala.id)}
                      className="cursor-pointer hover:opacity-80"
                    >
                      {sala.ativo ? 'Ativa' : 'Inativa'}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => abrirEditar(sala.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Editar {sala.nome}</DialogTitle>
                          <DialogDescription>
                            Altere as informações básicas da sala
                          </DialogDescription>
                        </DialogHeader>
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
                          <Button className="w-full bg-genki-forest hover:bg-genki-forest/90">
                            Salvar Alterações
                          </Button>
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

        {/* Aba de Fotos */}
        <TabsContent value="midia" className="mt-6">
          <div className="grid gap-6">
            {salasSelecionadas.map((sala) => (
              <Card key={`media-${sala.id}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{sala.nome}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Faça upload de fotos ou insira URLs externas
                  </p>
                </CardHeader>
                <CardContent>
                  <ImageUploader
                    photos={sala.fotos}
                    onPhotosChange={(photos) => handlePhotosChange(sala.id, photos)}
                    maxPhotos={5}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Aba de Calendário/Disponibilidade */}
        <TabsContent value="calendario" className="mt-6">
          <div className="space-y-6">
            {/* Seletor de Sala */}
            <Card>
              <CardHeader>
                <CardTitle>Selecione a Sala</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={salaCalendarioId} onValueChange={setSalaCalendarioId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma sala" />
                  </SelectTrigger>
                  <SelectContent>
                    {salasSelecionadas.map((sala) => (
                      <SelectItem key={sala.id} value={sala.id}>
                        {sala.nome} - {sala.area} - R${sala.preco}/h
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Horário Semanal */}
            {salaSelecionadaCalendario && (
              <WeeklyScheduleEditor
                schedule={availability.weeklySchedule}
                onChange={(schedule) => {
                  setWeeklySchedule(schedule);
                  toast.success('Horário semanal atualizado');
                }}
              />
            )}

            {/* Calendário de Disponibilidade */}
            {salaSelecionadaCalendario && (
              <SalaCalendar
                salaId={salaCalendarioId}
                salaName={salaSelecionadaCalendario.nome}
              />
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
