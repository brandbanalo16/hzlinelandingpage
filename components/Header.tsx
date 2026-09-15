"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPopup = () => window.dispatchEvent(new Event("open-popup-form"));

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 px-6 py-3.5 rounded-2xl ${isScrolled
              ? "bg-white/85 backdrop-blur-xl border border-slate-200/60 shadow-sm"
              : "bg-white/60 backdrop-blur-md border border-slate-200/40"
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/src/img/logo.webp"
                alt="Horizon Line"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/#about-us" },
                { name: "Services", href: "/#services" },
                { name: "Business Setup", href: "/#business-setup" },
                { name: "Testimonials", href: "/#testimonials-heading" },
                { name: "Contact", href: "/#lead-form" }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold text-slate-600 hover:text-[#0A1628] transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2c3650] to-[#266464] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+97100000000"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#0A1628] transition-colors"
              >
                <Phone size={15} />
                +971 50 123 4567
              </a>
              <button
                onClick={openPopup}
                className="btn-gold px-6 py-2.5 rounded-xl text-sm shadow-sm"
              >
                Free Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#0A1628] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-28 px-4 pb-6 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/#why-horizon-line" },
              { name: "Services", href: "/#services" },
              { name: "Business Setup", href: "/#business-setup" },
              { name: "Testimonials", href: "/#testimonials-heading" },
              { name: "Contact", href: "/#lead-form" }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between p-4 rounded-xl text-lg font-bold text-[#0A1628] bg-slate-50 border border-slate-100 hover:border-[#266464]/30 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight size={18} className="text-[#266464]" />
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:+97100000000"
              className="flex items-center justify-center gap-2 p-4 rounded-xl text-[#0A1628] bg-slate-50 border border-slate-200 font-bold"
            >
              <Phone size={18} className="text-[#266464]" />
              Call +971 50 123 4567
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openPopup();
              }}
              className="btn-gold w-full p-4 rounded-xl text-center text-lg shadow-sm"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
