import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <div className="text-8xl font-display font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">
          Página não encontrada
        </h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
          Verifique o endereço ou volte para a página inicial.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Página Inicial
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
