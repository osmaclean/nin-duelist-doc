"use client"

import { CodeBlock, Callout, Steps } from "@/components/doc-components"

export default function DeployPage() {
  return (
    <div className="space-y-6">
      <h1 id="deploy" className="text-3xl font-bold tracking-tight text-text-primary">
        Deploy
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Como colocar o NinDuelist em produção.
      </p>

      <div className="chakra-line" />

      <h2 id="producao" className="text-xl font-semibold text-text-primary">Build de produção</h2>
      <Steps
        steps={[
          {
            title: "Build do projeto",
            content: <CodeBlock language="bash">{`npm run build`}</CodeBlock>,
          },
          {
            title: "Iniciar",
            content: <CodeBlock language="bash">{`npm start`}</CodeBlock>,
          },
        ]}
      />

      <h2 id="railway" className="text-xl font-semibold text-text-primary">Railway (recomendado)</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        O NinDuelist faz deploy automático via Railway após merge na{" "}
        <code className="text-chakra">main</code>. O CI do GitHub Actions (lint, typecheck, testes)
        precisa passar antes do deploy.
      </p>

      <h2 id="ci-cd" className="text-xl font-semibold text-text-primary">CI/CD</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li><strong className="text-text-primary">GitHub Actions</strong> — Roda lint, typecheck (<code className="text-chakra">tsc --noEmit</code>) e testes em todo push/PR para <code className="text-chakra">main</code></li>
        <li><strong className="text-text-primary">Branch protection</strong> — PRs obrigatórios, CI deve passar, squash merge only, force push bloqueado</li>
        <li><strong className="text-text-primary">Deploy</strong> — Railway faz deploy automático após merge na <code className="text-chakra">main</code></li>
      </ul>

      <Callout type="info">
        Para deploy com Docker, veja a página <a href="/docs/getting-started/docker" className="text-chakra hover:underline">Docker</a>.
      </Callout>
    </div>
  )
}
