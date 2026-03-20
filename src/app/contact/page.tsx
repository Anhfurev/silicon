"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Нэр дор хаяж 2 тэмдэгт байна"),
  email: z.string().email("Зөв имэйл хаяг оруулна уу"),
  message: z.string().min(10, "Хүсэлт дор хаяж 10 тэмдэгт байна"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Утас",
    value: "7601 1124",
    href: "tel:+97676011124",
  },
  {
    icon: Mail,
    title: "Имэйл",
    value: "contact@bt-solution.com",
    href: "mailto:contact@bt-solution.com",
  },
  {
    icon: MapPin,
    title: "Хаяг",
    value: "Жон бээс төв 202 тоот, Баянгол дүүрэг, Улаанбаатар",
    href: null,
  },
  {
    icon: Clock,
    title: "Ажлын цаг",
    value: "Даваа - Баасан: 09:00 - 18:00",
    href: null,
  },
];

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      toast.success("Таны хүсэлт амжилттай илгээгдлээ!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0A0779]/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-[#0A0779]">Холбоо</span> барих
          </h1>
          <div className="h-1 w-24 bg-[#0A0779] rounded-full mx-auto" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Бидэнтэй холбогдох, асуулт асуух эсвэл санал хүсэлт илгээх
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Имэйл илгээх
              </h2>
              <p className="text-muted-foreground">
                Бидэнд мессеж үлдээгээрэй. Бид танд аль болох хурдан хариу өгөх
                болно.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Нэр</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Нэрээ оруулна уу..."
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имэйл</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Имэйл хаягаа оруулна уу..."
                          className="h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Хүсэлт</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Хүсэлтээ бичнэ үү..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-[#0A0779] hover:bg-[#1a17a9] text-white"
                >
                  {form.formState.isSubmitting ? "Илгээж байна..." : "Илгээх"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Холбоо барих мэдээлэл
              </h2>
              <p className="text-muted-foreground">
                Та бидэнтэй дараах аргуудаар холбогдох боломжтой.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-[#0A0779]/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-[#0A0779]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                if (info.href) {
                  return (
                    <a key={info.title} href={info.href} className="block">
                      {content}
                    </a>
                  );
                }

                return <div key={info.title}>{content}</div>;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
