import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, MessageCircle, Play, X } from 'lucide-react';
import { Sala } from '@/types';
import { salas } from '@/data/salasData';

export default function SalaDetalhesPage() {
  const { salaId } = useParams();
  const navigate = useNavigate();
  const [fotoAtiva, setFotoAtiva] = useState(0);
  const [videoAberto, setVideoAberto] = useState(false);

  const sala = salas.find((s) => s.id === salaId);

  if (!sala) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Sala não encontrada</h1>
        <Button onClick={() => navigate('/aluguel-salas')}>Voltar para Salas</Button>
      </div>
    );
  }

  const proximaFoto = () => {
    setFotoAtiva((prev) => (prev + 1) % sala.fotos.length);
  };

  const fotoAnterior = () => {
    setFotoAtiva((prev) => (prev - 1 + sala.fotos.length) % sala.fotos.length);
  };

  const abrirWhatsApp = () => {
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de alugar a ${sala.nome} para o período que preciso. Poderia me informar a disponibilidade?`
    );
    window.open(
      `https://wa.me/5511999999999?text=${mensagem}`,
      '_blank'
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Botão voltar */}
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate('/aluguel-salas')}
      >
        <ChevronLeft className="mr-2" />
        Voltar
      </Button>

      {/* Galeria de fotos */}
      <div className="mb-8">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
          <img
            src={sala.fotos[fotoAtiva].url}
            alt={sala.fotos[fotoAtiva].titulo || `Foto ${fotoAtiva + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navegação de fotos */}
          {sala.fotos.length > 1 && (
            <>
              <button
                onClick={fotoAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={proximaFoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Indicador de fotos */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {fotoAtiva + 1} / {sala.fotos.length}
          </div>
        </div>

        {/* Miniaturas */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {sala.fotos.map((foto, index) => (
            <button
              key={foto.id}
              onClick={() => setFotoAtiva(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                index === fotoAtiva ? 'border-blue-500' : 'border-gray-300'
              }`}
            >
              <img
                src={foto.url}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Informações principais */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{sala.nome}</h1>
            <p className="text-gray-600 text-lg">{sala.descricao}</p>
          </div>

          {/* Detalhes */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Detalhes da Sala</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-600">Área</span>
                  <p className="text-2xl font-bold">{sala.area}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Preço por Hora</span>
                  <p className="text-2xl font-bold text-blue-600">
                    R$ {sala.preco.toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equipamentos */}
          <Card>
            <CardHeader>
              <CardTitle>Equipamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {sala.equipamentos.map((equipamento, index) => (
                  <div key={index} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {equipamento}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar com ações */}
        <div>
          {/* Vídeo */}
          {sala.video && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Vídeo da Sala</CardTitle>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => setVideoAberto(true)}
                  className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition relative group"
                >
                  {sala.video.thumbnail ? (
                    <img
                      src={sala.video.thumbnail}
                      alt="Thumbnail"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-white">
                      <Play size={48} className="mb-2 mx-auto" />
                      <p className="text-sm">Assistir Vídeo</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 rounded-lg group-hover:bg-black/60 flex items-center justify-center transition">
                    <Play size={48} className="text-white" />
                  </div>
                </button>
              </CardContent>
            </Card>
          )}

          {/* Botão WhatsApp */}
          <Button
            onClick={abrirWhatsApp}
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-white mb-4 flex items-center justify-center"
          >
            <MessageCircle className="mr-2" />
            Solicitar Aluguel no WhatsApp
          </Button>

          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-green-100 text-green-800">
                {sala.ativo ? 'Disponível' : 'Indisponível'}
              </Badge>
              <p className="text-sm text-gray-600 mt-3">
                Entre em contato via WhatsApp para verificar disponibilidade e realizar a reserva.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal de vídeo */}
      {videoAberto && sala.video && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setVideoAberto(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <iframe
              src={sala.video.url}
              title={sala.video.titulo || 'Vídeo da sala'}
              className="w-full aspect-video rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
