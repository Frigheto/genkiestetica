import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MassagemModeladoraPage() {
  const faqs = [
    {
      pergunta: "A massagem modeladora dói?",
      resposta: "A massagem modeladora utiliza manobras mais intensas que podem causar desconforto, especialmente em áreas com mais gordura localizada ou celulite. Porém, trabalhamos sempre dentro do seu limite de tolerância."
    },
    {
      pergunta: "Quantas sessões para ver resultados?",
      resposta: "Resultados visíveis aparecem a partir de 8-10 sessões, mas variam conforme cada organismo, alimentação e prática de exercícios. Recomendamos protocolo de 15-20 sessões para resultados mais expressivos."
    },
    {
      pergunta: "Perco quantos centímetros?",
      resposta: "A redução de medidas varia individualmente. Em média, pacientes perdem de 2-5cm por região tratada ao final do protocolo completo. Resultados são potencializados com dieta equilibrada e exercícios regulares."
    },
    {
      pergunta: "Posso fazer em qualquer área do corpo?",
      resposta: "Sim! As áreas mais procuradas são abdômen, flancos, coxas, culotes e braços. Adaptamos as manobras conforme a região e necessidade específica de cada paciente."
    },
    {
      pergunta: "Qual diferença entre modeladora e redutora?",
      resposta: "Os termos são frequentemente usados de forma intercambiável. Ambas trabalham gordura localizada, celulite e modelagem corporal usando técnicas intensas de amassamento, deslizamento profundo e outras manobras."
    },
    {
      pergunta: "Preciso fazer dieta junto?",
      resposta: "Embora não seja obrigatório, a massagem modeladora funciona muito melhor quando combinada com alimentação equilibrada e hidratação adequada. A combinação potencializa e mantém os resultados por mais tempo."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=800&fit=crop')`,
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
              Massagem Modeladora
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Técnica intensa que ajuda a modelar o corpo, reduzindo gordura localizada e melhorando o contorno corporal.
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
              {["Modela o corpo", "Reduz medidas", "Combate celulite", "Tonifica a pele"].map((beneficio) => (
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
              Tire suas dúvidas sobre massagem modeladora
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
            Comece hoje sua jornada para um corpo mais modelado e definido.
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
