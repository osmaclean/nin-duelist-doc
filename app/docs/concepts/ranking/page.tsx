"use client"

import { Callout, CodeBlock } from "@/components/doc-components"

export default function RankingPage() {
  return (
    <div className="space-y-6">
      <h1 id="ranking" className="text-3xl font-bold tracking-tight text-text-primary">
        Ranking
      </h1>
      <p className="text-text-secondary leading-relaxed">
        O ranking mostra os jogadores ordenados por pontos dentro da season ativa.
        Cada season tem seu próprio ranking independente.
      </p>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">Como funciona</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>Pontuação simples: +1 por vitória, -1 por derrota</li>
        <li>Cada season tem seu próprio ranking independente via <code className="text-chakra">PlayerSeason</code></li>
        <li>Nova season = placar zerado para todos</li>
        <li>20 jogadores por página com navegação por botões</li>
      </ul>

      <h2 id="leaderboard" className="text-xl font-semibold text-text-primary">Leaderboard</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        O comando <code className="text-chakra">/rank</code> mostra o ranking da season atual
        com medalhas para o top 3:
      </p>
      <CodeBlock language="text" filename="Exemplo de ranking">
        {`🥇 @jogador1 — 15pts | 12V 3D | Streak: 4 (max 7)\n🥈 @jogador2 — 10pts | 8V 2D | Streak: 2 (max 5)\n🥉 @jogador3 — 8pts | 7V 1D | Streak: 1 (max 3)\n4. @jogador4 — 5pts | 5V 0D | Streak: 5 (max 5)`}
      </CodeBlock>

      <h2 id="comandos-relacionados" className="text-xl font-semibold text-text-primary">Comandos relacionados</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li><code className="text-chakra">/rank [page]</code> — Ranking paginado da season atual</li>
        <li><code className="text-chakra">/mvp</code> — Top 3 jogadores (pódio) com destaque para Peak Streak</li>
        <li><code className="text-chakra">/profile [@jogador]</code> — Perfil compacto com posição no ranking</li>
        <li><code className="text-chakra">/history [@jogador]</code> — Últimos 10 duelos e estatísticas</li>
        <li><code className="text-chakra">/h2h @a @b</code> — Confronto direto entre dois jogadores</li>
        <li><code className="text-chakra">/activity</code> — Top 10 jogadores mais ativos</li>
        <li><code className="text-chakra">/records</code> — Recordes da season (maior streak, melhor win rate, mais duelos)</li>
      </ul>

      <Callout type="info">
        Use <code className="text-chakra">/profile</code> para ver suas próprias estatísticas,
        incluindo posição no ranking, pontos, win rate e streaks.
      </Callout>
    </div>
  )
}
