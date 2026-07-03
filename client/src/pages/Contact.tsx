import { ContactForm } from '@/components/ContactForm';
import { BrutalSection } from '@/components/BrutalSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-brutalist-white pt-20">
      <div className="grain-overlay" />

      <BrutalSection variant="default" id="contact">
        <div className="mb-12">
          <h1 className="font-display text-brutalist-black mb-4">Entre em Contato</h1>
          <div className="brutalist-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="font-display text-2xl mb-6">Vamos Trabalhar Juntos</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Temos uma equipe pronta para transformar sua ideia em uma presença digital impactante.
              Preencha o formulário ao lado e entraremos em contato em breve.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg mb-2">E-mail</h3>
                <a
                  href="mailto:contato@dukgs.com"
                  className="text-brutalist-yellow hover:underline font-bold"
                >
                  contato@dukgs.com
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg mb-2">Telefone</h3>
                <a
                  href="tel:+5511999999999"
                  className="text-brutalist-yellow hover:underline font-bold"
                >
                  (11) 99999-9999
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg mb-2">Localização</h3>
                <p>São Paulo, SP - Brasil</p>
              </div>

              <div>
                <h3 className="font-display text-lg mb-2">Horário de Atendimento</h3>
                <p>Segunda a Sexta: 9h - 18h</p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </BrutalSection>

      <BrutalSection variant="black">
        <div className="text-center">
          <h2 className="font-display text-brutalist-white text-2xl mb-6">
            Pronto para começar?
          </h2>
          <p className="text-brutalist-white mb-8 max-w-lg mx-auto">
            Não importa se você tem uma ideia vaga ou um briefing completo. Estamos aqui para ajudar.
          </p>
          <a
            href="/#services"
            className="brutalist-btn brutalist-btn--yellow inline-block"
          >
            Ver Serviços
          </a>
        </div>
      </BrutalSection>
    </div>
  );
}
