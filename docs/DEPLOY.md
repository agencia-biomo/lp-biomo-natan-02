# Deploy - LP-02 Biomo

## Firebase Hosting

### Projeto
- **ID:** `lp-biomo-natan-02`
- **URL:** https://lp-biomo-natan-02.web.app
- **Console:** https://console.firebase.google.com/project/lp-biomo-natan-02

### Configuração

**firebase.json**
```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|svg|png|jpg|jpeg|gif|ico|woff|woff2)",
        "headers": [
          { "key": "Cache-Control", "value": "max-age=31536000" }
        ]
      }
    ]
  }
}
```

**next.config.ts**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Static export para Firebase
  trailingSlash: true,     // /pagina/ ao invés de /pagina
  images: {
    unoptimized: true      // Sem otimização de imagens (static)
  }
};

export default nextConfig;
```

---

## Comandos de Deploy

### Build + Deploy Completo
```bash
cd /mnt/c/Users/Natan/lp-biomo-natan-02
npm run build
firebase deploy --only hosting
```

### Deploy via Windows (WSL)
```bash
npm run build && cmd.exe /c "firebase deploy --only hosting --project lp-biomo-natan-02"
```

### Apenas Deploy (se já buildou)
```bash
firebase deploy --only hosting
```

---

## Estrutura do Build

### Antes (src/)
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    └── ...
```

### Depois (out/)
```
out/
├── index.html
├── privacidade/
│   └── index.html
├── termos/
│   └── index.html
├── _next/
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
│   └── ...
└── assets/
    └── ...
```

---

## Scripts NPM

```json
{
  "scripts": {
    "dev": "next dev",           // Desenvolvimento local
    "build": "next build",       // Build para produção
    "start": "next start",       // Servir build localmente
    "lint": "eslint"            // Verificar código
  }
}
```

---

## Desenvolvimento Local

### Iniciar Dev Server
```bash
npm run dev
# Acesse: http://localhost:3000
```

### Build + Preview Local
```bash
npm run build
npx serve out
# Acesse: http://localhost:3000
```

---

## Variáveis de Ambiente

### Não há variáveis de ambiente neste projeto

O projeto usa apenas assets estáticos e não requer configuração de ambiente.

Se futuramente precisar:

**.env.local** (não commitar)
```
NEXT_PUBLIC_API_URL=https://api.exemplo.com
```

---

## Troubleshooting

### Erro: "next build failed"
```bash
# Verificar erros de TypeScript
npm run lint

# Limpar cache
rm -rf .next out node_modules/.cache
npm run build
```

### Erro: "firebase deploy failed"
```bash
# Verificar login
firebase login:list

# Relogar se necessário
firebase login --reauth

# Verificar projeto
firebase projects:list
firebase use lp-biomo-natan-02
```

### Build muito lento
```bash
# Verificar tamanho de node_modules
du -sh node_modules

# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Página 404 após deploy
1. Verificar se `next.config.ts` tem `output: 'export'`
2. Verificar se `firebase.json` aponta para `"public": "out"`
3. Verificar se build gerou arquivos em `/out`

---

## Checklist Pré-Deploy

- [ ] `npm run lint` sem erros
- [ ] `npm run build` sem erros
- [ ] Testar localmente com `npx serve out`
- [ ] Console sem erros no browser
- [ ] Testar em mobile (DevTools)
- [ ] Verificar shaders carregando
- [ ] Testar modal de orçamento
- [ ] Verificar WhatsApp popup
- [ ] Testar navegação interna

---

## Rollback

### Ver releases anteriores
```bash
firebase hosting:releases:list --project lp-biomo-natan-02
```

### Rollback para versão anterior
```bash
firebase hosting:rollback --project lp-biomo-natan-02
```

---

## Performance

### Bundle Analysis
```bash
# Adicionar ao package.json
npm install @next/bundle-analyzer

# Analisar
ANALYZE=true npm run build
```

### Lighthouse Targets

| Métrica | Target |
|---------|--------|
| Performance | > 85 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

### Otimizações Aplicadas

1. **Static Export** - Sem SSR overhead
2. **Tree Shaking** - Importações seletivas
3. **Code Splitting** - Chunks automáticos
4. **Image Optimization** - SVGs vetoriais
5. **Font Optimization** - Inter via system-ui fallback
6. **CSS Purge** - Tailwind remove unused

---

## CI/CD (Opcional)

### GitHub Actions

**.github/workflows/deploy.yml**
```yaml
name: Deploy to Firebase

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: lp-biomo-natan-02
```
