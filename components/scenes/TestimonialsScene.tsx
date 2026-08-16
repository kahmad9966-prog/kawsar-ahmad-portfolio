"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function TestimonialsScene() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hovering) return;
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [hovering]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) setActive((p) => (p + 1) % testimonials.length);
    else if (info.offset.x > 60)
      setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[active];
  const prev = testimonials[(active - 1 + testimonials.length) % testimonials.length];
  const next = testimonials[(active + 1) % testimonials.length];

  return (
    <div
      className="flex w-full max-w-4xl flex-col items-center"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">Testimonials</span>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        What clients say
      </h2>

      <div className="relative mt-12 flex w-full items-center justify-center" style={{ perspective: 1200 }}>
        <div className="hidden w-64 shrink-0 opacity-30 blur-[1px] md:block">
          <MiniCard t={prev} />
        </div>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
          className="relative z-10 mx-4 w-full max-w-md"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-accent cursor-interactive rounded-3xl p-8 shadow-glow-md"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                “{t.review}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-ink-faint">
                    {t.company} · {t.country}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="hidden w-64 shrink-0 opacity-30 blur-[1px] md:block">
          <MiniCard t={next} />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-interactive h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-accent" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function MiniCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={11} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-ink-dim">{t.review}</p>
      <p className="mt-3 text-xs font-medium text-white">{t.name}</p>
    </div>
  );
}
