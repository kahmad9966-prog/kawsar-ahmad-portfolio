"use client";

import { motion } from "framer-motion";
import { owner } from "@/lib/content";
import GlassButton from "@/components/GlassButton";

const nameChars = owner.name.split("");

export default function HeroScene({
  isAuthenticated,
  onOpenLogin,
  onOpenSignup,
  onExplore,
}: {
  isAuthenticated: boolean;
  onOpenLogin: () => void;
  onOpenSignup: () => void;
  onExplore: () => void;
}) {
  return (
    <div className="relative flex w-full max-w-4xl flex-col items-center text-center">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent"
      >
        Available for select projects
      </motion.span>

      <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-7xl md:text-8xl">
        {nameChars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: 60 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: 0.3 + i * 0.035,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {owner.roles.map((role, i) => (
          <motion.span
            key={role}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.12, duration: 0.5 }}
            className="text-sm text-ink-dim sm:text-base"
          >
            {role}
            {i < owner.roles.length - 1 && (
              <span className="ml-3 text-accent/40">/</span>
            )}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-4"
      >
        {isAuthenticated ? (
          <GlassButton onClick={onExplore}>Explore Portfolio</GlassButton>
        ) : (
          <>
            <GlassButton onClick={onOpenLogin}>Login</GlassButton>
            <GlassButton variant="ghost" onClick={onOpenSignup}>
              Sign Up
            </GlassButton>
          </>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        className="mt-16 text-xs text-ink-faint"
      >
        Scroll or swipe to continue
      </motion.p>
    </div>
  );
}
