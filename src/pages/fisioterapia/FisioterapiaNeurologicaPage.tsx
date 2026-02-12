import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FisioterapiaNeurologicaPage() {
  const faqs = [
    {
      pergunta: "Quais condições neurológicas podem ser tratadas?",
      resposta: "Trabalhamos com AVC, paralisia cerebral, esclerose múltipla, Parkinson, lesões medulares, neuropatias periféricas e outras condições que afetam o sistema nervoso central ou periférico."
    },
    {
      pergunta: "Quanto tempo dura o tratamento?",
      resposta: "A duração varia conforme a condição e gravidade. Casos agudos como AVC necessitam tratamento intensivo inicial, enquanto condições crônicas requerem acompanhamento contínuo para manter funcionalidade."
    },
    {
      pergunta: "A fisioterapia neurológica pode recuperar movimentos perdidos?",
      resposta: "Sim, através da neuroplasticidade o cérebro pode criar novas conexões. Com exercícios específicos e repetitivos, muitos pacientes recuperam movimentos e funções, especialmente quando o tratamento inicia precocemente."
    },
    {
      pergunta: "Familiares precisam participar do tratamento?",
      resposta: "A participação da família é fundamental. Orientamos cuidadores e familiares sobre técnicas de transferência, exercícios domiciliares e cuidados diários para potencializar os resultados do tratamento."
    },
    {
      pergunta: "Qual a frequência ideal das sessões?",
      resposta: "Recomendamos de 2 a 5 sessões semanais dependendo da fase do tratamento. Casos agudos beneficiam-se de maior frequência, enquanto manutenção pode ser realizada com menos sessões."
    },
    {
      pergunta: "O tratamento ajuda no equilíbrio?",
      resposta: "Sim! Trabalhamos especificamente o controle postural e equilíbrio com exercícios progressivos em diferentes superfícies e situações, reduzindo muito o risco de quedas e aumentando a independência."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&h=800&fit=crop')`,
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
              Fisioterapia Neurológica
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Reabilitação de pacientes com condições neurológicas, promovendo recuperação funcional e qualidade de vida.
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
              {["Recuperação motora", "Melhora do equilíbrio", "Independência funcional", "Qualidade de vida"].map((beneficio) => (
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
              Tire suas dúvidas sobre fisioterapia neurológica
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
