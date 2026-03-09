"use client"

import { Callout, InlineBadge } from "@/components/doc-components"

export default function StackPage() {
  return (
    <div className="space-y-6">
      <h1 id="stack" className="text-3xl font-bold tracking-tight text-text-primary">
        Stack
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Tecnologias utilizadas no NinDuelist.
      </p>

      <div className="chakra-line" />

      <div className="overflow-x-auto rounded-lg border border-border-default">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-default bg-surface-hover text-left">
              <th className="px-4 py-2.5 font-medium text-text-primary">Tecnologia</th>
              <th className="px-4 py-2.5 font-medium text-text-primary">Uso</th>
            </tr>
          </thead>
          <tbody>
            {[
              { tech: "Node.js 20", use: "Runtime" },
              { tech: "TypeScript", use: "Linguagem (strict mode)" },
              { tech: "Discord.js 14", use: "Integração Discord" },
              { tech: "Prisma", use: "ORM + migrations" },
              { tech: "PostgreSQL", use: "Banco de dados (Supabase)" },
              { tech: "Vitest", use: "Testes unitários" },
              { tech: "Docker", use: "Deploy (Alpine)" },
            ].map((item) => (
              <tr key={item.tech} className="border-b border-border-subtle last:border-0">
                <td className="px-4 py-2 font-medium text-text-primary">
                  <InlineBadge>{item.tech}</InlineBadge>
                </td>
                <td className="px-4 py-2 text-text-secondary">{item.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="infra" className="text-xl font-semibold text-text-primary">Infra e CI</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li><InlineBadge>GitHub Actions</InlineBadge> — CI pipeline (lint, typecheck, testes)</li>
        <li><InlineBadge>Railway</InlineBadge> — Deploy automático após merge na <code className="text-chakra">main</code></li>
        <li><InlineBadge>Docker</InlineBadge> — Containerização com Alpine para deploy</li>
      </ul>

      <Callout type="info">
        Verifique os requisitos mínimos na página de <a href="/docs/getting-started/setup" className="text-chakra hover:underline">Setup</a>.
      </Callout>
    </div>
  )
}
