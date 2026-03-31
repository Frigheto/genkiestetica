import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MassagemRelaxantePage() {
  const faqs = [
    {
      pergunta: "Quanto tempo dura a sessão?",
      resposta: "As sessões de massagem relaxante têm duração de 50 minutos ou 1h30, dependendo da modalidade escolhida. Oferecemos também sessões express de 30 minutos para quem tem pouco tempo disponível."
    },
    {
      pergunta: "Qual a diferença entre massagem relaxante e terapêutica?",
      resposta: "A massagem relaxante utiliza manobras suaves e lentas para promover bem-estar e relaxamento profundo, sem trabalhar pontos dolorosos intensamente. Já a terapêutica foca em tratar tensões e dores específicas."
    },
    {
      pergunta: "Com que frequência devo fazer?",
      resposta: "Para manutenção do bem-estar e controle do estresse, recomendamos sessões quinzenais ou mensais. Para tratamento de tensões acumuladas, sessões semanais são mais eficazes até atingir o resultado desejado."
    },
    {
      pergunta: "Posso fazer estando grávida?",
      resposta: "Sim! Temos massagem específica para gestantes, com técnicas e posicionamento adequados para cada fase da gestação. É uma ótima forma de aliviar desconfortos comuns na gravidez."
    },
    {
      pergunta: "Vou sentir sono após a massagem?",
      resposta: "É comum sentir-se relaxado e até sonolento após a sessão, pois o corpo entra em estado de relaxamento profundo. Por isso, recomendamos evitar atividades que exijam muita atenção logo após."
    },
    {
      pergunta: "Preciso tirar toda a roupa?",
      resposta: "Você fica apenas com a roupa íntima e é coberto com lençóis durante toda a sessão, expondo apenas a área que está sendo massageada no momento. Sempre respeitamos seu conforto e privacidade."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
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
          <Link
            to="/servicos/massoterapia"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Massoterapia
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Massagem Relaxante
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Técnicas suaves para promover relaxamento profundo, alívio do estresse e bem-estar geral.
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
              {["Reduz estresse", "Promove relaxamento", "Melhora o sono", "Alívio de tensões"].map((beneficio) => (
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
              Tire suas dúvidas sobre massagem relaxante
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
            Reserve um momento especial para cuidar de você e relaxar profundamente.
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
