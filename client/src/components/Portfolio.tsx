import { BrutalCard } from './BrutalCard';
import { BrutalSection } from './BrutalSection';
import { BrutalButton } from './BrutalButton';

const projects = [
  {
    title: 'E-commerce Minimalista',
    description: 'Loja online com design limpo e checkout otimizado. Aumento de 45% em conversão.',
    category: 'E-commerce',
    year: '2024',
  },
  {
    title: 'Identidade Visual Startup',
    description: 'Marca completa para startup de tecnologia. Logo, paleta e guidelines.',
    category: 'Branding',
    year: '2024',
  },
  {
    title: 'Aplicação SaaS',
    description: 'Dashboard intuitivo para gerenciamento de projetos. 500+ usuários ativos.',
    category: 'Desenvolvimento',
    year: '2023',
  },
  {
    title: 'Site Corporativo',
    description: 'Presença digital para agência de marketing. SEO otimizado e responsivo.',
    category: 'Web Design',
    year: '2023',
  },
  {
    title: 'Plataforma de Cursos',
    description: 'Ambiente de aprendizado online com certificação. Integração com Stripe.',
    category: 'Desenvolvimento',
    year: '2023',
  },
  {
    title: 'Portfólio Artista',
    description: 'Galeria visual para fotógrafo profissional. Design brutalmente simples.',
    category: 'Web Design',
    year: '2024',
  },
];

export function Portfolio() {
  return (
    <BrutalSection variant="gray" id="portfolio">
      <div className="mb-12">
        <h2 className="font-display text-brutalist-black mb-4">Portfólio</h2>
        <div className="brutalist-divider--yellow" />
      </div>

      <div className="brutalist-grid">
        {projects.map((project, index) => (
          <BrutalCard key={index} variant={index % 3 === 0 ? 'yellow' : 'default'}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-lg flex-1">{project.title}</h3>
              <span className="font-mono text-xs font-bold ml-2">{project.year}</span>
            </div>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-2xl">→</span>
            </div>
          </BrutalCard>
        ))}
      </div>

      <div className="mt-12 text-center">
        <BrutalButton variant="black">
          Ver Todos os Projetos
        </BrutalButton>
      </div>
    </BrutalSection>
  );
}
