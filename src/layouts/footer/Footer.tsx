"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Бидний тухай
            </h3>
            <div className="h-0.5 w-12 bg-[#319799] rounded-full" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Бизнесээ шинэ түвшинд гаргахад бэлэн үү?
            </p>
            <p className="text-sm text-muted-foreground">
              Утас:{" "}
              <a
                href="tel:+97676011124"
                className="text-[#319799] hover:underline"
              >
                +976 7601 1124
              </a>
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Холбоо барих
            </h3>
            <div className="h-0.5 w-12 bg-[#319799] rounded-full" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#319799] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+97676011124"
                  className="hover:text-[#319799] transition-colors"
                >
                  7601 1124
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#319799] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@btsolution.co"
                  className="hover:text-[#319799] transition-colors"
                >
                  contact@btsolution.co
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#319799] flex-shrink-0 mt-0.5" />
                <span>
                  Happy Land Center, #6 Chingeltei District, 5th Khoroo,
                  Ulaanbaatar, Mongolia
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Холбоос</h3>
            <div className="h-0.5 w-12 bg-[#319799] rounded-full" />
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-[#319799] transition-colors"
              >
                Нүүр хуудас
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-[#319799] transition-colors"
              >
                Бидний тухай
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-[#319799] transition-colors"
              >
                Бүтээгдэхүүн
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-[#319799] transition-colors"
              >
                Холбоо барих
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Copyright BT Solution {new Date().getFullYear()}. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
