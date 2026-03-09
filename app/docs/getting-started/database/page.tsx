"use client"

import { CodeBlock, Callout } from "@/components/doc-components"

export default function DatabasePage() {
  return (
    <div className="space-y-6">
      <h1 id="banco-de-dados" className="text-3xl font-bold tracking-tight text-text-primary">
        Banco de Dados
      </h1>
      <p className="text-text-secondary leading-relaxed">
        O NinDuelist usa Prisma como ORM com PostgreSQL (hospedado no Supabase).
      </p>

      <div className="chakra-line" />

      <h2 id="setup" className="text-xl font-semibold text-text-primary">Setup</h2>
      <CodeBlock language="bash">
        {`# Gerar o client Prisma\nnpm run generate\n\n# Aplicar migrations (dev local)\nnpm run migrate`}
      </CodeBlock>

      <Callout type="info">
        Para Supabase com PgBouncer, rode o SQL de <code className="text-chakra">prisma/migration.sql</code>{" "}
        diretamente no SQL Editor do Supabase.
      </Callout>

      <h2 id="tabelas-principais" className="text-xl font-semibold text-text-primary">Tabelas principais</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        O schema do Prisma define as seguintes entidades:
      </p>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li><strong className="text-text-primary">Player</strong> — Dados do jogador (discordId, username)</li>
        <li><strong className="text-text-primary">PlayerSeason</strong> — Stats por season (pontos, vitórias, derrotas, streak, peakStreak)</li>
        <li><strong className="text-text-primary">Duel</strong> — Registro do duelo (challengerId, opponentId, witnessId, status, formato, resultado)</li>
        <li><strong className="text-text-primary">Season</strong> — Temporadas (nome, datas, campeão, pódio)</li>
        <li><strong className="text-text-primary">AdminActionLog</strong> — Audit log de ações admin</li>
        <li><strong className="text-text-primary">PlayerSettings</strong> — Preferências do jogador (notificações)</li>
      </ul>

      <h2 id="pontuacao" className="text-xl font-semibold text-text-primary">Pontuação</h2>
      <div className="overflow-x-auto rounded-lg border border-border-default">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default bg-surface-hover text-left">
              <th className="px-4 py-2.5 font-medium text-text-primary" />
              <th className="px-4 py-2.5 font-medium text-text-primary">Vencedor</th>
              <th className="px-4 py-2.5 font-medium text-text-primary">Perdedor</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border-subtle">
              <td className="px-4 py-2 font-medium text-text-primary">Pontos</td>
              <td className="px-4 py-2 text-chakra">+1</td>
              <td className="px-4 py-2 text-danger">-1</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="px-4 py-2 font-medium text-text-primary">Vitórias/Derrotas</td>
              <td className="px-4 py-2 text-text-secondary">+1 vitória</td>
              <td className="px-4 py-2 text-text-secondary">+1 derrota</td>
            </tr>
            <tr className="border-b border-border-subtle">
              <td className="px-4 py-2 font-medium text-text-primary">Streak</td>
              <td className="px-4 py-2 text-text-secondary">+1 (acumula)</td>
              <td className="px-4 py-2 text-text-secondary">Reset para 0</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-text-primary">Peak Streak</td>
              <td className="px-4 py-2 text-text-secondary">MAX(atual, streak)</td>
              <td className="px-4 py-2 text-text-secondary">Mantém</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="transacoes" className="text-xl font-semibold text-text-primary">Transações atômicas</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        A confirmação de resultado (<code className="text-chakra">confirmAndApplyResult</code>)
        encapsula a transição de status e a atualização de pontos dentro de{" "}
        <code className="text-chakra">{"prisma.$transaction()"}</code>, garantindo consistência
        entre o estado do duelo e as stats dos jogadores.
      </p>

      <Callout type="warn">
        Todas as transições de estado usam <code className="text-chakra">updateMany</code> com
        filtro de status (optimistic locking). Se o status já mudou (race condition), retorna
        null e mostra erro amigável.
      </Callout>
    </div>
  )
}
