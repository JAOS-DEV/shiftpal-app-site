import { getAssetPath } from "@/lib/paths";
import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

const screenshots: Screenshot[] = [
  {
    src: "/screenshots/tracker-manual.png",
    alt: "ShiftPal tracker screen showing manual shift entry",
    caption: "Log your shifts in seconds with manual entry or timer mode",
  },
  {
    src: "/screenshots/pay-breakdown.png",
    alt: "Detailed pay breakdown showing calculations and deductions",
    caption:
      "See exactly how your pay is calculated with complete transparency",
  },
  {
    src: "/screenshots/pay-history.png",
    alt: "Weekly earnings summary with goal progress tracking",
    caption: "Track your progress toward weekly and monthly earnings goals",
  },
];

export default function AppPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See ShiftPal in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful, intuitive interface designed for real shift workers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Phone mockup */}
              <div className="relative w-full max-w-[280px] mb-6">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-gray-900">
                  <Image
                    src={getAssetPath(screenshot.src)}
                    alt={screenshot.alt}
                    width={414}
                    height={896}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10" />
              </div>

              {/* Caption */}
              <p className="text-center text-gray-700 font-medium px-4">
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
