import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, ArrowRight, CheckCircle, Users, Clock, Award } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useServicos } from "@/contexts/ServicosContext";

const modalidades = [
  {
    nome: "Pilates para Gestantes",
    descricao: "Exercícios adaptados para gestantes, ajudando no preparo para o parto e no bem-estar durante a gravidez.",
    beneficios: ["Preparo para o parto", "Alivia desconfortos", "Fortalece assoalho pélvico", "Seguro para bebê"],
    imagem: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    link: "/pilates/gestantes",
  },
  {
    nome: "Pilates com Aparelhos",
    descricao: "Exercícios realizados em equipamentos específicos como Reformer, Cadillac e Chair para trabalho mais intenso e personalizado.",
    beneficios: ["Maior resistência", "Variedade de exercícios", "Trabalho específico", "Resultados rápidos"],
    imagem: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop",
    link: "/pilates/aparelhos",
  },
];

const diferenciais = [
  {
    icon: Users,
    titulo: "Turmas Reduzidas",
    descricao: "Máximo de 4 alunos por turma para atendimento personalizado.",
  },
  {
    icon: Award,
    titulo: "Instrutores Certificados",
    descricao: "Profissionais com formação completa e especializações.",
  },
  {
    icon: Clock,
    titulo: "Horários Flexíveis",
    descricao: "Aulas disponíveis de manhã, tarde e noite.",
  },
];

export default function PilatesPage() {
  const { servicos } = useServicos();
  const servico = servicos.find((s) => s.id === 'pilates');

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
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary font-medium">Nossos Serviços</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Pilates
            </h1>
            <p className="text-white/70 text-lg">
              Aulas de pilates solo e com aparelhos para fortalecimento muscular,
              correção postural e aumento da flexibilidade. Turmas reduzidas para
              atendimento personalizado.
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
                Conheça o Método Pilates
              </h2>
              <p className="text-slate-600 text-lg">
                Entenda como o Pilates fortalece seu corpo e melhora sua qualidade de vida
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
                src="/videos/pilates/explicativo.mp4"
                poster="/videos/pilates/poster.jpg"
                title="Pilates"
              />
            )}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.titulo}</h3>
                  <p className="text-slate-600 text-sm">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Nossas Modalidades
            </h2>
            <p className="text-slate-600">
              Oferecemos diferentes modalidades de pilates para atender a todas
              as idades, condições físicas e objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modalidades.map((modalidade) => (
              <Link key={modalidade.nome} to={modalidade.link}>
                <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={modalidade.imagem}
                      alt={modalidade.nome}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                      {modalidade.nome}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-600 mb-4">{modalidade.descricao}</p>
                    <div className="space-y-2">
                      {modalidade.beneficios.map((beneficio) => (
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
      {/* Seção "Aulas e Transformações" removida conforme solicitado */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Faça uma Aula Experimental
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Experimente o pilates e sinta a diferença no seu corpo. Agende sua
            primeira aula e descubra os benefícios dessa prática incrível.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Aula Experimental
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
