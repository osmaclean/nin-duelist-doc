"use client"

import React, { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IconCopy, IconCheck, IconChevronDown } from "@/components/icons"

/* ─── Callout ─── */
const calloutStyles = {
  info: {
    border: "border-info/30",
    bg: "bg-info/5",
    icon: "text-info",
    label: "Info",
  },
  warn: {
    border: "border-warn/30",
    bg: "bg-warn/5",
    icon: "text-warn",
    label: "Aviso",
  },
  tip: {
    border: "border-tip/30",
    bg: "bg-tip/5",
    icon: "text-tip",
    label: "Dica",
  },
  danger: {
    border: "border-danger/30",
    bg: "bg-danger/5",
    icon: "text-danger",
    label: "Perigo",
  },
} as const

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof calloutStyles
  title?: string
  children: React.ReactNode
}) {
  const s = calloutStyles[type]
  return (
    <div
      className={`my-4 rounded-lg border ${s.border} ${s.bg} px-4 py-3`}
      role="note"
    >
      {/* Seal watermark */}
      <div className="relative">
        <div className="absolute -right-2 -top-2 opacity-[0.03]">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="0.3" />
            <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="flex items-start gap-2">
          <span className={`mt-0.5 text-xs font-semibold uppercase tracking-wider ${s.icon}`}>
            {title || s.label}
          </span>
        </div>
        <div className="mt-1.5 text-sm leading-relaxed text-text-secondary">
          {children}
        </div>
      </div>
    </div>
  )
}

/* ─── CodeBlock ─── */
export function CodeBlock({
  children,
  language = "",
  filename,
}: {
  children: string
  language?: string
  filename?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [children])

  return (
    <div className="group my-4 overflow-hidden rounded-lg border border-border-default bg-surface">
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between border-b border-border-default bg-surface-hover px-4 py-2">
          <span className="font-mono text-xs text-text-muted">
            {filename || language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 rounded px-1.5 py-0.5 text-text-muted opacity-0 transition-all hover:text-text-primary group-hover:opacity-100"
            aria-label="Copiar codigo"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <IconCheck className="w-3.5 h-3.5 text-chakra" />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                  <IconCopy className="w-3.5 h-3.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      )}
      {/* Code */}
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-[13px] leading-relaxed text-text-primary">
          {children}
        </code>
      </pre>
    </div>
  )
}

/* ─── Tabs ─── */
export function Tabs({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[]
}) {
  const [active, setActive] = useState(0)

  return (
    <div className="my-4">
      <div className="flex gap-0 border-b border-border-default" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 text-sm transition-colors ${
              i === active
                ? "text-text-primary"
                : "text-text-muted hover:text-text-secondary"
            }`}
            role="tab"
            aria-selected={i === active}
          >
            {tab.label}
            {i === active && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-chakra"
                transition={{ duration: 0.25 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="pt-4" role="tabpanel">
        {tabs[active]?.content}
      </div>
    </div>
  )
}

/* ─── Accordion ─── */
export function Accordion({
  items,
}: {
  items: { title: string; content: React.ReactNode }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="my-4 divide-y divide-border-default rounded-lg border border-border-default">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-4 py-3 text-sm text-text-primary transition-colors hover:bg-surface-hover"
            aria-expanded={openIndex === i}
          >
            <span>{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconChevronDown className="w-4 h-4 text-text-muted" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-sm text-text-secondary leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

/* ─── Steps ─── */
export function Steps({
  steps,
}: {
  steps: { title: string; content: React.ReactNode }[]
}) {
  return (
    <div className="my-6 space-y-0">
      {steps.map((step, i) => (
        <div key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
          {/* Vertical line */}
          {i < steps.length - 1 && (
            <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border-default" />
          )}
          {/* Step number */}
          <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-default bg-surface text-xs font-medium text-text-secondary">
            {i + 1}
          </div>
          {/* Content */}
          <div className="flex-1 pt-0.5">
            <p className="text-sm font-medium text-text-primary">{step.title}</p>
            <div className="mt-1 text-sm text-text-secondary leading-relaxed">
              {step.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── InlineBadge ─── */
export function InlineBadge({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?: "default" | "chakra" | "warn" | "danger"
}) {
  const variantClasses = {
    default: "bg-surface-raised text-text-secondary border-border-default",
    chakra: "bg-chakra-glow text-chakra border-chakra/20",
    warn: "bg-warn/10 text-warn border-warn/20",
    danger: "bg-danger/10 text-danger border-danger/20",
  }

  return (
    <span
      className={`inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-xs ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}

/* ─── Kbd ─── */
export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-5 items-center rounded border border-border-default bg-surface-raised px-1.5 font-mono text-[11px] text-text-muted">
      {children}
    </kbd>
  )
}

/* ─── CommandCard ─── */
export function CommandCard({
  name,
  description,
  usage,
  parameters,
  examples,
  admin = false,
}: {
  name: string
  description: string
  usage?: string
  parameters?: { name: string; type: string; required: boolean; description: string }[]
  examples?: string[]
  admin?: boolean
}) {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-border-default bg-surface">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border-default px-4 py-3">
        <code className="text-sm font-semibold text-chakra">{name}</code>
        {admin && (
          <InlineBadge variant="warn">Admin</InlineBadge>
        )}
      </div>
      {/* Body */}
      <div className="space-y-3 px-4 py-3">
        <p className="text-sm text-text-secondary">{description}</p>

        {usage && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">
              Uso
            </p>
            <code className="block rounded bg-surface-raised px-3 py-2 font-mono text-xs text-text-primary">
              {usage}
            </code>
          </div>
        )}

        {parameters && parameters.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">
              Parametros
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle text-left">
                    <th className="py-1.5 pr-4 text-xs font-medium text-text-muted">Nome</th>
                    <th className="py-1.5 pr-4 text-xs font-medium text-text-muted">Tipo</th>
                    <th className="py-1.5 pr-4 text-xs font-medium text-text-muted">Obrig.</th>
                    <th className="py-1.5 text-xs font-medium text-text-muted">Descricao</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map((p) => (
                    <tr key={p.name} className="border-b border-border-subtle last:border-0">
                      <td className="py-1.5 pr-4 font-mono text-xs text-chakra">{p.name}</td>
                      <td className="py-1.5 pr-4 font-mono text-xs text-text-muted">{p.type}</td>
                      <td className="py-1.5 pr-4 text-xs text-text-muted">{p.required ? "Sim" : "Nao"}</td>
                      <td className="py-1.5 text-xs text-text-secondary">{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {examples && examples.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">
              Exemplos
            </p>
            <div className="space-y-1">
              {examples.map((ex, i) => (
                <code
                  key={i}
                  className="block rounded bg-surface-raised px-3 py-1.5 font-mono text-xs text-text-primary"
                >
                  {ex}
                </code>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── StatusTimeline ─── */
export function StatusTimeline({
  steps,
}: {
  steps: { status: string; label: string; description?: string }[]
}) {
  return (
    <div className="my-6">
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.status}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="relative flex items-start gap-4 pb-6 last:pb-0"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="absolute left-3 top-6 bottom-0 w-px bg-gradient-to-b from-chakra/40 to-border-default" />
            )}
            {/* Node */}
            <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-chakra/40 bg-chakra-glow">
              <div className="h-2 w-2 rounded-full bg-chakra" />
            </div>
            {/* Content */}
            <div className="flex-1 pt-0.5">
              <div className="flex items-center gap-2">
                <InlineBadge variant="chakra">{step.status}</InlineBadge>
                <span className="text-sm font-medium text-text-primary">{step.label}</span>
              </div>
              {step.description && (
                <p className="mt-1 text-sm text-text-muted">{step.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
