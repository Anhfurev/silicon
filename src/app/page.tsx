/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Users,
  ShoppingCart,
  Calculator,
  Wallet,
  Shield,
  ChevronRight,
} from "lucide-react";

const products = [
  "Silicon-Accounting",
  "Silicon-Finance",
  "Silicon-HRM",
  "Silicon-AI Agent",
  "Silicon-Procurement",
];

const features = [
  {
    icon: Wallet,
    number: "01",
    title: "Санхүүгийн төлөвлөлт",
    description:
      "Байгууллагын санхүүгийн төлөвлөлтийг боловсронгуй болгож, урьдчилан таамаглах боломж олгоно",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Орлого зарлагын хяналт",
    description:
      "Орлого болон зарлагын урсгалыг хянан шинжилж, тайлан гаргах систем",
  },
  {
    icon: Shield,
    number: "03",
    title: "Гэрээний удирдлага",
    description:
      "Худалдан авалт болон борлуулалтын гэрээг бүртгэж, хянах боломж олгоно",
  },
  {
    icon: Calculator,
    number: "04",
    title: "Нягтлан бодох бүртгэл",
    description:
      "Нягтлан бодох бүртгэлийн үйл ажиллагааг бүрэн автоматжуулсан систем",
  },
  {
    icon: Users,
    number: "05",
    title: "Хүний нөөц",
    description: "Хүний нөөцийн бүртгэл, шилжилт хөдөлгөөнийг тайлагнах систем",
  },
  {
    icon: ShoppingCart,
    number: "06",
    title: "Худалдан авалт",
    description: "Худалдан авалтын захиалга, харьцуулалт, гүйцэтгэл тайлан",
  },
];

const stats = [
  {
    value: "2009",
    label: "Үүсгэн байгуулагдсан",
    description: "15+ жилийн туршлага",
  },
  { value: "50+", label: "Харилцагч", description: "Итгэлтэй түншүүд" },
  { value: "24/7", label: "Дэмжлэг", description: "Тасралтгүй үйлчилгээ" },
];

function AnimatedGradientOrb({ className }: { className?: string }) {
  return <div className={`absolute rounded-full blur-3xl ${className}`} />;
}

function FloatingParticle({
  delay,
  duration,
  left,
  top,
  className,
}: {
  delay: number;
  duration: number;
  left: number;
  top: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-1 h-1 bg-[#0A0779]/30 rounded-full ${className}`}
      style={{
        left: `${left}%`,
        top: `${top}%`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function parseNumericSuffix(text: string) {
  // Examples:
  // "2009" => { target: 2009, suffix: "" }
  // "50+" => { target: 50, suffix: "+" }
  // "24/7" => { target: 24, suffix: "/7" }
  const normalized = text.replace(/,/g, "").trim();
  const match = normalized.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: text };
  return { target: Number(match[1]), suffix: match[2] ?? "" };
}

function CountUpValue({ value }: { value: string }) {
  const { target, suffix } = parseNumericSuffix(value);
  const [display, setDisplay] = useState<string>(() => `0${suffix}`);
  const elRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setDisplay(`0${suffix}`);

    const el = elRef.current;
    if (!el || target <= 0) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    let raf = 0;
    let started = false;
    const durationMs = 1200;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;

        const start = performance.now();
        const from = 0;

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs);
          const eased = easeOutCubic(t);
          const next = Math.round(from + (target - from) * eased);
          setDisplay(`${next}${suffix}`);

          if (t < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [suffix, target]);

  return <span ref={elRef}>{display}</span>;
}

export default function Page() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white" suppressHydrationWarning>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-16 sm:pt-24 sm:pb-24 px-6 lg:px-8 overflow-hidden min-h-[75vh] sm:min-h-[90vh] flex items-center bg-white"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A077908_1px,transparent_1px),linear-gradient(to_bottom,#0A077908_1px,transparent_1px)] bg-size-[64px_64px] opacity-35" />

          {/* Animated Gradient Orbs */}
          <AnimatedGradientOrb className="top-1/4 left-1/4 w-[520px] h-[520px] bg-linear-to-br from-[#ff6b35]/10 to-[#0A0779]/4" />
          <AnimatedGradientOrb className="bottom-1/4 right-1/4 w-[440px] h-[440px] bg-linear-to-tl from-[#0A0779]/8 to-[#ff6b35]/5" />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.45}
              duration={3.2 + (i % 5) * 0.35}
              left={15 + i * 12}
              top={22 + (i % 3) * 22}
              className={i % 3 === 0 ? "opacity-70" : "opacity-40"}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl w-full">
          <div className="text-center space-y-8">
            {/* Animated Badge */}
            <Link href="/products">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0779]/5 border border-[#0A0779]/20 rounded-full text-sm font-medium text-[#0A0779] backdrop-blur-sm hover:bg-[#0A0779]/10 transition-all duration-300 cursor-default group">
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>Бүтээгдэхүүн</span>
                <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-balance">
              <p className="bg-linear-to-r from-[#0A0779] via-[#1a17a9] to-[#0A0779] bg-clip-text text-transparent animate-gradient">
                SILICON
              </p>{" "}
              <span className="text-foreground">ERP+AI</span>
            </h1>
            <input type="text" />

            {/* Animated Product Names */}
            <div className="relative h-16 md:h-20 flex items-center justify-center overflow-hidden">
              {mounted ? (
                products.map((product, index) => (
                  <div
                    key={product}
                    className={`absolute bg-white text-2xl md:text-3xl lg:text-4xl font-semibold transition-all duration-700 ease-out ${
                      index === currentProduct
                        ? "opacity-100 translate-y-0 scale-100"
                        : index ===
                            (currentProduct - 1 + products.length) %
                              products.length
                          ? "opacity-0 -translate-y-10 scale-95"
                          : "opacity-0 translate-y-10 scale-95"
                    }`}
                  >
                    <span className="text-muted-foreground">{product}</span>
                  </div>
                ))
              ) : (
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  <span className="text-muted-foreground">{products[0]}</span>
                </div>
              )}
            </div>

            {/* Animated Dots Navigation */}
            <div className="flex items-center justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                    mounted && index === currentProduct
                      ? "w-10 bg-[#0A0779] animate-glow"
                      : "w-2.5 bg-border hover:bg-[#0A0779]/30 hover:scale-125"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
              suppressHydrationWarning
            >
              Байгууллагын үйл ажиллагааг бүхэлд нь хамарсан иж бүрэн цахим
              шийдэл
            </p>

            {/* CTA Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                className="bg-[#0A0779] hover:bg-[#1a17a9] text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-[#0A0779]/20 hover:shadow-xl hover:shadow-[#0A0779]/30 hover:-translate-y-0.5 transition-all duration-300 group"
                asChild
              >
                <Link href="/contact">
                  Үнэгүй зөвлөгөө авах
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-xl border-2 hover:border-[#0A0779] hover:text-[#0A0779] hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <Link href="/products">Бүтээгдэхүүн үзэх</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Stats Section with animated counters */}
      <section className="py-14 sm:py-20 px-6 lg:px-8 bg-linear-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group text-center space-y-3 p-6 sm:p-8 rounded-2xl bg-white backdrop-blur-sm border border-border/50 hover:border-[#0A0779]/30 hover:shadow-xl hover:shadow-[#0A0779]/5 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold bg-linear-to-br from-[#0A0779] to-[#1a17a9] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  <CountUpValue value={stat.value} />
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with staggered cards */}
      <section className="py-20 sm:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-10 sm:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              <span className="bg-linear-to-r from-[#0A0779] to-[#1a17a9] bg-clip-text text-transparent">
                SILICON
              </span>{" "}
              ERP+AI СИСТЕМ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Байгууллагын үйл ажиллагааг бүхэлд нь хамарсан иж бүрэн шийдэл
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative p-8 bg-white border border-border rounded-2xl hover:border-[#0A0779]/50 hover:shadow-2xl hover:shadow-[#0A0779]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/0 group-hover:from-[#0A0779]/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="h-14 w-14 rounded-xl bg-[#0A0779]/10 flex items-center justify-center group-hover:bg-[#0A0779] group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-7 w-7 text-[#0A0779] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <span className="text-5xl font-bold text-[#0A0779] group-hover:text-[#0A0779]/80 transition-colors duration-500">
                        {feature.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-[#0A0779] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with premium design */}
      <section className="py-20 sm:py-8 pt-0 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0A0779] via-[#1a17a9] to-[#0A0779] p-12 md:p-20">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Floating shapes */}
            <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full animate-pulse" />
            <div
              className="absolute bottom-10 left-10 w-32 h-32 border border-white/5 rounded-2xl rotate-12 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />

            <div className="relative max-w-3xl space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
                Хиймэл оюун ухаант цахим шилжилтийн цогц шийдэл
              </h2>
              <p className="text-xl text-white/80 text-pretty leading-relaxed">
                Та цахим шилжилтээ эхлүүлээрэй. Бид танд туслахад бэлэн байна.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0A0779] hover:bg-white/90 text-base px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 font-semibold group"
                  asChild
                >
                  <Link href="/contact">
                    Зөвлөгөө авах
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white !important:text-white hover:bg-white/10 bg-transparent text-base px-8 py-6 rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                  asChild
                >
                  <Link
                    href="/products"
                    className="text-white hover:text-white"
                  >
                    Бүтээгдэхүүнтэй танилцах
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
