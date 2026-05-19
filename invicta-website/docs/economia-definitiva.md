# Economia Invicta VPN — Versão Definitiva

Preço $P2P: **$0.00008881** (CoinGecko, 19 maio 2026)
Preços máximos regulatórios: datacenter 15 P2P/h, residential 31.5 P2P/h

---

## 0. MODELO REAL — 2 planos partilhados, 0 planos próprios

A Norse Labs (Plan Wizard) mantém **dois planos partilhados**:

### Plano "General" (ID 1, blockchain_id 6)

~9.799 nodes. Todos os nodes que passam health check (datacenter + residential).
Usado por: Meile dVPN, Independent VPN, Based VPN (tier standard).

### Plano "Residential" (ID 2, blockchain_id 24)

~200-400 nodes. Apenas IPs residenciais validados.
Curadoria automática: nodes que não cumprem "residential status" são removidos.
Usado por: Meile dVPN, Independent VPN, Based VPN (tier premium).

### Como aceder

```
GET https://planwizard.basedapps.co.uk/plans/1/nodes   # General
GET https://planwizard.basedapps.co.uk/plans/2/nodes   # Residential
```

> ⚠️ API de demonstração. Produção: corre a tua instância do Plan Wizard (open source) ou lê da chain via RPC.

---

## 1. ESTRATÉGIA EM 3 FASES

### Fase 0 — MVP (meses 1-3)

| Tier | Plano | Nodes | Preço |
|------|-------|-------|-------|
| Standard | General (ID 1) | ~9.799 | €3/mês |
| Premium | Residential (ID 2) | ~200-400 | €5/mês |

Custo infraestrutura: **€0/mês** (subsidiado pela Foundation/Growth DAO).

Diferenciação: curadoria extra no teu backend.
- Filtragem por ASN (excluir ISPs problemáticos)
- Bot de validação Netflix/Disney+ (top-15 dinâmico)
- Ranking por qualidade real (latência, throughput)

### Fase 1 — Migração para plano próprio (se necessário)

**Provavelmente nunca precisas** para < 1.000-2.000 utilizadores Premium.
Os planos partilhados servem-te e o subsídio cobre os custos.

Cria plano próprio apenas se:
- Precisas de nodes exclusivos (negociar com node operators)
- Queres regras custom não suportadas pelo Plan Wizard
- Operação > 2.000 Premium (para previsibilidade de custos)

### Fase 2 — Escala global

Mesmo com 10.000 users, manténs planos partilhados + filtragem backend.
Plano próprio só faz sentido quando os 80% de receita justificam a gestão.

---

## 2. CUSTO DOS NÓS (referência para quando fizeres plano próprio)

### Preços máximos regulatórios (Health Check)

| Tipo | Máximo/hora | Máximo/GB |
|------|-------------|-----------|
| Datacenter | 15 P2P (15.000.000 udvpn) | 20 P2P |
| Residential | 31.5 P2P (31.500.000 udvpn) | 20 P2P |

### Custo realista por nó

| Tipo | Preço médio/h | Custo/dia | Custo/mês |
|------|---------------|-----------|-----------|
| Datacenter | 15 P2P | 360 P2P | ~10.800 P2P / **~$0.96** |
| Residential | 20-25 P2P | 480-600 P2P | ~14.400-18.000 P2P / **~$1.28-1.60** |

### Custo plano Premium com 12 nós residenciais

```
12 nodes × 25 P2P/h × 24h × 30 dias = 216.000 P2P/mês
× $0.00008881 = ~$19.18/mês ≈ €17.80/mês
```

---

## 3. RECEITAS

### Divisão por subscrição (protocolo)

```
Utilizador paga €3 (Standard) ou €5 (Premium)
       │
       ├─ 80% → Tua wallet Sentinel (instantâneo)
       └─ 20% → Community pool (stakers)
```

### Margens (MVP — planos partilhados, €0 custo)

| Tier | Receita/user | Custo | **Margem** |
|------|-------------|-------|-----------|
| Standard (€3) | €2.40 | €0 | **100%** |
| Premium (€5) | €4.00 | €0 | **100%** |

### Projeção (ano 1)

| Mês | Users Standard | Users Premium | Receita total | Custos | **Lucro** |
|-----|---------------|---------------|---------------|--------|-----------|
| 1 | 5 | 0 | €12 | €0 | **€12** |
| 3 | 20 | 5 | €68 | €0 | **€68** |
| 6 | 50 | 10 | €160 | €0 | **€160** |
| 12 | 100 | 20 | €320 | €0 | **€320** |
| **Ano 1** | média 40 | média 8 | **~€1.900** | **€0** | **~€1.900** |

---

## 4. PREÇOS RECOMENDADOS

| Tier | Preço | Plano | Público-alvo |
|------|-------|-------|-------------|
| **Standard** | **€3/mês** | General (~9.799 nodes) | Navegação diária, streaming SD |
| **Premium** | **€5/mês** | Residential (~200-400 nodes) | Streaming 4K, Netflix, Disney+ |

---

## 5. COMPARAÇÃO COM CONCORRÊNCIA

| VPN | Standard | Premium | Nodes | Modelo |
|-----|----------|---------|-------|--------|
| **Invicta** | **€3** | **€5** | ~10.000+ | Partilhado (subsidiado) |
| Meile | $3.14 | $6 | 60+ | Partilhado + próprio |
| Independent | Grátis | $3 | 100+ | Partilhado + anúncios |
| Based | $3 | $6 | ~9.799 | Partilhado (General) |
| NordVPN | ~€4.50 | ~€6 | 5.000+ | Centralizado |

---

## 6. PORQUE ISTO FUNCIONA PARA TI

1. **Custo zero no MVP** — planos partilhados + subsídio = €0/mês
2. **2 tiers desde o dia 1** — Standard (General) + Premium (Residential)
3. **Diferenciação via backend** — filtragem ASN + bot Netflix, pagas €0 pelos nodes
4. **Nunca precisas de VPS, nem de gerir tokens, nem de criar planos**
5. **Risco zero** — se falhar, não gastaste nada

## 7. RISCOS REAIS

| Risco | Probab. | Impacto | Mitigação |
|-------|---------|---------|-----------|
| Subsídio acabar | Média | Médio | Migrar para plano próprio (5-6 meses de receita) |
| API Plan Wizard mudar | Média | Baixo | Correr instância própria (open source) |
| Cotação $P2P cair 90% | Baixa | Baixo | Preços em € convertem automático |
| Concorrência igual | Alta | Médio | Diferenciação é branding, UX, curadoria extra |
| Poucos utilizadores | Alta | **Nulo** | MVP custa €0 — não perdes nada |

## 8. SUMMARY

1. **2 planos partilhados existem:** General (~9.799 nós) + Residential (~200-400 nós)
2. **MVP = 2 tiers:** Standard €3 + Premium €5, custo €0
3. **Nunca precisas de criar plano próprio** para < 1.000-2.000 Premium
4. **Diferenciação é backend:** filtragem ASN + bot Netflix, não infraestrutura
5. **Risco do MVP = €0**
