"use client"

import React, { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import {
  IconSearch,
  IconSun,
  IconMoon,
  IconMenu,
  IconClose,
  IconGitHub,
  IconDiscord,
  IconExternalLink,
} from "@/components/icons"

export function TopNav({
  onToggleSidebar,
  sidebarOpen,
  onOpenSearch,
}: {
  onToggleSidebar: () => void
  sidebarOpen: boolean
  onOpenSearch: () => void
}) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isLanding = pathname === "/"

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border-default bg-background/80 backdrop-blur-md">
      <div className="flex h-full items-center gap-4 px-4 lg:px-6">
        {/* Mobile menu */}
        {!isLanding && (
          <button
            onClick={onToggleSidebar}
            className="flex items-center justify-center rounded-md p-1.5 text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary lg:hidden"
            aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
          >
            {sidebarOpen ? <IconClose /> : <IconMenu />}
          </button>
        )}

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-chakra text-background">
            <span className="font-mono text-xs font-bold">N</span>
          </div>
          <span className="font-semibold text-sm text-text-primary hidden sm:inline">
            NinDuelist
          </span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <button
          onClick={onOpenSearch}
          className="flex h-8 items-center gap-2 rounded-md border border-border-default bg-surface px-3 text-sm text-text-muted transition-colors hover:border-border-strong hover:text-text-secondary"
        >
          <IconSearch className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Buscar...</span>
          <kbd className="ml-2 hidden rounded border border-border-default bg-surface-raised px-1.5 py-0.5 font-mono text-[10px] text-text-muted sm:inline">
            {'⌘K'}
          </kbd>
        </button>

        {/* Links */}
        <nav className="hidden items-center gap-1 md:flex">
          <a
            href="#"
            className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <IconGitHub className="w-4 h-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <IconDiscord className="w-4 h-4" />
            <span className="sr-only">Discord</span>
          </a>
        </nav>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
            aria-label="Alternar tema"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconSun className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMoon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </div>
      {/* Chakra line */}
      <div className="chakra-line absolute bottom-0 left-0 right-0" />
    </header>
  )
}
