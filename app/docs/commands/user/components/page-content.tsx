"use client"

import { useTranslation } from "react-i18next"
import { CommandCard, Callout } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()
  const duelParams = t("userCommands.duelParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const rankParams = t("userCommands.rankParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const profileParams = t("userCommands.profileParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const historyParams = t("userCommands.historyParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const h2hParams = t("userCommands.h2hParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const pendingParams = t("userCommands.pendingParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const settingsParams = t("userCommands.settingsParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]

  return (
    <div className="space-y-6">
      <h1 id="comandos-de-usuario" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("userCommands.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed">
        {t("userCommands.description")}
      </p>

      <div className="chakra-line" />

      <h2 id="duelo" className="text-xl font-semibold text-text-primary">{t("userCommands.duel")}</h2>

      <CommandCard
        name="/duel"
        description={t("userCommands.duelDesc")}
        usage="/duel @oponente formato @testemunha"
        parameters={duelParams}
        examples={["/duel @NinjaPlayer MD1 @Testemunha"]}
      />

      <h2 id="ranking" className="text-xl font-semibold text-text-primary">{t("userCommands.rankingStats")}</h2>

      <CommandCard
        name="/rank"
        description={t("userCommands.rankDesc")}
        usage="/rank [page]"
        parameters={rankParams}
      />

      <CommandCard
        name="/mvp"
        description={t("userCommands.mvpDesc")}
        usage="/mvp"
      />

      <CommandCard
        name="/profile"
        description={t("userCommands.profileDesc")}
        usage="/profile [@jogador]"
        parameters={profileParams}
      />

      <CommandCard
        name="/history"
        description={t("userCommands.historyDesc")}
        usage="/history [@jogador] [vs] [from] [to] [page]"
        parameters={historyParams}
      />

      <CommandCard
        name="/h2h"
        description={t("userCommands.h2hDesc")}
        usage="/h2h @player_a @player_b"
        parameters={h2hParams}
      />

      <CommandCard
        name="/activity"
        description={t("userCommands.activityDesc")}
        usage="/activity"
      />

      <CommandCard
        name="/records"
        description={t("userCommands.recordsDesc")}
        usage="/records"
      />

      <CommandCard
        name="/season"
        description={t("userCommands.seasonDesc")}
        usage="/season"
      />

      <CommandCard
        name="/pending"
        description={t("userCommands.pendingDesc")}
        usage="/pending [limit]"
        parameters={pendingParams}
      />

      <h2 id="configuracoes" className="text-xl font-semibold text-text-primary">{t("userCommands.settings")}</h2>

      <CommandCard
        name="/settings"
        description={t("userCommands.settingsDesc")}
        usage="/settings notifications on|off"
        parameters={settingsParams}
      />

      <Callout type="tip">
        <span dangerouslySetInnerHTML={{ __html: t("userCommands.callout") }} />
      </Callout>
    </div>
  )
}
