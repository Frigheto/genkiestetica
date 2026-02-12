import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuickMassagePage() {
  const faqs = [
    {
      pergunta: "Quanto tempo dura a Quick Massage?",
      resposta: "A sessão express tem duração de 15 a 30 minutos, ideal para quem tem agenda apertada mas precisa aliviar tensões rapidamente. Focamos nas áreas de maior tensão como pescoço, ombros e costas."
    },
    {
      pergunta: "É efetiva mesmo sendo rápida?",
      resposta: "Sim! Embora seja mais curta, a Quick Massage trabalha pontos estratégicos de tensão com técnicas eficazes. É perfeita para alívio imediato de dores e desconfortos no meio do dia corrido."
    },
    {
      pergunta: "Preciso tirar a roupa?",
      resposta: "Não! A Quick Massage é realizada com roupa, geralmente sentado em cadeira ergonômica própria para massagem. É prática e você pode voltar imediatamente às suas atividades."
    },
    {
      pergunta: "Posso fazer no horário de almoço?",
      resposta: "Perfeitamente! A Quick Massage foi pensada exatamente para isso. Em 20-30 minutos você relaxa, alivia tensões e volta renovado para suas atividades sem precisar de preparação especial."
    },
    {
      pergunta: "Quais áreas são massageadas?",
      resposta: "Focamos principalmente em pescoço, ombros, costas (região superior e média), braços e couro cabeludo - as áreas que mais acumulam tensão durante o trabalho e atividades diárias."
    },
    {
      pergunta: "Empresas podem contratar para funcionários?",
      resposta: "Sim! Oferecemos pacotes corporativos de Quick Massage no ambiente de trabalho. É uma excelente forma de cuidar do bem-estar da equipe, reduzir estresse e aumentar a produtividade."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&h=800&fit=crop')`,
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
              Quick Massage
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Sessão rápida focada em pontos de tensão, ideal para o dia a dia corrido.
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
              {["Sessão rápida", "Alívio imediato", "Praticidade", "Revitaliza"].map((beneficio) => (
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
              Tire suas dúvidas sobre Quick Massage
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
            Aproveite uma pausa no seu dia para cuidar de você rapidamente.
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
