import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-light py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Track Your Shifts,
              <br />
              Calculate Your Pay
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              The simple, powerful shift tracker for hourly workers. Track
              hours, breaks, and earnings in one beautiful app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <Download className="w-6 h-6 mr-2" />
                Download for iOS
              </a>
              <button className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all">
                Learn More
              </button>
            </div>

            <p className="text-sm text-blue-100 mt-6">
              Currently available on iOS. Android coming soon.
            </p>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative lg:block hidden">
            <div className="relative z-10">
              {/* Placeholder for app mockup */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[9/19] bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src="/logo.png"
                      alt="ShiftPal App Icon"
                      width={128}
                      height={128}
                      className="w-32 h-32 mx-auto mb-4 drop-shadow-2xl"
                    />
                    <p className="text-white text-sm opacity-75">
                      Available on iOS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
