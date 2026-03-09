"use client"

import { CodeBlock, Callout, Accordion } from "@/components/doc-components"

export default function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <h1 id="arquitetura" className="text-3xl font-bold tracking-tight text-text-primary">
        Arquitetura
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Visão geral da estrutura de pastas e decisões arquiteturais do NinDuelist.
      </p>

      <div className="chakra-line" />

      <h2 id="estrutura-de-pastas" className="text-xl font-semibold text-text-primary">
        Estrutura de Pastas
      </h2>
      <CodeBlock language="text" filename="src/">
        {`src/
├── commands/          # Slash commands (/duel, /rank, /mvp, /pending, /history, /profile, /h2h, /activity, /records, /settings, /admin)
│   └── index.ts       # Barrel — mapa command → handler
├── buttons/           # Button handlers (aceitar, iniciar, cancelar, etc.)
│   ├── handler.ts     # HOF que elimina boilerplate dos handlers
│   └── index.ts       # Barrel — mapa action → handler
├── modals/            # Modal handlers (submit-score)
│   └── index.ts       # Barrel — mapa action → handler
├── services/          # Lógica de negócio (duel, player, ranking, season, antifarm, pending, history, profile, h2h, activity, records, audit, search)
├── lib/               # Utilitários (embeds, components, logger, prisma, pagination, notifications, cooldown, retry, job-health)
├── events/            # Event handlers Discord (ready, interactionCreate)
├── jobs/              # Background jobs (expire-duels, season-check)
├── config.ts          # Constantes e validação de env vars
├── index.ts           # Bootstrap do client Discord + graceful shutdown
└── deploy-commands.ts # Script de registro de slash commands`}
      </CodeBlock>

      <h2 id="camadas" className="text-xl font-semibold text-text-primary">
        Camadas
      </h2>
      <div className="my-4 grid grid-cols-1 gap-3">
        {[
          {
            layer: "Commands",
            desc: "Recebem interações do Discord e delegam para os services. Não contêm lógica de negócio.",
            color: "bg-chakra/10 border-chakra/20",
          },
          {
            layer: "Buttons / Modals",
            desc: "Handlers de botões e modais. Barrel files exportam mapas Record<string, handler> para lookup direto sem switch/case.",
            color: "bg-info/10 border-info/20",
          },
          {
            layer: "Services",
            desc: "Toda a lógica de negócio: validações, pontuação, regras anti-farm, gerenciamento de seasons, confirmação atômica.",
            color: "bg-warn/10 border-warn/20",
          },
          {
            layer: "Lib",
            desc: "Utilitários compartilhados: embeds builder, componentes Discord, logger estruturado, Prisma client, paginação, notificações, cooldown, retry.",
            color: "bg-surface border-border-default",
          },
          {
            layer: "Jobs",
            desc: "Background jobs com setTimeout recursivo: expiração de duelos (1 min) e verificação de season (5 min).",
            color: "bg-surface border-border-default",
          },
        ].map((item) => (
          <div
            key={item.layer}
            className={`rounded-lg border p-4 ${item.color}`}
          >
            <p className="text-sm font-semibold text-text-primary">{item.layer}</p>
            <p className="mt-1 text-xs text-text-secondary leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="decisoes-arquiteturais" className="text-xl font-semibold text-text-primary">
        Decisões Arquiteturais
      </h2>
      <Accordion
        items={[
          {
            title: "Optimistic locking",
            content: (
              <p>
                Todas as transições de estado usam <code className="text-chakra">updateMany</code> com
                filtro de status. Se o status já mudou (race condition), retorna null e mostra erro amigável.
              </p>
            ),
          },
          {
            title: "Transação atômica na confirmação",
            content: (
              <p>
                <code className="text-chakra">confirmAndApplyResult</code> encapsula{" "}
                <code className="text-chakra">confirmResult</code> +{" "}
                <code className="text-chakra">applyResult</code> dentro de{" "}
                <code className="text-chakra">{"prisma.$transaction()"}</code> no service layer,
                garantindo consistência entre status do duelo e stats dos jogadores.
              </p>
            ),
          },
          {
            title: "Embed único editado in-place",
            content: (
              <p>
                Cada duelo tem um embed persistente que é atualizado via{" "}
                <code className="text-chakra">channelId</code> +{" "}
                <code className="text-chakra">messageId</code>. Botões mudam dinamicamente conforme o estado.
              </p>
            ),
          },
          {
            title: "Auto-discovery de handlers",
            content: (
              <p>
                Barrel files (<code className="text-chakra">index.ts</code>) exportam mapas{" "}
                <code className="text-chakra">{"Record<string, handler>"}</code>. O roteador em{" "}
                <code className="text-chakra">interactionCreate.ts</code> faz lookup direto sem switch/case.
              </p>
            ),
          },
          {
            title: "Jobs com setTimeout recursivo",
            content: (
              <p>
                Evita execução concorrente (ao contrário de <code className="text-chakra">setInterval</code>).
                Cada ciclo agenda o próximo só após terminar. Retry com backoff exponencial (1s, 2s, 4s).
              </p>
            ),
          },
          {
            title: "Notificações fire-and-forget",
            content: (
              <p>
                DM com fallback para menção no canal em todos os eventos do ciclo de vida do duelo.
                Nunca bloqueiam o fluxo principal. Cooldown in-memory para anti-spam.
              </p>
            ),
          },
          {
            title: "Graceful shutdown",
            content: (
              <p>
                <code className="text-chakra">SIGTERM</code>/<code className="text-chakra">SIGINT</code>{" "}
                desconectam o client Discord e o Prisma antes de encerrar o processo.
              </p>
            ),
          },
          {
            title: "Reconcile de embeds no startup",
            content: (
              <p>
                <code className="text-chakra">reconcileStaleEmbeds()</code> limpa botões de duelos
                terminais das últimas 24h ao iniciar, evitando embeds desatualizados.
              </p>
            ),
          },
          {
            title: "Logging estruturado",
            content: (
              <p>
                JSON com timestamp, level e context. Sem dependência externa.
              </p>
            ),
          },
        ]}
      />

      <h2 id="fluxo-de-dados" className="text-xl font-semibold text-text-primary">
        Fluxo de Dados
      </h2>
      <CodeBlock language="text" filename="Fluxo: /duel @oponente MD1 @testemunha">
        {`Jogador usa /duel @oponente MD1 @testemunha
  └─> interactionCreate handler (lookup no mapa de commands)
       └─> duel command handler
            ├─> Validações (season ativa, anti-farm, duelo ativo, cooldown)
            ├─> Cria registro PROPOSED no banco
            ├─> Envia embed amarelo com botões Accept/Cancel
            └─> Notifica oponente e testemunha via DM`}
      </CodeBlock>

      <Callout type="info">
        Cada service é responsável por uma única responsabilidade. O duel service
        orquestra a interação entre os outros services para completar o fluxo.
      </Callout>
    </div>
  )
}
