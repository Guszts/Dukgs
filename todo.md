# DILGS - Premium Gastronomy Digital Presence System - TODO

## Design & Brand
- [x] Atualizar paleta de cores (cream, brown, yellow, orange, green, blue, purple)
- [x] Atualizar tipografia (Lilita One, Fredoka, Inter, JetBrains Mono)
- [x] Implementar componentes premium (bento cards, bubble buttons, pill labels, dark ribbons)
- [ ] Criar header/navegação responsivo com mobile menu
- [ ] Implementar footer com links e informações

## Páginas de Vendas
- [ ] Home / Main Offer Page - Vender sistema de $10,000
- [ ] Free Audit Page (/audit) - Capturar leads com formulário detalhado
- [ ] Payment Page (/pay/:proposalId) - Checkout de depósito ($5,000)
- [ ] Final Payment Page (/final-payment/:projectId) - Pagamento final ($5,000)
- [ ] Maintenance Page (/maintenance) - Vender planos mensais ($500, $750, $1,500)
- [ ] Onboarding Page (/onboarding/:clientId) - Formulário de onboarding
- [ ] Payment Success Page (/success) - Confirmação de pagamento
- [ ] Payment Cancelled Page (/cancelled) - Página de cancelamento

## Integração Stripe Avançada
- [ ] Configurar Stripe API keys (secret e public)
- [ ] Implementar endpoint de checkout para depósito ($5,000)
- [ ] Implementar endpoint de checkout para pagamento final ($5,000)
- [ ] Implementar endpoints para estrutura de pagamento alternativa ($4k, $3k, $3k)
- [ ] Implementar checkout para planos de manutenção (recurring)
- [ ] Implementar Stripe Embedded Checkout
- [ ] Implementar webhook do Stripe com verificação de assinatura
- [ ] Implementar Customer Portal para gerenciar assinaturas
- [ ] Criar produtos/preços no Stripe para todos os tipos de pagamento

## Supabase Database
- [ ] Criar tabela `leads` com 13 campos
- [ ] Criar tabela `audit_requests` com referência a leads
- [ ] Criar tabela `proposals` com código único e token privado
- [ ] Criar tabela `clients` com stripe_customer_id
- [ ] Criar tabela `projects` com status de projeto
- [ ] Criar tabela `payments` com IDs do Stripe
- [ ] Criar tabela `maintenance_subscriptions` com status de assinatura
- [ ] Implementar Row Level Security (RLS) em todas as tabelas
- [ ] Criar Edge Functions para webhooks do Stripe
- [ ] Implementar queries e helpers no server/db.ts

## Admin Dashboard
- [ ] Implementar autenticação admin (role-based access control)
- [ ] Criar página de dashboard com estatísticas
- [ ] Criar visualização de leads com status
- [ ] Criar visualização de audit requests
- [ ] Criar visualização de proposals
- [ ] Criar visualização de projects com timeline
- [ ] Criar visualização de payments com histórico
- [ ] Criar visualização de maintenance subscriptions
- [ ] Implementar filtros e busca nas listas
- [ ] Implementar ações (marcar como qualified, enviar proposta, etc)

## Fluxo de Vendas
- [ ] Criar fluxo de lead capture no /audit
- [ ] Implementar validação de formulário com Zod
- [ ] Criar fluxo de geração de proposta
- [ ] Criar fluxo de pagamento de depósito
- [ ] Criar fluxo de onboarding após depósito
- [ ] Criar fluxo de pagamento final
- [ ] Criar fluxo de assinatura de manutenção
- [ ] Implementar notificações por e-mail

## Testes
- [ ] Escrever testes para procedures de leads
- [ ] Escrever testes para procedures de audits
- [ ] Escrever testes para procedures de proposals
- [ ] Escrever testes para procedures de payments
- [ ] Escrever testes para procedures de projects
- [ ] Escrever testes para procedures de maintenance
- [ ] Validar fluxos end-to-end
- [ ] Testar webhook verification do Stripe

## Deploy & GitHub
- [ ] Configurar variáveis de ambiente na Vercel
- [ ] Fazer push das alterações para Guszts/Dukgs
- [ ] Configurar deploy automático na Vercel
- [ ] Testar funcionamento em produção
- [ ] Configurar Stripe webhook em produção

## Entrega
- [ ] Revisar todo o projeto
- [ ] Documentar instruções de setup
- [ ] Entregar ao usuário com checkpoint final
