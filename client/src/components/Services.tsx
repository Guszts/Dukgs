import { BrutalCard } from './BrutalCard';
import { BrutalSection } from './BrutalSection';

const services = [
  {
    title: 'Design Web',
    description: 'Interfaces brutalmente honestas que comunicam com clareza e impacto visual.',
    icon: '◆',
  },
  {
    title: 'Desenvolvimento',
    description: 'Código limpo, performático e escalável para aplicações que crescem com você.',
    icon: '■',
  },
  {
    title: 'Identidade Visual',
    description: 'Marcas fortes que refletem a essência do seu negócio sem floreios.',
    icon: '▲',
  },
  {
    title: 'E-commerce',
    description: 'Lojas online otimizadas para conversão com integração Stripe completa.',
    icon: '◉',
  },
  {
    title: 'Manutenção',
    description: 'Suporte contínuo e atualizações para manter seu site sempre seguro e rápido.',
    icon: '★',
  },
  {
    title: 'Consultoria',
    description: 'Estratégia digital e análise para maximizar o potencial do seu projeto.',
    icon: '◆',
  },
];

export function Services() {
  return (
    <BrutalSection variant="default" id="services">
      <div className="mb-12">
        <h2 className="font-display text-brutalist-black mb-4">O que fazemos</h2>
        <div className="brutalist-divider" />
      </div>

      <div className="brutalist-grid">
        {services.map((service, index) => (
          <BrutalCard key={index} variant={index % 2 === 0 ? 'default' : 'yellow'}>
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="font-display text-lg mb-3">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </BrutalCard>
        ))}
      </div>
    </BrutalSection>
  );
}
