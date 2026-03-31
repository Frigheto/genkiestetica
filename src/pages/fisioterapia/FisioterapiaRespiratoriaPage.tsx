import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FisioterapiaRespiratoriaPage() {
  const faqs = [
    {
      pergunta: "Quem precisa de fisioterapia respiratória?",
      resposta: "Pacientes com doenças pulmonares crônicas (DPOC, asma, fibrose), pós-cirúrgicos, acamados, pessoas com acúmulo de secreção, sequelas de COVID-19, ou qualquer condição que comprometa a função respiratória."
    },
    {
      pergunta: "Como funciona o tratamento?",
      resposta: "Utilizamos técnicas de higiene brônquica para eliminar secreções, exercícios respiratórios para aumentar capacidade pulmonar, treinamento muscular respiratório e orientações para melhora da função pulmonar no dia a dia."
    },
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "Em casos agudos (pós-cirúrgico, pneumonia), podem ser necessárias sessões diárias por alguns dias. Em condições crônicas, o tratamento é mais prolongado, com 2-3 sessões semanais conforme a necessidade."
    },
    {
      pergunta: "Fisioterapia respiratória ajuda na COVID longa?",
      resposta: "Sim! Muitos pacientes pós-COVID apresentam fadiga e falta de ar. A fisioterapia respiratória trabalha para recuperar a capacidade pulmonar, força muscular respiratória e tolerância ao esforço físico."
    },
    {
      pergunta: "É necessário usar aparelhos?",
      resposta: "Utilizamos diversos recursos como incentivadores respiratórios, flutter, EPAP, exercitadores musculares respiratórios e oximetria. Tudo é adaptado à condição de cada paciente para maximizar os resultados."
    },
    {
      pergunta: "Posso fazer exercícios em casa?",
      resposta: "Sim! Parte importante do tratamento são os exercícios domiciliares. Ensinamos técnicas e exercícios respiratórios para você realizar diariamente, complementando as sessões presenciais e acelerando a recuperação."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=800&fit=crop')`,
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
              Fisioterapia Respiratória
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Tratamento de disfunções respiratórias, melhorando a capacidade pulmonar e a qualidade de vida.
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
              {["Melhora respiração", "Desobstrui vias aéreas", "Aumenta capacidade pulmonar", "Reabilitação pós-covid"].map((beneficio) => (
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
              Tire suas dúvidas sobre fisioterapia respiratória
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
