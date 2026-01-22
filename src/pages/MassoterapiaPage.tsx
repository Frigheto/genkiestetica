import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hand, ArrowRight, CheckCircle } from "lucide-react";

const tratamentos = [
  {
    nome: "Massagem Relaxante",
    descricao: "Técnicas suaves para promover relaxamento profundo, alívio do estresse e bem-estar geral.",
    beneficios: ["Reduz estresse", "Promove relaxamento", "Melhora o sono", "Alívio de tensões"],
    imagem: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
  },
  {
    nome: "Massagem Desportiva",
    descricao: "Ideal para atletas e praticantes de atividade física, ajudando na recuperação muscular e prevenção de lesões.",
    beneficios: ["Acelera recuperação", "Previne lesões", "Melhora performance", "Reduz fadiga muscular"],
    imagem: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&h=300&fit=crop",
  },
  {
    nome: "Drenagem Linfática",
    descricao: "Técnica que estimula o sistema linfático, reduzindo inchaços e melhorando a circulação.",
    beneficios: ["Reduz inchaços", "Elimina toxinas", "Melhora circulação", "Combate celulite"],
    imagem: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
  },
  {
    nome: "Massagem Modeladora",
    descricao: "Técnica intensa que ajuda a modelar o corpo, reduzindo gordura localizada e melhorando o contorno corporal.",
    beneficios: ["Modela o corpo", "Reduz medidas", "Combate celulite", "Tonifica a pele"],
    imagem: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop",
  },
  {
    nome: "Quick Massage",
    descricao: "Sessão rápida focada em pontos de tensão, ideal para o dia a dia corrido.",
    beneficios: ["Sessão rápida", "Alívio imediato", "Praticidade", "Revitaliza"],
    imagem: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=300&fit=crop",
  },
  {
    nome: "Massagem com Pedras Quentes",
    descricao: "Combina massagem com calor das pedras vulcânicas para relaxamento profundo e alívio de dores.",
    beneficios: ["Relaxamento profundo", "Alívio de dores", "Melhora circulação", "Experiência única"],
    imagem: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400&h=300&fit=crop",
  },
];

export default function MassoterapiaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
                <Hand className="w-7 h-7 text-white" />
              </div>
              <span className="text-primary font-medium">Nossos Serviços</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Massoterapia
            </h1>
            <p className="text-white/70 text-lg">
              Técnicas de massagem para relaxamento, alívio de tensões e tratamento
              de dores musculares. Ambiente acolhedor e profissionais certificados
              para cuidar do seu bem-estar.
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
                Descubra os Benefícios da Massoterapia
              </h2>
              <p className="text-slate-600 text-lg">
                Veja como nossas técnicas de massagem promovem relaxamento e bem-estar
              </p>
            </div>

            {/* Vídeo Explicativo */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/videos/massoterapia/explicativo-thumbnail.jpg"
              >
                <source src="/videos/massoterapia/explicativo.mp4" type="video/mp4" />
                <source src="/videos/massoterapia/explicativo.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                Coloque o vídeo explicativo em: /public/videos/massoterapia/explicativo.mp4
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Nossas Massagens
            </h2>
            <p className="text-slate-600">
              Oferecemos diversas técnicas de massagem para atender às suas
              necessidades, seja para relaxar, tratar ou revitalizar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tratamentos.map((tratamento) => (
              <Card key={tratamento.nome} className="border-0 shadow-lg overflow-hidden group">
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
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos dos Trabalhos Realizados */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Experiências de Bem-Estar
            </h2>
            <p className="text-slate-600">
              Veja depoimentos e conheça as técnicas de massoterapia aplicadas na GENKI.
              Momentos de relaxamento e cuidado com você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vídeo 1 */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/videos/massoterapia/thumbnail1.jpg"
              >
                <source src="/videos/massoterapia/video1.mp4" type="video/mp4" />
                <source src="/videos/massoterapia/video1.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>

            {/* Vídeo 2 */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/videos/massoterapia/thumbnail2.jpg"
              >
                <source src="/videos/massoterapia/video2.mp4" type="video/mp4" />
                <source src="/videos/massoterapia/video2.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>

            {/* Vídeo 3 */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/videos/massoterapia/thumbnail3.jpg"
              >
                <source src="/videos/massoterapia/video3.mp4" type="video/mp4" />
                <source src="/videos/massoterapia/video3.webm" type="video/webm" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-500 to-violet-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Agende sua Sessão
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Reserve um momento para cuidar de você. Nossas massoterapeutas
            estão prontas para proporcionar uma experiência única de relaxamento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-purple-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Sessão
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/servicos">Ver Outros Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
