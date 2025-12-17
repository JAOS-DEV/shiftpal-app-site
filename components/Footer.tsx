import { Heart, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-light border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="ShiftPal Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold text-text-light">
                ShiftPal
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              Track your shifts, calculate your pay.
              <br />
              Built with <Heart className="inline w-4 h-4 text-red-500" /> for
              shift workers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-text-light mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-text-light mb-4">Support</h3>
            <a
              href="mailto:support@shiftpal.app"
              className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>shiftpalapp@gmail.com</span>
            </a>
            <p className="text-text-secondary text-xs mt-4">
              Developer: James O&apos;Sullivan
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2025 ShiftPal. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs mt-2">
            Built with React Native • Firebase • TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
