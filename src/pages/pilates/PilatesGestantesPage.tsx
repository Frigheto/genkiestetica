import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PilatesGestantesPage() {
  const faqs = [
    {
      pergunta: "A partir de quantas semanas posso começar?",
      resposta: "O ideal é iniciar após o primeiro trimestre (12 semanas), quando o risco de complicações é menor. Porém, gestantes que já praticavam antes podem continuar desde o início, sempre com liberação médica e adaptações adequadas."
    },
    {
      pergunta: "É seguro para o bebê?",
      resposta: "Sim, totalmente seguro! Os exercícios são especialmente adaptados para gestantes, evitando posições e movimentos inadequados. O Pilates fortalece sem sobrecarregar e prepara o corpo para o parto de forma segura."
    },
    {
      pergunta: "Quais os benefícios para o parto?",
      resposta: "O Pilates fortalece o assoalho pélvico, melhora a respiração, aumenta a resistência física e ensina controle corporal - tudo essencial para o trabalho de parto. Muitas gestantes relatam partos mais tranquilos e recuperação mais rápida."
    },
    {
      pergunta: "Posso fazer em qualquer trimestre?",
      resposta: "Sim! Adaptamos os exercícios conforme o trimestre e necessidades individuais. No último trimestre focamos mais em mobilidade, relaxamento e preparo para o parto, evitando posições que comprimam a veia cava."
    },
    {
      pergunta: "Ajuda com dores nas costas da gravidez?",
      resposta: "Muito! O Pilates trabalha especificamente o fortalecimento do core e correção postural, aliviando significativamente dores lombares comuns na gestação causadas pelo peso da barriga e mudanças posturais."
    },
    {
      pergunta: "Posso continuar após o parto?",
      resposta: "Sim! Após a liberação médica (geralmente 40 dias parto normal, 60 dias cesárea), o Pilates é excelente para recuperação do assoalho pélvico, fortalecimento abdominal e retorno gradual à forma física."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/servicos/pilates"
            className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Pilates
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Pilates para Gestantes
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Exercícios adaptados para gestantes, ajudando no preparo para o parto e no bem-estar durante a gravidez.
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
              {["Preparo para o parto", "Alivia desconfortos", "Fortalece assoalho pélvico", "Seguro para bebê"].map((beneficio) => (
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
              Tire suas dúvidas sobre Pilates para gestantes
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
            Agende sua Aula Experimental
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Cuide de você e do seu bebê com exercícios seguros e eficazes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-500 hover:bg-white/90">
              <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                Agendar Aula
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-emerald-500">
              <Link to="/servicos/pilates">Ver Outras Modalidades</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
