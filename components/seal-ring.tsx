"use client"

import React from "react"
import { motion } from "framer-motion"

export function SealRing() {
  return (
    <div className="pointer-events-none fixed right-6 top-20 z-30 hidden opacity-[0.04] xl:block" aria-hidden="true">
      <motion.svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        className="text-chakra"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <circle
          cx="90"
          cy="90"
          r="85"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle
          cx="90"
          cy="90"
          r="70"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        {/* Inner geometric */}
        <circle
          cx="90"
          cy="90"
          r="45"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <circle
          cx="90"
          cy="90"
          r="20"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        {/* Cross lines */}
        <line x1="90" y1="5" x2="90" y2="175" stroke="currentColor" strokeWidth="0.3" />
        <line x1="5" y1="90" x2="175" y2="90" stroke="currentColor" strokeWidth="0.3" />
        <line x1="27" y1="27" x2="153" y2="153" stroke="currentColor" strokeWidth="0.2" />
        <line x1="153" y1="27" x2="27" y2="153" stroke="currentColor" strokeWidth="0.2" />
        {/* Seal triangles */}
        <polygon
          points="90,20 155,130 25,130"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
        />
        <polygon
          points="90,160 25,50 155,50"
          stroke="currentColor"
          strokeWidth="0.3"
          fill="none"
        />
        {/* Dots at cardinal points */}
        <circle cx="90" cy="5" r="2" fill="currentColor" />
        <circle cx="90" cy="175" r="2" fill="currentColor" />
        <circle cx="5" cy="90" r="2" fill="currentColor" />
        <circle cx="175" cy="90" r="2" fill="currentColor" />
      </motion.svg>
    </div>
  )
}
