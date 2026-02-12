import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GorduraLocalizadaPage() {
  const faqs = [
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "Para criolipólise, geralmente 1-3 sessões por área tratada. Para enzimas, recomendamos protocolos de 4-8 sessões semanais. O número varia conforme a quantidade de gordura e resposta individual."
    },
    {
      pergunta: "O procedimento é seguro?",
      resposta: "Sim, ambos tratamentos são seguros e aprovados. A criolipólise é FDA aprovada e as enzimas lipolíticas são amplamente utilizadas com excelente perfil de segurança quando aplicadas por profissionais qualificados."
    },
    {
      pergunta: "É doloroso?",
      resposta: "A criolipólise causa sensação de frio e puxão inicial, mas sem dor. As enzimas podem causar leve desconforto durante e após a aplicação, mas bem tolerável. Não necessita anestesia."
    },
    {
      pergunta: "Quando vejo os resultados?",
      resposta: "Para criolipólise, os primeiros resultados aparecem em 3-4 semanas, com resultado final em 2-3 meses. Enzimas mostram redução progressiva após cada sessão, sendo mais evidentes ao completar o protocolo."
    },
    {
      pergunta: "Quanto tempo dura o efeito?",
      resposta: "Os resultados são duradouros desde que mantido peso estável. As células de gordura eliminadas não voltam. Manter alimentação equilibrada e atividade física preserva os resultados indefinidamente."
    },
    {
      pergunta: "Substitui a lipoaspiração?",
      resposta: "Para gordura localizada leve a moderada, sim. Em casos de grande volume, pode não ser suficiente. Durante a avaliação, analisamos seu caso e recomendamos o tratamento mais adequado."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552693673-1bf958298935?w=1920&h=800&fit=crop')`,
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
              Gordura localizada
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Protocolos avançados para redução de gordura localizada e medidas com tecnologia de ponta.
            </p>
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
              <p className="text-primary font-medium">
                Criolipólise e enzimas
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
                <span className="text-slate-700">Elimina gordura localizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Redução de medidas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Resultados visíveis</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">Sem cirurgia</span>
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
              Tire suas dúvidas sobre o tratamento de gordura localizada
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
