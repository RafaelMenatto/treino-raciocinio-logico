# 🧠 Raciocínio Lógico

**Desafio de 30 dias para treinar e aprimorar seu raciocínio lógico.**

Um aplicativo web completo, offline e responsivo, com 30 dias de desafios progressivos, dia bônus, modo maratona, modo livre e 46 conquistas para desbloquear.

**Melhorias recentes:** Ícone PWA vetorial, questions pools expandidas (20 easy + 20 medium + 22 hard), SRI em dependências CDN, Service Worker com limite de cache e invalidação por versão, sanitização de conteúdo, novo **Modo Livre**, correções de lógica em questões e feedback, cabeçalho responsivo com quebra de linha do subtítulo, correção do título truncado do Mapa de Progressão em telas pequenas, deduplicação correta de questões visuais no Dia Bônus, correção do resgate de sessão após concluir um dia e eliminação de questões duplicadas ao longo dos 30 dias (pools de cenários de lógica expandidos para 30 cada). Além disso: as **conquistas do Modo Livre agora são permanentes** (via chave `logicLivre`) e só desbloqueáveis jogando nesse modo (corrigido o vazamento para o jogo normal/maratona); na **imagem compartilhável**, os dias aprovados passaram a ser exibidos em **amarelo claro**; e o **card do Dia Bônus** teve toda a sua fonte ampliada.

---

## 🎯 Sobre o Desafio

O desafio é simples: complete 10 questões lógicas por dia durante 30 dias. Cada dia tem um nível de dificuldade que aumenta progressivamente. Ao final dos 30 dias, um dia bônus desafia você com 30 questões.

**Regra de aprovação:** Acerte pelo menos 7 de 10 questões para desbloquear o próximo dia (dia bônus: 21 de 30).

---

## 📋 Tipos de Questões

| Tipo | Descrição |
|------|-----------|
| **Sequências Matemáticas** | Encontre o próximo número em sequências numéricas |
| **Lógica** | Deduções, silogismos e problemas de lógica pura |
| **Padrões Visuais** | Identifique padrões em figuras e sequências visuais |
| **Alfabeto** | Sequências e padrões com letras |
| **Dedução** | Problemas de dedução lógica com múltiplas premissas |
| **Diagramas de Venn** | Interpretação de diagramas de Venn e conjuntos |

---

## 🏆 Conquistas (46)

### Progressão
- **Primeiro Passo** — Complete o Dia 1
- **Semana de Fogo** — Complete 7 dias
- **Meio do Caminho** — Complete 15 dias
- **Mestre dos 30** — Complete todos os 30 dias
- **Desafiante Supremo** — Complete o Dia Bônus

### Perfeição
- **Dia Perfeito** — Acerte 10/10 em qualquer dia
- **Perfeccionista** — Tenha 3 dias com 10/10
- **Lenda Absoluta** — Tenha 10 dias com 10/10
- **Bônus Perfeito** — Acerte 30/30 no Dia Bônus

### Desafio
- **Imparável** — 5 dias seguidos com 10/10
- **Recuperado** — Complete um dia com menos de 10/10 e passe
- **Consistente** — 5 dias seguidos com 8+ acertos
- **Chama no Fogo** — Tenha uma sequência de 3 acertos (Streak)

### Dicas
- **Sem Dicas** — Complete 10 dias sem usar dicas
- **Estrategista** — Use dicas em 10 dias e passe
- **Purista** — Complete os 30 dias sem usar dicas

### Maestria por Tipo (3 níveis cada)
Para cada tipo de questão (Matemática, Lógica, Visual, Alfabeto, Dedução, Venn):
- **Nível 1** — Acerte todas as questões de um tipo em 3 dia
- **Nível 2 (Especialista)** — Acerte todas em 15 dias diferentes
- **Nível 3 (Mestre)** — Acerte todas em 30 dias diferentes

---

## 🏃 Modo Maratona

Um modo de desafio temporário separado da progressão principal:
- Progressão independente (não afeta o modo normal)
- Pode ser ativado/desativado a qualquer momento
- Ao desativar, a progressão é resetada
- Ideal para praticar sem comprometer o progresso real
- Conquistas exclusivas: Maratonista, Resistência, Ultra, Lenda da Maratona, Maratona Perfeita e Imbatível na Maratona

---

## 🧭 Modo Livre

Um modo de exploração que libera **todos os 30 dias e o Dia Bônus** imediatamente, sem precisar cumprir a progressão:
- Todos os níveis disponíveis de uma vez (do Básico ao Expert, inclusive o Dia Bônus)
- **Progresso do jogo NÃO é salvo** — ao sair do modo ou recarregar a página, a partida em andamento é perdida
- Apenas um **resumo leve de conquistas** do Modo Livre é gravado (chave `logicLivre`), para que as conquistas do modo sejam permanentes
- Ativado pelo botão de bússola (🧭) no mapa
- Mutuamente exclusivo com o Modo Maratona
- Ideal para treinar qualquer nível livremente sem comprometer o progresso real

**Conquistas do Modo Livre** (permanentes — registradas via `logicLivre`, só desbloqueáveis jogando no Modo Livre):
- **Explorador Livre** — Complete todos os 30 dias no Modo Livre
- **Livre Perfeito** — Acerte 10/10 em um dia do Modo Livre
- **Livre Imparável** — 5 dias seguidos com 10/10 no Modo Livre
- **Livre Supremo** — Complete o Dia Bônus no Modo Livre

---

## ⚙️ Funcionalidades

| Feature | Descrição |
|---------|-----------|
| **3 Temas** | Escuro, Claro (tons de azul) e Alto Contraste |
| **Som & Vibração** | Toggle entre som, vibração ou silencioso |
| **Salvamento Automático** | Progresso salvo em localStorage a cada ação |
| **Restauração de Sessão** | Retoma de onde parou ao recarregar a página |
| **Revisão de Erros** | Revisualize questões erradas com explicações |
| **Estatísticas** | Acompanhe seu desempenho por tipo de questão |
| **Imagem Compartilhável** | Baixe ou compartilhe seu progresso |
| **Notificações** | Lembrete diário para manter a sequência |
| **PWA** | Funciona offline como app instalável (Service Worker com cache versionado) |
| **Acessibilidade** | Navegação por teclado, leitores de tela, foco trap |
| **Segurança** | SRI (Subresource Integrity) em dependências CDN |

---

## 🛠️ Tecnologias

- **HTML5** — Estrutura semântica
- **Tailwind CSS** — Estilização responsiva (via CDN)
- **JavaScript Vanilla** — Lógica de jogo, animações e persistência
- **localStorage** — Persistência local de dados
- **Service Worker** — Cache offline e suporte PWA (com limite de entradas e invalidação de versão)
- **Font Awesome** — Ícones (com SRI para verificação de integridade)

---

## 📦 Como Usar

1. Abra o arquivo `index.html` no navegador
2. ou acesse a versão hospedada em: **https://treino-raciocinio-logico.vercel.app/**

Nenhum servidor ou instalação necessária. Tudo roda no navegador.

---

## 📁 Estrutura do Projeto

```
treino-raciocinio-logico/
├── index.html      ← App completo (HTML + CSS + JS)
├── manifest.json   ← PWA manifest
├── sw.js           ← Service Worker
└── README.md       ← Este arquivo
```

---

## 📄 Licença

Projeto educacional de uso livre.
