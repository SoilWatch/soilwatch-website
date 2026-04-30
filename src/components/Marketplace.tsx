"use client";

import { useRef, useEffect } from "react";
import {
  ShoppingCart,
  Flame,
  Wheat,
  Beef,
  TreePine,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Category {
  icon: LucideIcon;
  label: string;
  description: string;
  tags: string[];
  accent: string;
  iconBg: string;
  iconColor: string;
}

const CATEGORIES: Category[] = [
  {
    icon: Beef,
    label: "Pastoralism & Grazing Lands",
    description:
      "Restoration of degraded pastoral and grazing lands through improved land governance, planned grazing, and incentives for long-term stewardship.",
    tags: ["Pastoralism", "Rangelands", "Land Governance"],
    accent: "bg-soil-50 border-soil-200 text-soil-700",
    iconBg: "bg-soil-100",
    iconColor: "text-soil-600",
  },
  {
    icon: Wheat,
    label: "Regenerative Land Management",
    description:
      "Projects that reverse degradation driven by unsustainable land management practices, including overgrazing, soil loss, and uncontrolled expansion.",
    tags: ["Restoration", "Soil Health", "Resilience"],
    accent: "bg-earth-50 border-earth-200 text-earth-700",
    iconBg: "bg-earth-100",
    iconColor: "text-earth-600",
  },
  {
    icon: TreePine,
    label: "Agroforestry & Tree-Based Systems",
    description:
      "Integration of trees into productive landscapes to improve carbon storage, biodiversity, livelihoods, and ecosystem stability.",
    tags: ["Co-benefits", "Livelihoods", "Carbon Storage"],
    accent: "bg-green-50 border-green-200 text-green-700",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: Flame,
    label: "High-Integrity Carbon Projects",
    description:
      "Projects designed to the highest methodological standards and continuous quality management, open to scrutiny at every stage.",
    tags: ["Verified", "Transparent", "High Integrity"],
    accent: "bg-amber-50 border-amber-200 text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
]

export default function Marketplace() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.08 },
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-shell relative overflow-hidden bg-soil-50 py-24"
      id="marketplace"
    >
      <div className="absolute inset-0 theme-grid opacity-[0.18]" />
      <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-earth-200/45 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="reveal mb-12 opacity-0">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-earth-700">
            <ShoppingCart size={12} />
            Carbon Marketplace
          </div>

          <h2 className="font-display mb-3 text-4xl font-bold uppercase text-soil-900 md:text-5xl">
            High-Integrity Carbon Projects
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-soil-600">
            We develop and connect buyers with high-integrity restoration projects backed by robust methodologies, satellite evidence, and continuous quality management.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.label}
                className="reveal flex flex-col gap-4 rounded-2xl border border-soil-100 bg-white p-6 opacity-0 transition-shadow duration-200 hover:shadow-md"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${cat.iconBg}`}
                >
                  <Icon size={22} className={cat.iconColor} />
                </div>

                <div>
                  <h3 className="font-display mb-1 text-base font-bold uppercase leading-tight text-soil-900">
                    {cat.label}
                  </h3>

                  <p className="text-sm leading-relaxed text-soil-500">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${cat.accent}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="reveal opacity-0 delay-300">
          <div className="overflow-hidden rounded-3xl border border-soil-200 bg-white">
            <div className="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-earth-600">
                  Explore project opportunities
                </p>

                <p className="max-w-md text-base text-soil-700">
                  Our verified project inventory is available on request. Reach
                  out and we&apos;ll match you with credits that fit your
                  criteria.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-soil-900 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors duration-150 hover:bg-earth-700"
              >
                Get in Touch
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
