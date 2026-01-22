import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Target,
  Heart,
  Users,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

const equipe = [
  {
    nome: "Dra. Fernanda Lima",
    especialidade: "Dermatologista - Estética",
    descricao: "Especialista em procedimentos estéticos faciais com mais de 15 anos de experiência.",
    imagem: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
  },
  {
    nome: "Dr. Ricardo Mendes",
    especialidade: "Fisioterapeuta",
    descricao: "Especializado em reabilitação ortopédica e esportiva.",
    imagem: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
  },
  {
    nome: "Carla Oliveira",
    especialidade: "Massoterapeuta",
    descricao: "Expert em técnicas de massagem terapêutica e relaxamento.",
    imagem: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
  },
  {
    nome: "Paula Santos",
    especialidade: "Instrutora de Pilates",
    descricao: "Certificada em pilates clínico com foco em reabilitação postural.",
    imagem: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
];

const valores = [
  {
    icon: Heart,
    titulo: "Cuidado",
    descricao: "Tratamos cada paciente com atenção e carinho, priorizando seu bem-estar.",
  },
  {
    icon: Award,
    titulo: "Excelência",
    descricao: "Buscamos sempre os melhores resultados com os mais altos padrões de qualidade.",
  },
  {
    icon: Users,
    titulo: "Humanização",
    descricao: "Acreditamos que o atendimento humanizado faz toda a diferença no tratamento.",
  },
  {
    icon: Target,
    titulo: "Inovação",
    descricao: "Investimos constantemente em tecnologia e atualização profissional.",
  },
];

export default function SobrePage() {
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
            <span className="text-primary font-medium mb-2 block">Sobre Nós</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Conheça a GENKI
            </h1>
            <p className="text-white/70 text-lg">
              Uma clínica multidisciplinar que reúne o melhor em saúde, estética e bem-estar
              em um só lugar, com profissionais dedicados e infraestrutura de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block">Nossa História</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Mais de 10 Anos Cuidando de Você
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  A GENKI nasceu do sonho de criar um espaço onde saúde e bem-estar
                  se encontrassem. Fundada em 2014, começamos como uma pequena clínica de
                  fisioterapia e, ao longo dos anos, expandimos nossos serviços para atender
                  às diversas necessidades dos nossos pacientes.
                </p>
                <p>
                  Hoje, somos uma clínica multidisciplinar completa, oferecendo tratamentos
                  de estética, fisioterapia, massoterapia e pilates, sempre com foco na
                  excelência e no atendimento humanizado.
                </p>
                <p>
                  Nossa missão é proporcionar tratamentos de alta qualidade que transformem
                  a vida dos nossos pacientes, ajudando-os a alcançar seus objetivos de
                  saúde e beleza.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=500&fit=crop"
                alt="Interior da Clínica"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 p-6 bg-primary rounded-2xl text-white">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm opacity-80">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-2 block">Nossos Valores</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              O Que Nos Move
            </h2>
            <p className="text-slate-600">
              Nossos valores são a base de tudo o que fazemos. Eles guiam nossas
              decisões e definem quem somos como clínica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor) => (
              <Card key={valor.titulo} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <valor.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{valor.titulo}</h3>
                  <p className="text-slate-600">{valor.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-2 block">Nossa Equipe</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Profissionais Especializados
            </h2>
            <p className="text-slate-600">
              Contamos com uma equipe multidisciplinar de profissionais altamente
              qualificados e dedicados ao seu bem-estar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membro) => (
              <Card key={membro.nome} className="border-0 shadow-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={membro.imagem}
                    alt={membro.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{membro.nome}</h3>
                  <div className="text-primary text-sm font-medium mb-3">{membro.especialidade}</div>
                  <p className="text-slate-600 text-sm">{membro.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium mb-2 block">Infraestrutura</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ambiente Moderno e Acolhedor
            </h2>
            <p className="text-white/70">
              Nossa clínica foi projetada para proporcionar conforto e bem-estar
              em cada detalhe, com equipamentos de última geração.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <img src={img} alt={`Infraestrutura ${i + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block">Localização</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Venha Nos Visitar
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Endereço</h3>
                    <p className="text-slate-600">
                      Rua Exemplo, 123 - Centro<br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Horário de Funcionamento</h3>
                    <p className="text-slate-600">
                      Segunda a Sexta: 8h às 19h<br />
                      Sábado: 8h às 18h
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Contato</h3>
                    <p className="text-slate-600">
                      (55) 99191-1033<br />
                      genki.estetica@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                  Falar pelo WhatsApp
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976!2d-46.6522!3d-23.5629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ2LjQiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
