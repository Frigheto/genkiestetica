import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RugasLinhasPage() {
  const faqs = [
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "O número de sessões varia conforme o caso. Para toxina botulínica, geralmente uma aplicação a cada 4-6 meses. Para fios de PDO, pode ser necessário repetir o procedimento após 12-18 meses para manutenção dos resultados."
    },
    {
      pergunta: "O procedimento é seguro?",
      resposta: "Sim, tanto a toxina botulínica quanto os fios de PDO são procedimentos seguros quando realizados por profissionais qualificados. Utilizamos produtos de alta qualidade e seguimos todos os protocolos de segurança."
    },
    {
      pergunta: "É doloroso?",
      resposta: "O desconforto é mínimo. A aplicação de toxina botulínica é feita com agulhas muito finas. Para fios de PDO, utilizamos anestesia local para garantir o máximo conforto durante o procedimento."
    },
    {
      pergunta: "Quando vou ver os resultados?",
      resposta: "Para toxina botulínica, os primeiros resultados aparecem em 2-3 dias, com efeito completo em 10-14 dias. Os fios de PDO têm efeito imediato de sustentação, com melhora progressiva nos meses seguintes devido ao estímulo de colágeno."
    },
    {
      pergunta: "Quanto tempo dura o efeito?",
      resposta: "A toxina botulínica dura em média 4-6 meses. Os fios de PDO estimulam a produção de colágeno por até 2 anos, com resultados visíveis durando de 12 a 18 meses."
    },
    {
      pergunta: "Tem efeito colateral?",
      resposta: "Os efeitos colaterais são raros e geralmente leves, como leve vermelhidão ou pequenos hematomas no local da aplicação, que desaparecem em poucos dias. Nossos profissionais explicam todos os cuidados pós-procedimento."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&h=800&fit=crop')`,
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
              Rugas e linhas de expressão
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Tratamento para suavizar rugas e linhas de expressão, proporcionando uma aparência mais jovem e descansada.
            </p>
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
              <p className="text-primary font-medium">
                Toxina botulínica e fios de PDO
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
                <span className="text-slate-700">Reduz rugas dinâmicas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Previne novas linhas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Resultados naturais</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Procedimento rápido</span>
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
              Tire suas dúvidas sobre o tratamento de rugas e linhas de expressão
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
