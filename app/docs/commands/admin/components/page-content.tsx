"use client"

import { useTranslation } from "react-i18next"
import { CommandCard, Callout } from "@/components/doc-components"

export function PageContent() {
  const { t } = useTranslation()
  const cancelParams = t("adminCommands.cancelParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const reopenParams = t("adminCommands.reopenParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const forceExpireParams = t("adminCommands.forceExpireParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const fixResultParams = t("adminCommands.fixResultParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const logsParams = t("adminCommands.logsParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const seasonCreateParams = t("adminCommands.seasonCreateParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const seasonRepairParams = t("adminCommands.seasonRepairParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const searchPlayerParams = t("adminCommands.searchPlayerParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]
  const searchStatusParams = t("adminCommands.searchStatusParams", { returnObjects: true }) as { name: string; type: string; required: boolean; description: string }[]

  return (
    <div className="space-y-6">
      <h1 id="comandos-admin" className="text-3xl font-bold tracking-tight text-text-primary">
        {t("adminCommands.title")}
      </h1>
      <p className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t("adminCommands.description") }} />

      <div className="chakra-line" />

      <Callout type="warn">
        <span dangerouslySetInnerHTML={{ __html: t("adminCommands.warning") }} />
      </Callout>

      <h2 id="duelos" className="text-xl font-semibold text-text-primary">{t("adminCommands.duels")}</h2>

      <CommandCard
        name="/admin cancel"
        description={t("adminCommands.cancelDesc")}
        usage="/admin cancel duel_id reason"
        parameters={cancelParams}
        admin
      />

      <CommandCard
        name="/admin reopen"
        description={t("adminCommands.reopenDesc")}
        usage="/admin reopen duel_id reason"
        parameters={reopenParams}
        admin
      />

      <CommandCard
        name="/admin force-expire"
        description={t("adminCommands.forceExpireDesc")}
        usage="/admin force-expire duel_id reason"
        parameters={forceExpireParams}
        admin
      />

      <CommandCard
        name="/admin fix-result"
        description={t("adminCommands.fixResultDesc")}
        usage="/admin fix-result duel_id winner score reason"
        parameters={fixResultParams}
        admin
      />

      <CommandCard
        name="/admin logs"
        description={t("adminCommands.logsDesc")}
        usage="/admin logs duel_id"
        parameters={logsParams}
        admin
      />

      <h2 id="season-admin" className="text-xl font-semibold text-text-primary">{t("adminCommands.seasonSection")}</h2>

      <CommandCard
        name="/admin season status"
        description={t("adminCommands.seasonStatusDesc")}
        usage="/admin season status"
        admin
      />

      <CommandCard
        name="/admin season end"
        description={t("adminCommands.seasonEndDesc")}
        usage="/admin season end"
        admin
      />

      <CommandCard
        name="/admin season create"
        description={t("adminCommands.seasonCreateDesc")}
        usage="/admin season create [name] [duration]"
        parameters={seasonCreateParams}
        admin
      />

      <CommandCard
        name="/admin season repair"
        description={t("adminCommands.seasonRepairDesc")}
        usage="/admin season repair season_id"
        parameters={seasonRepairParams}
        admin
      />

      <h2 id="busca" className="text-xl font-semibold text-text-primary">{t("adminCommands.search")}</h2>

      <CommandCard
        name="/admin search player"
        description={t("adminCommands.searchPlayerDesc")}
        usage="/admin search player @player"
        parameters={searchPlayerParams}
        admin
      />

      <CommandCard
        name="/admin search status"
        description={t("adminCommands.searchStatusDesc")}
        usage="/admin search status STATUS"
        parameters={searchStatusParams}
        admin
      />
    </div>
  )
}
