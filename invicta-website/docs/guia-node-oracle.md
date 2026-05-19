# Guia: Node Sentinel no Oracle Cloud Free Tier

## 1. Criar Conta Oracle Cloud

1. Aceder a https://cloud.oracle.com
2. Clicar "Start for free"
3. Preencher: email, país, nome
4. Verificar telefone (SMS)
5. Adicionar cartão de crédito ( **não cobram nada** , só verificação)
6. Escolher **Home Region** — sugere-se uma com disponibilidade ARM:

| Região | Latência PT |
|--------|-------------|
| London | ~25ms |
| Frankfurt | ~30ms |
| Amsterdam | ~35ms |
| São Paulo | ~180ms |

> **Nota:** a Home Region é definitiva. Escolhe uma com boa disponibilidade ARM.

---

## 2. Criar Instância ARM

1. Console → Compute → Instâncias → "Create instance"
2. **Name:** `invicta-node`
3. **Image:** Ubuntu 24.04 LTS ARM64 (ou Canonical Ubuntu)
4. **Shape:** Ampere A1 Flex
   - **OCPU count:** 4
   - **Memory:** 24 GB
5. **Boot volume:** 50 GB (sobra para outras VMs)
6. **SSH key:** descarregar a chave privada (.pem)
7. **Subnet:** deixar a default (já cria VCN)
8. **Assign public IPv4:** sim

> **Se der "Out of capacity":** muda de região (tenta London → Frankfurt → Amsterdam) ou espera e tenta noutra hora.

---

## 3. Aceder à Instância

```bash
# Terminal (PowerShell ou Linux)
ssh -i ~/Downloads/chave.pem ubuntu@<IP_PUBLICO>
```

---

## 4. Instalar Docker

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose-v2
sudo systemctl enable docker
sudo usermod -aG docker $USER
# Fazer logout e login outra vez (ou: newgrp docker)
```

---

## 5. Configurar Firewall (Oracle)

No console Oracle: **Rede → VCN → Security List**

Adicionar regras **Ingress**:

| Tipo | Porta | Origem | Descrição |
|------|-------|--------|-----------|
| TCP | 22 | 0.0.0.0/0 | SSH |
| TCP | 26656 | 0.0.0.0/0 | P2P (tendermint) |
| UDP | 51820 | 0.0.0.0/0 | WireGuard |
| TCP | 80 | 0.0.0.0/0 | website (opcional) |
| TCP | 443 | 0.0.0.0/0 | website HTTPS (opcional) |

---

## 6. Correr Node Sentinel

```bash
# Criar pasta para o nó
mkdir -p ~/sentinel-node && cd ~/sentinel-node

# Descarregar config
wget https://raw.githubusercontent.com/sentinel-official/sentinel-dvpnx/master/.env.example -O .env
nano .env
```

**Configurar `.env`:**

```env
NODE_MONIKER=Invicta-VPN
NODE_REMOTE_URL=<IP_PUBLICO>:51820
PRICE_HOURLY=13000000
PRICE_GIGABYTE=20000000
WALLET_MNEMONIC=<12-palavras>
```

> **Gerar mnemonic:** usa https://wallet.sentinel.co ou `sentinelcli` para gerar uma seed.

```bash
# Correr com Docker
docker run -d \
  --name sentinel-node \
  --restart unless-stopped \
  -p 26656:26656 \
  -p 51820:51820/udp \
  -v ~/sentinel-node:/root/.sentinel \
  sentinelofficial/sentinel-dvpnx:latest
```

---

## 7. Verificar

```bash
docker logs -f sentinel-node
```

Se tudo ok, vais ver o nó a sincronizar com a blockchain. Depois de sincronizado (~minutos), aparece como `STATUS_ACTIVE`.

---

## 8. Site na Mesma VPS (Opcional)

```bash
# Instalar Nginx
sudo apt install -y nginx
sudo systemctl enable nginx

# Copiar build do site
scp -r invicta-website/out/* ubuntu@<IP>:/var/www/html/
```

Ou manter o site na Vercel (€0) e usar o VPS só para o nó.

---

## Resumo de Custos

| Item | Custo |
|------|-------|
| Oracle AMD (2 VMs 1GB) | €0/mês |
| Oracle ARM (4 CPU, 24GB) | €0/mês |
| Bandwidth 10 TB | €0/mês |
| **Total** | **€0/mês** |

O nó Sentinel corre 24/7 sem pagar nada.
