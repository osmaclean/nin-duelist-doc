"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

type TocItem = {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const article = document.querySelector("[data-doc-content]")
    if (!article) return

    const update = () => {
      const els = article.querySelectorAll("h2, h3")
      const seen = new Map<string, number>()
      const items: TocItem[] = Array.from(els).map((el) => {
        let id = el.id
        if (!id) {
          id = (el.textContent || "heading")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
          if (!id) id = "heading"
        }
        const count = seen.get(id) || 0
        seen.set(id, count + 1)
        if (count > 0) id = `${id}-${count}`
        el.id = id
        return {
          id,
          text: el.textContent || "",
          level: el.tagName === "H2" ? 2 : 3,
        }
      })
      setHeadings(items)
    }

    update()

    const observer = new MutationObserver(update)
    observer.observe(article, { childList: true, subtree: true, characterData: true })

    return () => observer.disconnect()
  }, [i18n.language])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    )

    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  const onThisPage = i18n.language === "pt" ? "Nesta página" : "On this page"

  return (
    <nav className="space-y-2" aria-label={onThisPage}>
      <p className="text-xs font-medium uppercase tracking-wider text-text-muted select-none">
        {onThisPage}
      </p>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`relative block rounded py-1 text-[13px] leading-snug transition-colors select-none ${
                h.level === 3 ? "pl-4" : "pl-0"
              } ${
                activeId === h.id
                  ? "text-chakra font-medium"
                  : "text-text-muted hover:text-text-secondary"
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {activeId === h.id && (
                <motion.span
                  layoutId="toc-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-0.5 rounded-full bg-chakra"
                  transition={{ duration: 0.2 }}
                />
              )}
              <span className={h.level === 3 ? "ml-1" : ""}>{h.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
