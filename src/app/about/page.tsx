"use client"

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="text-[#319799]">БИДНИЙ</span> ТУХАЙ
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-1 w-24 bg-[#319799] rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Бид бизнесийн байгууллагын онцлогт тохирсон мэдээллийн технологийн
              <strong className="text-[#319799] font-semibold">
                {" "}цогц шийдлийг
              </strong>{" "}
              нэвтрүүлж, цахим шилжилтийг дэмжсэн иж бүрэн үйлчилгээ үзүүлнэ.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg font-semibold text-foreground">
                “Би Ти Солюшн” ХХК компани нь 2009 онд үүсгэн байгуулагдан,
                15 гаруй жил тогтвортой үйл ажиллагаа явуулж байна.
              </p>

              <p className="text-base leading-relaxed">
                Бид бүх төрлийн аж ахуйн нэгж, байгууллагуудын санхүүгийн хяналт,
                хүний нөөц, цалин хөлс, үйлдвэрлэл, нягтлан бодох бүртгэлийн
                үйл ажиллагааг автоматжуулах{" "}
                <strong className="text-[#319799]">SILICON ERP</strong>{" "}
                цогц системийг боловсруулан амжилттай нэвтрүүлэн ажиллаж байна.
              </p>

              <p className="text-base leading-relaxed">
                <strong className="text-[#319799]">SILICON ERP</strong>{" "}
                системийн модулиуд нь бие даан болон хоорондоо уялдан ажиллах
                боломжтой бөгөөд байгууллагын онцлогт тохируулан уян хатан
                байдлаар ашиглагдана.
              </p>

              <p className="text-base leading-relaxed">
                Манай системийг хэрэглэснээр мөнгөн урсгалын төлөвлөлт,
                гүйцэтгэл, бараа материал, үндсэн хөрөнгө, авлага,
                өглөгийн бүртгэл, орлого зардлын хяналтыг
                бүрэн автоматжуулах боломж бүрдэнэ.
              </p>
            </div>
          </div>

          {/* Stats Section */}
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
                <div className="text-5xl font-bold text-[#319799]/20">ERP</div>
                <h3 className="text-xl font-semibold">Цогц шийдэл</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Санхүү, хүний нөөц, худалдан авалт, мөнгөн урсгалын
                  нэгдсэн удирдлагын систем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
