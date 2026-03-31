import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PilatesAparelhosPage() {
  const faqs = [
    {
      pergunta: "Quais aparelhos são utilizados?",
      resposta: "Utilizamos Reformer (principal aparelho), Cadillac, Chair, Barrel e Ladder. Cada aparelho oferece diferentes possibilidades de exercícios e resistências, permitindo trabalho completo e variado do corpo todo."
    },
    {
      pergunta: "É mais difícil que o Pilates solo?",
      resposta: "Não necessariamente! Os aparelhos possuem molas que podem facilitar ou dificultar os exercícios conforme ajustadas. Para iniciantes, muitas vezes os aparelhos facilitam o aprendizado de movimentos que seriam difíceis no solo."
    },
    {
      pergunta: "Qual a diferença do Pilates de solo?",
      resposta: "No solo usamos o peso do próprio corpo e pequenos acessórios. Nos aparelhos, as molas proporcionam resistência variável e suporte, permitindo maior variedade de exercícios, resistência progressiva e trabalho mais específico de grupos musculares."
    },
    {
      pergunta: "Preciso ter experiência prévia?",
      resposta: "Não! Atendemos desde iniciantes até avançados. Para iniciantes, começamos com exercícios básicos e progressão gradual. Os aparelhos inclusive podem facilitar o aprendizado dos princípios do Pilates."
    },
    {
      pergunta: "Quantos alunos por aula?",
      resposta: "Trabalhamos com no máximo 3-4 alunos por turma, garantindo atenção individualizada. Cada aluno trabalha em seu próprio aparelho com acompanhamento próximo do instrutor durante toda a aula."
    },
    {
      pergunta: "Os resultados são mais rápidos?",
      resposta: "Os aparelhos permitem trabalho mais intenso e variado, o que pode acelerar resultados em termos de força, flexibilidade e consciência corporal. Resultados visíveis geralmente aparecem após 8-12 aulas regulares."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1920&h=800&fit=crop')`,
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
              Pilates com Aparelhos
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Exercícios realizados em equipamentos específicos como Reformer, Cadillac e Chair para trabalho mais intenso e personalizado.
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
              {["Maior resistência", "Variedade de exercícios", "Trabalho específico", "Resultados rápidos"].map((beneficio) => (
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
              Tire suas dúvidas sobre Pilates com aparelhos
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
            Experimente os benefícios do Pilates com aparelhos em um treino completo.
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
