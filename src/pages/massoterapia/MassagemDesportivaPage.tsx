import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MassagemDesportivaPage() {
  const faqs = [
    {
      pergunta: "Devo fazer antes ou depois do treino?",
      resposta: "Depende do objetivo. Antes do treino (pré-competição) usamos técnicas estimulantes e rápidas. Após o treino, focamos em recuperação muscular com técnicas mais profundas para eliminar toxinas e reduzir fadiga."
    },
    {
      pergunta: "Atletas de fim de semana também se beneficiam?",
      resposta: "Absolutamente! Mesmo praticantes recreativos de esportes sofrem com fadiga muscular e podem ter lesões. A massagem desportiva ajuda na recuperação e prevenção, melhorando o desempenho em qualquer nível."
    },
    {
      pergunta: "A massagem desportiva dói?",
      resposta: "Pode haver algum desconforto ao trabalhar músculos tensos e pontos gatilho, mas sempre respeitamos seu limite. A pressão é ajustável e necessária para liberar tensões profundas e promover recuperação efetiva."
    },
    {
      pergunta: "Com que frequência um atleta deve fazer?",
      resposta: "Atletas em treinamento intenso se beneficiam de 1-2 sessões semanais. Para manutenção preventiva, sessões quinzenais são suficientes. Em períodos de competição, pode ser necessário ajustar a frequência."
    },
    {
      pergunta: "Ajuda a prevenir lesões?",
      resposta: "Sim! A massagem desportiva regular mantém os músculos flexíveis, melhora a circulação, identifica áreas de tensão precocemente e acelera a recuperação, reduzindo significativamente o risco de lesões."
    },
    {
      pergunta: "Posso fazer mesmo com lesão?",
      resposta: "Depende da lesão. Em casos agudos (primeiras 48-72h), não é recomendado. Após fase aguda, a massagem pode auxiliar na recuperação. Sempre avaliamos cada caso e adaptamos as técnicas quando necessário."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1920&h=800&fit=crop')`,
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
              Massagem Desportiva
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Ideal para atletas e praticantes de atividade física, ajudando na recuperação muscular e prevenção de lesões.
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
              {["Acelera recuperação", "Previne lesões", "Melhora performance", "Reduz fadiga muscular"].map((beneficio) => (
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
              Tire suas dúvidas sobre massagem desportiva
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
            Potencialize sua performance e acelere sua recuperação muscular.
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
