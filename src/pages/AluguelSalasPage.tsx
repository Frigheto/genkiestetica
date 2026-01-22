import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Wifi,
  AirVent,
  Monitor,
  ArrowRight,
  CheckCircle,
  Calendar,
  CreditCard,
  Clock,
} from "lucide-react";

const salas = [
  {
    id: 1,
    nome: "Sala 01 - Estética",
    descricao: "Sala equipada para procedimentos estéticos faciais e corporais.",
    equipamentos: ["Maca elétrica", "Aparelho de alta frequência", "LED", "Ar condicionado"],
    imagem: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop",
    area: "18m²",
  },
  {
    id: 2,
    nome: "Sala 02 - Estética",
    descricao: "Ideal para tratamentos de preenchimento e botox.",
    equipamentos: ["Maca reclinável", "Iluminação cirúrgica", "Autoclave", "Ar condicionado"],
    imagem: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=300&fit=crop",
    area: "15m²",
  },
  {
    id: 3,
    nome: "Sala 03 - Fisioterapia",
    descricao: "Equipada com aparelhos de eletroterapia e reabilitação.",
    equipamentos: ["Maca", "TENS/FES", "Ultrassom", "Infravermelho"],
    imagem: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    area: "20m²",
  },
  {
    id: 4,
    nome: "Sala 04 - Fisioterapia",
    descricao: "Ampla sala para exercícios e reabilitação motora.",
    equipamentos: ["Maca", "Bolas", "Faixas elásticas", "Espelhos"],
    imagem: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    area: "25m²",
  },
  {
    id: 5,
    nome: "Sala 05 - Massoterapia",
    descricao: "Ambiente acolhedor para massagens e terapias manuais.",
    equipamentos: ["Maca com aquecimento", "Som ambiente", "Aromatizador", "Toalhas"],
    imagem: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    area: "16m²",
  },
  {
    id: 6,
    nome: "Sala 06 - Massoterapia",
    descricao: "Perfeita para drenagem linfática e massagens relaxantes.",
    equipamentos: ["Maca elétrica", "Iluminação ajustável", "Som ambiente", "Climatização"],
    imagem: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400&h=300&fit=crop",
    area: "16m²",
  },
  {
    id: 7,
    nome: "Sala 07 - Consultório",
    descricao: "Consultório para avaliações e consultas médicas.",
    equipamentos: ["Mesa de escritório", "Computador", "Impressora", "Ar condicionado"],
    imagem: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
    area: "14m²",
  },
  {
    id: 8,
    nome: "Sala 08 - Consultório",
    descricao: "Ideal para consultas nutricionais ou psicológicas.",
    equipamentos: ["Balança", "Adipômetro", "Computador", "Sofá"],
    imagem: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=300&fit=crop",
    area: "12m²",
  },
  {
    id: 9,
    nome: "Sala 09 - Multiuso",
    descricao: "Sala versátil adaptável para diversos tipos de atendimento.",
    equipamentos: ["Maca", "Divã", "Mesa", "Ar condicionado"],
    imagem: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
    area: "18m²",
  },
  {
    id: 10,
    nome: "Sala 10 - Premium",
    descricao: "Nossa maior sala, ideal para tratamentos especiais e grupos.",
    equipamentos: ["2 Macas", "Equipamentos de ponta", "Banheiro privativo", "Copa"],
    imagem: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
    area: "30m²",
  },
];

const beneficios = [
  {
    icon: Building2,
    titulo: "Infraestrutura Completa",
    descricao: "Salas totalmente equipadas prontas para uso imediato.",
  },
  {
    icon: Wifi,
    titulo: "Wi-Fi de Alta Velocidade",
    descricao: "Internet rápida e estável em todas as dependências.",
  },
  {
    icon: AirVent,
    titulo: "Climatização",
    descricao: "Ar condicionado individual em cada sala.",
  },
  {
    icon: Monitor,
    titulo: "Equipamentos Modernos",
    descricao: "Aparelhos de última geração inclusos.",
  },
  {
    icon: Calendar,
    titulo: "Agenda Online",
    descricao: "Sistema de reservas integrado ao Google Calendar.",
  },
  {
    icon: CreditCard,
    titulo: "Pagamento Facilitado",
    descricao: "Pague online com cartão ou PIX.",
  },
];

const planos = [
  {
    nome: "Hora Avulsa",
    preco: "R$ 50",
    periodo: "/hora",
    descricao: "Uso avulso sem compromisso",
    recursos: [
      "Acesso à sala escolhida",
      "Equipamentos inclusos",
      "Wi-Fi",
      "Recepção compartilhada",
      "Cancelamento gratuito até 24h antes",
    ],
  },
  {
    nome: "10 Horas",
    preco: "R$ 450",
    periodo: "/mês",
    descricao: "Plano mensal com flexibilidade",
    recursos: [
      "10 horas de uso por mês",
      "R$ 45/hora (10% de desconto)",
      "Válido por 30 dias",
      "Agendamento pelo site",
      "Pagamento recorrente",
    ],
  },
  {
    nome: "20 Horas",
    preco: "R$ 850",
    periodo: "/mês",
    descricao: "Ideal para agenda moderada",
    recursos: [
      "20 horas de uso por mês",
      "R$ 42,50/hora (15% de desconto)",
      "Válido por 30 dias",
      "Remarcação possível",
      "Pagamento recorrente",
    ],
    destaque: true,
  },
  {
    nome: "30 Horas",
    preco: "R$ 1.200",
    periodo: "/mês",
    descricao: "Para profissionais ativos",
    recursos: [
      "30 horas de uso por mês",
      "R$ 40/hora (20% de desconto)",
      "Válido por 30 dias",
      "Agendamento prioritário",
      "Pagamento recorrente",
    ],
  },
  {
    nome: "Turno 1x/Semana",
    preco: "R$ 640",
    periodo: "/mês",
    descricao: "Turno fixo de 4 horas",
    recursos: [
      "4 horas fixas por semana (~16h/mês)",
      "Dias e turnos fixos",
      "20% de desconto",
      "Contrato mínimo 3 meses",
      "Previsibilidade garantida",
    ],
  },
  {
    nome: "Turno 2x/Semana",
    preco: "R$ 1.200",
    periodo: "/mês",
    descricao: "Turnos fixos 2x na semana",
    recursos: [
      "8 horas fixas por semana (~32h/mês)",
      "Dias e turnos fixos",
      "25% de desconto",
      "Contrato mínimo 3 meses",
      "Maior economia",
    ],
  },
  {
    nome: "Turno 3x/Semana",
    preco: "R$ 1.680",
    periodo: "/mês",
    descricao: "Turnos fixos 3x na semana",
    recursos: [
      "12 horas fixas por semana (~48h/mês)",
      "Dias e turnos fixos",
      "30% de desconto",
      "Contrato mínimo 3 meses",
      "Melhor custo-benefício",
    ],
  },
  {
    nome: "Sala Exclusiva",
    preco: "R$ 2.300",
    periodo: "/mês",
    descricao: "Sala 24/7 com tudo incluso",
    recursos: [
      "Acesso 24/7 à sua sala exclusiva",
      "Economia de 54% (R$ 23/hora)",
      "Recepção compartilhada",
      "Limpeza diária inclusa",
      "Contrato mínimo 3 meses",
      "Internet e ar-condicionado",
    ],
    destaque: false,
    premium: true,
  },
];

export default function AluguelSalasPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=800&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              Para Profissionais da Saúde
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Aluguel de Salas
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Atenda seus pacientes em uma estrutura completa e moderna.
              Escolha entre planos flexíveis: desde hora avulsa (R$ 50/h) até sala exclusiva 24/7 (R$ 2.300/mês).
              10 salas equipadas, pronta para você começar a trabalhar hoje mesmo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/login">
                  Ver Disponibilidade
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <a href="https://wa.me/5555991911033" target="_blank" rel="noopener noreferrer">
                  Falar com Consultor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {beneficios.map((item) => (
              <div key={item.titulo} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.titulo}</h3>
                <p className="text-slate-600 text-xs">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salas */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Nossas Salas
            </h2>
            <p className="text-slate-600">
              Conheça as 10 salas disponíveis para locação. Todas equipadas e
              prontas para receber seus pacientes com conforto e profissionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {salas.map((sala) => (
              <Card key={sala.id} className="border-0 shadow-lg overflow-hidden group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={sala.imagem}
                    alt={sala.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-white/90 text-xs font-medium">
                    {sala.area}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">{sala.nome}</h3>
                  <p className="text-slate-600 text-sm mb-3">{sala.descricao}</p>
                  <div className="flex flex-wrap gap-1">
                    {sala.equipamentos.slice(0, 3).map((eq) => (
                      <span key={eq} className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">
                        {eq}
                      </span>
                    ))}
                    {sala.equipamentos.length > 3 && (
                      <span className="px-2 py-0.5 bg-primary/10 rounded text-xs text-primary">
                        +{sala.equipamentos.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Planos e Valores
            </h2>
            <p className="text-slate-600">
              Escolha o plano ideal: hora avulsa, pacotes mensais de horas (10h, 20h, 30h),
              turnos fixos semanais ou sala exclusiva 24/7. Quanto mais horas, maior o desconto!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planos.map((plano) => (
              <Card
                key={plano.nome}
                className={`border-2 overflow-hidden ${
                  plano.destaque 
                    ? "border-primary shadow-xl md:scale-105" 
                    : plano.premium 
                    ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-white shadow-xl" 
                    : "border-slate-200"
                }`}
              >
                {plano.destaque && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                {plano.premium && (
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-2 text-sm font-medium">
                    Melhor Economia
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{plano.nome}</h3>
                  <p className="text-slate-600 text-xs mb-4">{plano.descricao}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-900">{plano.preco}</span>
                    <span className="text-slate-500 text-sm">{plano.periodo}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plano.recursos.map((recurso) => (
                      <li key={recurso} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{recurso}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      plano.destaque 
                        ? "bg-primary hover:bg-primary/90" 
                        : plano.premium 
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700" 
                        : ""
                    }`}
                    variant={plano.destaque || plano.premium ? "default" : "outline"}
                  >
                    <Link to="/login">Reservar Agora</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Políticas e Condições */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Formas de Pagamento</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Pix e cartão (avulso e diária)</li>
                    <li>• Cartão recorrente (planos mensais)</li>
                    <li>• Link de Pix mensal disponível</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Política de Cancelamento</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Gratuito até 24h antes (avulso)</li>
                    <li>• Remarcação no mês (pacotes)</li>
                    <li>• Aviso prévio de 30 dias (contratos)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Vigência e Renovação</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Pacotes de horas: 30 dias</li>
                    <li>• Turnos fixos: mínimo 3 meses</li>
                    <li>• Renovação automática disponível</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-white/70">
              Reservar uma sala é simples e rápido. Siga os passos abaixo:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { passo: "01", titulo: "Cadastre-se", descricao: "Crie sua conta de locatário com seus dados profissionais." },
              { passo: "02", titulo: "Escolha a Sala", descricao: "Navegue pelas salas disponíveis e escolha a ideal para você." },
              { passo: "03", titulo: "Reserve", descricao: "Selecione data e horário disponíveis no calendário." },
              { passo: "04", titulo: "Pague Online", descricao: "Finalize com pagamento seguro via cartão ou PIX." },
            ].map((item) => (
              <div key={item.passo} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.passo}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{item.titulo}</h3>
                <p className="text-white/60 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/login">
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Tem Dúvidas? Fale Conosco
              </h3>
              <p className="text-white/80">
                Nossa equipe está pronta para ajudá-lo a encontrar a melhor solução.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
