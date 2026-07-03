import { BrutalCard } from './BrutalCard';
import { BrutalSection } from './BrutalSection';

const steps = [
  {
    number: '01',
    title: 'Briefing',
    description: 'Entendemos seus objetivos, público e visão para o projeto.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definimos a estratégia digital, arquitetura e tecnologias.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Criamos wireframes, mockups e protótipos interativos.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Construímos o projeto com código limpo e performático.',
  },
  {
    number: '05',
    title: 'Testes',
    description: 'Validamos funcionalidade, performance e compatibilidade.',
  },
  {
    number: '06',
    title: 'Lançamento',
    description: 'Deploy, monitoramento e suporte contínuo pós-lançamento.',
  },
];

export function Process() {
  return (
    <BrutalSection variant="black" id="process">
      <div className="mb-12">
        <h2 className="font-display text-brutalist-white mb-4">Nosso Processo</h2>
        <div className="brutalist-divider--yellow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="absolute -top-4 -left-4 text-brutalist-yellow font-display text-6xl opacity-20">
              {step.number}
            </div>
            <BrutalCard variant="black" className="relative z-10 border-brutalist-yellow">
              <div className="text-brutalist-yellow font-display text-3xl mb-3">
                {step.number}
              </div>
              <h3 className="font-display text-brutalist-white mb-3">{step.title}</h3>
              <p className="text-brutalist-white text-sm leading-relaxed">
                {step.description}
              </p>
            </BrutalCard>
          </div>
        ))}
      </div>
    </BrutalSection>
  );
}
