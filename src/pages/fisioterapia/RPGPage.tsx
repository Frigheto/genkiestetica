import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RPGPage() {
  const faqs = [
    {
      pergunta: "O que é RPG e como funciona?",
      resposta: "RPG (Reeducação Postural Global) é um método que trabalha o corpo todo através de posturas específicas mantidas por cerca de 20 minutos. Visa alongar cadeias musculares encurtadas e fortalecer músculos enfraquecidos, corrigindo desequilíbrios posturais."
    },
    {
      pergunta: "Quantas sessões por semana são necessárias?",
      resposta: "Recomendamos 1 a 2 sessões semanais. O RPG é um método que exige recuperação entre as sessões, pois trabalha profundamente as estruturas musculares e articulares."
    },
    {
      pergunta: "RPG é indicado para qual tipo de problema?",
      resposta: "É indicado para escolioses, hiperlordose, cifose, dores crônicas na coluna, hérnias de disco, tendinites, bursites, problemas de ATM, e diversos desequilíbrios posturais que causam dor ou limitação."
    },
    {
      pergunta: "É desconfortável manter as posturas?",
      resposta: "Inicialmente pode haver algum desconforto ao alongar músculos encurtados, mas trabalhamos respeitando o limite de cada paciente. Com o tempo, as posturas ficam mais confortáveis e os benefícios se tornam evidentes."
    },
    {
      pergunta: "Posso fazer RPG e outras atividades físicas?",
      resposta: "Sim! O RPG complementa muito bem outras atividades. Inclusive ajuda a melhorar o desempenho em esportes ao corrigir desequilíbrios posturais e prevenir lesões."
    },
    {
      pergunta: "Quanto tempo até ver resultados?",
      resposta: "Muitos pacientes sentem alívio de tensões já nas primeiras sessões. Mudanças posturais mais significativas aparecem após 10-15 sessões, mas o ideal é manter o tratamento para consolidar as correções."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/servicos/fisioterapia"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Fisioterapia
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              RPG - Reeducação Postural Global
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Método que trabalha as cadeias musculares para correção postural e tratamento de dores crônicas.
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
              {["Correção postural", "Alívio de tensões", "Flexibilidade", "Consciência corporal"].map((beneficio) => (
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
              Tire suas dúvidas sobre RPG
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
            Agende sua Consulta
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Nossos fisioterapeutas estão prontos para avaliar seu caso e iniciar seu tratamento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-emerald-500">
              <Link to="/servicos/fisioterapia">Ver Outros Tratamentos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
