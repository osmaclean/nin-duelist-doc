"use client"

import { Callout, CodeBlock } from "@/components/doc-components"

const configEntries = [
  {
    key: "SEASON_DURATION_DAYS",
    default: "30",
    desc: "Duração de uma season em dias.",
  },
  {
    key: "DUEL_EXPIRY_MS",
    default: "30 min",
    desc: "Tempo para aceitar antes de expirar.",
  },
  {
    key: "EXPIRY_WARNING_MS",
    default: "10 min",
    desc: "Tempo antes da expiração para enviar aviso.",
  },
  {
    key: "EXPIRE_CHECK_INTERVAL_MS",
    default: "1 min",
    desc: "Intervalo do job de expiração.",
  },
  {
    key: "SEASON_CHECK_INTERVAL_MS",
    default: "5 min",
    desc: "Intervalo do job de verificação de season.",
  },
  {
    key: "RANK_PAGE_SIZE",
    default: "20",
    desc: "Jogadores por página no ranking.",
  },
  {
    key: "DUEL_COOLDOWN_MS",
    default: "30 seg",
    desc: "Cooldown entre criações de duelo por usuário.",
  },
  {
    key: "BUTTON_COOLDOWN_MS",
    default: "5 seg",
    desc: "Debounce em botões de ação.",
  },
  {
    key: "NOTIFICATION_COOLDOWN_MS",
    default: "5 min",
    desc: "Cooldown de notificação por usuário por evento.",
  },
  {
    key: "SEASON_ENDING_WARNING_MS",
    default: "24h",
    desc: "Tempo antes do fim da season para enviar aviso.",
  },
  {
    key: "POINTS_WIN",
    default: "+1",
    desc: "Pontos por vitória.",
  },
  {
    key: "POINTS_LOSS",
    default: "-1",
    desc: "Pontos por derrota.",
  },
]

export default function ConfigurationPage() {
  return (
    <div className="space-y-6">
      <h1 id="configuracao" className="text-3xl font-bold tracking-tight text-text-primary">
        Configuração
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Constantes configuráveis em <code className="text-chakra">src/config.ts</code>.
        Todas são definidas como constantes no código, não via banco de dados.
      </p>

      <div className="chakra-line" />

      <h2 id="tabela-de-configuracao" className="text-xl font-semibold text-text-primary">
        Tabela de Configuração
      </h2>

      <div className="my-4 overflow-x-auto rounded-lg border border-border-default">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default bg-surface-hover">
              <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted">
                Constante
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted">
                Valor
              </th>
              <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted">
                Descrição
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {configEntries.map((entry) => (
              <tr key={entry.key} className="transition-colors hover:bg-surface-hover">
                <td className="px-4 py-2 font-mono text-xs text-chakra">
                  {entry.key}
                </td>
                <td className="px-4 py-2 font-mono text-xs text-text-secondary">
                  {entry.default}
                </td>
                <td className="px-4 py-2 text-xs text-text-secondary">
                  {entry.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="variaveis-de-ambiente" className="text-xl font-semibold text-text-primary">
        Variáveis de Ambiente
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        Além das constantes, o bot usa variáveis de ambiente para configuração de runtime:
      </p>
      <CodeBlock language="text" filename=".env">
        {`DISCORD_TOKEN=        # Token do bot Discord (obrigatória)\nDISCORD_CLIENT_ID=    # Application ID do bot (obrigatória)\nDISCORD_GUILD_ID=     # Restringe commands a uma guild (dev)\nDATABASE_URL=         # Connection string PostgreSQL (obrigatória)\nADMIN_ROLE_IDS=       # IDs de cargos admin separados por vírgula`}
      </CodeBlock>

      <Callout type="info">
        O bot valida todas as variáveis obrigatórias no startup e falha com mensagem
        clara se alguma estiver faltando.
      </Callout>
    </div>
  )
}
