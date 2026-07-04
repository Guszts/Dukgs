# Dilgs - Agência Digital Editorial

Uma agência digital moderna com design editorial, integração completa com Stripe para pagamentos e Supabase para banco de dados.

## 🎨 Características

- **Design Editorial**: Tipografia refinada, estrutura clara, paleta preto/branco/amarelo
- **Landing Page Completa**: Hero, Serviços, Portfólio, Processo, FAQ e CTA
- **Integração Stripe**: Checkout de depósito, pagamento final e assinatura de manutenção
- **Banco de Dados**: Supabase com tabelas para leads, clientes, propostas, projetos e pagamentos
- **Formulário de Contato**: Captura de leads com validação
- **Painel Administrativo**: Dashboard protegido por autenticação para gerenciar dados
- **Webhooks**: Atualização automática de status de pagamentos
- **Testes**: Suite Vitest com testes de procedures

## 🚀 Tecnologias

- **Frontend**: React 19 + Tailwind CSS 4 + TypeScript
- **Backend**: Express 4 + tRPC 11 + Node.js
- **Banco de Dados**: MySQL (Supabase)
- **Pagamentos**: Stripe
- **Autenticação**: Manus OAuth
- **Testes**: Vitest

## 📋 Pré-requisitos

- Node.js 22+
- pnpm 10+
- Conta Stripe (para pagamentos)
- Banco de dados MySQL (Supabase)

## 🛠️ Setup Local

### 1. Instalar Dependências

```bash
pnpm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
# Database
DATABASE_URL=mysql://user:password@host:3306/database

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
VITE_STRIPE_PUBLIC_KEY=pk_test_...

# OAuth
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://manus.im/login

# Outros
JWT_SECRET=your_jwt_secret
OWNER_OPEN_ID=your_open_id
OWNER_NAME=Your Name
```

### 3. Executar Migrations

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### 4. Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

O servidor estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/         # Páginas (Home, Contact, Admin, etc)
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── App.tsx        # Router principal
│   │   └── index.css      # Estilos globais
│   └── public/            # Assets estáticos
├── server/                # Backend Express + tRPC
│   ├── routers.ts         # Procedures tRPC
│   ├── db.ts              # Query helpers
│   ├── stripe.ts          # Integração Stripe
│   └── _core/             # Configuração core
├── drizzle/               # Schema e migrations
├── shared/                # Código compartilhado
└── package.json
```

## 🔌 Endpoints Principais

### Públicos
- `GET /` - Landing page
- `GET /contato` - Página de contato
- `POST /api/trpc/leads.create` - Criar novo lead
- `POST /api/stripe/webhook` - Webhook do Stripe

### Protegidos (Admin)
- `GET /admin` - Dashboard administrativo
- `GET /api/trpc/leads.list` - Listar leads
- `GET /api/trpc/projects.list` - Listar projetos
- `GET /api/trpc/payments.listByClient` - Listar pagamentos

## 💳 Fluxo de Pagamento

1. Cliente acessa landing page e clica em "Começar Projeto"
2. Preenche formulário de contato (cria lead)
3. Admin cria proposta com valores
4. Cliente recebe link de pagamento
5. Stripe processa pagamento
6. Webhook atualiza status no banco de dados
7. Cliente recebe confirmação

## 🧪 Testes

Executar suite de testes:

```bash
pnpm test
```

Testes incluem:
- Autenticação e logout
- Criação de leads
- Validação de formulários
- Autorização admin

## 📦 Build para Produção

```bash
pnpm build
pnpm start
```

## 🌐 Deploy na Vercel

1. Conectar repositório GitHub
2. Adicionar variáveis de ambiente no Vercel
3. Deploy automático em cada push para `main`

### Variáveis Necessárias na Vercel

```
DATABASE_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
VITE_STRIPE_PUBLIC_KEY
VITE_APP_ID
OAUTH_SERVER_URL
VITE_OAUTH_PORTAL_URL
JWT_SECRET
OWNER_OPEN_ID
OWNER_NAME
```

## 📝 Checklist de Funcionalidades

- [x] Design Editorial
- [x] Landing page com 6 seções
- [x] Integração Stripe (depósito, pagamento final, manutenção)
- [x] Banco de dados com 6 tabelas
- [x] Formulário de contato
- [x] Painel administrativo
- [x] Webhooks do Stripe
- [x] Testes Vitest
- [x] Deploy pronto para Vercel

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📄 Licença

MIT

## 📧 Contato

- Email: contato@dilgs.com
- Website: https://dilgs.com

---

Desenvolvido com ❤️ e design editorial.
