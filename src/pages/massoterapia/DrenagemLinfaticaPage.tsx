import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DrenagemLinfaticaPage() {
  const faqs = [
    {
      pergunta: "Quantas sessões preciso para ver resultados?",
      resposta: "Para retenção leve, 4-6 sessões já mostram bons resultados. Para casos mais intensos ou pós-cirúrgicos, podem ser necessárias 10-15 sessões. Recomendamos sessões semanais ou quinzenais para manutenção."
    },
    {
      pergunta: "Drenagem linfática emagrece?",
      resposta: "A drenagem não queima gordura, mas ajuda a eliminar líquidos retidos, toxinas e reduzir inchaços, o que pode fazer você perder medidas e sentir-se mais leve. Funciona melhor quando combinada com dieta equilibrada e exercícios."
    },
    {
      pergunta: "Posso fazer pós-cirurgia plástica?",
      resposta: "Sim! A drenagem linfática é fundamental no pós-operatório de cirurgias plásticas, ajudando a reduzir edema, prevenir fibroses e acelerar a cicatrização. Sempre siga as orientações de quando iniciar dadas pelo seu cirurgião."
    },
    {
      pergunta: "A drenagem é dolorosa?",
      resposta: "Não! A drenagem linfática manual usa movimentos suaves, lentos e rítmicos que são muito relaxantes. Algumas áreas podem estar sensíveis no pós-operatório, mas adaptamos a pressão para seu conforto."
    },
    {
      pergunta: "Grávidas podem fazer?",
      resposta: "Sim! A drenagem é excelente para gestantes com inchaço nas pernas. Usamos técnicas seguras, respeitando as contraindicações. Ajuda muito com o desconforto do inchaço comum na gravidez, especialmente no terceiro trimestre."
    },
    {
      pergunta: "Quais as contraindicações?",
      resposta: "Não deve ser feita em casos de trombose venosa profunda aguda, infecções agudas com febre, insuficiência cardíaca descompensada, tumores malignos não tratados. Sempre avaliamos seu histórico antes de iniciar."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/servicos/massoterapia"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Massoterapia
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Drenagem Linfática
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Técnica que estimula o sistema linfático, reduzindo inchaços e melhorando a circulação.
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
              {["Reduz inchaços", "Elimina toxinas", "Melhora circulação", "Combate celulite"].map((beneficio) => (
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
              Tire suas dúvidas sobre drenagem linfática
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
            Agende sua Sessão
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Elimine o inchaço e sinta-se mais leve com nossa drenagem linfática.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Sessão
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-emerald-500">
              <Link to="/servicos/massoterapia">Ver Outras Massagens</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
