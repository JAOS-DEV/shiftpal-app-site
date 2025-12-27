import { PlayCircle, Settings, TrendingUp, UserPlus } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const steps: Step[] = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Create your account",
    description:
      "Sign up in seconds with email or social login. No credit card required.",
    number: 1,
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Set up your pay rates",
    description:
      "Configure hourly rates, weekend pay, night shifts, and tax rules.",
    number: 2,
  },
  {
    icon: <PlayCircle className="w-8 h-8" />,
    title: "Track shifts with one tap",
    description:
      "Start the timer when your shift begins, or manually log past shifts.",
    number: 3,
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "See your earnings instantly",
    description:
      "View detailed breakdowns of your pay, hours worked, and trends.",
    number: 4,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-surface-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get started with ShiftPal in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-4">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-light mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (desktop only) */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-8 h-8 text-primary/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


