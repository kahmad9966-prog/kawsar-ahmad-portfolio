"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MessageCircle, Send, Facebook, Linkedin, Copy, Check, Loader2, CheckCircle2 } from "lucide-react";
import { owner, serviceOptions } from "@/lib/content";

const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Tell me a bit more (10+ characters)"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    values: owner.phones,
    copyable: true,
  },
  {
    icon: Mail,
    label: "Email",
    values: [owner.email],
    copyable: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    values: [owner.whatsapp],
    href: `https://wa.me/${owner.whatsapp.replace("+", "")}`,
  },
  {
    icon: Send,
    label: "Telegram",
    values: ["@kawsar_ahmad_999"],
    href: owner.telegram,
  },
  {
    icon: Facebook,
    label: "Facebook",
    values: ["Kawsar Ahmad"],
    href: owner.facebook,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    values: ["Kawser Miah"],
    href: owner.linkedin,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="cursor-interactive text-ink-faint transition-colors hover:text-accent"
      aria-label={`Copy ${text}`}
    >
      {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
    </button>
  );
}

export default function ContactScene() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 4500);
    } catch {
      setError("Something went wrong. Please try again or reach out directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
      {/* Left: contact info */}
      <div>
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-accent">Contact</span>
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Let&apos;s build something worth remembering
        </h2>
        <p className="mt-4 max-w-sm text-sm text-ink-dim">
          Reach out directly, or send a message and I&apos;ll get back to you within a day.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contactCards.map((card, i) => {
            const CardTag = card.href ? "a" : "div";
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <CardTag
                  {...(card.href
                    ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="glass reflection-sweep cursor-interactive group flex flex-col gap-2 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm"
                >
                  <div className="flex items-center gap-2 text-accent">
                    <card.icon size={15} />
                    <span className="text-xs uppercase tracking-wide">{card.label}</span>
                  </div>
                  {card.values.map((v) => (
                    <div key={v} className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm text-white">{v}</span>
                      {card.copyable && <CopyButton text={v} />}
                    </div>
                  ))}
                </CardTag>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right: form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        className="glass-accent flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Full Name" error={errors.fullName?.message}>
            <input {...register("fullName")} className="form-input" placeholder=" " />
          </FormField>
          <FormField label="Email Address" error={errors.email?.message}>
            <input type="email" {...register("email")} className="form-input" placeholder=" " />
          </FormField>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Phone Number" error={errors.phone?.message}>
            <input {...register("phone")} className="form-input" placeholder=" " />
          </FormField>
          <FormField label="Company (optional)">
            <input {...register("company")} className="form-input" placeholder=" " />
          </FormField>
        </div>

        <FormField label="Service" error={errors.service?.message}>
          <select
            {...register("service")}
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-accent/50 focus:shadow-glow-sm [&>option]:bg-black"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Message" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={4}
            className="form-input resize-none"
            placeholder=" "
          />
        </FormField>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="cursor-interactive reflection-sweep glass-accent mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent/15 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-glow-md disabled:opacity-60"
        >
          {submitting && <Loader2 size={16} className="animate-spin" />}
          Send Message
        </button>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent"
            >
              <CheckCircle2 size={16} />
              Thank you for contacting me. I will get back to you as soon as possible.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      <style jsx global>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .form-input:focus {
          border-color: rgba(72, 185, 74, 0.5);
          box-shadow: 0 0 24px rgba(72, 185, 74, 0.18);
        }
      `}</style>
    </div>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wide text-ink-faint">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
