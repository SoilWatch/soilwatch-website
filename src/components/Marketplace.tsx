"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Flame,
  Wheat,
  Beef,
  TreePine,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

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
    icon: Flame,
    label: "Artisanal Biochar",
    description:
      "Small-batch biochar from agricultural residues, sequestering carbon for centuries while improving soil structure and water retention.",
    tags: ["Soil Carbon", "Co-benefits", "Long-lived"],
    accent: "bg-amber-50 border-amber-200 text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Wheat,
    label: "Regenerative Agriculture",
    description:
      "Cover cropping, no-till, and compost programmes that build organic matter and draw down atmospheric CO2.",
    tags: ["Soil Health", "Biodiversity", "Food System"],
    accent: "bg-earth-50 border-earth-200 text-earth-700",
    iconBg: "bg-earth-100",
    iconColor: "text-earth-600",
  },
  {
    icon: Beef,
    label: "Livestock Management",
    description:
      "Holistic planned grazing and enteric methane reduction strategies that turn grasslands into durable carbon sinks.",
    tags: ["Methane Reduction", "Grasslands", "Verified"],
    accent: "bg-soil-50 border-soil-200 text-soil-700",
    iconBg: "bg-soil-100",
    iconColor: "text-soil-600",
  },
  {
    icon: TreePine,
    label: "Agroforestry",
    description:
      "Tree-based farming systems such as silvopasture and alley cropping that store carbon while supporting biodiversity and livelihoods.",
    tags: ["Above-ground", "Permanence", "Co-benefits"],
    accent: "bg-green-50 border-green-200 text-green-700",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
];

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
            Explore Verified Carbon Credit Categories
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-soil-600">
            Our portfolio includes high-integrity product categories across land restoration, agriculture, livestock, and biochar. Specific project inventory is available on request.
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
                  Interested in specific projects?
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
