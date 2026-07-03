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
              <li><a href="#" className="hover:text-brutalist-yellow transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contato@dukgs.com" className="hover:text-brutalist-yellow transition-colors">contato@dukgs.com</a></li>
              <li><a href="tel:+5511999999999" className="hover:text-brutalist-yellow transition-colors">(11) 99999-9999</a></li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <a href="#" className="hover:text-brutalist-yellow transition-colors">Twitter</a>
                  <a href="#" className="hover:text-brutalist-yellow transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-brutalist-yellow transition-colors">GitHub</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-brutalist-yellow pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} DUKGS. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-brutalist-yellow transition-colors">Privacidade</a>
              <a href="#" className="hover:text-brutalist-yellow transition-colors">Termos</a>
              <a href="#" className="hover:text-brutalist-yellow transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
