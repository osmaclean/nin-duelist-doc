"use client"

import React, { useEffect, useState, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { IconSearch, IconClose } from "@/components/icons"
import { navItems, type NavItem } from "@/lib/navigation"

type SearchResult = {
  title: string
  href: string
  section: string
}

function flattenNav(items: NavItem[], section = ""): SearchResult[] {
  const results: SearchResult[] = []
  for (const item of items) {
    const currentSection = section || item.title
    if (item.href) {
      results.push({
        title: item.title,
        href: item.href,
        section: currentSection,
      })
    }
    if (item.children) {
      results.push(...flattenNav(item.children, currentSection))
    }
  }
  return results
}

const allPages = flattenNav(navItems)

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = query.trim()
    ? allPages.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.section.toLowerCase().includes(query.toLowerCase())
      )
    : allPages

  useEffect(() => {
    if (open) {
      setQuery("")
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const navigate = useCallback(
    (href: string) => {
      router.push(href)
      onClose()
    },
    [router, onClose]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === "Enter" && results[selectedIndex]) {
        navigate(results[selectedIndex].href)
      } else if (e.key === "Escape") {
        onClose()
      }
    },
    [results, selectedIndex, navigate, onClose]
  )

  // Global shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        if (open) onClose()
        else {
          // Parent manages open state - this is handled in DocLayout
        }
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-1/2 top-[15%] z-[101] w-[90vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-lg border border-border-default bg-surface shadow-md"
          >
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-border-default px-4 py-3">
              <IconSearch className="w-4 h-4 text-text-muted shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar na documentação..."
                className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                aria-label="Buscar"
              />
              <button
                onClick={onClose}
                className="rounded p-1 text-text-muted transition-colors hover:text-text-primary"
              >
                <kbd className="rounded border border-border-default bg-surface-raised px-1.5 py-0.5 font-mono text-[10px]">
                  ESC
                </kbd>
              </button>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 ? (
                <div className="px-4 py-8 text-center text-sm text-text-muted">
                  Nenhum resultado encontrado
                </div>
              ) : (
                results.map((result, i) => (
                  <button
                    key={result.href}
                    onClick={() => navigate(result.href)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      i === selectedIndex
                        ? "bg-chakra-glow text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <span className="text-[11px] text-text-muted w-24 shrink-0 truncate">
                      {result.section}
                    </span>
                    <span className="truncate">{result.title}</span>
                    {i === selectedIndex && (
                      <span className="ml-auto text-xs text-text-muted">
                        {'↵'}
                      </span>
                    )}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
