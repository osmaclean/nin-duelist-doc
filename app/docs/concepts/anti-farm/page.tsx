"use client"

import { Callout } from "@/components/doc-components"

export default function AntiFarmPage() {
  return (
    <div className="space-y-6">
      <h1 id="anti-farm" className="text-3xl font-bold tracking-tight text-text-primary">
        Anti-farm
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Para evitar abuso de pontuação, existe uma regra simples: o mesmo par de
        jogadores só pode ter 1 duelo confirmado por dia (UTC).
      </p>

      <div className="chakra-line" />

      <h2 id="regra" className="text-xl font-semibold text-text-primary">Regra</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        Se Jogador A e Jogador B já tiveram um duelo confirmado hoje, qualquer novo
        desafio entre eles (em qualquer direção) será bloqueado. O cooldown reseta
        à meia-noite UTC.
      </p>

      <h2 id="cooldowns" className="text-xl font-semibold text-text-primary">Cooldowns adicionais</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>
          <strong className="text-text-primary">Cooldown de criação</strong> — 30 segundos entre
          criações de duelo por usuário.
        </li>
        <li>
          <strong className="text-text-primary">Debounce de botões</strong> — 5 segundos de cooldown
          em botões de ação para evitar cliques duplos.
        </li>
        <li>
          <strong className="text-text-primary">Cooldown de notificação</strong> — 5 minutos por
          usuário por tipo de evento para anti-spam.
        </li>
      </ul>

      <h2 id="validacoes" className="text-xl font-semibold text-text-primary">Validações no /duel</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>Deve existir uma season ativa</li>
        <li>Não pode duelar contra si mesmo</li>
        <li>Oponente e testemunha não podem ser bots</li>
        <li>Testemunha não pode ser um dos duelistas</li>
        <li>Nenhum dos duelistas pode ter outro duelo ativo</li>
        <li>O mesmo par não pode ter mais de 1 duelo confirmado no dia</li>
      </ul>

      <h2 id="implementacao" className="text-xl font-semibold text-text-primary">Implementação</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        O cooldown é implementado com um Map in-memory key-based. Aceita perda no
        restart (o cooldown é reiniciado). O anti-farm por dia é verificado no banco
        de dados, garantindo persistência mesmo após reinicializações.
      </p>

      <Callout type="info">
        Os parâmetros de cooldown são configuráveis em <code className="text-chakra">src/config.ts</code>.
        Veja a página de{" "}
        <a href="/docs/configuration" className="text-chakra hover:underline">Configuração</a>{" "}
        para detalhes.
      </Callout>
    </div>
  )
}
