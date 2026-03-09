"use client"

import { useTranslation } from "react-i18next"

export function PageContent() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <h1 id="contato" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("contact.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("contact.description")}{" "}
        <a
          href="mailto:contatolucasmaclean@gmail.com"
          className="text-chakra hover:underline"
        >
          contatolucasmaclean@gmail.com
        </a>
        .
      </p>
    </div>
  )
}
