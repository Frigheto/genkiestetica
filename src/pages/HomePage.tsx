import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Activity,
  Hand,
  Dumbbell,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  Building2,
  Phone,
} from "lucide-react";

const servicos = [
  {
    icon: Sparkles,
    title: "Estética",
    description: "Tratamentos de beleza e rejuvenescimento com técnicas modernas, seguras e baseadas em evidências. Na GENKI, a estética é integrada à saúde.",
    href: "/servicos/estetica",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "A base da nossa história. Atuamos na prevenção, reabilitação e manutenção da funcionalidade do corpo, com atendimento individualizado e olhar clínico especializado.",
    href: "/servicos/fisioterapia",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
  },
  {
    icon: Hand,
    title: "Massoterapia",
    description: "Massagens terapêuticas, relaxantes e desportivas para alívio de tensões e bem-estar completo.",
    href: "/servicos/massoterapia",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
  },
  {
    icon: Dumbbell,
    title: "Pilates",
    description: "Mais do que exercício, o Pilates na GENKI é um método de cuidado com o corpo. Trabalhamos força, mobilidade, postura e consciência corporal de forma personalizada.",
    href: "/servicos/pilates",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
  },
];

const diferenciais = [
  {
    icon: Award,
    title: "Excelência em Atendimento",
    description: "Equipe altamente qualificada e comprometida com resultados.",
  },
  {
    icon: Building2,
    title: "Infraestrutura Completa",
    description: "Ambiente moderno com equipamentos de última geração.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada paciente recebe um plano de tratamento individualizado.",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Funcionamos de segunda a sábado com ampla disponibilidade.",
  },
];

const depoimentos = [
  {
    nome: "Maria Silva",
    tratamento: "Estética",
    texto: "Resultados incríveis com o tratamento de rejuvenescimento. A equipe é extremamente profissional e atenciosa.",
    nota: 5,
  },
  {
    nome: "João Santos",
    tratamento: "Fisioterapia",
    texto: "Recuperei minha mobilidade após uma lesão grave. O acompanhamento foi excepcional do início ao fim.",
    nota: 5,
  },
  {
    nome: "Ana Costa",
    tratamento: "Pilates",
    texto: "As aulas de pilates transformaram minha postura e qualidade de vida. Recomendo a todos!",
    nota: 5,
  },
];

const estatisticas = [
  { numero: "10+", label: "Anos de Experiência" },
  { numero: "5000+", label: "Pacientes Atendidos" },
  { numero: "50+", label: "Profissionais" },
  { numero: "10", label: "Salas Equipadas" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section - TravelWorld Style */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-6 py-2 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-8 backdrop-blur-sm border border-teal-500/30">
              Clínica Multidisciplinar de Alto Padrão
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Cuide do seu<br />
              <span className="text-teal-400">Bem-Estar</span> com<br />
              <span className="text-teal-400">Excelência</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Oferecemos tratamentos integrados em Estética, Fisioterapia,<br />
              Massoterapia e Pilates. Uma estrutura completa para sua<br />
              saúde e beleza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-7 text-lg rounded-full shadow-2xl shadow-teal-500/30">
                <Link to="/servicos">
                  Conheça Nossos Serviços
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-teal-400/50 text-white hover:bg-teal-500/20 px-10 py-7 text-lg rounded-full backdrop-blur-md bg-white/5">
                <Link to="/aluguel-salas">Alugue uma Sala</Link>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {estatisticas.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                    {stat.numero}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-10">
          <p className="text-gray-400 text-xs tracking-widest mb-3">SCROLL</p>
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 via-gray-500 to-transparent mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Services Section - Card Style with Images */}
      <section className="py-24 bg-slate-800 relative">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-400 font-semibold mb-3 block text-sm tracking-widest uppercase">Nossos Serviços</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tratamentos Especializados<br />
              <span className="text-teal-400">Para Você</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Oferecemos uma gama completa de serviços de saúde e bem-estar,
              todos com a qualidade e excelência que você merece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicos.map((servico, index) => (
              <Link key={servico.title} to={servico.href} className="group">
                <Card className="h-full overflow-hidden hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 border-0 bg-slate-700/50 backdrop-blur-sm hover:scale-105">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={servico.image}
                      alt={servico.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-teal-500/90 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 rounded-xl bg-teal-500 flex items-center justify-center shadow-lg">
                        <servico.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-slate-700">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                      {servico.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{servico.description}</p>
                    <div className="flex items-center text-teal-400 font-semibold text-sm group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-6 text-lg rounded-full">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-400 font-semibold mb-3 block text-sm tracking-widest uppercase">Por que nos escolher?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Uma Estrutura<br />
                <span className="text-teal-400">Completa</span> para o<br />
                Seu Bem-Estar
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Na GENKI, reunimos o que há de melhor em tratamentos de saúde
                e estética, com uma equipe multidisciplinar pronta para oferecer
                atendimento integrado e personalizado.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {diferenciais.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-teal-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0 border border-teal-500/30">
                      <item.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats - Redesigned */}
            <div className="grid grid-cols-2 gap-6">
              {estatisticas.map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-600/5 backdrop-blur-md border border-teal-500/20 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-5xl md:text-6xl font-bold text-teal-400 mb-3">
                    {stat.numero}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-400 font-semibold mb-3 block text-sm tracking-widest uppercase">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O Que Nossos<br />
              <span className="text-teal-400">Clientes Dizem</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A satisfação dos nossos clientes é nossa maior conquista.
              Veja o que eles têm a dizer sobre suas experiências.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="border-0 bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(depoimento.nota)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-teal-400 text-teal-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{depoimento.texto}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center border-2 border-teal-500/30">
                      <span className="text-teal-400 font-semibold">
                        {depoimento.nome.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{depoimento.nome}</div>
                      <div className="text-sm text-gray-400">{depoimento.tratamento}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Aluguel de Salas */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/30">
              Para Profissionais da Saúde
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Alugue uma Sala e Atenda<br />
              Seus Pacientes
            </h2>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Temos 10 salas totalmente equipadas com tecnologia de última geração,
              prontas para você atender seus pacientes com toda a infraestrutura
              que você precisa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-7 text-lg rounded-full shadow-2xl">
                <Link to="/aluguel-salas">
                  Ver Disponibilidade
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-10 py-7 text-lg rounded-full backdrop-blur-md">
                <Link to="/login">Área do Locatário</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Pronto para Começar seu Tratamento?
              </h3>
              <p className="text-gray-400 text-lg">
                Entre em contato conosco e agende sua avaliação.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 px-8 rounded-full">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  Falar pelo WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 rounded-full">
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
