import { ArrowRight, Download } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Simplify Your Shift Tracking?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Join thousands of shift workers who trust ShiftPal to track their
            hours and calculate their pay accurately.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            id="download"
          >
            <a
              href="https://apps.apple.com/app/shiftpal"
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <Download className="w-6 h-6 mr-2" />
              Download for iOS
            </a>
            <a
              href="mailto:support@shiftpal.app"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <p className="text-sm text-blue-100 mt-8">
            Currently available on iOS. Android coming soon.
            <br />
            Free to download. No ads, no tracking, no hidden fees.
          </p>
        </div>
      </div>
    </section>
  );
}
