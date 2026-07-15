"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/content";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quote request${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const details = [
    {
      Icon: MapPin,
      label: "Visit",
      value: (
        <>
          {company.address.line1}
          <br />
          {company.address.line2}
          <br />
          <span className="text-muted-foreground/80">{company.address.region}</span>
        </>
      )
    },
    {
      Icon: Phone,
      label: "Call",
      value: (
        <a href={company.phoneHref} className="hover:text-primary">
          {company.phone}
        </a>
      )
    },
    {
      Icon: Mail,
      label: "Email",
      value: (
        <a
          href={`mailto:${company.email}`}
          className="break-all hover:text-primary"
        >
          {company.email}
        </a>
      )
    },
    {
      Icon: Clock,
      label: "Hours",
      value: (
        <span>
          {company.hours.map((h) => (
            <span key={h.days} className="block">
              {h.days}: {h.time}
            </span>
          ))}
        </span>
      )
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Info panel */}
            <div className="relative bg-[var(--ink)] p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-dots opacity-[0.12]" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
                  Get in touch
                </span>
                <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                  Let&apos;s make your next box.
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/65">
                  Tell us about your product and volumes. We&apos;ll come back
                  with the right approach — offset or UV, structure and finish —
                  and a quote.
                </p>

                <ul className="mt-10 space-y-6">
                  {details.map(({ Icon, label, value }) => (
                    <li key={label} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                          {label}
                        </p>
                        <div className="mt-0.5 text-sm leading-relaxed text-white/85">
                          {value}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    required
                  />
                  <Field
                    label="Company"
                    id="company"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Your company"
                  />
                </div>
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  required
                />
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    required
                    rows={5}
                    placeholder="Product, box type, approximate volumes, timeline…"
                    className="w-full resize-y rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="group h-12 w-full text-base sm:w-auto sm:px-8"
                >
                  Send request
                  <Send className="transition-transform group-hover:translate-x-0.5" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  This opens your email app with the details filled in. Prefer to
                  call? {company.phone}.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  ...props
}: { label: string } & React.ComponentProps<"input">) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
      />
    </div>
  );
}
