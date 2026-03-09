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
  titleKey: string
  href?: string
  icon?: (props: { className?: string }) => JSX.Element
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  {
    title: "Introdução",
    titleKey: "nav.introduction",
    icon: IconBook,
    children: [
      { title: "O que é o NinDuelist", titleKey: "nav.whatIs", href: "/docs/introduction" },
      { title: "Features", titleKey: "nav.features", href: "/docs/features" },
      { title: "Contato", titleKey: "nav.contact", href: "/docs/contact", icon: IconMail },
    ],
  },
  {
    title: "Conceitos",
    titleKey: "nav.concepts",
    icon: IconDuel,
    children: [
      { title: "Season", titleKey: "nav.season", href: "/docs/concepts/season", icon: IconSeason },
      { title: "Duelo", titleKey: "nav.duel", href: "/docs/concepts/duel", icon: IconDuel },
      { title: "Testemunha", titleKey: "nav.witness", href: "/docs/concepts/witness", icon: IconWitness },
      { title: "Ranking", titleKey: "nav.ranking", href: "/docs/concepts/ranking", icon: IconRanking },
      { title: "Anti-farm", titleKey: "nav.antiFarm", href: "/docs/concepts/anti-farm", icon: IconAntiFarm },
    ],
  },
  {
    title: "Comandos",
    titleKey: "nav.commands",
    icon: IconTerminal,
    children: [
      { title: "Comandos de Usuário", titleKey: "nav.userCommands", href: "/docs/commands/user" },
      { title: "Comandos de Admin", titleKey: "nav.adminCommands", href: "/docs/commands/admin", icon: IconAdmin },
    ],
  },
  {
    title: "Fluxo de Duelo",
    titleKey: "nav.duelFlow",
    icon: IconFlow,
    href: "/docs/duel-flow",
  },
]
