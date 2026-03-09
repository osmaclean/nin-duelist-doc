"use client"

import { CodeBlock, Callout } from "@/components/doc-components"

export default function EnvPage() {
  const vars = [
    { name: "DISCORD_TOKEN", desc: "Token do bot Discord", required: true },
    { name: "DISCORD_CLIENT_ID", desc: "Application ID do bot", required: true },
    { name: "DISCORD_GUILD_ID", desc: "Restringe commands a uma guild (dev)", required: false },
    { name: "DATABASE_URL", desc: "Connection string PostgreSQL", required: true },
    { name: "ADMIN_ROLE_IDS", desc: "IDs de cargos admin separados por vírgula", required: false },
  ]

  return (
    <div className="space-y-6">
      <h1 id="variaveis-de-ambiente" className="text-3xl font-bold tracking-tight text-text-primary">
        Variáveis de Ambiente
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Configurações necessárias via arquivo <code className="text-chakra">.env</code>.
        O bot valida todas as variáveis obrigatórias no startup.
      </p>

      <div className="chakra-line" />

      <h2 id="tabela" className="text-xl font-semibold text-text-primary">Referência</h2>

      <div className="overflow-x-auto rounded-lg border border-border-default">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default bg-surface-hover text-left">
              <th className="px-4 py-2.5 font-medium text-text-primary">Variável</th>
              <th className="px-4 py-2.5 font-medium text-text-primary">Descrição</th>
              <th className="px-4 py-2.5 font-medium text-text-primary">Obrigatória</th>
            </tr>
          </thead>
          <tbody>
            {vars.map((v) => (
              <tr key={v.name} className="border-b border-border-subtle last:border-0">
                <td className="px-4 py-2 font-mono text-xs text-chakra">{v.name}</td>
                <td className="px-4 py-2 text-text-secondary">{v.desc}</td>
                <td className="px-4 py-2 text-text-muted">{v.required ? "Sim" : "Não"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="exemplo" className="text-xl font-semibold text-text-primary">Exemplo</h2>
      <CodeBlock filename=".env">
        {`DISCORD_TOKEN=seu_token_aqui\nDISCORD_CLIENT_ID=123456789\nDISCORD_GUILD_ID=987654321\nDATABASE_URL=postgresql://user:pass@localhost:5432/ninduelist\nADMIN_ROLE_IDS=111111111,222222222`}
      </CodeBlock>

      <Callout type="warn">
        Nunca compartilhe seu <code className="text-chakra">DISCORD_TOKEN</code>. Mantenha o arquivo
        .env fora do controle de versão.
      </Callout>
    </div>
  )
}
