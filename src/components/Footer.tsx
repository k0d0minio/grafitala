"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { company, nav, products } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-xl font-bold tracking-tight">
                {company.name}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A family print house making folding-carton packaging and labels
              for the food industry — designed, printed, cut and glued in-house
              in {company.location}.
            </p>
            <p className="text-xs text-muted-foreground">
              We handle the packaging. You handle the packing.
            </p>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What we print */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              What we print
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {products.map((p) => (
                <li key={p.key}>{p.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={company.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-primary"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {company.hours[0].days}
                  <br />
                  {company.hours[0].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Printing packaging in {company.location} since {company.foundedYear}.</p>
        </div>
      </div>
    </footer>
  );
}
