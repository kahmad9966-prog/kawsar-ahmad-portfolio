"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";

type Mode = "login" | "signup" | "forgot";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "At least 6 characters"),
});

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Enter your full name"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "At least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const forgotSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

function FloatingInput({
  label,
  type = "text",
  error,
  registration,
}: {
  label: string;
  type?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <div>
      <div className="relative">
        <input
          type={type}
          placeholder=" "
          {...registration}
          className="peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-5 text-sm text-white outline-none transition-all duration-300 focus:border-accent/50 focus:shadow-glow-sm"
        />
        <label className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-faint transition-all duration-200 peer-focus:top-3.5 peer-focus:text-[11px] peer-focus:text-accent peer-[&:not(:placeholder-shown)]:top-3.5 peer-[&:not(:placeholder-shown)]:text-[11px]">
          {label}
        </label>
      </div>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<Mode>("login");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const { login, signup, resetPassword, isFirebaseConfigured } = useAuth();

  const schema =
    mode === "login" ? loginSchema : mode === "signup" ? signupSchema : forgotSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const switchMode = (m: Mode) => {
    setMode(m);
    setFormError(null);
    setSuccess(null);
    reset();
  };

  const handleClose = () => {
    switchMode("login");
    onClose();
  };

  const onSubmit = async (data: any) => {
    setFormError(null);
    setSubmitting(true);
    try {
      if (mode === "login") {
        await login(data.email, data.password);
        handleClose();
      } else if (mode === "signup") {
        await signup(data.fullName, data.email, data.password);
        setSuccess("Account created. You're all set.");
        setTimeout(handleClose, 1200);
      } else {
        await resetPassword(data.email);
        setSuccess("Password reset email sent.");
      }
    } catch (err: any) {
      setFormError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-accent relative w-full max-w-md rounded-3xl p-8"
          >
            <button
              onClick={handleClose}
              className="cursor-interactive absolute right-5 top-5 text-ink-faint transition-colors hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <h2 className="font-display text-2xl font-semibold text-white">
              {mode === "login" && "Welcome back"}
              {mode === "signup" && "Create your account"}
              {mode === "forgot" && "Reset your password"}
            </h2>
            <p className="mt-1 text-sm text-ink-dim">
              {mode === "login" && "Log in to unlock the full portfolio."}
              {mode === "signup" && "Sign up to explore the complete experience."}
              {mode === "forgot" && "We'll send a reset link to your email."}
            </p>

            {!isFirebaseConfigured && (
              <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-300">
                Firebase isn&apos;t configured yet. Add your keys to{" "}
                <code>.env.local</code> to enable real authentication.
              </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              {mode === "signup" && (
                <FloatingInput
                  label="Full Name"
                  registration={register("fullName")}
                  error={errors.fullName?.message as string | undefined}
                />
              )}
              <FloatingInput
                label="Email"
                type="email"
                registration={register("email")}
                error={errors.email?.message as string | undefined}
              />
              {mode !== "forgot" && (
                <FloatingInput
                  label="Password"
                  type="password"
                  registration={register("password")}
                  error={errors.password?.message as string | undefined}
                />
              )}
              {mode === "signup" && (
                <FloatingInput
                  label="Confirm Password"
                  type="password"
                  registration={register("confirmPassword")}
                  error={errors.confirmPassword?.message as string | undefined}
                />
              )}

              {formError && <p className="text-sm text-red-400">{formError}</p>}
              {success && (
                <div className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 size={16} /> {success}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="cursor-interactive reflection-sweep glass-accent flex w-full items-center justify-center gap-2 rounded-xl bg-accent/15 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-glow-md disabled:opacity-60"
              >
                {submitting && <Loader2 size={16} className="animate-spin" />}
                {mode === "login" && "Log In"}
                {mode === "signup" && "Sign Up"}
                {mode === "forgot" && "Send Reset Link"}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-xs text-ink-faint">
              {mode === "login" && (
                <>
                  <button onClick={() => switchMode("forgot")} className="cursor-interactive hover:text-accent">
                    Forgot password?
                  </button>
                  <button onClick={() => switchMode("signup")} className="cursor-interactive hover:text-accent">
                    Create an account
                  </button>
                </>
              )}
              {mode === "signup" && (
                <button onClick={() => switchMode("login")} className="cursor-interactive hover:text-accent">
                  Already have an account? Log in
                </button>
              )}
              {mode === "forgot" && (
                <button onClick={() => switchMode("login")} className="cursor-interactive hover:text-accent">
                  Back to login
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
