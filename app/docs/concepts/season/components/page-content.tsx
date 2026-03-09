"use client"

import { Callout } from "@/components/doc-components"

export function PageContent() {
  return (
    <div className="space-y-6">
      <h1 id="season" className="text-3xl font-bold tracking-tight text-text-primary">
        Season
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Temporada de 30 dias. Criada e fechada automaticamente. Ao fechar, o jogador
        com mais pontos vira campeão e uma nova season começa imediatamente.
      </p>

      <div className="chakra-line" />

      <h2 id="ciclo-de-vida" className="text-xl font-semibold text-text-primary">Ciclo de vida</h2>
      <ul className="space-y-2 text-sm text-text-secondary">
        <li>
          <strong className="text-text-primary">Criação</strong> — Na primeira inicialização do bot
          ou quando não existe season ativa, uma nova é criada (Season 1, 2, 3...) com duração de 30 dias.
        </li>
        <li>
          <strong className="text-text-primary">Verificação</strong> — A cada 5 minutos, o bot
          verifica se a season ativa expirou.
        </li>
        <li>
          <strong className="text-text-primary">Fechamento</strong> — Se expirou: todos os duelos
          não-finalizados são cancelados, o jogador com mais pontos é registrado como campeão, a
          season é desativada e uma nova começa imediatamente.
        </li>
      </ul>

      <h2 id="regras" className="text-xl font-semibold text-text-primary">Regras</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>Apenas uma season pode estar ativa por vez</li>
        <li>Cada jogador tem stats independentes por season (<code className="text-chakra">PlayerSeason</code>)</li>
        <li>Nova season = placar zerado para todos</li>
        <li>O histórico de todas as seasons é mantido permanentemente</li>
        <li>Rankings são independentes por season</li>
      </ul>

      <h2 id="aviso-de-encerramento" className="text-xl font-semibold text-text-primary">Aviso de encerramento</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        24 horas antes do fim da season, todos os jogadores ativos recebem uma notificação
        avisando que a temporada está encerrando.
      </p>

      <Callout type="info">
        Para gerenciar seasons manualmente, use os comandos{" "}
        <code className="text-chakra">/admin season status</code>,{" "}
        <code className="text-chakra">/admin season end</code> e{" "}
        <code className="text-chakra">/admin season create</code>. Veja{" "}
        <a href="/docs/commands/admin" className="text-chakra hover:underline">Comandos Admin</a>.
      </Callout>
    </div>
  )
}