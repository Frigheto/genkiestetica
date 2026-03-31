import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, ArrowRight, CheckCircle } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useServicos } from "@/contexts/ServicosContext";

const tratamentos = [
  {
    nome: "Fisioterapia Ortopédica",
    descricao: "Tratamento de lesões e disfunções do sistema musculoesquelético, incluindo coluna, articulações e músculos.",
    beneficios: ["Alívio de dores", "Recuperação de lesões", "Melhora da mobilidade", "Prevenção de recidivas"],
    imagem: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    link: "/fisioterapia/ortopedica",
  },
  {
    nome: "RPG - Reeducação Postural Global",
    descricao: "Método que trabalha as cadeias musculares para correção postural e tratamento de dores crônicas.",
    beneficios: ["Correção postural", "Alívio de tensões", "Flexibilidade", "Consciência corporal"],
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    link: "/fisioterapia/rpg",
  },
  {
    nome: "Fisioterapia Respiratória",
    descricao: "Tratamento de disfunções respiratórias, melhorando a capacidade pulmonar e a qualidade de vida.",
    beneficios: ["Melhora respiração", "Desobstrui vias aéreas", "Aumenta capacidade pulmonar", "Reabilitação pós-covid"],
    imagem: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
    link: "/fisioterapia/respiratoria",
  },
];

export default function FisioterapiaPage() {
  const { servicos } = useServicos();
  const servico = servicos.find((s) => s.id === 'fisioterapia');

  if (!servico) {
    return <div>Serviço não encontrado</div>;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary font-medium">Nossos Serviços</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Fisioterapia
            </h1>
            <p className="text-white/70 text-lg">
              Reabilitação física completa com profissionais especializados e
              equipamentos modernos. Tratamentos personalizados para sua recuperação
              e melhora da qualidade de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Vídeo Explicativo do Serviço */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Entenda Como Funciona a Fisioterapia
              </h2>
              <p className="text-slate-600 text-lg">
                Veja como nossos tratamentos fisioterapêuticos podem melhorar sua qualidade de vida
              </p>
            </div>

            {/* Vídeo Explicativo */}
            {servico.videoUrl ? (
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={servico.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ) : (
              <VideoPlayer
                src="/videos/fisioterapia/explicativo.mp4"
                poster="/videos/fisioterapia/poster.jpg"
                title="Fisioterapia"
              />
            )}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Nossos Tratamentos
            </h2>
            <p className="text-slate-600">
              Oferecemos uma gama completa de tratamentos fisioterapêuticos para
              diversas condições, sempre com abordagem individualizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tratamentos.map((tratamento) => (
              <Link key={tratamento.nome} to={tratamento.link}>
                <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tratamento.imagem}
                      alt={tratamento.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                      {tratamento.nome}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4">{tratamento.descricao}</p>
                    <div className="space-y-2">
                      {tratamento.beneficios.map((beneficio) => (
                        <div key={beneficio} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-slate-700">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos dos Trabalhos Realizados - REMOVIDO TEMPORARIAMENTE */}
      {/* Seção "Casos de Sucesso" removida conforme solicitado */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Nossos fisioterapeutas estão prontos para avaliar seu caso e criar
            um plano de tratamento personalizado para suas necessidades.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-emerald-500">
              <Link to="/servicos">Ver Outros Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
