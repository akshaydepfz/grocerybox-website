import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { brand } from "@/lib/brand";
import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";

const productLinks = ["Features", "Pricing", "Merchant Dashboard", "Storefront"];
const companyLinks = ["About", "Careers", "Blog", "Contact"];
const supportLinks = ["Help Center", "Documentation", "Status"];
const legalLinks = ["Privacy Policy", "Terms of Service"];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-forest pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-text">
              {brand.tagline} Launch and manage your branded grocery store with{" "}
              {brand.name}.
            </p>
            <div className="mt-6 flex gap-3">
              {[Share2, Globe, Mail, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-secondary-text transition hover:border-lime/40 hover:text-lime"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Support" links={supportLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-secondary-text">
          © 2026 GroceryBox. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-sm text-secondary-text transition hover:text-lime"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}