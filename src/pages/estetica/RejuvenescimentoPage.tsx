import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RejuvenescimentoPage() {
  const faqs = [
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "Geralmente recomendamos de 2 a 4 sessões para bioestimuladores, com intervalos de 4-6 semanas. Para Profhilo, normalmente são 2 sessões iniciais com intervalo de 4 semanas, seguidas de manutenções semestrais."
    },
    {
      pergunta: "O procedimento é seguro?",
      resposta: "Sim, bioestimuladores e Profhilo são produtos aprovados internacionalmente com excelente perfil de segurança. Utilizamos apenas produtos de alta qualidade e seguimos rigorosamente os protocolos clínicos."
    },
    {
      pergunta: "É doloroso?",
      resposta: "O desconforto é mínimo. As aplicações são feitas com agulhas finas e podem ser precedidas de anestesia tópica se necessário. A maioria dos pacientes relata apenas um leve desconforto durante o procedimento."
    },
    {
      pergunta: "Quando vejo os resultados?",
      resposta: "Os resultados são progressivos. Para Profhilo, nota-se melhora na hidratação em 1-2 semanas. Bioestimuladores mostram resultados mais evidentes após 2-3 meses, quando o colágeno novo está sendo produzido."
    },
    {
      pergunta: "Quanto tempo dura o efeito?",
      resposta: "Os efeitos podem durar de 12 a 24 meses, dependendo do produto utilizado e das características individuais. O estímulo de colágeno continua mesmo após o produto ser absorvido."
    },
    {
      pergunta: "É indicado para todos os tipos de pele?",
      resposta: "Sim, bioestimuladores e Profhilo são indicados para todos os tipos de pele. Durante a avaliação, determinamos o melhor protocolo para suas características e necessidades específicas."
    },
  ];

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
          <Link
            to="/estetica"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Estética
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Rejuvenescimento e firmeza
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Tratamentos que estimulam a produção de colágeno para uma pele mais firme, jovem e revitalizada.
            </p>
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
              <p className="text-primary font-medium">
                Bioestimuladores e Profhilo
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
                <span className="text-slate-700">Estimula colágeno natural</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Melhora firmeza</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Hidratação profunda</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Resultados duradouros</span>
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
              Tire suas dúvidas sobre tratamentos de rejuvenescimento e firmeza
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
