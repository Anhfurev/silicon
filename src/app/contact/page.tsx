"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add API call or email service integration here
    alert("Таны хүсэлт амжилттай илгээгдлээ!")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              <span className="text-[#319799]">Холбоо</span> барих
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-1 w-24 bg-[#319799] rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Бидэнтэй холбогдох, асуулт асуух эсвэл санал хүсэлт илгээх
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Имэйл илгээх</h2>
                <div className="h-0.5 w-16 bg-[#319799] rounded-full" />
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Нэр
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Нэрээ оруулна уу..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#319799]/20 focus:border-[#319799] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Имэйл
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Имэйл хаягаа оруулна уу..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#319799]/20 focus:border-[#319799] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Хүсэлт
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Хүсэлтээ бичнэ үү..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#319799]/20 focus:border-[#319799] transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#319799] hover:bg-[#267577] text-white"
                  size="lg"
                >
                  Илгээх
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Холбоо барих мэдээлэл</h2>
                <div className="h-0.5 w-16 bg-[#319799] rounded-full" />
              </div>
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#319799]/10">
                    <Phone className="h-6 w-6 text-[#319799]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Утас</h3>
                    <a
                      href="tel:+97676011124"
                      className="text-muted-foreground hover:text-[#319799] transition-colors"
                    >
                      7601 1124
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#319799]/10">
                    <Mail className="h-6 w-6 text-[#319799]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Имэйл</h3>
                    <a
                      href="mailto:contact@btsolution.co"
                      className="text-muted-foreground hover:text-[#319799] transition-colors"
                    >
                      contact@btsolution.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#319799]/10">
                    <MapPin className="h-6 w-6 text-[#319799]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Хаяг</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Happy Land Center, #6 Chingeltei District, 5th Khoroo, Ulaanbaatar, Mongolia
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="mt-8 p-6 bg-background border border-border rounded-2xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Манай мэргэжилтнүүд таны асуултанд хариулах, бүтээгдэхүүн үйлчилгээний талаар мэдээлэл өгөхөд бэлэн байна. 
                  Дээрх хэлбэрийг бөглөж илгээснээр бид танд удахгүй хариу өгөх болно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

