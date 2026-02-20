import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  Sparkles,
  Activity,
  Hand,
  Dumbbell,
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Mail,
  Clock,
  Shield,
  Heart,
  Zap,
  Award,
} from "lucide-react";
import {
  WaveDivider,
  WaveDividerFlipped,
  CurveDivider,
  TropicalDivider,
} from "@/components/SectionDividers";

export default function HomePageNew() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Estilo The Wellhall */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Content - Centralizado com Parallax */}
        <div
          className="relative container mx-auto px-4 h-full flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 500,
          }}
        >
          <div className="text-center">
            {/* Welcome To */}
            <p className="text-white text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-light">
              Seja Bem-Vindo à
            </p>

            {/* Nome Principal - Fonte Serif Grande */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-normal text-white mb-4 leading-none">
              Genki
            </h1>

            {/* Subtítulo */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-white mb-16 tracking-wide">
              Estética & Bem-Estar
            </p>

            {/* Botão Learn More */}
            <Link to="/sobre">
              <button className="px-12 py-4 bg-white text-slate-900 text-sm tracking-[0.2em] uppercase font-semibold hover:bg-slate-100 transition-all duration-300 shadow-xl">
                Saiba Mais
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-[0.3em] font-light">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Divisor ondulado conectando Hero com próxima seção */}
      <WaveDividerFlipped className="h-16 md:h-24 text-white -mt-1" fillColor="#ffffff" />

      {/* Segunda Seção - Conteúdo Principal (movido do hero) */}
      <section className="py-20 bg-white relative overflow-hidden fluid-bg">
        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-genki-mint rounded-full opacity-20 blur-3xl floating-element"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-genki-aqua rounded-full opacity-15 blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Conteúdo do Hero Movido */}
            <div className="text-center mb-16">
              {/* Badge */}
              <Badge className="mb-6 bg-teal-100 text-teal-700 border-0 inline-block">
                Clínica Multidisciplinar de Alto Padrão
              </Badge>

              {/* Título com Serif */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Transforme Sua<br />
                <span className="text-teal-600">Saúde & Beleza</span>
              </h1>

              {/* Subtítulo */}
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Excelência em tratamentos integrados de estética, fisioterapia,
                massoterapia e pilates. Uma estrutura completa dedicada ao seu bem-estar.
              </p>

              {/* Cards Glass com Destaques */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                {[
                  { icon: Shield, text: "Profissionais Certificados" },
                  { icon: Heart, text: "Atendimento Humanizado" },
                  { icon: Zap, text: "Tecnologia de Ponta" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200/50 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-slate-800 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base rounded-full shadow-xl group"
                  asChild
                >
                  <Link to="/servicos">
                    Conheça Nossos Serviços
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-6 text-base rounded-full"
                  asChild
                >
                  <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    AGENDE SEU HORÁRIO
                  </a>
                </Button>
              </div>

            </div>

            {/* Grid com Texto e Imagem */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <div>
                <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0">Sobre Nós</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                  Cuidados <span className="text-emerald-600">Especializados</span><br />
                  Para Você
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Somos uma clínica multidisciplinar dedicada a oferecer excelência em
                  tratamentos de saúde, bem-estar e beleza. Nossa equipe é formada por
                  profissionais altamente qualificados e comprometidos com resultados.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Com mais de 10 anos de experiência, atendemos milhares de pacientes
                  com tratamentos personalizados e tecnologia de ponta, sempre priorizando
                  o atendimento humanizado e individualizado.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    "Equipamentos de última geração",
                    "Protocolos personalizados",
                    "Ambiente acolhedor e moderno",
                    "Resultados comprovados",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
                  asChild
                >
                  <Link to="/sobre">
                    Conheça Nossa História
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Imagem */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/images/home/sobre.jpg"
                    alt="Clínica Genki"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Card Overlay */}
                <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-8 rounded-2xl shadow-2xl max-w-xs">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-emerald-100">Pacientes transformados com nossos tratamentos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor em curva - transição para seção de serviços */}
      <CurveDivider className="h-20 md:h-32 text-gradient-to-b from-slate-50 to-white -mb-1" fillColor="rgb(248 250 252)" />

      {/* Seção dos 4 Serviços Principais - Cards com Glass Effect */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%)]"></div>

        {/* Elementos decorativos de conexão */}
        <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-genki-green to-transparent opacity-30"></div>
        <div className="absolute top-0 right-1/3 w-1 h-16 bg-gradient-to-b from-genki-light to-transparent opacity-20" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0">Nossos Serviços</Badge>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Cuidados <span className="text-emerald-600">Especializados</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Quatro áreas de excelência para transformar sua saúde, bem-estar e beleza
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Estética",
                description: "Tratamentos faciais e corporais com tecnologia avançada",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
                href: "/servicos/estetica",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: Activity,
                title: "Fisioterapia",
                description: "Reabilitação e prevenção com equipe especializada",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
                href: "/servicos/fisioterapia",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Hand,
                title: "Massoterapia",
                description: "Massagens terapêuticas para relaxamento profundo",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
                href: "/servicos/massoterapia",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: Dumbbell,
                title: "Pilates",
                description: "Fortalecimento e consciência corporal completa",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
                href: "/servicos/pilates",
                color: "from-green-500 to-emerald-500",
              },
            ].map((service, index) => (
              <Link key={index} to={service.href} className="group">
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                  {/* Image with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg flex items-center justify-center backdrop-blur-sm`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                    <div className="flex items-center justify-between text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                      <span>Saiba mais</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor tropical conectando à seção escura */}
      <TropicalDivider className="h-24 md:h-32 text-slate-900 -mb-1" fillColor="rgb(15 23 42)" />

      {/* Diferenciais da Clínica */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Por que nos escolher</Badge>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Excelência em <span className="text-emerald-400">Cada Detalhe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Profissionais Especializados",
                description: "Equipe multidisciplinar com certificações reconhecidas",
              },
              {
                icon: Zap,
                title: "Tecnologia de Ponta",
                description: "Equipamentos modernos e tratamentos inovadores",
              },
              {
                icon: Heart,
                title: "Atendimento Humanizado",
                description: "Cuidado personalizado para cada paciente",
              },
              {
                icon: Shield,
                title: "Ambiente Seguro",
                description: "Protocolos rigorosos de higiene e segurança",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisor ondulado - transição para seção colorida */}
      <WaveDivider className="h-20 md:h-28 -mb-1" fillColor="rgb(16 185 129)" />

      {/* CTA Aluguel de Salas - Destaque com Glass Effect */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-teal-600/90 to-emerald-700/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Para Profissionais da Saúde
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Alugue uma Sala e<br />Atenda Seus Pacientes
            </h2>
            <p className="text-xl text-emerald-50/90 mb-10 leading-relaxed">
              10 salas totalmente equipadas com tecnologia de última geração.
              Infraestrutura completa para você focar no que importa: seus pacientes.
            </p>

            {/* Features Grid Glass */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: CheckCircle, text: "Equipamentos Inclusos" },
                { icon: Zap, text: "Internet de Alta Velocidade" },
                { icon: Clock, text: "Horários Flexíveis" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <feature.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                  <p className="text-white font-medium">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg rounded-full shadow-2xl"
                asChild
              >
                <Link to="/aluguel-salas">
                  Ver Salas Disponíveis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-genki-forest px-8 py-6 text-lg rounded-full font-semibold shadow-lg"
                asChild
              >
                <Link to="/login">Área do Locatário</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor ondulado invertido - transição para footer */}
      <WaveDividerFlipped className="h-20 md:h-28 text-slate-950 -mb-1" fillColor="rgb(2 6 23)" />
    </div>
  );
}
