"use client"

import { useTranslation } from "react-i18next"
import { Callout, CodeBlock } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()
  const items = t("ranking.items", { returnObjects: true }) as string[]
  const relatedItems = t("ranking.relatedItems", { returnObjects: true }) as string[]

  return (
    <div className="space-y-6">
      <h1 id="ranking" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("ranking.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("ranking.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">{t("ranking.howItWorks")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>

      <h2 id="leaderboard" className="text-xl font-semibold text-text-primary">{t("ranking.leaderboard")}</h2>
      <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t("ranking.leaderboardDesc") }} />
      <CodeBlock language="text" filename={t("ranking.exampleFilename")}>
        {`🥇 @jogador1 • 15pts | 12V 3D | Streak: 4 (max 7)\n🥇 @jogador2 • 15pts | 10V 5D | Streak: 2 (max 5)\n🥉 @jogador3 • 8pts | 7V 1D | Streak: 1 (max 3)\n4. @jogador4 • 5pts | 5V 0D | Streak: 5 (max 5)`}
      </CodeBlock>

      <h2 id="comandos-relacionados" className="text-xl font-semibold text-text-primary">{t("ranking.relatedCommands")}</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        {relatedItems.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>

      <Callout type="info">
        <span dangerouslySetInnerHTML={{ __html: t("ranking.callout") }} />
      </Callout>
    </div>
  )
}
