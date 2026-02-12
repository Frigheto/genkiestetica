import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PilatesClinicoPage() {
  const faqs = [
    {
      pergunta: "Qual a diferença entre Pilates Clínico e Pilates tradicional?",
      resposta: "O Pilates Clínico é conduzido por fisioterapeutas e focado em reabilitação de patologias específicas. É mais individualizado, com exercícios adaptados para cada condição clínica, enquanto o tradicional é mais voltado para condicionamento."
    },
    {
      pergunta: "Preciso de encaminhamento médico?",
      resposta: "Não é obrigatório, mas é importante trazer laudos e exames se tiver alguma patologia diagnosticada. Isso permite que o fisioterapeuta elabore um programa mais seguro e eficaz para seu caso."
    },
    {
      pergunta: "Quantos alunos por turma?",
      resposta: "Trabalhamos com no máximo 3-4 alunos por turma no Pilates Clínico, garantindo atenção individualizada e acompanhamento próximo da execução dos exercícios por cada paciente."
    },
    {
      pergunta: "Posso fazer mesmo tendo hérnia de disco?",
      resposta: "Sim! O Pilates Clínico é excelente para tratamento de hérnias discais. Os exercícios são adaptados para fortalecer a musculatura de suporte da coluna sem sobrecarregar os discos vertebrais."
    },
    {
      pergunta: "Quanto tempo de sessão?",
      resposta: "As sessões têm duração de 50 a 60 minutos, incluindo aquecimento, exercícios principais e relaxamento final. Recomendamos 2 a 3 sessões semanais para melhores resultados."
    },
    {
      pergunta: "É indicado para idosos?",
      resposta: "Absolutamente! O Pilates Clínico é excelente para idosos, melhorando equilíbrio, força muscular, mobilidade e prevenindo quedas. Os exercícios são totalmente adaptados à capacidade de cada pessoa."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=800&fit=crop')`,
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
              Pilates Clínico
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Pilates com foco terapêutico, indicado para reabilitação e tratamento de patologias específicas.
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
              {["Fortalecimento", "Estabilização", "Reabilitação segura", "Resultados duradouros"].map((beneficio) => (
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
              Tire suas dúvidas sobre Pilates Clínico
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
