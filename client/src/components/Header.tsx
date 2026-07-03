import { useState } from 'react';
import { BrutalButton } from './BrutalButton';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Processo', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brutalist-white border-b-4 border-brutalist-black">
      <div className="container flex justify-between items-center py-4">
        <a href="/" className="font-display text-2xl font-bold text-brutalist-black">
          DUKGS
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-sm uppercase tracking-wide hover:text-brutalist-yellow transition-colors"
            >
              {item.label}
            </a>
          ))}
          <BrutalButton variant="yellow" className="text-sm py-2 px-4">
            Contato
          </BrutalButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden font-display text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t-4 border-brutalist-black bg-brutalist-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display text-sm uppercase tracking-wide py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <BrutalButton variant="yellow" className="w-full text-sm">
              Contato
            </BrutalButton>
          </div>
        </nav>
      )}
    </header>
  );
}
