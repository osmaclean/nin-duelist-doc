"use client"

import { useTranslation } from "react-i18next"
import { Callout } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()
  const coreItems = t("features.coreItems", { returnObjects: true }) as { title: string; desc: string }[]
  const queryItems = t("features.queryItems", { returnObjects: true }) as { title: string; desc: string }[]
  const adminItems = t("features.adminItems", { returnObjects: true }) as string[]
  const notificationItems = t("features.notificationItems", { returnObjects: true }) as string[]

  return (
    <div className="space-y-6">
      <h1 id="features" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("features.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("features.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="core" className="text-xl font-semibold text-text-primary">{t("features.core")}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {coreItems.map((f) => (
          <div key={f.title} className="rounded-lg border border-border-default bg-surface p-4">
            <h3 className="text-sm font-medium text-text-primary">{f.title}</h3>
            <p className="mt-1 text-xs text-text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="consulta" className="text-xl font-semibold text-text-primary">{t("features.queryStats")}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {queryItems.map((f) => (
          <div key={f.title} className="rounded-lg border border-border-default bg-surface p-4">
            <h3 className="text-sm font-medium text-text-primary">{f.title}</h3>
            <p className="mt-1 text-xs text-text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="admin" className="text-xl font-semibold text-text-primary">{t("features.admin")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {adminItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 id="notificacoes" className="text-xl font-semibold text-text-primary">{t("features.notifications")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {notificationItems.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>

      <Callout type="info">
        <span dangerouslySetInnerHTML={{ __html: t("features.adminCallout") }} />
      </Callout>
    </div>
  )
}
