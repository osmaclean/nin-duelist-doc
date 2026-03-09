import {
  IconBook,
  IconDuel,
  IconSeason,
  IconWitness,
  IconRanking,
  IconAntiFarm,
  IconAdmin,
  IconTerminal,
  IconFlow,
  IconMail,
} from "@/components/icons"

export type NavItem = {
  title: string
  href?: string
  icon?: (props: { className?: string }) => JSX.Element
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  {
    title: "Introdução",
    icon: IconBook,
    children: [
      { title: "O que é o NinDuelist", href: "/docs/introduction" },
      { title: "Features", href: "/docs/features" },
      { title: "Contato", href: "/docs/contact", icon: IconMail },
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
      { title: "Comandos de Usuário", href: "/docs/commands/user" },
      { title: "Comandos de Admin", href: "/docs/commands/admin", icon: IconAdmin },
    ],
  },
  {
    title: "Fluxo de Duelo",
    icon: IconFlow,
    href: "/docs/duel-flow",
  },
]



