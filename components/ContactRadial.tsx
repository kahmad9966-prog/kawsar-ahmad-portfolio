"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Linkedin, MessageCircle, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  key: string;
  label: string;
  href: string;
  desktop: { dx: number; dy: number };
  mobile: { dx: number; dy: number };
  Icon: LucideIcon;
};

const D = 62; // desktop doori
const M = 96; // mobile arc er radius

const ITEMS: Item[] = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/8801975340495",
    desktop: { dx: 0, dy: D },
    mobile: { dx: 0, dy: M },
    Icon: MessageCircle,
  },
  {
    key: "telegram",
    label: "Telegram",
    href: "https://t.me/kawsar_ahmad_999",
    desktop: { dx: -D, dy: 0 },
    mobile: { dx: -M, dy: 0 },
    Icon: Send,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1CKX1fD4Qu/",
    desktop: { dx: D, dy: 0 },
    mobile: { dx: -48, dy: 83 },
    Icon: Facebook,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kawser-miah-91928234b/",
    desktop: { dx: 0, dy: -D },
    mobile: { dx: -83, dy: 48 },
    Icon: Linkedin,
  },
];

const EDGE = 26; // screen edge theke minimum doori (px)

export default function ContactRadial() {
  const [open, setOpen] = useState(false);
  const [center, setCenter] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setNarrow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const measure = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setCenter({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  }, []);

  useEffect(() => {
    if (!open) return;
    measure();
    const startY = window.scrollY;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onScroll = () => {
      if (Math.abs(window.scrollY - startY) > 40) setOpen(false);
    };
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, measure]);

  // icon jate screen er baire na jay
  const place = (dx: number, dy: number) => {
    if (!center) return { x: dx, y: dy };
    const maxX = window.innerWidth - EDGE;
    const maxY = window.innerHeight - EDGE;
    const x = Math.min(Math.max(center.x + dx, EDGE), maxX) - center.x;
    const y = Math.min(Math.max(center.y + dy, EDGE), maxY) - center.y;
    return { x, y };
  };

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-label="Contact me"
        aria-expanded={open}
        onClick={() => {
          measure();
          setOpen((v) => !v);
        }}
        className="cursor-interactive relative z-[60] flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/80 transition hover:border-green-400/60 hover:text-green-400"
      >
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
            </>
          )}
        </motion.svg>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && center && (
              <>
                <motion.div
                  key="overlay"
                  className="fixed inset-0 z-[55]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />
                {ITEMS.map((item, i) => {
                  const pos = place(
                    narrow ? item.mobile.dx : item.desktop.dx,
                    narrow ? item.mobile.dy : item.desktop.dy
                  );
                  const Icon = item.Icon;
                  return (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                      className="cursor-interactive fixed z-[58] flex h-11 w-11 items-center justify-center text-green-400 transition-colors hover:text-white"
                      style={{
                        left: center.x - 22,
                        top: center.y - 22,
                        filter: "drop-shadow(0 0 6px rgba(74,222,128,0.45))",
                      }}
                      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                      animate={{
                        x: pos.x,
                        y: pos.y,
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 380,
                          damping: 22,
                          delay: i * 0.04,
                        },
                      }}
                      exit={{
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.15 },
                      }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setOpen(false)}
                    >
                      <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                    </motion.a>
                  );
                })}
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
