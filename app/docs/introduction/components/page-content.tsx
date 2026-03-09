"use client"

import { Callout, InlineBadge } from "@/components/doc-components"

export function PageContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 id="o-que-e" className="text-3xl font-bold tracking-tight text-text-primary">
          O que é o NinDuelist
        </h1>
        <p className="mt-3 text-lg text-text-secondary leading-relaxed">
          NinDuelist é um bot Discord para gerenciar duelos ranqueados no jogo{" "}
          <strong>Nin Online</strong>. Ele organiza desafios entre jogadores com
          testemunha obrigatória, seasons automáticas, ranking e anti-farm.
        </p>
      </div>

      <div className="chakra-line" />

      <h2 id="como-funciona" className="text-xl font-semibold text-text-primary">
        Como funciona
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        Jogadores usam slash commands no Discord para desafiar oponentes. Cada duelo
        exige uma testemunha obrigatória que valida o resultado. A pontuação é simples:
        +1 ponto por vitória, -1 por derrota. Tudo acontece dentro de um único embed
        que é atualizado in-place no Discord conforme o duelo avança.
      </p>

      <h2 id="features-principais" className="text-xl font-semibold text-text-primary">
        Features principais
      </h2>
      <ul className="space-y-2 text-sm text-text-secondary">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chakra" />
          <span>
            <strong className="text-text-primary">Seasons automáticas</strong> — Temporadas de 30 dias
            com criação e fechamento automáticos. O jogador com mais pontos vira campeão.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chakra" />
          <span>
            <strong className="text-text-primary">Duelos ranqueados</strong> — Desafios 1v1 no
            formato MD1 ou MD3 com máquina de estados completa.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chakra" />
          <span>
            <strong className="text-text-primary">Testemunha obrigatória</strong> — Terceiro jogador
            definido na criação do duelo confirma o resultado.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chakra" />
          <span>
            <strong className="text-text-primary">Anti-farm</strong> — O mesmo par de jogadores
            só pode ter 1 duelo confirmado por dia (UTC).
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chakra" />
          <span>
            <strong className="text-text-primary">Ranking por season</strong> — Placar com pontos,
            vitórias, derrotas, win rate, streak e paginação.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chakra" />
          <span>
            <strong className="text-text-primary">Painel Admin</strong> — Comandos administrativos
            para gerenciar seasons, cancelar/reabrir duelos, corrigir resultados e consultar logs.
          </span>
        </li>
      </ul>

      <h2 id="registro-de-jogadores" className="text-xl font-semibold text-text-primary">
        Registro de jogadores
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        Não existe comando de registro. Jogadores são cadastrados automaticamente na
        primeira vez que participam de um duelo (como desafiante, oponente ou testemunha).
        O username do Discord é mantido atualizado a cada interação.
      </p>
      <h2 id="acesso" className="text-xl font-semibold text-text-primary">
        Acesso
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">
        O bot é de uso privado. Para solicitar acesso ao NinDuelist no seu servidor,
        entre em contato por e-mail em{" "}
        <a
          href="mailto:contatolucasmaclean@gmail.com"
          className="text-chakra hover:underline"
        >
          contatolucasmaclean@gmail.com
        </a>
        .
      </p>
      <Callout type="tip" title="Comece agora">
        Veja a seção de <a href="/docs/commands/user" className="text-chakra hover:underline">Comandos</a> para
        configurar o bot no seu servidor.
      </Callout>
    </div>
  )
}



