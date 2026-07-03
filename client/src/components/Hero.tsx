import { BrutalButton } from './BrutalButton';
import { BrutalSection } from './BrutalSection';

export function Hero() {
  return (
    <BrutalSection variant="black" className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="animate-brutalist-slide-in">
          <h1 className="text-brutalist-white mb-6 leading-tight">
            Agência Digital<br />
            <span className="text-brutalist-yellow">Sem Compromissos</span>
          </h1>
          <p className="text-brutalist-white text-lg mb-8 max-w-lg">
            Construímos sites, aplicações e identidades digitais com design brutalmente honesto e funcionalidade impecável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BrutalButton variant="yellow">
              Começar Projeto
            </BrutalButton>
            <BrutalButton variant="outline">
              Ver Portfólio
            </BrutalButton>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-full aspect-square bg-brutalist-yellow border-4 border-brutalist-white flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-brutalist-black">
                DUKGS
              </p>
              <p className="text-brutalist-black font-mono text-sm mt-2">
                Brutalist Design Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </BrutalSection>
  );
}
