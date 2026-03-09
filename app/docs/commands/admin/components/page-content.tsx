"use client"

import { CommandCard, Callout } from "@/components/doc-components"

export function PageContent() {
  return (
    <div className="space-y-6">
      <h1 id="comandos-admin" className="text-3xl font-bold tracking-tight text-text-primary">
        Comandos Admin
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Comandos restritos a usuários com cargos listados em{" "}
        <code className="text-chakra">ADMIN_ROLE_IDS</code>. Todas as ações são
        registradas no audit log persistente.
      </p>

      <div className="chakra-line" />

      <Callout type="warn">
        Estes comandos requerem um dos cargos admin configurados em <code className="text-chakra">ADMIN_ROLE_IDS</code>.
        O embed original do duelo é atualizado automaticamente quando possível.
      </Callout>

      <h2 id="duelos" className="text-xl font-semibold text-text-primary">Duelos</h2>

      <CommandCard
        name="/admin cancel"
        description="Cancela um duelo forçadamente. Duelo não pode estar em estado terminal (CONFIRMED, CANCELLED, EXPIRED)."
        usage="/admin cancel duel_id reason"
        parameters={[
          { name: "duel_id", type: "Inteiro", required: true, description: "ID do duelo a cancelar" },
          { name: "reason", type: "Texto", required: true, description: "Motivo do cancelamento" },
        ]}
        admin
      />

      <CommandCard
        name="/admin reopen"
        description="Reabre um duelo em estado terminal para IN_PROGRESS. Se o duelo estava CONFIRMED, reverte os pontos/wins/losses dos jogadores."
        usage="/admin reopen duel_id reason"
        parameters={[
          { name: "duel_id", type: "Inteiro", required: true, description: "ID do duelo a reabrir" },
          { name: "reason", type: "Texto", required: true, description: "Motivo da reabertura" },
        ]}
        admin
      />

      <CommandCard
        name="/admin force-expire"
        description="Força a expiração de um duelo não-terminal."
        usage="/admin force-expire duel_id reason"
        parameters={[
          { name: "duel_id", type: "Inteiro", required: true, description: "ID do duelo a expirar" },
          { name: "reason", type: "Texto", required: true, description: "Motivo da expiração forçada" },
        ]}
        admin
      />

      <CommandCard
        name="/admin fix-result"
        description="Corrige o resultado de um duelo já confirmado. Reverte os pontos do resultado antigo e aplica os novos em transação atômica."
        usage="/admin fix-result duel_id winner score reason"
        parameters={[
          { name: "duel_id", type: "Inteiro", required: true, description: "ID do duelo a corrigir" },
          { name: "winner", type: "Usuário", required: true, description: "Novo vencedor (deve ser participante)" },
          { name: "score", type: "Texto", required: true, description: "Novo placar no formato W-L (ex: 2-1)" },
          { name: "reason", type: "Texto", required: true, description: "Motivo da correção" },
        ]}
        admin
      />

      <CommandCard
        name="/admin logs"
        description="Exibe o histórico de ações admin em um duelo (data, ação, transição de status, admin e motivo)."
        usage="/admin logs duel_id"
        parameters={[
          { name: "duel_id", type: "Inteiro", required: true, description: "ID do duelo" },
        ]}
        admin
      />

      <h2 id="season-admin" className="text-xl font-semibold text-text-primary">Season</h2>

      <CommandCard
        name="/admin season status"
        description="Exibe informações da season ativa: número, nome, datas, dias restantes, total de duelos e jogadores ativos."
        usage="/admin season status"
        admin
      />

      <CommandCard
        name="/admin season end"
        description="Encerra a season ativa manualmente. Cancela duelos não-finalizados, calcula pódio, define campeão e envia embed público."
        usage="/admin season end"
        admin
      />

      <CommandCard
        name="/admin season create"
        description="Cria uma nova season. Não pode haver outra season ativa."
        usage="/admin season create [name] [duration]"
        parameters={[
          { name: "name", type: "Texto", required: false, description: "Nome da season" },
          { name: "duration", type: "Inteiro", required: false, description: "Duração em dias (padrão: 30, máx: 365)" },
        ]}
        admin
      />

      <CommandCard
        name="/admin season repair"
        description="Recalcula os stats da season a partir dos duelos confirmados (uso de recuperação)."
        usage="/admin season repair season_id"
        parameters={[
          { name: "season_id", type: "Inteiro", required: true, description: "ID da season a reparar" },
        ]}
        admin
      />

      <h2 id="busca" className="text-xl font-semibold text-text-primary">Busca</h2>

      <CommandCard
        name="/admin search player"
        description="Busca os últimos 15 duelos de um jogador (como desafiante, oponente ou testemunha)."
        usage="/admin search player @player"
        parameters={[
          { name: "player", type: "Usuário", required: true, description: "Jogador para buscar" },
        ]}
        admin
      />

      <CommandCard
        name="/admin search status"
        description="Busca os últimos 15 duelos em um status específico."
        usage="/admin search status STATUS"
        parameters={[
          { name: "status", type: "Escolha", required: true, description: "PROPOSED, ACCEPTED, IN_PROGRESS, AWAITING_VALIDATION, CONFIRMED, CANCELLED, EXPIRED" },
        ]}
        admin
      />
    </div>
  )
}
