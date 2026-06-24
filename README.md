# ✈️ Portal de Viagens Brasil

Aplicação WEB desenvolvida com Next.js que simula um portal de viagens simples, permitindo explorar destinos turísticos nacionais e internacionais.

## 💻 Tecnologia Utilizada

- [Next.js 16.2.9](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## ✅ Funcionalidades

- Página inicial com apresentação do portal
- Listagem de destinos turísticos 
- Página de detalhes individuais de cada destino
- Navegação entre páginas com menu fixo
- Layout responsivo priorizando mobile first

## 📁 Estrutura do Arquivo

```
app/
  components/
    CardDestino/  → componente de card do destino
    Layout/       → header, menu e footer reutilizável
  destinos/
    [id]/         → página de detalhes (rota dinâmica)
    page.tsx      → listagem de destinos
  page.tsx        → página inicial
data/
  destinos.ts     → array local com os dados dos destinos
```

## ▶️ Como rodar localmente?

```bash
# Clone o repositório
git clone https://github.com/loganpedace/portal-de-viagens.git

# Acesse a pasta
cd portal-viagens

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```
