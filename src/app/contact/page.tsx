"use client";

import { Phone, Mail, MapPin } from "lucide-react";
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

/* ===============================
   ZOD SCHEMA
================================ */
const contactSchema = z.object({
  name: z.string().min(2, "Нэр дор хаяж 2 тэмдэгт байна"),
  email: z.string().email("Зөв имэйл хаяг оруулна уу"),
  message: z.string().min(10, "Хүсэлт дор хаяж 10 тэмдэгт байна"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  /* ===============================
     SUBMIT
  ================================ */
  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Таны хүсэлт амжилттай илгээгдлээ!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="relative pt-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-[#319799]">Холбоо</span> барих
          </h1>
          <div className="h-1 w-24 bg-[#319799] rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Бидэнтэй холбогдох, асуулт асуух эсвэл санал хүсэлт илгээх
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Имэйл илгээх</h2>

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
                        <Input placeholder="Нэрээ оруулна уу..." {...field} />
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
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-[#319799] hover:bg-[#267577]"
                >
                  {form.formState.isSubmitting
                    ? "Илгээж байна..."
                    : "Илгээх"}
                </Button>
              </form>
            </Form>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Холбоо барих мэдээлэл</h2>
            <Info icon={<Phone />} title="Утас" value="7601 1124" />
            <Info
              icon={<Mail />}
              title="Имэйл"
              value="contact@bt-solution.com"
            />
            <Info
              icon={<MapPin />}
              title="Хаяг"
              value="Happy Land Center, Chingeltei District, Ulaanbaatar"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===============================
   INFO ITEM
================================ */
function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-[#319799]/10 text-[#319799]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
