"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { company, productKeys } from "@/lib/content";
import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  const nav = t.nav;
  const footer = t.footer;
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
              {footer.blurb.replace("{location}", company.location)}
            </p>
            <p className="text-xs text-muted-foreground">{footer.tagline}</p>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              {footer.explore}
            </h3>
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
              {footer.whatWePrint}
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {productKeys.map((key) => (
                <li key={key}>{t.products.items[key].title}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              {footer.getInTouch}
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
                  {t.hours[0].days}
                  <br />
                  {t.hours[0].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. {footer.rights}
          </p>
          <p>
            {footer.since
              .replace("{location}", company.location)
              .replace("{year}", String(company.foundedYear))}
          </p>
        </div>
      </div>
    </footer>
  );
}
