import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Activity, Hand, Dumbbell, ArrowRight } from "lucide-react";

const servicos = [
  {
    icon: Sparkles,
    title: "Estética",
    description:
      "Tratamentos de beleza e rejuvenescimento com as mais avançadas técnicas e tecnologias do mercado. Botox, preenchimentos, tratamentos de emagrecimento e muito mais.",
    tratamentos: ["Botox", "Preenchimento Labial", "Harmonização Facial", "Tratamentos de Emagrecimento", "Skincare Avançado"],
    href: "/servicos/estetica",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    cor: "from-pink-500 to-rose-500",
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description:
      "Reabilitação física completa com profissionais especializados e equipamentos modernos. Tratamentos ortopédicos, neurológicos, respiratórios e muito mais.",
    tratamentos: ["Fisioterapia Ortopédica", "Fisioterapia Neurológica", "RPG", "Pilates Clínico", "Eletroterapia"],
    href: "/servicos/fisioterapia",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    cor: "from-blue-500 to-cyan-500",
  },
  {
    icon: Hand,
    title: "Massoterapia",
    description:
      "Técnicas de massagem para relaxamento, alívio de tensões e tratamento de dores musculares. Ambiente acolhedor e profissionais certificados.",
    tratamentos: ["Massagem Relaxante", "Massagem Desportiva", "Drenagem Linfática", "Massagem Modeladora", "Quick Massage"],
    href: "/servicos/massoterapia",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    cor: "from-purple-500 to-violet-500",
  },
  {
    icon: Dumbbell,
    title: "Pilates",
    description:
      "Aulas de pilates solo e com aparelhos para fortalecimento muscular, correção postural e aumento da flexibilidade. Turmas reduzidas para atendimento personalizado.",
    tratamentos: ["Pilates Solo", "Pilates Aparelhos", "Pilates para Gestantes", "Pilates Clínico", "Pilates para Idosos"],
    href: "/servicos/pilates",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    cor: "from-emerald-500 to-teal-500",
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-medium mb-2 block">Nossos Serviços</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Tratamentos Especializados
            </h1>
            <p className="text-white/70 text-lg">
              Conheça nossa gama completa de serviços em estética, fisioterapia,
              massoterapia e pilates. Cada tratamento é realizado por profissionais
              especializados com equipamentos de última geração.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {servicos.map((servico, index) => (
              <div
                key={servico.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src={servico.image}
                      alt={servico.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${servico.cor} opacity-20`} />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${servico.cor} flex items-center justify-center`}>
                      <servico.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-slate-900">
                      {servico.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 mb-6">{servico.description}</p>
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      Principais Tratamentos
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {servico.tratamentos.map((tratamento) => (
                        <span
                          key={tratamento}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
                        >
                          {tratamento}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to={servico.href}>
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Pronto para Começar seu Tratamento?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e agende sua avaliação. Nossa equipe está
            pronta para ajudá-lo a alcançar seus objetivos de saúde e bem-estar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+5511999999999">(11) 99999-9999</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
