"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const products = [
    "Silicon-Accounting",
    "Silicon-Finance",
    "Silicon-HRM",
    "Silicon-AI Agent",
    "Silicon-Procurement",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Animated Product Showcase Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-linear-to-b from-background via-muted/30 to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#319799]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#319799]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                Бүтээгдэхүүн
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                <br />
                <span className="text-[#319799]">SILICON ERP+AI</span>
              </h2>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                {products.map((product, index) => (
                  <div
                    key={product}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                      index === currentProduct
                        ? "opacity-100 translate-y-0 scale-100"
                        : index ===
                            (currentProduct - 1 + products.length) %
                              products.length
                          ? "opacity-0 -translate-y-8 scale-95"
                          : "opacity-0 translate-y-8 scale-95"
                    }`}
                  >
                    <span
                      className={
                        index === 0 ? "text-[#319799]" : "text-foreground"
                      }
                    >
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 pt-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProduct
                      ? "w-12 bg-[#319799]"
                      : "w-2 bg-border hover:bg-border/70"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-[#319799]">BT Solution LLC</span> компанийн
              тухай
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              “Би Ти Солюшн” ХХК компани нь 2009 онд үүсгэн байгуулагдан, 15
              гаруй жил тогтвортой үйл ажиллагаа явуулж байна.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">2009</div>
                <h3 className="text-xl font-semibold">Үүсгэн байгуулагдсан</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  “Би Ти Солюшн” ХХК компани нь 2009 онд үүсгэн байгуулагдсан.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">15+</div>
                <h3 className="text-xl font-semibold">Жил туршлага</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  ERP систем хөгжүүлэлт, нэвтрүүлэлтийн арвин туршлагатай.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">ERP+AI</div>
                <h3 className="text-xl font-semibold">Цогц шийдэл</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Санхүү, хүний нөөц, худалдан авалт, мөнгөн урсгалын нэгдсэн
                  удирдлагын систем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-[#319799]">SILICON</span> ERP+AI СИСТЕМ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Байгууллагын үйл ажиллагааг бүхэлд нь хамарсан иж бүрэн шийдэл
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">01</div>
                <h3 className="text-xl font-semibold">Санхүүгийн төлөвлөлт</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Байгууллагын санхүүгийн төлөвлөлтийг боловсронгуй болгож,
                  урьдчилан таамаглах боломж олгоно
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">02</div>
                <h3 className="text-xl font-semibold">
                  Орлого зарлагын хяналт
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Орлого зарлагын зарцуулалтыг бодитой цагт хянах, тайлан гаргах
                  функц
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">03</div>
                <h3 className="text-xl font-semibold">Гэрээний удирдлага</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Худалдан авалт болон борлуулалтын гэрээг бүртгэж, хянах боломж олгоно
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">04</div>
                <h3 className="text-xl font-semibold">Нягтлан бодох бүртгэл</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Нягтлан бодох бүртгэлийн үйл ажиллагааг бүрэн автоматжуулсан
                  систем
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">05</div>
                <h3 className="text-xl font-semibold">
                  Хүний нөөц
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Хүний нөөцийн бүртгэл, шилжилт хөдөлгөөнийг тайлагнах систем
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
              <div className="relative space-y-4">
                <div className="text-5xl font-bold text-[#319799]/20">06</div>
                <h3 className="text-xl font-semibold">Худалдан авалт</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Худалдан авалтын захиалга, харьцуулалт, гүйцэтгэл тайлан
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-linear-to-br from-[#319799]/10 via-background to-background">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#319799] to-[#267577] p-12 lg:p-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px]" />
            <div className="relative max-w-3xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
                Хиймэл оюун ухаант цахим шилжилтийн цогц шийдэл
              </h2>
              <p className="text-xl text-white/90 text-pretty leading-relaxed">
                Та цахим шилжилтээ эхлүүлээрэй. Бид танд туслахад бэлэн байна.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base bg-white hover:bg-white/90 text-[#319799]"
                  asChild
                >
                  <Link href="/contact">Үнэгүй зөвлөгөө авах</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/products">Бүтээгдэхүүнтэй танилцах</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
