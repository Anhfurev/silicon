"use client"

import { Check } from "lucide-react"

const products = [
  {
    title: "Silicon Accounting",
    description:
      "Нягтлан бодох бүртгэлийн цогц шийдэл бөгөөд санхүүгийн үйл явцыг автоматжуулж, ерөнхий журнал удирдаж, авлага, өглөгийг боловсруулж, илүү сайн бизнесийн шийдвэр гаргахад бодит цагийн санхүүгийн тайлан гаргадаг.",
    features: [
      "Мөнгөн хөрөнгийн бүртгэл",
      "Авлага, өглөгийн бүртгэл",
      "Ерөнхий журнал",
      "Зардлын бүртгэл",
      "Санхүүгийн тайлан",
      "Бараа материалын тооцоо",
    ],
  },
  {
    title: "Silicon Finance",
    description:
      "Дэвшилтэт санхүүгийн удирдлагын систем бөгөөд төсөвлөлт, урьдчилан таамаглал, мөнгөн урсгалын удирдлага, санхүүгийн төлөвлөлт, цогц санхүүгийн шинжилгээг хийж байгууллагын санхүүгийн гүйцэтгэлийг оновчтой болгодог.",
    features: [
      "Төсөвлөлт ба урьдчилан таамаглал",
      "Мөнгөн урсгалын удирдлага",
      "Санхүүгийн төлөвлөлт",
      "Цогц санхүүгийн шинжилгээ",
    ],
  },
  {
    title: "Silicon HRM",
    description:
      "Хүний нөөцийн удирдлагын цогц систем бөгөөд ажилтны бүртгэл, цалин хөлс, ирц, ажилд авах, гүйцэтгэлийн үнэлгээ болон ХН-тэй холбоотой бүх үйл явцыг удирдаж ажлын хүчний удирдлагыг хялбаршуулдаг.",
    features: [
      "Ажилтны бүртгэл",
      "Хэлтэс, салбаруудын мэдээлэл",
      "Гэр бүлийн бүртгэл",
      "Боловсролын бүртгэл",
      "Цалин хөлсний тооцоо",
      "Гүйцэтгэлийн үнэлгээ",
    ],
  },
  {
    title: "Silicon AI Agent",
    description:
      "Ухаалаг AI-д суурилсан агент бөгөөд бизнесийн үйл явцыг автоматжуулж, ухаалаг ойлголт өгч, шийдвэр гаргахад туслаж, машин сургалт болон автоматжуулалтын чадвараар бүтээмжийг нэмэгдүүлдэг.",
    features: [
      "Бизнесийн үйл явцын автоматжуулалт",
      "Ухаалаг ойлголт ба дүн шинжилгээ",
      "Шийдвэр гаргахад туслах",
      "Машин сургалт болон автоматжуулалт",
    ],
  },
  {
    title: "Silicon Project Management",
    description:
      "Төслийн удирдлагын цогц систем бөгөөд төслийн төлөвлөлт, хэрэгжүүлэлт, хяналт, нөөцийн удирдлага, хуваарь удирдлага, гүйцэтгэлийн хяналт зэрэг төслийн бүх үе шатыг удирдаж төслийн амжилттай хэрэгжилтийг хангадаг.",
    features: [
      "Төслийн төлөвлөлт ба хэрэгжүүлэлт",
      "Нөөцийн удирдлага",
      "Хуваарь удирдлага",
      "Гүйцэтгэлийн хяналт",
      "Төслийн тайлан ба шинжилгээ",
    ],
  },
  {
    title: "C#.NET Программ Хөгжүүлэлт",
    description:
      "Бид танд удирдлагын практикт чиглэсэн энгийн програмчлалын загвар, үйлчилгээд суурилсан архитектур, хялбар суурилуулалт, засвар үйлчилгээг санал болгож байна. Бид аж ахуйн нэгжүүдэд шаардлагатай программ хангамжийн шийдлүүдийг гаргаж хэрэгжүүлэхэд тусладаг.",
    features: [
      "Windows Azure / AWS Cloud Программ хөгжүүлэлт ба суулгалт",
      "BI Программ Хөгжүүлэлт / Big Data Analytics Power BI / Tableau",
      "Гуравдагч талын системтэй холбогдож ажиллах: SAP, Microsoft Dynamics (AX / D365)",
      "Web болон Windows орчинд ажиллах программ хангамжийн хөгжүүлэлт ба DevOps",
      "Гуравдагч талын API ашиглан өгөгдөл шилжүүлэлт ба хувиргалт (On-premise / Cloud орчин)",
      "eCommerce Программ хөгжүүлэлт ба Төлбөрийн шийдэл",
    ],
  },
  {
    title: "Бизнесийн удирдлага",
    description:
      "Power BI ашигласнаар та хүснэгт, spreadsheets зэрэг ямар ч эх сурвалцаас өгөгдлөө нэгэн цогц, үүлэн дээр суурилсан платформд нэгтгэж, хэзээ ч хоцрогддоггүй бодит цагийн мэдээлэлтэй тайлан, дүрслэл үүсгэх боломжтой.",
    features: [
      "Power BI руу өгөгдөл, тайлангаа оруулмагц бүгд автоматаар шинэчлэгдэнэ.",
      "Өгөгдлөөр өгүүлэмжтэй, ойлгомжтой дүрслэлүүд бий болго.",
      "Бодит цагийн мэдээллээ хуваалцаж, асуудал гарах магадлалтай үед сэрэмжлүүлэг тохируул.",
      "Хэн ямар багт байхаас үл хамааран хүмүүс өгөгдлийн талаар хоорондоо чатлан хэлэлцэх боломжтой.",
    ],
  },
  {
    title: "Datawarehouse зөвлөх үйлчилгээ",
    description:
      "Танай байгууллага ганцхан үйлчлүүлэгч, эсвэл ганцхан сорилтоор тодорхойлогдохгүй байдагтай адил танай өгөгдөл ч мөн нэг чиглэлээр хязгаарлагдахгүй. Байгууллагын бүх нэгж, бүх хэрэглэгч, бүх газар нутагт бий болж буй өгөгдлийн нэгдэл асар хурдтай өрнөж байна. Өгөгдлийг бүх эх сурвалцаас нь бүрэн дүүрэн ашиглаж, хүчирхэг ойлголт, дүгнэлт болгон хувиргаж чадсан байгууллагууд л өрсөлдөөнд үлдэж хоцорно. Одоо нэгдэх үү, эсвэл хоцрох уу гэдэг цаг ирсэн. Өгөгдөл бол ирээдүйн гол хөдөлгөгч хүч юм. Харин та өгөгдлөө ямар ч өгөгдлийн агуулах руу саадгүйгээр нэгтгэж, автоматжуулж, шилжүүлдэг, энгийн атлаа хүчирхэг шийдэл ашиглаж чадвал мэдээллээ шинжилгээ, тайлан болон хувирган өгөгдөлд тулгуурласан давуу байдлаа бүрэн нээж чадна.",
    features: [
      "BI хэрэгжилтийн төлөвлөлт",
      "Шийдлийн архитектурын боловсруулалт",
      "Datawarehouse шинжилгээ, үйлчилгээ",
      "Өгөгдлийн агуулах хэрэгжүүлэх стратеги боловсруулах",
    ],
  },
]

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Бүтээгдэхүүн, <span className="text-[#319799]">үйлчилгээ</span>
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-1 w-24 bg-[#319799] rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Байгууллагын үйл ажиллагааг бүхэлд нь хамарсан иж бүрэн шийдлүүд
            </p>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="group relative p-8 bg-background border border-border rounded-2xl hover:border-[#319799]/50 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#319799]/5 rounded-bl-[100px] transition-all duration-300 group-hover:w-32 group-hover:h-32" />
                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#319799] mb-3">{product.title}</h3>
                    <div className="h-0.5 w-16 bg-[#319799] rounded-full mb-4" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <div className="space-y-3">
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm">
                          <Check className="h-5 w-5 text-[#319799] flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
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
  )
}

