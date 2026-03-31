import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FlacidezFacialPage() {
  const faqs = [
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "Para bioestimuladores, geralmente 2-3 sessões com intervalo de 4-6 semanas. O Visage (HIFU) normalmente requer uma sessão inicial, com manutenção anual. Os resultados são progressivos e duradouros."
    },
    {
      pergunta: "O procedimento é seguro?",
      resposta: "Sim, ambos tratamentos são seguros e aprovados para lifting não cirúrgico. Utilizamos equipamentos de última geração e produtos de alta qualidade para garantir segurança e eficácia."
    },
    {
      pergunta: "É doloroso?",
      resposta: "O bioestimulador causa desconforto mínimo. O Visage (HIFU) pode causar algum desconforto durante a aplicação, mas é tolerável e rápido. Utilizamos anestesia tópica quando necessário."
    },
    {
      pergunta: "Quando vejo os resultados?",
      resposta: "O Visage apresenta efeito lifting imediato, com melhora progressiva nos 3-6 meses seguintes. Bioestimuladores mostram resultados em 2-3 meses, quando o novo colágeno está sendo produzido."
    },
    {
      pergunta: "Quanto tempo dura o efeito?",
      resposta: "Os bioestimuladores estimulam col ágeno por até 2 anos. O Visage tem duração de 12-18 meses, variando conforme características individuais e cuidados pós-tratamento."
    },
    {
      pergunta: "Substitui a cirurgia plástica?",
      resposta: "Para casos de flacidez leve a moderada, estes tratamentos oferecem excelente alternativa não cirúrgica. Em casos de flacidez severa, podem ser complementares à cirurgia. Avaliamos cada caso individualmente."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/estetica"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Estética
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Flacidez facial
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Soluções avançadas para combater a flacidez e devolver firmeza ao contorno facial.
            </p>
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
              <p className="text-primary font-medium">
                Bioestimuladores e Visage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">
              Benefícios do Tratamento
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Redefine contorno facial</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Aumenta firmeza</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Efeito lifting</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Aparência rejuvenescida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 text-center">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-center mb-12">
              Tire suas dúvidas sobre o tratamento de flacidez facial
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Agende sua Avaliação
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Quer saber se este tratamento é ideal para você? Agende uma avaliação
            gratuita com nossos especialistas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Avaliação
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-emerald-500">
              <Link to="/estetica">Ver Outros Tratamentos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
