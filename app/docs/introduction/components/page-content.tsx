"use client"

import { useTranslation } from "react-i18next"
import { Callout } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()

  const calloutHtml = t("introduction.calloutDesc")
    .replace(/<commandsLink>/, '<a href="/docs/commands/user" class="text-chakra hover:underline">')
    .replace(/<\/commandsLink>/, "</a>")

  return (
    <div className="space-y-6">
      <div>
        <h1 id="o-que-e" className="text-3xl font-bold tracking-tight text-text-primary">
          {t("introduction.title")}
        </h1>
        <p
          className="mt-3 text-lg text-text-secondary leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t("introduction.description") }}
        />
      </div>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">
        {t("introduction.howItWorks")}
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("introduction.howItWorksDesc")}
      </p>

      <h2 id="features-principais" className="text-xl font-semibold text-text-primary">
        {t("introduction.mainFeatures")}
      </h2>
      <ul className="space-y-2 text-sm text-text-secondary">
        {([1, 2, 3, 4, 5, 6] as const).map((n) => (
          <li key={n} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chakra" />
            <span>
              <strong className="text-text-primary">{t(`introduction.feat${n}Title`)}</strong> — {t(`introduction.feat${n}Desc`)}
            </span>
          </li>
        ))}
      </ul>

      <h2 id="registro-de-jogadores" className="text-xl font-semibold text-text-primary">
        {t("introduction.playerRegistration")}
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("introduction.playerRegistrationDesc")}
      </p>
      <h2 id="acesso" className="text-xl font-semibold text-text-primary">
        {t("introduction.access")}
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        {t("introduction.accessDesc")}{" "}
        <a
          href="mailto:contatolucasmaclean@gmail.com"
          className="text-chakra hover:underline"
        >
          contatolucasmaclean@gmail.com
        </a>
        .
      </p>
      <Callout type="tip" title={t("introduction.calloutTitle")}>
        <span dangerouslySetInnerHTML={{ __html: calloutHtml }} />
      </Callout>
    </div>
  )
}
