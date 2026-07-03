import { BrutalButton } from './BrutalButton';
import { BrutalSection } from './BrutalSection';

export function CTA() {
  return (
    <BrutalSection variant="yellow" id="cta">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-brutalist-black mb-6">
          Pronto para começar?
        </h2>
        <p className="text-brutalist-black text-lg mb-8 leading-relaxed">
          Vamos transformar sua ideia em uma presença digital forte e impactante. 
          Entre em contato conosco e vamos conversar sobre seu projeto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <BrutalButton variant="black">
            Agendar Conversa
          </BrutalButton>
          <BrutalButton variant="outline">
            Enviar Briefing
          </BrutalButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t-4 border-brutalist-black">
          <div>
            <p className="font-display text-2xl text-brutalist-black mb-2">50+</p>
            <p className="text-sm text-brutalist-black">Projetos Realizados</p>
          </div>
          <div>
            <p className="font-display text-2xl text-brutalist-black mb-2">40+</p>
            <p className="text-sm text-brutalist-black">Clientes Satisfeitos</p>
          </div>
          <div>
            <p className="font-display text-2xl text-brutalist-black mb-2">8+</p>
            <p className="text-sm text-brutalist-black">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </BrutalSection>
  );
}
