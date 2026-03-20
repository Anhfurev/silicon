"use client";

import { Building2, Users, Award, Target } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "2009",
    label: "Үүсгэн байгуулагдсан",
    description: '"Би Ти Солюшн" ХХК компани нь 2009 онд үүсгэн байгуулагдсан.',
  },
  {
    icon: Award,
    value: "15+",
    label: "Жил туршлага",
    description: "ERP систем хөгжүүлэлт, нэвтрүүлэлтийн арвин туршлагатай.",
  },
  {
    icon: Target,
    value: "ERP+AI",
    label: "Цогц шийдэл",
    description:
      "Санхүү, хүний нөөц, худалдан авалт, мөнгөн урсгалын нэгдсэн удирдлагын систем.",
  },
];

const values = [
  {
    icon: Users,
    title: "Харилцагч төвтэй",
    description:
      "Харилцагчийн хэрэгцээг нарийвчлан судалж, тохирсон шийдлийг санал болгоно.",
  },
  {
    icon: Award,
    title: "Чанарын баталгаа",
    description:
      "Бид чанарын өндөр стандартыг баримталж, найдвартай систем бүтээдэг.",
  },
  {
    icon: Target,
    title: "Инновац",
    description:
      "Хамгийн сүүлийн үеийн технологи, хиймэл оюун ухааныг нэвтрүүлнэ.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 px-6 lg:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A0779]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A0779]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              <span className="text-[#0A0779]">БИДНИЙ</span> ТУХАЙ
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-1 w-24 bg-[#0A0779] rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Бид бизнесийн байгууллагын онцлогт тохирсон хиймэл оюун ухааны
              <strong className="text-[#0A0779] font-semibold">
                {" "}
                цогц шийдлийг{" "}
              </strong>
              нэвтрүүлж, цахим шилжилтийг дэмжсэн иж бүрэн үйлчилгээ үзүүлнэ.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 -mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-muted/30 rounded-2xl p-8 space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Бид бүх төрлийн аж ахуйн нэгж, байгууллагуудын санхүүгийн
                хяналт, хүний нөөц, цалин хөлс, үйлдвэрлэл, нягтлан бодох
                бүртгэлийн үйл ажиллагааг автоматжуулах
                <strong className="text-[#0A0779]"> SILICON ERP + AI </strong>
                цогц системийг боловсруулан амжилттай нэвтрүүлэн ажиллаж байна.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-[#0A0779]">SILICON ERP + AI </strong>
                системийн модулиуд нь бие даан болон хоорондоо уялдан ажиллах
                боломжтой бөгөөд байгууллагын онцлогт тохируулан уян хатан
                байдлаар ашиглагдана. Манай системийг хэрэглэснээр мөнгөн
                урсгалын төлөвлөлт, гүйцэтгэл, бараа материал, үндсэн хөрөнгө,
                авлага, өглөгийн бүртгэл, орлого зардлын хяналтыг бүрэн
                автоматжуулах боломж бүрдэнэ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative p-8 bg-white border border-border rounded-2xl hover:border-[#0A0779]/50 hover:shadow-2xl hover:shadow-[#0A0779]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/0 group-hover:from-[#0A0779]/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-14 w-14 rounded-xl bg-[#0A0779]/10 flex items-center justify-center group-hover:bg-[#0A0779] group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-7 w-7 text-[#0A0779] group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-[#0A0779]">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Бидний <span className="text-[#0A0779]">үнэт зүйлс</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative p-6 bg-white border border-border rounded-2xl hover:border-[#0A0779]/50 hover:shadow-2xl hover:shadow-[#0A0779]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/0 group-hover:from-[#0A0779]/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative space-y-4">
                    <div className="h-14 w-14 rounded-xl bg-[#0A0779]/10 flex items-center justify-center group-hover:bg-[#0A0779] group-hover:scale-110 transition-all duration-500">
                      <Icon className="h-7 w-7 text-[#0A0779] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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
