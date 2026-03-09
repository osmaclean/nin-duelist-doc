"use client"

import { Callout, StatusTimeline } from "@/components/doc-components"

export function PageContent() {
  return (
    <div className="space-y-6">
      <h1 id="duelo" className="text-3xl font-bold tracking-tight text-text-primary">
        Duelo
      </h1>
      <p className="text-text-secondary leading-relaxed">
        Um duelo é uma partida 1v1 entre dois jogadores com uma testemunha obrigatória.
        O resultado afeta os pontos de ambos os participantes (+1/-1).
      </p>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">Como funciona</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        O desafiante usa <code className="text-chakra">/duel @oponente formato @testemunha</code>.
        O oponente aceita para o duelo iniciar. Após a partida in-game, qualquer duelista
        reporta o resultado. A testemunha confirma, e o duelo é registrado oficialmente.
        Tudo acontece dentro de um único embed atualizado in-place no Discord.
      </p>

      <h2 id="formatos" className="text-xl font-semibold text-text-primary">Formatos</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li><strong className="text-text-primary">MD1 (Melhor de 1)</strong> — Resultado automático (1-0), sem necessidade de digitar placar.</li>
        <li><strong className="text-text-primary">MD3 (Melhor de 3)</strong> — Abre um modal pedindo o placar. Placares válidos: 2-0 ou 2-1.</li>
      </ul>

      <h2 id="estados" className="text-xl font-semibold text-text-primary">Estados do duelo</h2>
      <StatusTimeline
        steps={[
          { status: "PROPOSED", label: "Proposta", description: "Desafiante propõe o duelo. Oponente tem 30 minutos para aceitar." },
          { status: "ACCEPTED", label: "Aceito", description: "Oponente aceitou. Qualquer duelista pode iniciar." },
          { status: "IN_PROGRESS", label: "Em andamento", description: "A partida está acontecendo in-game. Qualquer duelista pode enviar resultado." },
          { status: "AWAITING_VALIDATION", label: "Aguardando validação", description: "Resultado enviado. Somente a testemunha pode confirmar ou rejeitar." },
          { status: "CONFIRMED", label: "Confirmado", description: "Testemunha confirmou. Pontos aplicados atomicamente." },
        ]}
      />

      <h2 id="cancelamento" className="text-xl font-semibold text-text-primary">Cancelamento</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        Qualquer participante (desafiante, oponente ou testemunha) pode cancelar o duelo
        nas fases PROPOSED, ACCEPTED ou IN_PROGRESS. Nenhuma pontuação é aplicada.
      </p>

      <h2 id="expiracao" className="text-xl font-semibold text-text-primary">Expiração</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        Se o oponente não aceitar em 30 minutos, o duelo expira automaticamente.
        Um aviso é enviado aos participantes quando faltam 10 minutos.
      </p>

      <Callout type="tip">
        Veja o fluxo completo com todas as fases na página{" "}
        <a href="/docs/duel-flow" className="text-chakra hover:underline">Fluxo de Duelo</a>.
      </Callout>
    </div>
  )
}