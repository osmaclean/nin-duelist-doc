'use client'

import {
  IconAntiFarm,
  IconExternalLink,
  IconGitHub,
  IconMoon,
  IconSeason,
  IconSun,
  IconWitness,
} from '@/components/icons'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const quickstartCommands = [
  { cmd: '/duel @oponente MD1 @testemunha', descKey: 'landing.cmd1Desc' },
  { cmd: '/rank', descKey: 'landing.cmd2Desc' },
  { cmd: '/profile', descKey: 'landing.cmd3Desc' },
  { cmd: '/pending', descKey: 'landing.cmd4Desc' },
]

export function LandingPage() {
  const { theme, setTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }, [i18n])

  const features = [
    {
      icon: IconSeason,
      title: t('landing.seasonTitle'),
      description: t('landing.seasonDesc'),
    },
    {
      icon: IconWitness,
      title: t('landing.witnessTitle'),
      description: t('landing.witnessDesc'),
    },
    {
      icon: IconAntiFarm,
      title: t('landing.antiFarmTitle'),
      description: t('landing.antiFarmDesc'),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border-default bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center gap-4 px-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logoduelist.png"
              alt="NinDuelist"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-semibold text-sm text-text-primary select-none">NinDuelist</span>
          </Link>
          <div className="flex-1" />
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/docs/introduction"
              className="text-text-secondary transition-colors hover:text-text-primary select-none"
            >
              Docs
            </Link>
          </nav>
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-sm text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary cursor-pointer select-none"
            aria-label="Toggle language"
          >
            <span className="text-xs font-medium uppercase">
              {i18n.language === 'en' ? 'PT' : 'EN'}
            </span>
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary cursor-pointer"
              aria-label={t('topNav.toggleTheme')}
            >
              {theme === 'dark' ? (
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
        <div
          className="pointer-events-none absolute inset-0 seal-pattern opacity-30 dark:opacity-100"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="mx-auto mb-6 flex h-56 w-56 items-center justify-center rounded-2xl bg-chakra/10 border border-chakra/20">
            <Image
              src="/logoduelist.png"
              alt="NinDuelist"
              width={156}
              height={156}
              className="rounded-xl"
            />
          </div>
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight text-text-primary sm:text-5xl select-none">
            NinDuelist
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg text-text-secondary select-none">
            {t('landing.subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs/introduction"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-chakra px-5 text-sm font-medium text-background transition-colors hover:bg-chakra-dim cursor-pointer select-none"
            >
              {t('landing.docs')}
            </Link>
            <a
              href="https://github.com/osmaclean/nin-duelist-doc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border-default bg-surface px-5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-hover cursor-pointer select-none"
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
          <h2 className="text-center text-2xl font-semibold text-text-primary select-none">
            {t('landing.featuresTitle')}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-text-muted select-none">
            {t('landing.featuresSubtitle')}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group relative rounded-xl border border-border-default bg-surface p-6 transition-all hover:border-chakra/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-chakra-glow text-chakra">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary select-none">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted select-none">
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
          <h2 className="text-2xl font-semibold text-text-primary select-none">
            {t('landing.quickstart')}
          </h2>
          <p className="mt-2 text-sm text-text-muted select-none">
            {t('landing.quickstartSubtitle')}
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
                <code className="shrink-0 font-mono text-sm text-chakra">{c.cmd}</code>
                <span className="text-sm text-text-muted select-none">{t(c.descKey)}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/docs/commands/user"
              className="inline-flex items-center gap-1.5 text-sm text-chakra transition-colors hover:text-chakra-dim cursor-pointer select-none"
            >
              {t('landing.viewAllCommands')}
              <IconExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-default bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-muted select-none">{t('landing.footerDesc')}</p>
          <p className="text-xs text-text-muted select-none">
            {t('landing.footerAccess')}{' '}
            <a href="mailto:contatolucasmaclean@gmail.com" className="text-chakra hover:underline">
              contatolucasmaclean@gmail.com
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/osmaclean/nin-duelist-doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-text-primary cursor-pointer"
              aria-label="GitHub"
            >
              <IconGitHub className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
