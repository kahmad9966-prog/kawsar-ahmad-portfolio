"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { projects, Project } from "@/lib/content";

export default function ProjectsScene() {
  const [category, setCategory] = useState<"wordpress" | "shopify">("wordpress");
  const [active, setActive] = useState(0);
  const [detail, setDetail] = useState<Project | null>(null);
  const [hovering, setHovering] = useState(false);
  const filtered = projects.filter((p) => p.category === category);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setActive(0);
  }, [category]);

  useEffect(() => {
    if (hovering || detail) return;
    autoRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % filtered.length);
    }, 4200);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [hovering, detail, filtered.length]);

  const move = (delta: number) => {
    setActive((prev) => (prev + delta + filtered.length) % filtered.length);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) move(1);
    else if (info.offset.x > 60) move(-1);
  };

  return (
    <div className="flex w-full max-w-6xl flex-col items-center">
      <span className="mb-2 text-xs uppercase tracking-[0.25em] text-accent">Featured Projects</span>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
        Recent work, in motion
      </h2>

      <div
        className="relative mt-12 h-[420px] w-full max-w-4xl"
        style={{ perspective: 1600 }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
        >
          <AnimatePresence initial={false}>
            {filtered.map((project, i) => {
              const offset = i - active;
              const isActive = offset === 0;
              const visible = Math.abs(offset) <= 1;
              if (!visible) return null;

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    x: offset * 300,
                    scale: isActive ? 1 : 0.8,
                    rotateY: offset * -28,
                    opacity: isActive ? 1 : 0.4,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                    zIndex: isActive ? 10 : 5,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-accent absolute w-[300px] overflow-hidden rounded-3xl sm:w-[380px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative">
                    <span className="absolute left-4 top-4 z-10 font-display text-4xl font-bold text-white/90 drop-shadow-lg">
                      {project.number}
                    </span>
                    <div className="relative h-48 w-full overflow-hidden sm:h-56">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="380px"
                        className="object-cover"
                        priority={isActive}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-dim">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-ink-dim">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-2">
                      <button
                        onClick={() => setDetail(project)}
                        className="cursor-interactive flex-1 rounded-full border border-white/10 bg-white/5 py-2 text-xs text-ink-dim transition-colors hover:border-accent/40 hover:text-white"
                      >
                        View Details
                      </button>
                      <a
                        href={project.liveUrl}
                        className="cursor-interactive flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent/15 py-2 text-xs text-accent transition-colors hover:bg-accent/25"
                      >
                        Visit <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-8 flex items-center gap-2">
        {filtered.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`cursor-interactive h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-accent" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        {(["wordpress", "shopify"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`cursor-interactive reflection-sweep rounded-full px-6 py-2.5 text-sm capitalize transition-all duration-300 ${
              category === cat
                ? "glass-accent text-white shadow-glow-sm"
                : "glass text-ink-dim hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {detail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-10 backdrop-blur-sm"
            onClick={() => setDetail(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-accent relative w-full max-w-2xl rounded-3xl p-8"
            >
              <button
                onClick={() => setDetail(null)}
                className="cursor-interactive absolute right-5 top-5 z-10 text-ink-faint hover:text-white"
              >
                <X size={18} />
              </button>
              <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72">
                <Image src={detail.image} alt={detail.title} fill className="object-cover" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">{detail.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{detail.overview}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <span className="text-xs uppercase tracking-wide text-ink-faint">Challenges</span>
                  <p className="mt-1 text-sm text-ink-dim">{detail.challenges}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wide text-ink-faint">Solutions</span>
                  <p className="mt-1 text-sm text-ink-dim">{detail.solutions}</p>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-wide text-ink-faint">Key features</span>
                <ul className="mt-2 space-y-1.5">
                  {detail.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink-dim">
                      <span className="h-1 w-1 rounded-full bg-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {detail.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-dim">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={detail.liveUrl}
                className="cursor-interactive glass-accent mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-accent/15 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-glow-md"
              >
                Visit Live Website <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
