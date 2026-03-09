"use client"

import { useTranslation } from "react-i18next"
import { Callout, StatusTimeline } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()

  const calloutHtml = t("duel.callout")
    .replace(/<flowLink>/, '<a href="/docs/duel-flow" class="text-chakra hover:underline">')
    .replace(/<\/flowLink>/, "</a>")

  return (
    <div className="space-y-6">
      <h1 id="duelo" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("duel.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("duel.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">{t("duel.howItWorks")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t("duel.howItWorksDesc") }} />

      <h2 id="formatos" className="text-xl font-semibold text-text-primary">{t("duel.formats")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li><strong className="text-text-primary">{t("duel.md1")}</strong> — {t("duel.md1Desc")}</li>
        <li><strong className="text-text-primary">{t("duel.md3")}</strong> — {t("duel.md3Desc")}</li>
      </ul>

      <h2 id="estados" className="text-xl font-semibold text-text-primary">{t("duel.states")}</h2>
      <StatusTimeline
        steps={[
          { status: "PROPOSED", label: t("duel.proposed"), description: t("duel.proposedDesc") },
          { status: "ACCEPTED", label: t("duel.accepted"), description: t("duel.acceptedDesc") },
          { status: "IN_PROGRESS", label: t("duel.inProgress"), description: t("duel.inProgressDesc") },
          { status: "AWAITING_VALIDATION", label: t("duel.awaitingValidation"), description: t("duel.awaitingValidationDesc") },
          { status: "CONFIRMED", label: t("duel.confirmed"), description: t("duel.confirmedDesc") },
        ]}
      />

      <h2 id="cancelamento" className="text-xl font-semibold text-text-primary">{t("duel.cancellation")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("duel.cancellationDesc")}
      </p>

      <h2 id="expiracao" className="text-xl font-semibold text-text-primary">{t("duel.expiration")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("duel.expirationDesc")}
      </p>

      <Callout type="tip">
        <span dangerouslySetInnerHTML={{ __html: calloutHtml }} />
      </Callout>
    </div>
  )
}
