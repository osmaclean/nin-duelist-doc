"use client"

import { CodeBlock, Steps, Callout } from "@/components/doc-components"

export default function SetupPage() {
  return (
    <div className="space-y-6">
      <h1 id="setup" className="text-3xl font-bold tracking-tight text-text-primary">
        Setup
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Como configurar o NinDuelist para desenvolvimento local.
      </p>

      <div className="chakra-line" />

      <h2 id="pre-requisitos" className="text-xl font-semibold text-text-primary">
        Pré-requisitos
      </h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>Node.js 20 ou superior</li>
        <li>PostgreSQL (recomendado: Supabase)</li>
        <li>Uma aplicação Discord criada no Developer Portal</li>
        <li>Git instalado</li>
      </ul>

      <h2 id="instalacao" className="text-xl font-semibold text-text-primary">
        Instalação
      </h2>
      <Steps
        steps={[
          {
            title: "Clonar e instalar",
            content: (
              <CodeBlock language="bash">
                {`git clone <repo-url>\ncd NinDuelist\nnpm install`}
              </CodeBlock>
            ),
          },
          {
            title: "Configurar variáveis de ambiente",
            content: (
              <>
                <p className="text-sm text-text-secondary">
                  Copie o arquivo de exemplo e preencha as variáveis:
                </p>
                <CodeBlock language="bash">
                  {`cp .env.example .env`}
                </CodeBlock>
                <p className="mt-2 text-sm text-text-secondary">
                  Veja a página de{" "}
                  <a href="/docs/getting-started/env" className="text-chakra hover:underline">
                    Variáveis de Ambiente
                  </a>{" "}
                  para detalhes de cada variável.
                </p>
              </>
            ),
          },
          {
            title: "Configurar banco de dados",
            content: (
              <>
                <CodeBlock language="bash">
                  {`# Gerar o client Prisma\nnpm run generate\n\n# Aplicar migrations (dev local)\nnpm run migrate`}
                </CodeBlock>
                <p className="mt-2 text-sm text-text-muted">
                  Para Supabase com PgBouncer, rode o SQL de{" "}
                  <code className="text-chakra">prisma/migration.sql</code> diretamente no SQL Editor.
                </p>
              </>
            ),
          },
          {
            title: "Registrar slash commands",
            content: (
              <>
                <CodeBlock language="bash">
                  {`npm run deploy-commands`}
                </CodeBlock>
                <p className="mt-2 text-sm text-text-muted">
                  Se <code className="text-chakra">DISCORD_GUILD_ID</code> estiver definido, registra
                  na guild (instantâneo). Senão, registra globalmente (pode levar até 1h para propagar).
                </p>
              </>
            ),
          },
          {
            title: "Iniciar o bot",
            content: (
              <CodeBlock language="bash">
                {`# Desenvolvimento\nnpm run dev\n\n# Produção\nnpm run build\nnpm start`}
              </CodeBlock>
            ),
          },
        ]}
      />

      <Callout type="info">
        O bot valida todas as variáveis obrigatórias no startup e falha com mensagem
        clara se alguma estiver faltando.
      </Callout>
    </div>
  )
}
