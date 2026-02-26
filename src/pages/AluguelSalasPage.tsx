import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Wifi,
  AirVent,
  Monitor,
  ArrowRight,
  Clock,
  MessageCircle,
  Eye,
  LogIn,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useSalas } from "@/contexts/SalasContext";

const beneficios = [
  {
    icon: Building2,
    titulo: "Infraestrutura Completa",
    descricao: "Salas totalmente equipadas prontas para uso imediato.",
  },
  {
    icon: Wifi,
    titulo: "Wi-Fi de Alta Velocidade",
    descricao: "Internet rápida e estável em todas as dependências.",
  },
  {
    icon: AirVent,
    titulo: "Climatização",
    descricao: "Ar condicionado individual em cada sala.",
  },
  {
    icon: Monitor,
    titulo: "Equipamentos Modernos",
    descricao: "Aparelhos de última geração inclusos.",
  },
  {
    icon: Clock,
    titulo: "Agendamento Online",
    descricao: "Reserve pelo WhatsApp com nossos consultores.",
  },
  {
    icon: MessageCircle,
    titulo: "Suporte Dedicado",
    descricao: "Equipe pronta para ajudar com qualquer dúvida.",
  },
];

export default function AluguelSalasPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { salas } = useSalas();

  const abrirWhatsApp = () => {
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de obter mais informações sobre o aluguel de salas. Quais são as disponibilidades?"
    );
    window.open(
      `https://wa.me/5511999999999?text=${mensagem}`,
      "_blank"
    );
  };

  const visualizarDetalhes = (salaId: string) => {
    navigate(`/aluguel-salas/${salaId}`);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Para Profissionais da Saúde
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Aluguel de Salas
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Atenda seus pacientes em uma estrutura completa e moderna.
              10 salas equipadas, pronta para você começar a trabalhar hoje mesmo.
              Agende sua visita e conheça nossas instalações.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={abrirWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600">
                <MessageCircle className="mr-2 w-5 h-5" />
                Solicitar Orçamento
              </Button>
              {isAuthenticated && (
                <Button
                  onClick={() => window.scrollTo({ top: document.getElementById("salas")?.offsetTop, behavior: "smooth" })}
                  size="lg"
                  className="bg-white text-genki-forest hover:bg-white/90 font-semibold"
                >
                  Ver Salas
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {beneficios.map((item) => (
              <div key={item.titulo} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.titulo}</h3>
                <p className="text-slate-600 text-xs">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salas */}
      <section id="salas" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Nossas Salas
            </h2>
            <p className="text-slate-600">
              Conheça as salas disponíveis para locação. Todas equipadas com o que há de melhor
              e prontas para receber seus pacientes com conforto e profissionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salas.map((sala) => (
              <Card key={sala.id} className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden group flex flex-col h-full transition-all duration-300">
                {/* Imagem com hover overlay */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  {sala.fotos.length > 0 ? (
                    <img
                      src={sala.fotos[0].url}
                      alt={sala.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-white">
                      <Building2 size={40} />
                    </div>
                  )}

                  {/* Hover Overlay com info de mídia */}
                  <div className="absolute inset-0 bg-gradient-to-t from-genki-forest-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <div className="text-white text-sm text-center space-y-2">
                      <p>📸 {sala.fotos.length} fotos</p>
                      <p>🎥 {sala.video ? 'Vídeo disponível' : 'Novidade em breve'}</p>
                    </div>
                    <Button
                      onClick={abrirWhatsApp}
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Alugar
                    </Button>
                  </div>

                  {/* Status badge */}
                  {!sala.ativo && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Badge className="bg-red-600">Indisponível</Badge>
                    </div>
                  )}
                </div>

                {/* Conteúdo minimalista */}
                <CardContent className="p-6 flex-1 flex flex-col gap-4">
                  {/* Nome */}
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-1">
                    {sala.nome}
                  </h3>

                  {/* Área + Preço inline */}
                  <div className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="font-medium">{sala.area}</span>
                    <span>•</span>
                    <span className="font-semibold text-genki-forest-dark">
                      R$ {sala.preco.toFixed(2)}/h
                    </span>
                  </div>

                  {/* Descrição - aparece no hover */}
                  <p className="text-sm text-slate-600 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {sala.descricao}
                  </p>

                  {/* Botão */}
                  <div className="mt-auto">
                    <Button
                      onClick={() => visualizarDetalhes(sala.id)}
                      variant="outline"
                      className="w-full border-genki-green text-genki-forest-dark hover:bg-genki-green hover:text-white transition-colors"
                    >
                      Ver Detalhes
                      <Eye size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-white/70">
              Alugar uma sala é simples e direto. Fale com nosso consultor
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { passo: "01", titulo: "Conheça as Salas", descricao: "Navegue pelas salas, veja fotos e vídeos." },
              { passo: "02", titulo: "Fale Conosco", descricao: "Entre em contato via WhatsApp com nosso consultor." },
              { passo: "03", titulo: "Agende Visita", descricao: "Visite a sala e conheça nossas instalações." },
              { passo: "04", titulo: "Inicie o Aluguel", descricao: "Assine contrato e comece a usar a sala." },
            ].map((item) => (
              <div key={item.passo} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.passo}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.titulo}</h3>
                <p className="text-white/60 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12 text-center">
              Por Que Escolher Genki?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  titulo: "10 Salas Equipadas",
                  descricao:
                    "Salas para estética, fisioterapia, massoterapia, consultório e multiuso.",
                  icon: Building2,
                },
                {
                  titulo: "Infraestrutura Completa",
                  descricao:
                    "Wi-Fi, ar condicionado, recepção, estacionamento e muito mais.",
                  icon: Wifi,
                },
                {
                  titulo: "Flexibilidade",
                  descricao:
                    "Aluguel por hora, dia, semana ou mês. Sem compromisso de longo prazo.",
                  icon: Clock,
                },
                {
                  titulo: "Atendimento Dedicado",
                  descricao:
                    "Nosso time está sempre pronto para resolver qualquer dúvida.",
                  icon: MessageCircle,
                },
              ].map((item) => (
                <div key={item.titulo} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900">{item.titulo}</h3>
                    <p className="mt-2 text-slate-600">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Pronto para começar?
              </h3>
              <p className="text-white/80">
                Entre em contato conosco e saiba como podemos ajudar seu negócio.
              </p>
            </div>
            <Button
              onClick={abrirWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white whitespace-nowrap"
            >
              <MessageCircle className="mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
