"use client";

import {
  Bot,
  MessageSquare,
  BarChart3,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Харилцагчийн санал хүсэлт",
    description:
      "Худалдан авагч, харилцагчаас ирсэн санал хүсэлтийг хиймэл оюун ухаан ашиглан хүний оролцоогүйгээр боловсруулах",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Худалдан авалт, агуулахын удирдлага",
    description:
      "Худалдан авалт, агуулахын мэдээллийг хиймэл оюун ухаан ашиглан шийдвэр гаргах",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Санхүүгийн дүн шинжилгээ",
    description: "Санхүүгийн мэдээлэлд дүн шинжилгээ хийж шийдвэр гаргах",
  },
];

export default function AIAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 px-6 lg:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A0779]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A0779]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0779]/10 border border-[#0A0779]/20 rounded-full text-sm font-medium text-[#0A0779]">
            <Bot className="h-4 w-4" />
            <span>AI Agent</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Хиймэл оюун ухаант <span className="text-[#0A0779]">AI AGENT</span>{" "}
            хөгжүүлэх үйлчилгээ
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ERP системтэй нэгтгэгдсэн AI Agent нь таны бизнесийн үйл ажиллагааг
            автоматжуулна
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.number}
                className="group relative flex gap-6 p-6 bg-white border border-border rounded-2xl hover:border-[#0A0779]/50 hover:shadow-2xl hover:shadow-[#0A0779]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/0 group-hover:from-[#0A0779]/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative flex gap-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0A0779]/10 text-[#0A0779] font-bold text-lg shrink-0 transition-colors duration-500 group-hover:bg-[#0A0779] group-hover:text-white group-hover:scale-110">
                    {feature.number}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[#0A0779]" />
                      <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-[#0A0779]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-[#0A0779] p-10 text-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px]" />
            <div className="relative space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                AI Agent-ийг өөрийн бизнест нэвтрүүлэхийг хүсч байна уу?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto">
                Бид танд AI Agent хөгжүүлж, ERP системтэй нэгтгэх үйлчилгээ
                үзүүлнэ
              </p>
              <Button
                size="lg"
                className="bg-white text-[#0A0779] hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  Холбогдох
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
