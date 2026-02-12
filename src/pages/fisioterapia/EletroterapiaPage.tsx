import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EletroterapiaPage() {
  const faqs = [
    {
      pergunta: "A eletroterapia dói ou causa choque?",
      resposta: "Não! As correntes são ajustadas ao conforto do paciente. Você sentirá um formigamento ou vibração agradável. Se houver qualquer desconforto, a intensidade pode ser reduzida imediatamente."
    },
    {
      pergunta: "Quais tipos de correntes são utilizadas?",
      resposta: "Utilizamos TENS para controle de dor, corrente russa e FES para fortalecimento muscular, ultrassom para cicatrização e inflamação, laser terapêutico, e ondas curtas para tratamento de tecidos profundos."
    },
    {
      pergunta: "Quantas sessões são necessárias?",
      resposta: "Varia conforme o objetivo. Para dor aguda, 6-10 sessões podem ser suficientes. Fortalecimento muscular requer mais tempo, geralmente 15-20 sessões. Avaliamos constantemente a evolução."
    },
    {
      pergunta: "Quem não pode fazer eletroterapia?",
      resposta: "Contraindicado para gestantes, pessoas com marca-passo, tumor na região de aplicação, trombose venosa aguda, e perda de sensibilidade na área. Avaliamos cuidadosamente cada caso antes de iniciar."
    },
    {
      pergunta: "Posso fazer eletroterapia sozinha ou precisa de exercícios?",
      resposta: "A eletroterapia funciona melhor quando combinada com exercícios terapêuticos e técnicas manuais. Ela é um recurso complementar que potencializa os resultados do tratamento fisioterapêutico global."
    },
    {
      pergunta: "Quanto tempo dura cada sessão?",
      resposta: "Depende do protocolo aplicado. Uma sessão de TENS pode durar 20-30 minutos, enquanto fortalecimento com corrente russa leva 30-40 minutos. Normalmente combinamos com outras técnicas na mesma sessão."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&h=800&fit=crop')`,
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
              Eletroterapia
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Uso de correntes elétricas para tratamento de dores, inflamações e fortalecimento muscular.
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
              {["Controle da dor", "Reduz inflamação", "Acelera cicatrização", "Fortalece músculos"].map((beneficio) => (
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
              Tire suas dúvidas sobre eletroterapia
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
