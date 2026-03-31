import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FisioterapiaOrtopedicaPage() {
  const faqs = [
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "O número de sessões varia conforme a condição tratada. Casos agudos podem necessitar de 6-12 sessões, enquanto condições crônicas podem requerer tratamento mais prolongado. Avaliamos individualmente cada caso."
    },
    {
      pergunta: "O tratamento é doloroso?",
      resposta: "As técnicas são adaptadas ao nível de tolerância de cada paciente. Algum desconforto pode ocorrer, especialmente no início, mas trabalhamos sempre dentro do limite confortável para garantir sua recuperação."
    },
    {
      pergunta: "Preciso de encaminhamento médico?",
      resposta: "Não é obrigatório, mas é recomendado trazer exames e relatórios médicos quando disponíveis. Isso nos ajuda a traçar o melhor plano de tratamento para seu caso específico."
    },
    {
      pergunta: "Quando verei melhora nos sintomas?",
      resposta: "Muitos pacientes relatam alívio já nas primeiras sessões. No entanto, a recuperação completa é progressiva e varia conforme a gravidade e cronicidade da condição."
    },
    {
      pergunta: "Posso fazer exercícios em casa?",
      resposta: "Sim! Prescrevemos exercícios domiciliares personalizados que complementam o tratamento em consultório, acelerando sua recuperação e prevenindo recidivas."
    },
    {
      pergunta: "Qual a diferença entre fisioterapia e quiropraxia?",
      resposta: "A fisioterapia ortopédica utiliza exercícios terapêuticos, técnicas manuais e recursos físicos para tratar disfunções musculoesqueléticas de forma global, focando em recuperação funcional e fortalecimento."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop')`,
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
              Fisioterapia Ortopédica
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Tratamento de lesões e disfunções do sistema musculoesquelético, incluindo coluna, articulações e músculos.
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
              {["Alívio de dores", "Recuperação de lesões", "Melhora da mobilidade", "Prevenção de recidivas"].map((beneficio) => (
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
              Tire suas dúvidas sobre fisioterapia ortopédica
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
