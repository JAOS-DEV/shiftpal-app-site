import {
  Calculator,
  Calendar,
  Clock,
  Cloud,
  Shield,
  Sparkles,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Easy Shift Tracking",
    description:
      "Log shifts with timer mode or manual entry. Track breaks automatically.",
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Smart Pay Calculator",
    description:
      "Set custom rates for regular, weekend, and night shifts. Automatic tax calculations.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Detailed History",
    description:
      "View all your shifts by day, week, or month. Export your data anytime.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Private",
    description:
      "Your data is yours. Encrypted storage with Firebase. No ads, no tracking.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Beautiful Design",
    description:
      "Clean interface with light and dark mode. Designed for real shift workers.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cross-Device Sync",
    description: "Access your shifts on any device. Automatic cloud backup.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            ShiftPal is packed with features designed to make shift tracking
            simple and powerful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-light rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-primary/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
