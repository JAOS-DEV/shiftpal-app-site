interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container-custom max-w-4xl">
        <header className="mb-12 border-b pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            {title}
          </h1>
          <p className="text-text-secondary">
            Last Updated: <span className="font-semibold">{lastUpdated}</span>
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <h2 className="text-xl font-semibold text-text-light mt-0 mb-3">
              Plain English Summary
            </h2>
            <p className="text-text-secondary mb-0 text-base">
              {title === "Privacy Policy"
                ? "We respect your privacy. ShiftPal collects only the data needed to provide our service, stores it securely with Firebase, and never sells your information to third parties. You can delete your data at any time."
                : "By using ShiftPal, you agree to use the app responsibly and legally. We provide the service \"as is\" and aren't liable for any damages. You can stop using the app at any time. These terms may change, and we'll notify you of updates."}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}


