# Plano Económico — Invicta VPN

## 0. Modelo (corrigido)

Existem **dois planos partilhados** mantidos pela Norse Labs (Plan Wizard):

| Plano | ID | blockchain_id | Nodes | Tipo |
|-------|-----|---------------|-------|------|
| **General** | 1 | 6 | ~9.799 | Todos (datacenter + residencial) |
| **Residential** | 2 | 24 | ~200-400 | Apenas residenciais |

Ambos com `is_managed_automatically: true`. Usados por Meile, Independent, Based VPN.
A tua app aponta para estes planos — **zero custo de infraestrutura de nós no MVP**.

---

## 1. Tiers

| | Standard | Premium |
|---|---|---|
| Preço | **€3/mês** | **€5/mês** |
| Plano | General (ID 1) | Residential (ID 2) |
| Nodes | ~9.799 (mistos) | ~200-400 (residenciais) |
| Curadoria | Automática (Norse Labs) | Automática + filtro teu backend |
| Ideal para | Navegação diária | Streaming (Netflix, Disney+) |
| Subsídio | Sim (Growth DAO) | Sim (Growth DAO) |

## 2. Custos — MVP (planos partilhados)

| Item | Custo |
|------|-------|
| Website (Vercel) | **€0** |
| Domínios | **€0** |
| Backend (Vercel) | **€0** |
| Nodes (General + Residential) | **€0** (subsidiado) |
| **Total** | **€0/mês** |

## 3. Custos — Plano próprio (se/quando necessário)

| Item | Custo |
|------|-------|
| VPS Contabo (nó próprio) | **~€7/mês** |
| Nó datacenter público | **~$1.14/mês** (15 P2P/h) |
| Nó residencial público | **~$2.40/mês** (31.5 P2P/h) |

> **Provavelmente nunca precisas** para < 1.000-2.000 utilizadores Premium.

## 4. Receita

**80%** de cada subscrição → tua wallet. **20%** → protocolo.

## 5. Projeção — Standard (€3, plano General)

| Users | Receita (80%) | Custos | **Lucro** |
|-------|---------------|--------|-----------|
| 10 | €24 | €0 | **€24** |
| 50 | €120 | €0 | **€120** |
| 100 | €240 | €0 | **€240** |

## 6. Projeção — Premium (€5, plano Residential)

| Users | Receita (80%) | Custos | **Lucro** |
|-------|---------------|--------|-----------|
| 10 | €40 | €0 | **€40** |
| 50 | €200 | €0 | **€200** |
| 100 | €400 | €0 | **€400** |

## 7. Resumo

| Pergunta | Resposta |
|----------|----------|
| Preciso de criar plano próprio? | **Não** no MVP. **Provavelmente nunca.** |
| Custo mensal total? | **€0** |
| Receita por subscrição? | **80%** |
| Quantos tiers? | **2** (Standard €3, Premium €5) |
| Diferenciação? | Curadoria extra no teu backend (ASN, Netflix bot) |
