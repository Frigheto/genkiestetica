import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ManchasPage() {
  const faqs = [
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "O número de sessões varia conforme a severidade das manchas. Geralmente, recomendamos de 3 a 6 sessões de microagulhamento, com intervalo de 30 dias entre cada sessão para melhores resultados."
    },
    {
      pergunta: "O procedimento é seguro?",
      resposta: "Sim, o microagulhamento é um procedimento seguro quando realizado por profissionais capacitados. Utilizamos equipamentos estéreis e descartáveis, seguindo todos os protocolos de biossegurança."
    },
    {
      pergunta: "É doloroso?",
      resposta: "Aplicamos anestesia tópica antes do procedimento, o que minimiza significativamente o desconforto. A maioria dos pacientes relata apenas uma sensação de formigamento."
    },
    {
      pergunta: "Quando vejo os resultados?",
      resposta: "Os primeiros resultados podem ser notados após 2-3 semanas. A melhora é progressiva e os melhores resultados aparecem após completar o protocolo de tratamento, geralmente em 3-6 meses."
    },
    {
      pergunta: "Qual o tempo de recuperação?",
      resposta: "A pele fica avermelhada por 24-48 horas após o procedimento. É possível retomar as atividades normais no dia seguinte, mas recomendamos evitar exposição solar e usar protetor solar religiosamente."
    },
    {
      pergunta: "Funciona para todos os tipos de manchas?",
      resposta: "O microagulhamento é eficaz para melasma, manchas de sol, hiperpigmentação pós-inflamatória e manchas de envelhecimento. Durante a avaliação, identificamos o tipo de mancha e definimos o melhor protocolo."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1920&h=800&fit=crop')`,
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
              Manchas
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Tratamento eficaz para reduzir manchas escuras, melasma e hiperpigmentação, uniformizando o tom da pele.
            </p>
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
              <p className="text-primary font-medium">
                Microagulhamento
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
                <span className="text-slate-700">Reduz manchas escuras</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Uniformiza o tom</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Estimula renovação celular</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Pele mais luminosa</span>
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
              Tire suas dúvidas sobre o tratamento de manchas
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
