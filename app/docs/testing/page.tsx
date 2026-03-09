"use client"

import { CodeBlock, Callout, Steps } from "@/components/doc-components"

export default function TestingPage() {
  return (
    <div className="space-y-6">
      <h1 id="testes-e-ci-cd" className="text-3xl font-bold tracking-tight text-text-primary">
        Testes e CI/CD
      </h1>
      <p className="text-text-secondary leading-relaxed">
        50 arquivos de teste, 339 testes. Co-localizados com o código fonte
        (<code className="text-chakra">*.test.ts</code>), usando mocks do Vitest.
        Nenhuma dependência de banco real nos testes.
      </p>

      <div className="chakra-line" />

      <h2 id="stack-de-testes" className="text-xl font-semibold text-text-primary">
        Stack de Testes
      </h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-chakra" />
          <strong className="text-text-primary">Vitest</strong> — Runner de testes unitários
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-info" />
          <strong className="text-text-primary">Mocks do Vitest</strong> — Mocks de interações do Discord e Prisma
        </li>
      </ul>

      <h2 id="executando-testes" className="text-xl font-semibold text-text-primary">
        Executando Testes
      </h2>
      <CodeBlock language="bash" filename="Terminal">
        {`# Rodar todos os testes\nnpm test\n\n# Modo watch\nnpm run test:watch`}
      </CodeBlock>

      <h2 id="lint-e-formatacao" className="text-xl font-semibold text-text-primary">
        Lint e Formatação
      </h2>
      <CodeBlock language="bash" filename="Terminal">
        {`# Lint (ESLint com typescript-eslint)\nnpm run lint\nnpm run lint:fix\n\n# Formatação (Prettier)\nnpm run format\nnpm run format:check`}
      </CodeBlock>

      <h2 id="ci-cd-pipeline" className="text-xl font-semibold text-text-primary">
        CI/CD Pipeline
      </h2>
      <Steps
        steps={[
          {
            title: "Lint",
            content: (
              <p className="text-sm text-text-muted">
                ESLint com typescript-eslint verifica erros de estilo.
              </p>
            ),
          },
          {
            title: "Type Check",
            content: (
              <p className="text-sm text-text-muted">
                <code className="text-chakra">tsc --noEmit</code> verifica erros de tipagem.
              </p>
            ),
          },
          {
            title: "Testes",
            content: (
              <p className="text-sm text-text-muted">
                Vitest roda todos os 339 testes com mocks, sem dependência de banco real.
              </p>
            ),
          },
          {
            title: "Deploy",
            content: (
              <p className="text-sm text-text-muted">
                Railway faz deploy automático após merge na <code className="text-chakra">main</code>.
              </p>
            ),
          },
        ]}
      />

      <h2 id="branch-protection" className="text-xl font-semibold text-text-primary">
        Branch Protection
      </h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>PRs obrigatórios para a <code className="text-chakra">main</code></li>
        <li>CI deve passar antes do merge</li>
        <li>Squash merge only</li>
        <li>Force push bloqueado</li>
      </ul>

      <h2 id="github-actions" className="text-xl font-semibold text-text-primary">
        GitHub Actions
      </h2>
      <CodeBlock language="yaml" filename=".github/workflows/ci.yml">
        {`name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm test`}
      </CodeBlock>

      <Callout type="tip">
        Os testes são co-localizados com o código fonte (<code className="text-chakra">*.test.ts</code>),
        não em uma pasta separada. Isso facilita encontrar e manter os testes atualizados.
      </Callout>
    </div>
  )
}
