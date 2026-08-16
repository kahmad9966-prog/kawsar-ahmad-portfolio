"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, User, LogOut } from "lucide-react";
import { SceneId } from "@/lib/scenes";
import clsx from "clsx";

type NavItem = { label: string; scene: SceneId };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", scene: "hero" },
  { label: "About", scene: "about" },
  { label: "Skills", scene: "skills" },
  { label: "Contact", scene: "contact" },
];

const DROPDOWN_ITEMS: NavItem[] = [
  { label: "Workflow", scene: "workflow" },
  { label: "Experience", scene: "experience" },
  { label: "Featured Projects", scene: "projects" },
  { label: "Achievements", scene: "achievements" },
  { label: "Testimonials", scene: "testimonials" },
];

export default function Header({
  activeScene,
  isAuthenticated,
  displayName,
  onNavigate,
  onOpenLogin,
  onLogout,
}: {
  activeScene: SceneId;
  isAuthenticated: boolean;
  displayName?: string | null;
  onNavigate: (scene: SceneId) => void;
  onOpenLogin: () => void;
  onLogout: () => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleNavClick = (scene: SceneId) => {
    setDropdownOpen(false);
    onNavigate(scene);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <div className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 sm:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="cursor-interactive font-display text-lg font-semibold tracking-tight text-white"
        >
          K<span className="text-accent">.</span>Ahmad
        </button>

        {/* Center nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.scene}
              onClick={() => handleNavClick(item.scene)}
              className={clsx(
                "cursor-interactive rounded-full px-4 py-2 text-sm transition-colors duration-300",
                activeScene === item.scene
                  ? "text-accent"
                  : "text-ink-dim hover:text-white"
              )}
            >
              {item.label}
            </button>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={clsx(
                "cursor-interactive flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                DROPDOWN_ITEMS.some((d) => d.scene === activeScene)
                  ? "text-accent"
                  : "text-ink-dim hover:text-white"
              )}
            >
              How It Works
              <ChevronDown
                size={14}
                className={clsx("transition-transform duration-300", dropdownOpen && "rotate-180")}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-accent absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl p-2"
                >
                  {DROPDOWN_ITEMS.map((item) => (
                    <button
                      key={item.scene}
                      onClick={() => handleNavClick(item.scene)}
                      className="reflection-sweep cursor-interactive block w-full rounded-xl px-4 py-2.5 text-left text-sm text-ink-dim transition-colors duration-200 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right: user */}
        <div className="relative">
          {isAuthenticated ? (
            <>
              <button
                onClick={() => setUserMenuOpen((v) => !v)}
                className="cursor-interactive flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent"
                aria-label="User menu"
              >
                <User size={16} />
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-accent absolute right-0 top-full mt-3 w-52 rounded-2xl p-2"
                  >
                    <div className="truncate px-4 py-2 text-xs text-ink-faint">
                      {displayName || "Signed in"}
                    </div>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        onLogout();
                      }}
                      className="cursor-interactive flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-left text-sm text-ink-dim transition-colors duration-200 hover:bg-white/5 hover:text-white"
                    >
                      <LogOut size={14} /> Log out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <button
              onClick={onOpenLogin}
              className="cursor-interactive flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-dim transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="Login"
            >
              <User size={16} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
