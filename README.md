# Invicta VPN — "Mui Nobre e Sempre Leal"

White-label dVPN baseada no protocolo Sentinel, com foco no mercado português.

## Estrutura do Projeto

```
InvictaVpn/
├── invicta-website/        # Website Next.js + Tailwind + i18n (pt/en)
│   ├── app/                # Páginas (Home, Comparativo, FAQ, etc.)
│   ├── components/         # Componentes React (Header, Hero, Footer, etc.)
│   ├── lib/                # SDK Sentinel, API routes
│   ├── i18n/               # next-intl (proxy.ts, routing.ts, request.ts)
│   ├── messages/           # Traduções (pt.json, en.json)
│   ├── public/             # Logo SVG, assets
│   └── docs/               # Documentação económica
│       ├── economia-definitiva.md
│       ├── plano-economico.md
│       └── guia-node-oracle.md
├── android-app/            # Fork sentinel-dvpn-app-android (em breve)
└── android-tv/             # App Android TV (Leanback, planeado)
```

## Roadmap

### Sessão #1 — Website ✅
- [x] Next.js + Tailwind + i18n pt/en
- [x] Todas as páginas (Home, Porquê, Funcionalidades, Comparativo, Descarregar, FAQ, Sobre)
- [x] Componentes (Header glassmorphism, Hero gradient, Footer, NodeStats)
- [x] API /api/nodes (1192 nodes ativos com GeoIP, pricing)
- [x] Logo shield + compass rose SVG
- [x] Documentação económica completa

### Sessão #2 — Android APK (em progresso)
- [ ] Fork do sentinel-dvpn-app-android
- [ ] Rebranding para Invicta VPN
- [ ] Wallet (mnemonic + import Keplr/Leap)
- [ ] 2 tiers: Standard (General) + Premium (Residential)
- [ ] APK sideload

### Sessão #3 — Android TV
- [ ] App Android TV com Leanback UI
- [ ] Core partilhado com mobile
- [ ] Streaming-optimizado (Netflix, Disney+)

### Sessão #4 — Lançamento
- [ ] Deploy website na Vercel
- [ ] Distribuição APK via site
- [ ] Pagamentos em $P2P on-chain

## Modelo Económico

| Tier | Preço | Plano Sentinel | Nodes | Custo |
|------|-------|----------------|-------|-------|
| Standard | €3/mês | General (ID 1) | ~9.799 | €0 (subsidiado) |
| Premium | €5/mês | Residential (ID 2) | ~200-400 | €0 (subsidiado) |

80% da receita vai para o provider. 20% para o protocolo. Custo operacional: €0/mês.

## Getting Started (Website)

```bash
cd invicta-website
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

## Licença

[MIT](LICENSE)
