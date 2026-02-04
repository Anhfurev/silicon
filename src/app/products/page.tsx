"use client";

import { Check } from "lucide-react";

const products = [
  {
    title: "Нягтлан бодох бүртгэл",
    description:
      "Манай клауд систем нь хэрэглэхэд энгийн бөгөөд анхан шатны баримт боловсруулж үндсэн хөрөнгө, авлага өглөг,санхүүгийн тайланг бэлтгэх зориулалттай. Програмд нэмэлт тохиргоо хийх боломжтой.",
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
    title: "Хүний нөөц, цалин хөлс",
    description:
      "Хүний нөөц ажилчдын бүртгэл, албан тушаал, хэлтэс тасгийн бүртгэл болон шилжилт хөдөлгөөн, тушаал шийдвэр бүртгэнэ.",
    features: ["Хүний нөөц", "Цалин хөлс", "Тайлан"],
  },
  {
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
    title: "Цалин хөлсний систем",
    description:
      "Цалингийн тооцооллыг хийх зориулалттай. Байгууллагын онцлогт тохирсон загварыг өөрчлөн нийцүүлэх боломжтой.",
    features: ["Цагийн бүртгэл", "Цалин тооцоолол", "Цалин хөлсний тайлан"],
  },
  {
    title: "Даатгалын систем",
    description:
      "Даатгал болон брокерийн үндсэн үйл ажиллагааг автоматжуулсан  цогц систем.",
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
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative pt-32 px-6 lg:px-8 overflow-hidden bg-linear-to-b from-background via-muted/30 to-background">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#319799]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#319799]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-slate-500">
              ERP + <span className="text-[#319799]">AI</span>
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-1 w-24 bg-[#319799] rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Цахим шилжилтийн цогц шийдэл
            </p>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#319799] mb-3">
                      {product.title}
                    </h3>
                    <div className="h-0.5 w-16 bg-[#319799] rounded-full mb-4" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-3">
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Check className="h-5 w-5 text-[#319799] shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
