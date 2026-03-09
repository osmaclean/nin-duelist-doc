"use client"

import { useTranslation } from "react-i18next"
import { Callout } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()
  const validationItems = t("antiFarm.validationItems", { returnObjects: true }) as string[]

  const calloutHtml = t("antiFarm.callout")
    .replace(/<configLink>/, '<a href="/docs/configuration" class="text-chakra hover:underline">')
    .replace(/<\/configLink>/, "</a>")

  return (
    <div className="space-y-6">
      <h1 id="anti-farm" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("antiFarm.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("antiFarm.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="regra" className="text-xl font-semibold text-text-primary">{t("antiFarm.rule")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("antiFarm.ruleDesc")}
      </p>

      <h2 id="cooldowns" className="text-xl font-semibold text-text-primary">{t("antiFarm.cooldowns")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>
          <strong className="text-text-primary">{t("antiFarm.creationCooldownTitle")}</strong> — {t("antiFarm.creationCooldownDesc")}
        </li>
        <li>
          <strong className="text-text-primary">{t("antiFarm.buttonDebounceTitle")}</strong> — {t("antiFarm.buttonDebounceDesc")}
        </li>
        <li>
          <strong className="text-text-primary">{t("antiFarm.notifCooldownTitle")}</strong> — {t("antiFarm.notifCooldownDesc")}
        </li>
      </ul>

      <h2 id="validacoes" className="text-xl font-semibold text-text-primary">{t("antiFarm.validations")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {validationItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 id="implementacao" className="text-xl font-semibold text-text-primary">{t("antiFarm.implementation")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("antiFarm.implementationDesc")}
      </p>

      <Callout type="info">
        <span dangerouslySetInnerHTML={{ __html: calloutHtml }} />
      </Callout>
    </div>
  )
}
