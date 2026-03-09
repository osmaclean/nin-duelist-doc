"use client"

import { InlineBadge, Callout } from "@/components/doc-components"

export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <h1 id="features" className="text-3xl font-bold tracking-tight text-text-primary">
        Features
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Lista completa de funcionalidades do NinDuelist.
      </p>

      <div className="chakra-line" />

      <h2 id="core" className="text-xl font-semibold text-text-primary">Core</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Desafios 1v1", desc: "Duelos no formato MD1 (Melhor de 1) ou MD3 (Melhor de 3) com testemunha obrigatória." },
          { title: "Pontuação simples", desc: "+1 ponto por vitória, -1 por derrota. Streak atual e peak streak rastreados." },
          { title: "Seasons automáticas", desc: "Temporadas de 30 dias com criação e fechamento automáticos. Campeão definido pelo ranking." },
          { title: "Testemunha obrigatória", desc: "Terceiro jogador definido na criação do duelo confirma ou rejeita o resultado." },
          { title: "Anti-farm", desc: "Mesmo par de jogadores só pode ter 1 duelo confirmado por dia (UTC)." },
          { title: "Embed único in-place", desc: "Cada duelo tem um embed persistente atualizado dinamicamente com botões conforme o estado." },
        ].map((f) => (
          <div key={f.title} className="rounded-lg border border-border-default bg-surface p-4">
            <h3 className="text-sm font-medium text-text-primary">{f.title}</h3>
            <p className="mt-1 text-xs text-text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="consulta" className="text-xl font-semibold text-text-primary">Consulta e Estatísticas</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Ranking paginado", desc: "Leaderboard da season com 20 jogadores por página e navegação por botões." },
          { title: "Perfil do jogador", desc: "Posição no ranking, pontos, vitórias, derrotas, win rate, streaks e seasons jogadas." },
          { title: "Histórico", desc: "Últimos 10 duelos confirmados com resultado, placar, data e oponente." },
          { title: "Head-to-head", desc: "Confronto direto entre dois jogadores na season atual." },
          { title: "Atividade", desc: "Top 10 jogadores mais ativos por total de duelos jogados." },
          { title: "Recordes", desc: "Maior streak, melhor win rate (mínimo 5 jogos) e mais duelos na season." },
        ].map((f) => (
          <div key={f.title} className="rounded-lg border border-border-default bg-surface p-4">
            <h3 className="text-sm font-medium text-text-primary">{f.title}</h3>
            <p className="mt-1 text-xs text-text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 id="admin" className="text-xl font-semibold text-text-primary">Admin</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>Cancelar duelos forçadamente com motivo</li>
        <li>Reabrir duelos em estado terminal (reverte pontos se confirmado)</li>
        <li>Forçar expiração de duelos não-terminais</li>
        <li>Corrigir resultados de duelos confirmados com recálculo atômico de pontos</li>
        <li>Consultar logs de auditoria por duelo</li>
        <li>Gerenciar seasons (criar, encerrar, consultar status)</li>
        <li>Buscar duelos por jogador ou status</li>
      </ul>

      <h2 id="notificacoes" className="text-xl font-semibold text-text-primary">Notificações</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>DMs automáticas em todos os eventos do ciclo de vida do duelo</li>
        <li>Fallback com menção no canal se a DM falhar</li>
        <li>Anti-spam: cooldown de 5 minutos por usuário por tipo de evento</li>
        <li>Opt-out via <code className="text-chakra">/settings notifications off</code></li>
      </ul>

      <Callout type="info">
        Todas as ações admin são registradas no audit log persistente (<code className="text-chakra">AdminActionLog</code>).
        O embed original do duelo é atualizado automaticamente quando possível.
      </Callout>
    </div>
  )
}
