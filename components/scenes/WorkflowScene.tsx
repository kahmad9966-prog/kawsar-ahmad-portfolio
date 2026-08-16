"use client";

import { motion } from "framer-motion";
import { workflowSteps } from "@/lib/content";

export default function WorkflowScene() {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center">
      <span className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">How it works</span>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        A predictable process, every time
      </h2>

      <div className="relative mt-16 hidden w-full items-start justify-between md:flex">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
        />
        {workflowSteps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex w-[13%] flex-col items-center text-center"
          >
            <div className="glass-accent flex h-12 w-12 items-center justify-center rounded-full text-sm font-display font-semibold text-accent shadow-glow-sm">
              {step.id}
            </div>
            <h3 className="mt-4 text-xs font-medium leading-snug text-white">{step.title}</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-ink-faint">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* mobile: vertical stack */}
      <div className="mt-10 flex w-full flex-col gap-4 md:hidden">
        {workflowSteps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="glass flex items-start gap-4 rounded-2xl p-4"
          >
            <div className="glass-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-display font-semibold text-accent">
              {step.id}
            </div>
            <div>
              <h3 className="text-sm font-medium text-white">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-ink-faint">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
