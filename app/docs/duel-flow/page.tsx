"use client"

import { StatusTimeline, Callout, CodeBlock } from "@/components/doc-components"

export default function DuelFlowPage() {
  return (
    <div className="space-y-6">
      <h1 id="fluxo-de-duelo" className="text-3xl font-bold tracking-tight text-text-primary">
        Fluxo de Duelo
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Um duelo passa por 5 fases. Tudo acontece dentro de um único embed que é
        atualizado in-place no Discord.
      </p>

      <div className="chakra-line" />

      <h2 id="fluxo-completo" className="text-xl font-semibold text-text-primary">Fluxo completo</h2>

      <StatusTimeline
        steps={[
          {
            status: "PROPOSED",
            label: "Fase 1 — Proposta",
            description: "Jogador A usa /duel @JogadorB MD1 @Testemunha. Embed amarelo com status de aceitação. O oponente tem 30 minutos para aceitar. Botões: Aceitar Duelo | Cancelar.",
          },
          {
            status: "ACCEPTED",
            label: "Fase 2 — Aceito",
            description: "Oponente aceitou. Embed azul. Qualquer duelista pode iniciar. Botões: Iniciar Duelo | Cancelar.",
          },
          {
            status: "IN_PROGRESS",
            label: "Fase 3 — Em andamento",
            description: "Duelo iniciado. Embed laranja. Qualquer duelista pode enviar resultado. MD1: resultado automático (1-0). MD3: modal pedindo placar (2-0 ou 2-1). Botões: Enviar Resultado | Cancelar.",
          },
          {
            status: "AWAITING_VALIDATION",
            label: "Fase 4 — Aguardando validação",
            description: "Resultado enviado. Embed roxo. Somente a testemunha pode interagir. Se confirma: duelo finalizado atomicamente. Se rejeita: volta para IN_PROGRESS. Botões: Confirmar Resultado | Rejeitar Resultado.",
          },
          {
            status: "CONFIRMED",
            label: "Fase 5 — Confirmado",
            description: "Embed verde, sem botões. Mostra placar final. Pontuação aplicada: +1 ponto para vencedor, -1 para perdedor. Streaks atualizadas.",
          },
        ]}
      />

      <h2 id="estados-especiais" className="text-xl font-semibold text-text-primary">Estados especiais</h2>

      <StatusTimeline
        steps={[
          {
            status: "EXPIRED",
            label: "Expirado",
            description: "Oponente não aceitou em 30 minutos. O bot verifica a cada 1 minuto. Aviso enviado quando faltam 10 minutos.",
          },
          {
            status: "CANCELLED",
            label: "Cancelado",
            description: "Qualquer participante (desafiante, oponente ou testemunha) cancelou nas fases PROPOSED, ACCEPTED ou IN_PROGRESS. Nenhuma pontuação é aplicada.",
          },
        ]}
      />

      <h2 id="diagrama-de-estados" className="text-xl font-semibold text-text-primary">Diagrama de estados</h2>
      <CodeBlock language="text" filename="Máquina de estados">
        {`                    ┌──────────────────────────────────────┐
                    │                                      │
                    v                                      │
PROPOSED ──→ ACCEPTED ──→ IN_PROGRESS ──→ AWAITING_VALIDATION ──→ CONFIRMED
    │            │              │                │
    │            │              │                │
    │            └──────────────┘                │
    │                   │              (rejeição volta
    │                   │               para IN_PROGRESS)
    │                   v
    │              CANCELLED
    │
    v
  EXPIRED
  (30 min sem aceitar)`}
      </CodeBlock>

      <h2 id="notificacoes" className="text-xl font-semibold text-text-primary">Notificações por fase</h2>
      <div className="overflow-x-auto rounded-lg border border-border-default">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default bg-surface-hover text-left">
              <th className="px-4 py-2.5 font-medium text-text-primary">Evento</th>
              <th className="px-4 py-2.5 font-medium text-text-primary">Quem recebe</th>
            </tr>
          </thead>
          <tbody>
            {[
              { event: "Duelo criado", who: "Oponente + testemunha" },
              { event: "Oponente aceitou", who: "Ambos duelistas" },
              { event: "Resultado enviado", who: "Testemunha" },
              { event: "Resultado confirmado", who: "Ambos duelistas" },
              { event: "Resultado rejeitado", who: "Ambos duelistas" },
              { event: "Duelo expirando (10 min)", who: "Oponente + testemunha" },
              { event: "Duelo expirado", who: "Todos (3 participantes)" },
            ].map((row) => (
              <tr key={row.event} className="border-b border-border-subtle last:border-0">
                <td className="px-4 py-2 text-text-secondary">{row.event}</td>
                <td className="px-4 py-2 text-text-muted">{row.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="info">
        DMs automáticas com fallback para menção no canal. Anti-spam: cooldown de 5 minutos
        por usuário por tipo de evento. Opt-out via <code className="text-chakra">/settings notifications off</code>.
      </Callout>
    </div>
  )
}
