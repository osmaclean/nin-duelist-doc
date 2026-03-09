"use client"

import { useTranslation } from "react-i18next"
import { Callout } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()

  const calloutHtml = t("season.callout")
    .replace(/<adminLink>/, '<a href="/docs/commands/admin" class="text-chakra hover:underline">')
    .replace(/<\/adminLink>/, "</a>")

  return (
    <div className="space-y-6">
      <h1 id="season" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("season.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("season.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="ciclo-de-vida" className="text-xl font-semibold text-text-primary">{t("season.lifecycle")}</h2>
      <ul className="space-y-2 text-sm text-text-secondary">
        <li>
          <strong className="text-text-primary">{t("season.creationTitle")}</strong> — {t("season.creationDesc")}
        </li>
        <li>
          <strong className="text-text-primary">{t("season.verificationTitle")}</strong> — {t("season.verificationDesc")}
        </li>
        <li>
          <strong className="text-text-primary">{t("season.closureTitle")}</strong> — {t("season.closureDesc")}
        </li>
      </ul>

      <h2 id="regras" className="text-xl font-semibold text-text-primary">{t("season.rules")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>{t("season.rule1")}</li>
        <li dangerouslySetInnerHTML={{ __html: t("season.rule2") }} />
        <li>{t("season.rule3")}</li>
        <li>{t("season.rule4")}</li>
        <li>{t("season.rule5")}</li>
      </ul>

      <h2 id="aviso-de-encerramento" className="text-xl font-semibold text-text-primary">{t("season.closureNotice")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("season.closureNoticeDesc")}
      </p>

      <Callout type="info">
        <span dangerouslySetInnerHTML={{ __html: calloutHtml }} />
      </Callout>
    </div>
  )
}
