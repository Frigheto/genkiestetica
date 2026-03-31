import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold text-white mb-4 block">
              GENKI
            </Link>
            <p className="text-slate-400 mb-6">
              Clínica multidisciplinar de alto padrão, oferecendo os melhores tratamentos
              em estética, fisioterapia, massoterapia e pilates.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-slate-400 hover:text-primary transition-colors">
                  Sobre a Clínica
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-slate-400 hover:text-primary transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/aluguel-salas" className="text-slate-400 hover:text-primary transition-colors">
                  Aluguel de Salas
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-400 hover:text-primary transition-colors">
                  Área do Locatário
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/estetica" className="text-slate-400 hover:text-primary transition-colors">
                  Estética
                </Link>
              </li>
              <li>
                <Link to="/servicos/fisioterapia" className="text-slate-400 hover:text-primary transition-colors">
                  Fisioterapia
                </Link>
              </li>
              <li>
                <Link to="/servicos/massoterapia" className="text-slate-400 hover:text-primary transition-colors">
                  Massoterapia
                </Link>
              </li>
              <li>
                <Link to="/servicos/pilates" className="text-slate-400 hover:text-primary transition-colors">
                  Pilates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Rua Serafim Valandro, 613<br />
                  Centro - Santa Maria - RS<br />
                  CEP 97010-480
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+5555991911033" className="text-slate-400 hover:text-primary transition-colors">
                  (55) 99191-1033
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:genki.estetica@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                  genki.estetica@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Seg - Sex: 8h às 19h<br />
                  Sáb: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Nossa Localização</h3>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8642842956487!2d-53.81736!3d-29.68444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503849f7e7f7f7f%3A0x0!2zUi4gU2VyYWZpbSBWYWxhbmRybywgNjEzIC0gQ2VudHJvLCBTYW50YSBNYXJpYSAtIFJTLCA5NzAxMC00ODA!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização GENKI - Rua Serafim Valandro, 613, Centro - Santa Maria/RS"
            ></iframe>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} GENKI. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/termos" className="text-slate-500 text-sm hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="text-slate-500 text-sm hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
