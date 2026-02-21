import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isLocatarioArea?: boolean;
}

const servicos = [
  { name: "Estética", href: "/servicos/estetica" },
  { name: "Fisioterapia", href: "/servicos/fisioterapia" },
  { name: "Massoterapia", href: "/servicos/massoterapia" },
  { name: "Pilates", href: "/servicos/pilates" },
];

export default function Header({ isLocatarioArea }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const servicosRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isServicosActive = location.pathname.startsWith("/servicos");
  const isHomePage = location.pathname === "/";

  // Define as cores baseado na página
  const textColor = isHomePage ? "text-white" : "text-genki-forest";
  const hoverColor = isHomePage ? "hover:text-emerald-400" : "hover:text-genki-sage";
  const activeColor = isHomePage ? "text-emerald-400" : "text-genki-forest";
  const logoColor = isHomePage ? "text-white" : "text-genki-forest";

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicosRef.current && !servicosRef.current.contains(event.target as Node)) {
        setServicosOpen(false);
      }
    }

    if (servicosOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicosOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/genki-logo.png"
              alt="GENKI - Estética e Saúde Integrada"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Direita */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors",
                isActive("/")
                  ? activeColor
                  : `${textColor} ${hoverColor}`
              )}
            >
              HOME
            </Link>

            <Link
              to="/sobre"
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors",
                isActive("/sobre")
                  ? activeColor
                  : `${textColor} ${hoverColor}`
              )}
            >
              SOBRE
            </Link>

            {/* Dropdown Serviços */}
            <div 
              ref={servicosRef}
              className="relative"
            >
              <button
                onClick={() => setServicosOpen(!servicosOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors",
                  isServicosActive
                    ? activeColor
                    : `${textColor} ${hoverColor}`
                )}
              >
                SERVIÇOS
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform",
                  servicosOpen && "rotate-180"
                )} />
              </button>
              
              {servicosOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-sm border border-genki-forest/20 rounded-lg shadow-2xl py-2">
                  {servicos.map((servico) => (
                    <Link
                      key={servico.href}
                      to={servico.href}
                      onClick={() => setServicosOpen(false)}
                      className="block px-4 py-2.5 text-sm text-genki-forest hover:bg-genki-forest/10 hover:text-genki-sage transition-colors"
                    >
                      {servico.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/aluguel-salas"
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors whitespace-nowrap",
                isActive("/aluguel-salas")
                  ? activeColor
                  : `${textColor} ${hoverColor}`
              )}
            >
              ALUGUEL DE SALAS
            </Link>

            <Button
              onClick={() => window.open("https://wa.me/5555991911033", "_blank")}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              AGENDAR AVALIAÇÃO
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn("lg:hidden p-2", textColor)}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md py-4 border-t border-genki-forest/10">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                  isActive("/") ? "text-genki-forest bg-genki-forest/10" : "text-slate-700 hover:text-genki-forest"
                )}
              >
                HOME
              </Link>
              <Link
                to="/sobre"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                  isActive("/sobre") ? "text-genki-forest bg-genki-forest/10" : "text-slate-700 hover:text-genki-forest"
                )}
              >
                SOBRE
              </Link>
              <div className="px-6 py-2">
                <span className="text-xs text-genki-forest font-semibold uppercase tracking-wider">Serviços</span>
              </div>
              {servicos.map((servico) => (
                <Link
                  key={servico.href}
                  to={servico.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-2 text-sm text-slate-600 hover:text-genki-forest"
                >
                  {servico.name}
                </Link>
              ))}
              <Link
                to="/aluguel-salas"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                  isActive("/aluguel-salas") ? "text-genki-forest bg-genki-forest/10" : "text-slate-700 hover:text-genki-forest"
                )}
              >
                ALUGUEL DE SALAS
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open("https://wa.me/5555991911033", "_blank");
                }}
                className="mx-6 mt-4 w-[calc(100%-48px)] bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-full py-3 flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4" />
                AGENDAR AVALIAÇÃO
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
