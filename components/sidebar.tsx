"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { navItems, type NavItem } from "@/lib/navigation"
import { IconChevronRight } from "@/components/icons"

function SidebarLink({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname()
  const isActive = item.href ? pathname === item.href : false
  const hasChildren = item.children && item.children.length > 0
  const isGroupActive = hasChildren
    ? item.children!.some((c) => pathname === c.href)
    : false
  const [open, setOpen] = useState(isGroupActive || isActive)

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
            isGroupActive
              ? "text-text-primary"
              : "text-text-secondary hover:text-text-primary"
          }`}
          aria-expanded={open}
        >
          {item.icon && <item.icon className="w-4 h-4 shrink-0" />}
          <span className="flex-1 text-left">{item.title}</span>
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconChevronRight className="w-3 h-3 text-text-muted" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="ml-4 border-l border-border-subtle pl-2 pt-1">
                {item.children!.map((child) => (
                  <SidebarLink
                    key={child.title}
                    item={child}
                    depth={depth + 1}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <Link
      href={item.href || "#"}
      className={`relative flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-all ${
        isActive
          ? "bg-chakra-glow text-chakra font-medium"
          : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-chakra"
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        />
      )}
      {item.icon && <item.icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{item.title}</span>
    </Link>
  )
}

export function Sidebar({
  className = "",
  onLinkClick,
}: {
  className?: string
  onLinkClick?: () => void
}) {
  const pathname = usePathname()

  return (
    <nav
      className={`flex flex-col gap-1 py-4 ${className}`}
      aria-label="Navegação da documentação"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a") && onLinkClick) {
          onLinkClick()
        }
      }}
    >
      {navItems.map((item) => (
        <SidebarLink key={item.title} item={item} />
      ))}

      {/* Reading progress */}
      <div className="mt-auto px-3 pt-6">
        <ReadingProgress />
      </div>
    </nav>
  )
}

function ReadingProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) {
        setProgress(0)
        return
      }
      setProgress(Math.min(100, (window.scrollY / docHeight) * 100))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="space-y-1.5">
      <span className="text-[10px] uppercase tracking-wider text-text-muted">
        Progresso
      </span>
      <div className="h-1 w-full overflow-hidden rounded-full bg-surface-raised">
        <motion.div
          className="h-full rounded-full bg-chakra"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  )
}

