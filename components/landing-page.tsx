"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import {
  IconSeason,
  IconWitness,
  IconAntiFarm,
  IconDuel,
  IconRanking,
  IconGitHub,
  IconDiscord,
  IconExternalLink,
  IconSun,
  IconMoon,
} from "@/components/icons"

const features = [
  {
    icon: IconSeason,
    title: "Seasons",
    description:
      "Temporadas de 30 dias com criação e fechamento automáticos. O jogador com mais pontos vira campeão.",
  },
  {
    icon: IconWitness,
    title: "Testemunhas",
    description:
      "Terceiro jogador obrigatório que valida o resultado. Confirmação ou rejeição com um clique.",
  },
  {
    icon: IconAntiFarm,
    title: "Anti-farm",
    description:
      "Mesmo par de jogadores só pode ter 1 duelo confirmado por dia. Cooldowns em criação e botões.",
  },
]

const quickstartCommands = [
  { cmd: "/duel @oponente MD1 @testemunha", desc: "Desafiar alguém para um duelo" },
  { cmd: "/rank", desc: "Ver o ranking da season atual" },
  { cmd: "/profile", desc: "Ver seu perfil com estatísticas" },
  { cmd: "/pending", desc: "Ver duelos que precisam da sua ação" },
]

export function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border-default bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center gap-4 px-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-chakra text-background">
              <span className="font-mono text-xs font-bold">N</span>
            </div>
            <span className="font-semibold text-sm text-text-primary">
              NinDuelist
            </span>
          </Link>
          <div className="flex-1" />
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/docs/introduction"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              Docs
            </Link>
            <a
              href="#"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              Discord
            </a>
          </nav>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <IconSun className="w-4 h-4" />
              ) : (
                <IconMoon className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
        <div className="chakra-line absolute bottom-0 left-0 right-0" />
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        {/* Seal bg */}
        <div className="pointer-events-none absolute inset-0 seal-pattern opacity-30 dark:opacity-100" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-chakra/10 border border-chakra/20">
            <IconDuel className="w-8 h-8 text-chakra" />
          </div>
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            NinDuelist
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg text-text-secondary">
            Bot Discord para duelos ranqueados no Nin Online. Testemunha obrigatória, seasons automáticas, ranking e anti-farm.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs/introduction"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-chakra px-5 text-sm font-medium text-background transition-colors hover:bg-chakra-dim"
            >
              Documentação
            </Link>
            <a
              href="#"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border-default bg-surface px-5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-hover"
            >
              <IconGitHub className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Blade cut */}
      <div className="blade-cut mx-auto max-w-6xl" />

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-2xl font-semibold text-text-primary">
            Recursos principais
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-text-muted">
            Tudo que você precisa para duelos competitivos
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative rounded-xl border border-border-default bg-surface p-6 transition-all hover:border-chakra/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-chakra-glow text-chakra">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blade cut */}
      <div className="blade-cut mx-auto max-w-6xl" />

      {/* Quickstart */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-text-primary">Quickstart</h2>
          <p className="mt-2 text-sm text-text-muted">
            Comece a usar em segundos com estes comandos
          </p>

          <div className="mt-8 space-y-2">
            {quickstartCommands.map((c, i) => (
              <motion.div
                key={c.cmd}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex items-center gap-4 rounded-lg border border-border-default bg-surface px-4 py-3"
              >
                <code className="shrink-0 font-mono text-sm text-chakra">
                  {c.cmd}
                </code>
                <span className="text-sm text-text-muted">{c.desc}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/docs/commands/user"
              className="inline-flex items-center gap-1.5 text-sm text-chakra transition-colors hover:text-chakra-dim"
            >
              Ver todos os comandos
              <IconExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-default bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-muted">
            NinDuelist — Bot de duelos ranqueados para Nin Online
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-muted transition-colors hover:text-text-primary">
              <IconGitHub className="w-4 h-4" />
            </a>
            <a href="#" className="text-text-muted transition-colors hover:text-text-primary">
              <IconDiscord className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
