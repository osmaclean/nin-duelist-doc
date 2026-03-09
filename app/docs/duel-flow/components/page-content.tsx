"use client"

import { useTranslation } from "react-i18next"
import { StatusTimeline, Callout, CodeBlock } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()
  const events = t("duelFlow.events", { returnObjects: true }) as { event: string; who: string }[]

  return (
    <div className="space-y-6">
      <h1 id="fluxo-de-duelo" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("duelFlow.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("duelFlow.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="fluxo-completo" className="text-xl font-semibold text-text-primary">{t("duelFlow.fullFlow")}</h2>

      <StatusTimeline
        steps={[
          { status: "PROPOSED", label: t("duelFlow.phase1"), description: t("duelFlow.phase1Desc") },
          { status: "ACCEPTED", label: t("duelFlow.phase2"), description: t("duelFlow.phase2Desc") },
          { status: "IN_PROGRESS", label: t("duelFlow.phase3"), description: t("duelFlow.phase3Desc") },
          { status: "AWAITING_VALIDATION", label: t("duelFlow.phase4"), description: t("duelFlow.phase4Desc") },
          { status: "CONFIRMED", label: t("duelFlow.phase5"), description: t("duelFlow.phase5Desc") },
        ]}
      />

      <h2 id="estados-especiais" className="text-xl font-semibold text-text-primary">{t("duelFlow.specialStates")}</h2>

      <StatusTimeline
        steps={[
          { status: "EXPIRED", label: t("duelFlow.expired"), description: t("duelFlow.expiredDesc") },
          { status: "CANCELLED", label: t("duelFlow.cancelled"), description: t("duelFlow.cancelledDesc") },
        ]}
      />

      <h2 id="diagrama-de-estados" className="text-xl font-semibold text-text-primary">{t("duelFlow.stateDiagram")}</h2>
      <CodeBlock language="text" filename={t("duelFlow.stateFilename")}>
        {`                    +--------------------------------------+
                    |                                      |
                    v                                      |
PROPOSED --> ACCEPTED --> IN_PROGRESS --> AWAITING_VALIDATION --> CONFIRMED
    |            |              |                |
    |            |              |                |
    |            +--------------+                |
    |                   |              (rejection returns
    |                   |               to IN_PROGRESS)
    |                   v
    |              CANCELLED
    |
    v
  EXPIRED
  (30 min no accept)`}
      </CodeBlock>

      <h2 id="notificacoes" className="text-xl font-semibold text-text-primary">{t("duelFlow.notifications")}</h2>
      <div className="overflow-x-auto rounded-lg border border-border-default">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default bg-surface-hover text-left">
              <th className="px-4 py-2.5 font-medium text-text-primary select-none">{t("duelFlow.event")}</th>
              <th className="px-4 py-2.5 font-medium text-text-primary select-none">{t("duelFlow.whoReceives")}</th>
            </tr>
          </thead>
          <tbody>
            {events.map((row) => (
              <tr key={row.event} className="border-b border-border-subtle last:border-0">
                <td className="px-4 py-2 text-text-secondary">{row.event}</td>
                <td className="px-4 py-2 text-text-muted">{row.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <span dangerouslySetInnerHTML={{ __html: t("duelFlow.notifCallout") }} />
      </Callout>
    </div>
  )
}
