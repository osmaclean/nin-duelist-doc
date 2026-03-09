"use client"

import React, { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"
import { TableOfContents } from "@/components/table-of-contents"
import { CommandPalette } from "@/components/command-palette"
import { SealRing } from "@/components/seal-ring"

export function DocLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Global ⌘K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  return (
    <div className="min-h-screen bg-background">
      <TopNav
        onToggleSidebar={() => setSidebarOpen((p) => !p)}
        sidebarOpen={sidebarOpen}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div className="flex pt-14">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex lg:w-[260px] lg:shrink-0">
          <div className="fixed top-14 h-[calc(100vh-56px)] w-[260px] overflow-y-auto border-r border-border-default px-3">
            <Sidebar />
          </div>
        </aside>

        {/* Mobile sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
                onClick={closeSidebar}
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="fixed left-0 top-14 z-50 h-[calc(100vh-56px)] w-[280px] overflow-y-auto border-r border-border-default bg-background px-3 lg:hidden"
              >
                <Sidebar onLinkClick={closeSidebar} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto flex max-w-5xl gap-8 px-6 py-8 lg:px-10">
            <article
              className="flex-1 min-w-0 prose-custom"
              data-doc-content
            >
              {children}
            </article>

            {/* TOC desktop */}
            <aside className="hidden xl:block xl:w-[220px] xl:shrink-0">
              <div className="sticky top-20">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </main>
      </div>

      <SealRing />
    </div>
  )
}
