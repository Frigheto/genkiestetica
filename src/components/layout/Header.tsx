import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-white tracking-tight">
              GENKI
            </span>
          </Link>

          {/* Desktop Navigation - Direita */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors",
                isActive("/")
                  ? "text-emerald-400"
                  : "text-white hover:text-emerald-400"
              )}
            >
              HOME
            </Link>

            <Link
              to="/sobre"
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors",
                isActive("/sobre")
                  ? "text-emerald-400"
                  : "text-white hover:text-emerald-400"
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
                    ? "text-emerald-400"
                    : "text-white hover:text-emerald-400"
                )}
              >
                SERVIÇOS
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform",
                  servicosOpen && "rotate-180"
                )} />
              </button>
              
              {servicosOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-sm border border-emerald-500/20 rounded-lg shadow-2xl py-2">
                  {servicos.map((servico) => (
                    <Link
                      key={servico.href}
                      to={servico.href}
                      onClick={() => setServicosOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white hover:bg-emerald-600/20 hover:text-emerald-400 transition-colors"
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
                  ? "text-emerald-400"
                  : "text-white hover:text-emerald-400"
              )}
            >
              ALUGUEL DE SALAS
            </Link>

            <Link
              to="/login"
              className="text-sm font-medium uppercase tracking-wide text-white hover:text-emerald-400 transition-colors"
            >
              LOGIN
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 backdrop-blur-md py-4">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                  isActive("/") ? "text-emerald-400 bg-emerald-600/10" : "text-white hover:text-emerald-400"
                )}
              >
                HOME
              </Link>
              <Link
                to="/sobre"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                  isActive("/sobre") ? "text-emerald-400 bg-emerald-600/10" : "text-white hover:text-emerald-400"
                )}
              >
                SOBRE
              </Link>
              <div className="px-6 py-2">
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Serviços</span>
              </div>
              {servicos.map((servico) => (
                <Link
                  key={servico.href}
                  to={servico.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-2 text-sm text-slate-300 hover:text-emerald-400"
                >
                  {servico.name}
                </Link>
              ))}
              <Link
                to="/aluguel-salas"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                  isActive("/aluguel-salas") ? "text-emerald-400 bg-emerald-600/10" : "text-white hover:text-emerald-400"
                )}
              >
                ALUGUEL DE SALAS
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-sm font-medium uppercase tracking-wide text-white hover:text-emerald-400"
              >
                LOGIN
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
