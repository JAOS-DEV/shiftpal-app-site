import Image from "next/image";
import { getAssetPath } from "@/lib/paths";

interface PhoneMockupProps {
  screenshot: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function PhoneMockup({
  screenshot,
  alt,
  priority = false,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto w-[300px] lg:w-[350px] ${className}`}>
      {/* iPhone frame */}
      <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl">
        {/* Screen */}
        <div className="relative bg-white">
          <Image
            src={getAssetPath(screenshot)}
            alt={alt}
            width={414}
            height={896}
            priority={priority}
            className="w-full h-auto"
          />
        </div>

        {/* iPhone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
      </div>

      {/* Reflection effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}

