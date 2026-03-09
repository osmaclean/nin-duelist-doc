"use client"

import { CommandCard, Callout } from "@/components/doc-components"

export function PageContent() {
  return (
    <div className="space-y-6">
      <h1 id="comandos-de-usuario" className="text-3xl font-bold tracking-tight text-text-primary">
        Comandos de Usuário
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Comandos disponíveis para todos os jogadores.
      </p>

      <div className="chakra-line" />

      <h2 id="duelo" className="text-xl font-semibold text-text-primary">Duelo</h2>

      <CommandCard
        name="/duel"
        description="Desafia um jogador para um duelo ranqueado."
        usage="/duel @oponente formato @testemunha"
        parameters={[
          { name: "opponent", type: "Usuário", required: true, description: "Quem você quer desafiar" },
          { name: "format", type: "Escolha", required: true, description: "MD1 (Melhor de 1) ou MD3 (Melhor de 3)" },
          { name: "witness", type: "Usuário", required: true, description: "Testemunha obrigatória" },
        ]}
        examples={["/duel @NinjaPlayer MD1 @Testemunha"]}
      />

      <h2 id="ranking" className="text-xl font-semibold text-text-primary">Ranking e Estatísticas</h2>

      <CommandCard
        name="/rank"
        description="Exibe o ranking da season atual com 20 jogadores por página."
        usage="/rank [page]"
        parameters={[
          { name: "page", type: "Inteiro", required: false, description: "Página do ranking (padrão: 1)" },
        ]}
      />

      <CommandCard
        name="/mvp"
        description="Exibe os 3 melhores jogadores da season atual (pódio) com destaque para Peak Streak."
        usage="/mvp"
      />

      <CommandCard
        name="/profile"
        description="Exibe o perfil compacto de um jogador com posição no ranking, pontos, vitórias, derrotas, win rate, streaks e seasons jogadas."
        usage="/profile [@jogador]"
        parameters={[
          { name: "player", type: "Usuário", required: false, description: "Jogador para consultar (padrão: você)" },
        ]}
      />

      <CommandCard
        name="/history"
        description="Exibe histórico de duelos e estatísticas na season atual. Mostra os últimos 10 duelos confirmados."
        usage="/history [@jogador] [vs] [from] [to] [page]"
        parameters={[
          { name: "player", type: "Usuário", required: false, description: "Jogador para consultar (padrão: você)" },
          { name: "vs", type: "Usuário", required: false, description: "Filtrar duelos contra este oponente" },
          { name: "from", type: "Texto", required: false, description: "Data inicial no formato YYYY-MM-DD" },
          { name: "to", type: "Texto", required: false, description: "Data final no formato YYYY-MM-DD" },
          { name: "page", type: "Inteiro", required: false, description: "Página do histórico (10 duelos por página)" },
        ]}
      />

      <CommandCard
        name="/h2h"
        description="Exibe o confronto direto entre dois jogadores na season atual."
        usage="/h2h @player_a @player_b"
        parameters={[
          { name: "player_a", type: "Usuário", required: true, description: "Primeiro jogador" },
          { name: "player_b", type: "Usuário", required: true, description: "Segundo jogador" },
        ]}
      />

      <CommandCard
        name="/activity"
        description="Exibe os 10 jogadores mais ativos da season atual (por total de duelos jogados)."
        usage="/activity"
      />

      <CommandCard
        name="/records"
        description="Exibe os recordes da season atual: maior streak, melhor win rate (mínimo 5 jogos) e mais duelos."
        usage="/records"
      />

      <CommandCard
        name="/season"
        description="Exibe o status da season atual com top 3 parcial, datas e dias restantes."
        usage="/season"
      />

      <CommandCard
        name="/pending"
        description="Mostra duelos que precisam de ação sua, ordenados por urgência. Resposta ephemeral (só você vê)."
        usage="/pending [limit]"
        parameters={[
          { name: "limit", type: "Inteiro", required: false, description: "Máximo de duelos a exibir (1-50)" },
        ]}
      />

      <h2 id="configuracoes" className="text-xl font-semibold text-text-primary">Configurações</h2>

      <CommandCard
        name="/settings"
        description="Configura suas preferências de notificação. Por padrão, DMs estão ativadas."
        usage="/settings notifications on|off"
        parameters={[
          { name: "notifications", type: "Escolha", required: true, description: "Ativar DMs ou Desativar DMs" },
        ]}
      />

      <Callout type="tip">
        Todos os comandos usam slash commands do Discord. Comece digitando <code className="text-chakra">/</code> no chat.
      </Callout>
    </div>
  )
}
