export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brutalist-black text-brutalist-white border-t-4 border-brutalist-yellow">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-lg mb-4">DUKGS</h3>
            <p className="text-sm leading-relaxed">
              Digital agency with brutally honest design and impeccable functionality.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">Development</a></li>
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">E-commerce</a></li>
              <li><a href="#services" className="hover:text-brutalist-yellow transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="hover:text-brutalist-yellow transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-brutalist-yellow transition-colors">Process</a></li>
              <li><a href="#faq" className="hover:text-brutalist-yellow transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 uppercase">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:dilgs.online@gmail.com" className="hover:text-brutalist-yellow transition-colors">dilgs.online@gmail.com</a></li>
              <li className="text-xs opacity-70">Remote project communication by email and onboarding forms</li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-brutalist-yellow pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} DUKGS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="hover:text-brutalist-yellow transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-brutalist-yellow transition-colors">Terms</a>
              <a href="/cookies" className="hover:text-brutalist-yellow transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
