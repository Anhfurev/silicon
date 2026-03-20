"use client";

import {
  Check,
  Calculator,
  ShoppingCart,
  Users,
  Wallet,
  Building2,
  Shield,
} from "lucide-react";

const products = [
  {
    icon: Calculator,
    title: "Нягтлан бодох бүртгэл",
    description:
      "Манай клауд систем нь хэрэглэхэд энгийн бөгөөд анхан шатны баримт боловсруулж үндсэн хөрөнгө, авлага өглөг, санхүүгийн тайланг бэлтгэх зориулалттай. Програмд нэмэлт тохиргоо хийх боломжтой.",
    features: [
      "Ерөнхий журнал",
      "Бараа материал",
      "Авлага, Өглөг",
      "Үндсэн хөрөнгө",
      "Цалин хөлс",
      "Санхүүгийн тайлан",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Худалдан авалтын систем",
    description:
      "Байгууллагын тасралтгүй хэвийн үйл ажиллагааг хангахад шаардлагатай бараа материалын захиалга бэлтгэх, харьцуулах, үний санал авах, зохих нөөц бүрдүүлэх, хүлээн авах үйл ажиллагааг автоматжуулна.",
    features: [
      "Худалдан авалтын хүсэлт",
      "Худалдан авалтын захиалга",
      "Үнийн саналын харьцуулалт",
      "Худалдан авалтын тайлан",
      "Агуулахын тайлан",
    ],
  },
  {
    icon: Users,
    title: "Хүний нөөц, цалин хөлс",
    description:
      "Хүний нөөц ажилчдын бүртгэл, албан тушаал, хэлтэс тасгийн бүртгэл болон шилжилт хөдөлгөөн, тушаал шийдвэр бүртгэнэ.",
    features: ["Хүний нөөц", "Цалин хөлс", "Тайлан"],
  },
  {
    icon: Wallet,
    title: "Мөнгөн урсгалын төлөвлөлт",
    description:
      "Мөнгөний орох, гарах урсгалын төлөвлөлтийг гэрээтэй уялдуулан хянах систем бөгөөд төлөвлөлт, гүйцэтгэлийг харьцуулан шинжлэх боломж олгоно.",
    features: [
      "Мөнгөн урсгалын төлөвлөлт",
      "Гэрээний бүртгэл",
      "Харьцуулсан тайлан",
    ],
  },
  {
    icon: Building2,
    title: "Цалин хөлсний систем",
    description:
      "Цалингийн тооцооллыг хийх зориулалттай. Байгууллагын онцлогт тохирсон загварыг өөрчлөн нийцүүлэх боломжтой.",
    features: ["Цагийн бүртгэл", "Цалин тооцоолол", "Цалин хөлсний тайлан"],
  },
  {
    icon: Shield,
    title: "Даатгалын систем",
    description:
      "Даатгал болон брокерийн үндсэн үйл ажиллагааг автоматжуулсан цогц систем.",
    features: [
      "Санхүү",
      "Даатгал",
      "Нөхөн төлбөр",
      "Удирдлагын тайлан",
      "Загварчлал",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 px-6 lg:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A0779]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A0779]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              ERP + <span className="text-[#0A0779]">AI</span>
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-1 w-24 bg-[#0A0779] rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Цахим шилжилтийн цогц шийдэл
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.title}
                  className="group relative p-8 bg-white border border-border rounded-2xl hover:border-[#0A0779]/50 hover:shadow-2xl hover:shadow-[#0A0779]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/0 group-hover:from-[#0A0779]/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="h-14 w-14 rounded-xl bg-[#0A0779]/10 flex items-center justify-center group-hover:bg-[#0A0779] group-hover:scale-110 transition-all duration-500">
                          <Icon className="h-7 w-7 text-[#0A0779] group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {product.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="h-5 w-5 rounded-full bg-[#0A0779]/10 flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:bg-[#0A0779]">
                              <Check className="h-3 w-3 text-[#0A0779] transition-colors duration-500 group-hover:text-white" />
                            </div>
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
