import { useState } from 'react';
import { BrutalButton } from './BrutalButton';
import { BrutalCard } from './BrutalCard';
import { trpc } from '@/lib/trpc';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: '',
    budget: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const createLead = trpc.leads.create.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createLead.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        message: formData.message,
        projectType: formData.projectType || undefined,
        budget: formData.budget || undefined,
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        projectType: '',
        budget: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <BrutalCard variant="default" className="max-w-2xl mx-auto">
      <h2 className="font-display text-2xl mb-6">Vamos Conversar</h2>

      {submitted && (
        <div className="bg-brutalist-yellow border-4 border-brutalist-black p-4 mb-6">
          <p className="font-display text-brutalist-black">
            ✓ Obrigado! Recebemos sua mensagem e entraremos em contato em breve.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-display text-sm mb-2">
            Nome *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-4 border-brutalist-black p-3 font-sans focus:outline-none focus:bg-brutalist-yellow"
            placeholder="Seu nome"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-display text-sm mb-2">
            E-mail *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-4 border-brutalist-black p-3 font-sans focus:outline-none focus:bg-brutalist-yellow"
            placeholder="seu@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-display text-sm mb-2">
            Telefone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-4 border-brutalist-black p-3 font-sans focus:outline-none focus:bg-brutalist-yellow"
            placeholder="(11) 99999-9999"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block font-display text-sm mb-2">
            Empresa
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border-4 border-brutalist-black p-3 font-sans focus:outline-none focus:bg-brutalist-yellow"
            placeholder="Nome da sua empresa"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block font-display text-sm mb-2">
            Tipo de Projeto
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border-4 border-brutalist-black p-3 font-sans focus:outline-none focus:bg-brutalist-yellow"
          >
            <option value="">Selecione...</option>
            <option value="website">Website</option>
            <option value="ecommerce">E-commerce</option>
            <option value="app">Aplicação Web</option>
            <option value="branding">Branding</option>
            <option value="maintenance">Manutenção</option>
            <option value="other">Outro</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block font-display text-sm mb-2">
            Orçamento Estimado
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border-4 border-brutalist-black p-3 font-sans focus:outline-none focus:bg-brutalist-yellow"
          >
            <option value="">Selecione...</option>
            <option value="5k-10k">R$ 5k - R$ 10k</option>
            <option value="10k-25k">R$ 10k - R$ 25k</option>
            <option value="25k-50k">R$ 25k - R$ 50k</option>
            <option value="50k+">R$ 50k+</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block font-display text-sm mb-2">
            Mensagem *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border-4 border-brutalist-black p-3 font-sans focus:outline-none focus:bg-brutalist-yellow resize-none"
            placeholder="Conte-nos sobre seu projeto..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <BrutalButton
            type="submit"
            variant="black"
            className="w-full"
            disabled={createLead.isPending}
          >
            {createLead.isPending ? 'Enviando...' : 'Enviar Mensagem'}
          </BrutalButton>
        </div>
      </form>
    </BrutalCard>
  );
}
