"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, Facebook, Linkedin, X } from "lucide-react";
import { owner } from "@/lib/content";

const ITEMS = [
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${owner.whatsapp.replace("+", "")}` },
  { icon: Send, label: "Telegram", href: owner.telegram },
  { icon: Facebook, label: "Facebook", href: owner.facebook },
  { icon: Linkedin, label: "LinkedIn", href: owner.linkedin },
];

export default function SupportWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-[70] flex flex-col items-center gap-2">
      <AnimatePresence>
        {open &&
          ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              initial={{ opacity: 0, scale: 0.4, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.4, y: 14 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 340,
                damping: 22,
                delay: i * 0.05,
              }}
              className="cursor-interactive flex h-11 w-11 items-center justify-center rounded-full text-accent transition-colors hover:text-white"
              style={{ filter: "drop-shadow(0 0 6px rgba(74,222,128,0.45))" }}
              onClick={() => setOpen(false)}
            >
              <item.icon size={22} strokeWidth={1.75} aria-hidden="true" />
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        className="cursor-interactive glass-accent flex h-14 w-14 items-center justify-center rounded-full text-accent shadow-glow-md animate-pulseGlow"
        aria-label="Contact options"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
