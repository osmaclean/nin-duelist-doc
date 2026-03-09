import {
  IconBook,
  IconRocket,
  IconDuel,
  IconSeason,
  IconWitness,
  IconRanking,
  IconAntiFarm,
  IconAdmin,
  IconTerminal,
  IconFlow,
  IconFolder,
  IconSettings,
  IconTest,
  IconMap,
} from "@/components/icons"

export type NavItem = {
  title: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  {
    title: "Introducao",
    icon: IconBook,
    children: [
      { title: "O que e o NinDuelist", href: "/docs/introduction" },
      { title: "Features", href: "/docs/features" },
    ],
  },
  {
    title: "Comecando",
    icon: IconRocket,
    children: [
      { title: "Stack", href: "/docs/getting-started/stack" },
      { title: "Setup", href: "/docs/getting-started/setup" },
      { title: "Variaveis de Ambiente", href: "/docs/getting-started/env" },
      { title: "Banco de Dados", href: "/docs/getting-started/database" },
      { title: "Deploy", href: "/docs/getting-started/deploy" },
      { title: "Docker", href: "/docs/getting-started/docker" },
    ],
  },
  {
    title: "Conceitos",
    icon: IconDuel,
    children: [
      { title: "Season", href: "/docs/concepts/season", icon: IconSeason },
      { title: "Duelo", href: "/docs/concepts/duel", icon: IconDuel },
      { title: "Testemunha", href: "/docs/concepts/witness", icon: IconWitness },
      { title: "Ranking", href: "/docs/concepts/ranking", icon: IconRanking },
      { title: "Anti-farm", href: "/docs/concepts/anti-farm", icon: IconAntiFarm },
    ],
  },
  {
    title: "Comandos",
    icon: IconTerminal,
    children: [
      { title: "Comandos de Usuario", href: "/docs/commands/user" },
      { title: "Comandos de Admin", href: "/docs/commands/admin", icon: IconAdmin },
    ],
  },
  {
    title: "Fluxo de Duelo",
    icon: IconFlow,
    href: "/docs/duel-flow",
  },
  {
    title: "Arquitetura",
    icon: IconFolder,
    href: "/docs/architecture",
  },
  {
    title: "Configuracao",
    icon: IconSettings,
    href: "/docs/configuration",
  },
  {
    title: "Testes e CI/CD",
    icon: IconTest,
    href: "/docs/testing",
  },
  {
    title: "Roadmap",
    icon: IconMap,
    href: "/docs/roadmap",
  },
]
