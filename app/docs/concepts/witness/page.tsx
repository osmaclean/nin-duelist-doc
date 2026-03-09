"use client"

import { Callout } from "@/components/doc-components"

export default function WitnessPage() {
  return (
    <div className="space-y-6">
      <h1 id="testemunha" className="text-3xl font-bold tracking-tight text-text-primary">
        Testemunha
      </h1>
      <p className="text-text-secondary leading-relaxed">
        O sistema de testemunhas garante a integridade dos resultados. Um terceiro
        jogador, definido na criação do duelo, confirma quem venceu.
      </p>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">Como funciona</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>A testemunha é definida pelo desafiante no momento da criação do duelo via <code className="text-chakra">/duel @oponente formato @testemunha</code></li>
        <li>A testemunha não precisa aceitar o duelo — ela só participa na fase de validação do resultado</li>
        <li>Após um resultado ser enviado, o duelo entra em <code className="text-chakra">AWAITING_VALIDATION</code></li>
        <li>Somente a testemunha pode confirmar ou rejeitar o resultado</li>
        <li>Se a testemunha confirma: o duelo é finalizado atomicamente</li>
        <li>Se a testemunha rejeita: o duelo volta para <code className="text-chakra">IN_PROGRESS</code> e o resultado é apagado</li>
      </ul>

      <h2 id="regras" className="text-xl font-semibold text-text-primary">Regras</h2>
      <ul className="space-y-1.5 text-sm text-text-secondary">
        <li>A testemunha é obrigatória em todos os duelos</li>
        <li>A testemunha não pode ser um dos duelistas</li>
        <li>A testemunha não pode ser um bot</li>
        <li>A testemunha pode cancelar o duelo nas fases PROPOSED, ACCEPTED ou IN_PROGRESS</li>
      </ul>

      <h2 id="notificacoes" className="text-xl font-semibold text-text-primary">Notificações</h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        A testemunha recebe DM automática quando o duelo é criado e quando um resultado
        é enviado para validação. Se a DM falhar, o bot faz fallback com menção no canal.
      </p>

      <Callout type="info">
        A testemunha também é cadastrada automaticamente como jogador se for a primeira
        vez que ela participa de um duelo.
      </Callout>
    </div>
  )
}
