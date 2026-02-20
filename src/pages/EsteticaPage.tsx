import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const tratamentos = [
  {
    nome: "Rugas e linhas de expressão",
    descricao: "Tratamento para suavizar rugas e linhas de expressão, proporcionando uma aparência mais jovem e descansada.",
    procedimentos: "Toxina botulínica e fios de PDO",
    beneficios: ["Reduz rugas dinâmicas", "Previne novas linhas", "Resultados naturais", "Procedimento rápido"],
    imagem: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
    link: "/estetica/rugas-linhas",
  },
  {
    nome: "Rejuvenescimento e firmeza",
    descricao: "Tratamentos que estimulam a produção de colágeno para uma pele mais firme, jovem e revitalizada.",
    procedimentos: "Bioestimuladores e Profhilo",
    beneficios: ["Estimula colágeno natural", "Melhora firmeza", "Hidratação profunda", "Resultados duradouros"],
    imagem: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    link: "/estetica/rejuvenescimento",
  },
  {
    nome: "Manchas",
    descricao: "Tratamento eficaz para reduzir manchas escuras, melasma e hiperpigmentação, uniformizando o tom da pele.",
    procedimentos: "Microagulhamento",
    beneficios: ["Reduz manchas escuras", "Uniformiza o tom", "Estimula renovação celular", "Pele mais luminosa"],
    imagem: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=300&fit=crop",
    link: "/estetica/manchas",
  },
  {
    nome: "Flacidez facial",
    descricao: "Soluções avançadas para combater a flacidez e devolver firmeza ao contorno facial.",
    procedimentos: "Bioestimuladores e Visage",
    beneficios: ["Redefine contorno facial", "Aumenta firmeza", "Efeito lifting", "Aparência rejuvenescida"],
    imagem: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
    link: "/estetica/flacidez-facial",
  },
  {
    nome: "Flacidez corporal",
    descricao: "Tratamentos corporais que combatem a flacidez, promovendo firmeza e melhora da textura da pele.",
    procedimentos: "Bioestimulador e radiofrequência",
    beneficios: ["Reduz flacidez", "Melhora textura da pele", "Resultados progressivos", "Não invasivo"],
    imagem: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    link: "/estetica/flacidez-corporal",
  },
  {
    nome: "Gordura localizada",
    descricao: "Protocolos avançados para redução de gordura localizada e medidas com tecnologia de ponta.",
    procedimentos: "Criolipólise e enzimas",
    beneficios: ["Elimina gordura localizada", "Redução de medidas", "Resultados visíveis", "Sem cirurgia"],
    imagem: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=300&fit=crop",
    link: "/estetica/gordura-localizada",
  },
];

export default function EsteticaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary font-medium">Nossos Serviços</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Estética
            </h1>
            <p className="text-white/70 text-lg">
              Tratamentos estéticos de alta qualidade para realçar sua beleza natural.
              Utilizamos as mais avançadas técnicas e tecnologias do mercado para
              proporcionar resultados naturais e duradouros.
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
                Conheça Nossos Tratamentos Estéticos
              </h2>
              <p className="text-slate-600 text-lg">
                Assista ao vídeo e descubra como nossos tratamentos podem transformar sua beleza natural
              </p>
            </div>

            {/* Vídeo Explicativo */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-slate-200 group">
              <video
                className="w-full h-full"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/assets/videos/estetica/explicativo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>

              {/* Overlay para bloquear o botão de pop-out se o iframe ainda fosse usado, 
                  mas com <video> ele não existirá. Vou deixar o <video> puro primeiro. */}
            </div>
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
              Conheça os procedimentos estéticos que oferecemos. Todos realizados
              por profissionais especializados em ambiente seguro e acolhedor.
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
                    {"procedimentos" in tratamento && (
                      <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                        <p className="text-sm font-medium text-primary">
                          {tratamento.procedimentos}
                        </p>
                      </div>
                    )}
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

      {/* Vídeos dos Trabalhos Realizados - REMOVIDO */}
      {/* Seção de Resultados Reais removida conforme solicitado */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Agende sua Avaliação
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Quer saber qual tratamento é ideal para você? Agende uma avaliação
            gratuita com nossos especialistas e descubra como podemos ajudá-lo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Avaliação
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
