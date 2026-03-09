"use client"

import { useTranslation } from "react-i18next"
import { Callout } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()
  const items = t("witness.items", { returnObjects: true }) as string[]
  const ruleItems = t("witness.ruleItems", { returnObjects: true }) as string[]

  return (
    <div className="space-y-6">
      <h1 id="testemunha" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("witness.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("witness.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">{t("witness.howItWorks")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>

      <h2 id="regras" className="text-xl font-semibold text-text-primary">{t("witness.rules")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {ruleItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 id="notificacoes" className="text-xl font-semibold text-text-primary">{t("witness.notifications")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("witness.notificationsDesc")}
      </p>

      <Callout type="info">
        {t("witness.callout")}
      </Callout>
    </div>
  )
}
