export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brutalist-black text-brutalist-white border-t-4 border-brutalist-yellow">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-lg mb-4">DUKGS</h3>
            <p className="text-sm leading-relaxed">
              Agência digital com design brutalmente honesto e funcionalidade impecável.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">Design Web</a></li>
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">Desenvolvimento</a></li>
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">E-commerce</a></li>
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">Manutenção</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="hover:text-brutalist-yellow transition-colors">Portfólio</a></li>
              <li><a href="#process" className="hover:text-brutalist-yellow transition-colors">Processo</a></li>
              <li><a href="#faq" className="hover:text-brutalist-yellow transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:dilgs.online@gmail.com" className="hover:text-brutalist-yellow transition-colors">dilgs.online@gmail.com</a></li>
              <li className="text-xs opacity-70">Remote project communication by email and onboarding forms</li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-brutalist-yellow pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} DUKGS. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="hover:text-brutalist-yellow transition-colors">Privacidade</a>
              <a href="/terms" className="hover:text-brutalist-yellow transition-colors">Termos</a>
              <a href="/cookies" className="hover:text-brutalist-yellow transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
