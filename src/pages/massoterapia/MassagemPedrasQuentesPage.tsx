import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MassagemPedrasQuentesPage() {
  const faqs = [
    {
      pergunta: "As pedras não queimam a pele?",
      resposta: "Não! As pedras são aquecidas a temperatura controlada entre 40-50°C, confortável para a pele. Sempre testamos a temperatura antes de aplicar e monitoramos durante toda a sessão para garantir seu conforto e segurança."
    },
    {
      pergunta: "Qual o diferencial das pedras quentes?",
      resposta: "O calor das pedras vulcânicas penetra profundamente nos músculos, promovendo relaxamento intenso, melhorando circulação e aliviando dores de forma mais eficaz que massagem tradicional. É uma experiência terapêutica e sensorial única."
    },
    {
      pergunta: "Quanto tempo dura a sessão?",
      resposta: "A sessão completa dura de 60 a 90 minutos, incluindo aquecimento inicial com as pedras, massagem com óleo e técnicas manuais combinadas. É um tratamento completo para relaxamento profundo."
    },
    {
      pergunta: "Posso fazer se tenho pressão alta?",
      resposta: "Pacientes com hipertensão controlada podem fazer mediante liberação médica. O calor dilata vasos sanguíneos, portanto avaliamos cada caso. Contraindicado em hipertensão não controlada, febre ou inflamações agudas."
    },
    {
      pergunta: "As pedras são colocadas em quais partes do corpo?",
      resposta: "Posicionamos pedras estrategicamente ao longo da coluna, nas palmas das mãos, entre os dedos dos pés e em áreas específicas de tensão. Também deslizamos outras pedras aquecidas durante a massagem para potencializar o relaxamento."
    },
    {
      pergunta: "Qual a melhor frequência para fazer?",
      resposta: "Para relaxamento e bem-estar geral, uma sessão mensal é ideal. Para tratamento de tensões crônicas e dores, recomendamos quinzenalmente. É uma massagem especial que proporciona relaxamento duradouro."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/servicos/massoterapia"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Massoterapia
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Massagem com Pedras Quentes
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Combina massagem com calor das pedras vulcânicas para relaxamento profundo e alívio de dores.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">
              Benefícios do Tratamento
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {["Relaxamento profundo", "Alívio de dores", "Melhora circulação", "Experiência única"].map((beneficio) => (
                <div key={beneficio} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 text-center">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-center mb-12">
              Tire suas dúvidas sobre massagem com pedras quentes
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-slate-900 hover:no-underline py-5">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Agende sua Sessão
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Presenteie-se com uma experiência única de relaxamento e bem-estar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Sessão
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-emerald-500">
              <Link to="/servicos/massoterapia">Ver Outras Massagens</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
