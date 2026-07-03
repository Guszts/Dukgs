import { useState } from 'react';
import { BrutalCard } from './BrutalCard';
import { BrutalSection } from './BrutalSection';

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'Depende da complexidade. Projetos simples levam 2-4 semanas. Aplicações mais complexas podem levar 2-3 meses. Fazemos um cronograma detalhado no briefing.',
  },
  {
    question: 'Vocês oferecem manutenção após o lançamento?',
    answer: 'Sim! Oferecemos planos de manutenção mensal que incluem atualizações, backups, monitoramento de segurança e suporte técnico.',
  },
  {
    question: 'Como funciona o processo de pagamento?',
    answer: 'Geralmente em 3 etapas: 50% de depósito para iniciar, 30% na metade do projeto e 20% na conclusão. Aceitamos cartão de crédito via Stripe.',
  },
  {
    question: 'Vocês fazem SEO?',
    answer: 'Sim, implementamos SEO técnico em todos os projetos (estrutura, performance, mobile-first). Consultoria de conteúdo e estratégia também disponível.',
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'Fazemos revisões ilimitadas durante o desenvolvimento. Se mesmo assim não atender às expectativas, discutimos ajustes ou soluções alternativas.',
  },
  {
    question: 'Vocês trabalham com e-commerce?',
    answer: 'Sim! Desenvolvemos lojas online com Stripe integrado, gestão de produtos, carrinho de compras e relatórios de vendas.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <BrutalSection variant="default" id="faq">
      <div className="mb-12">
        <h2 className="font-display text-brutalist-black mb-4">Perguntas Frequentes</h2>
        <div className="brutalist-divider" />
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <BrutalCard
            key={index}
            variant={openIndex === index ? 'yellow' : 'default'}
            className="cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-display text-base flex-1">{faq.question}</h3>
              <span className="font-display text-2xl flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {openIndex === index && (
              <div className="mt-4 pt-4 border-t-4 border-brutalist-black">
                <p className="text-sm leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </BrutalCard>
        ))}
      </div>
    </BrutalSection>
  );
}
