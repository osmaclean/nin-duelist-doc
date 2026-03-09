"use client"

import { Callout } from "@/components/doc-components"

const phases = [
  {
    title: "Fase 1 — Core",
    status: "done" as const,
    items: [
      "Sistema de duelos (propose/accept/start/report/confirm/cancel)",
      "Testemunha obrigatória com validação",
      "Máquina de estados completa (PROPOSED → CONFIRMED)",
      "Embed único editado in-place com botões dinâmicos",
      "Seasons automáticas (criação, verificação, fechamento)",
      "Ranking por season com paginação",
    ],
  },
  {
    title: "Fase 2 — Integridade",
    status: "done" as const,
    items: [
      "Anti-farm (1 duelo confirmado/par/dia UTC)",
      "Cooldowns (criação, botões, notificações)",
      "Optimistic locking em transições de estado",
      "Transação atômica na confirmação de resultado",
      "Audit log para ações admin (AdminActionLog)",
      "Reconcile de embeds no startup",
    ],
  },
  {
    title: "Fase 3 — Experiência",
    status: "done" as const,
    items: [
      "Notificações DM com fallback para menção no canal",
      "Comandos de consulta (/profile, /history, /h2h, /activity, /records, /pending)",
      "Preferências de notificação (/settings)",
      "Aviso de season encerrando (24h antes)",
      "MVP (pódio com peak streak)",
      "Formatos MD1 e MD3 com modal de placar",
    ],
  },
  {
    title: "Fase 4 — Admin",
    status: "done" as const,
    items: [
      "Cancel, reopen, force-expire, fix-result com reversão de pontos",
      "Logs de auditoria por duelo",
      "Busca por jogador e por status",
      "Gerenciamento manual de seasons (status, end, create)",
      "Graceful shutdown (SIGTERM/SIGINT)",
      "Job health check com warning de gap",
    ],
  },
  {
    title: "Fase 5 — Próximos passos",
    status: "planned" as const,
    items: [
      "Dashboard web com estatísticas",
      "Sistema de clans/equipes",
      "Duelos em equipe (2v2, 3v3)",
      "Torneios",
      "Integração com Nin Online API (se disponível)",
    ],
  },
]

const statusStyles = {
  done: {
    bg: "bg-chakra/10",
    border: "border-chakra/30",
    dot: "bg-chakra",
    label: "Concluído",
    labelColor: "text-chakra",
  },
  "in-progress": {
    bg: "bg-info/10",
    border: "border-info/30",
    dot: "bg-info",
    label: "Em progresso",
    labelColor: "text-info",
  },
  planned: {
    bg: "bg-surface",
    border: "border-border-default",
    dot: "bg-text-muted",
    label: "Planejado",
    labelColor: "text-text-muted",
  },
}

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <h1 id="roadmap" className="text-3xl font-bold tracking-tight text-text-primary">
        Roadmap
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Plano de desenvolvimento do NinDuelist. Consulte{" "}
        <code className="text-chakra">docs/ROADMAP.md</code> no repositório para
        a versão mais atualizada.
      </p>

      <div className="chakra-line" />

      <div className="space-y-4">
        {phases.map((phase, i) => {
          const style = statusStyles[phase.status]
          return (
            <div
              key={phase.title}
              className={`rounded-lg border ${style.border} ${style.bg} p-4`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className={`inline-block h-2 w-2 rounded-full ${style.dot}`} />
                  <h2
                    id={`fase-${i + 1}`}
                    className="text-lg font-semibold text-text-primary"
                  >
                    {phase.title}
                  </h2>
                </div>
                <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${style.labelColor} ${style.bg}`}>
                  {style.label}
                </span>
              </div>
              <ul className="mt-3 grid grid-cols-1 gap-1.5 md:grid-cols-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    {phase.status === "done" ? (
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-chakra"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <Callout type="info">
        As fases 1-4 refletem funcionalidades já implementadas no código atual.
        A fase 5 são próximos passos planejados.
      </Callout>
    </div>
  )
}
