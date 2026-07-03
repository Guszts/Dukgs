import { BrutalButton } from '@/components/BrutalButton';
import { BrutalSection } from '@/components/BrutalSection';

export default function PaymentCancelled() {
  return (
    <BrutalSection variant="default">
      <div className="container max-w-2xl mx-auto text-center py-20">
        <div className="mb-8">
          <div className="text-6xl mb-6">✕</div>
          <h1 className="font-display text-4xl mb-4 text-brutalist-black">
            Pagamento Cancelado
          </h1>
          <div className="brutalist-divider" />
        </div>

        <div className="bg-brutalist-white border-4 border-brutalist-black p-8 mb-8">
          <p className="text-brutalist-black mb-4">
            Seu pagamento foi cancelado. Nenhum valor foi cobrado da sua conta.
          </p>
          <p className="text-brutalist-black text-sm">
            Se isso foi um erro, você pode tentar novamente ou entrar em contato conosco para assistência.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BrutalButton variant="yellow" href="/">
              Voltar ao Início
            </BrutalButton>
            <BrutalButton variant="black" href="/#cta">
              Tentar Novamente
            </BrutalButton>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-4 border-brutalist-black">
          <p className="text-brutalist-black mb-4">
            Precisa de ajuda?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:contato@dukgs.com" className="font-bold hover:underline">
              contato@dukgs.com
            </a>
            <span>•</span>
            <a href="tel:+5511999999999" className="font-bold hover:underline">
              (11) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </BrutalSection>
  );
}
