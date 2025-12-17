"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/shiftpal-app-site/logo.png"
              alt="ShiftPal Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-text-light">ShiftPal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-text-light hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/privacy"
              className="text-text-light hover:text-primary transition-colors font-medium"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-text-light hover:text-primary transition-colors font-medium"
            >
              Terms
            </Link>
            <a
              href="#download"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-text-light hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/privacy"
              className="block text-text-light hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="block text-text-light hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <a
              href="#download"
              className="block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
