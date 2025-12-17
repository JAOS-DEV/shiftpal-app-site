import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ShiftPal",
  description:
    "ShiftPal Terms of Service - Rules and guidelines for using our app",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="December 17, 2025">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to ShiftPal! These Terms of Service (&quot;Terms&quot;) govern
          your access to and use of the ShiftPal mobile application and related
          services (collectively, the &quot;Service&quot;). By accessing or
          using ShiftPal, you agree to be bound by these Terms.
        </p>
        <p>
          If you do not agree with these Terms, please do not use our Service.
          We reserve the right to update these Terms at any time, and your
          continued use of the Service constitutes acceptance of any changes.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          ShiftPal is a shift tracking and pay calculator application designed
          for hourly workers. The Service allows you to:
        </p>
        <ul>
          <li>Track work shifts with start/end times and breaks</li>
          <li>Calculate earnings based on custom pay rates</li>
          <li>View shift history and export data</li>
          <li>Sync data across multiple devices (optional)</li>
          <li>Store data securely using Firebase cloud services</li>
        </ul>
        <p>
          ShiftPal is provided as-is, and we reserve the right to modify,
          suspend, or discontinue any part of the Service at any time without
          prior notice.
        </p>
      </section>

      <section>
        <h2>3. User Accounts</h2>

        <h3>3.1 Account Creation</h3>
        <p>
          To use ShiftPal, you must create an account by providing accurate and
          complete information. You are responsible for:
        </p>
        <ul>
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized access</li>
        </ul>

        <h3>3.2 Account Eligibility</h3>
        <p>
          You must be at least 16 years old to use ShiftPal. By creating an
          account, you represent that you meet this age requirement and have the
          legal capacity to enter into these Terms.
        </p>

        <h3>3.3 Account Termination</h3>
        <p>
          You may delete your account at any time through the app settings. We
          reserve the right to suspend or terminate accounts that violate these
          Terms or engage in fraudulent, abusive, or illegal activity.
        </p>
      </section>

      <section>
        <h2>4. Acceptable Use</h2>
        <p>You agree to use ShiftPal only for lawful purposes. You must NOT:</p>
        <ul>
          <li>
            Use the Service to commit fraud or misrepresent your work hours to
            employers
          </li>
          <li>
            Attempt to hack, reverse-engineer, or compromise the security of the
            Service
          </li>
          <li>
            Use automated scripts, bots, or other means to access the Service
            without authorization
          </li>
          <li>Upload malicious code, viruses, or harmful content</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Harass, abuse, or harm other users</li>
          <li>
            Impersonate others or misrepresent your affiliation with any person
            or entity
          </li>
        </ul>
        <p>
          Violation of these rules may result in immediate account suspension or
          termination.
        </p>
      </section>

      <section>
        <h2>5. Data Accuracy and Responsibility</h2>
        <p>
          <strong>Important:</strong> ShiftPal is a tool to help you track
          shifts and estimate pay. However:
        </p>
        <ul>
          <li>
            You are responsible for the accuracy of all data you enter (shift
            times, pay rates, etc.)
          </li>
          <li>ShiftPal does not verify your work hours with your employer</li>
          <li>
            Earnings calculations are estimates and may not reflect actual pay
            after taxes, deductions, or other factors
          </li>
          <li>
            You should always verify your earnings with official payslips from
            your employer
          </li>
        </ul>
        <p>
          We are not liable for discrepancies between ShiftPal&apos;s
          calculations and your actual pay.
        </p>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>

        <h3>6.1 Our Rights</h3>
        <p>
          All content, features, and functionality of ShiftPal (including but
          not limited to software, design, logos, text, and graphics) are owned
          by ShiftPal or its licensors and are protected by copyright,
          trademark, and other intellectual property laws.
        </p>

        <h3>6.2 Your Rights</h3>
        <p>
          You retain ownership of all data you enter into ShiftPal (shift
          records, pay information, etc.). By using the Service, you grant us a
          limited license to store, process, and display your data solely to
          provide the Service.
        </p>

        <h3>6.3 Feedback</h3>
        <p>
          If you provide feedback, suggestions, or ideas about ShiftPal, we may
          use them without obligation to compensate you or provide attribution.
        </p>
      </section>

      <section>
        <h2>7. Payment and Subscriptions</h2>
        <p>
          ShiftPal is currently free to use. If we introduce paid features or
          subscriptions in the future:
        </p>
        <ul>
          <li>
            Pricing and payment terms will be clearly communicated in the app
          </li>
          <li>
            Subscriptions will auto-renew unless canceled before the renewal
            date
          </li>
          <li>
            Refunds will be handled in accordance with Apple App Store or Google
            Play Store policies
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Third-Party Services</h2>
        <p>ShiftPal uses third-party services, including:</p>
        <ul>
          <li>
            <strong>Firebase (Google):</strong> For cloud storage,
            authentication, and analytics
          </li>
          <li>
            <strong>Apple App Store / Google Play Store:</strong> For app
            distribution
          </li>
        </ul>
        <p>
          Your use of these services is also governed by their respective terms
          and privacy policies. We are not responsible for the actions or
          policies of third-party providers.
        </p>
      </section>

      <section>
        <h2>9. Disclaimers and Limitations of Liability</h2>

        <h3>9.1 &quot;As Is&quot; Service</h3>
        <p>
          ShiftPal is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, either express or implied, including
          but not limited to warranties of merchantability, fitness for a
          particular purpose, or non-infringement.
        </p>

        <h3>9.2 No Guarantee of Accuracy</h3>
        <p>
          While we strive to provide accurate calculations and reliable service,
          we do not guarantee that ShiftPal will be error-free, uninterrupted,
          or secure. Use the Service at your own risk.
        </p>

        <h3>9.3 Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, ShiftPal and its developers
          shall not be liable for:
        </p>
        <ul>
          <li>Any indirect, incidental, consequential, or punitive damages</li>
          <li>Loss of profits, data, or goodwill</li>
          <li>Damages arising from your use or inability to use the Service</li>
          <li>Errors in shift tracking or pay calculations</li>
        </ul>
        <p>
          In no event shall our total liability exceed the amount you paid to
          use ShiftPal (currently $0).
        </p>
      </section>

      <section>
        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless ShiftPal, its
          developers, and affiliates from any claims, damages, losses, or
          expenses (including legal fees) arising from:
        </p>
        <ul>
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any third-party rights</li>
          <li>Any data you submit or transmit through the Service</li>
        </ul>
      </section>

      <section>
        <h2>11. Privacy</h2>
        <p>
          Your use of ShiftPal is also governed by our{" "}
          <a href="/privacy">Privacy Policy</a>, which explains how we collect,
          use, and protect your personal information. By using the Service, you
          consent to our privacy practices as described in the Privacy Policy.
        </p>
      </section>

      <section>
        <h2>12. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to ShiftPal
          at any time, with or without cause, and without prior notice. Upon
          termination:
        </p>
        <ul>
          <li>Your right to use the Service will immediately cease</li>
          <li>You may export your data before deletion (if available)</li>
          <li>
            We may delete your account and associated data after a reasonable
            period
          </li>
        </ul>
        <p>
          Sections of these Terms that should survive termination (e.g.,
          disclaimers, limitations of liability) will remain in effect.
        </p>
      </section>

      <section>
        <h2>13. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time to reflect changes in our
          practices, legal requirements, or new features. We will notify you of
          material changes by:
        </p>
        <ul>
          <li>Posting the updated Terms in the app</li>
          <li>Sending an in-app notification or email</li>
          <li>
            Updating the &quot;Last Updated&quot; date at the top of this page
          </li>
        </ul>
        <p>
          Your continued use of ShiftPal after changes are posted constitutes
          your acceptance of the updated Terms. If you do not agree to the
          changes, you must stop using the Service.
        </p>
      </section>

      <section>
        <h2>14. Governing Law and Dispute Resolution</h2>

        <h3>14.1 Governing Law</h3>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the jurisdiction where the developer resides, without regard to
          conflict of law principles.
        </p>

        <h3>14.2 Dispute Resolution</h3>
        <p>
          If you have a dispute with ShiftPal, please contact us first at{" "}
          <a href="mailto:support@shiftpal.app">support@shiftpal.app</a> to
          attempt an informal resolution. If we cannot resolve the dispute
          informally, you agree that any legal action must be brought in the
          courts of the jurisdiction specified above.
        </p>
      </section>

      <section>
        <h2>15. Miscellaneous</h2>

        <h3>15.1 Entire Agreement</h3>
        <p>
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and ShiftPal regarding your use of the Service.
        </p>

        <h3>15.2 Severability</h3>
        <p>
          If any provision of these Terms is found to be invalid or
          unenforceable, the remaining provisions will remain in full force and
          effect.
        </p>

        <h3>15.3 Waiver</h3>
        <p>
          Our failure to enforce any right or provision of these Terms will not
          be considered a waiver of those rights.
        </p>

        <h3>15.4 Assignment</h3>
        <p>
          You may not assign or transfer these Terms without our prior written
          consent. We may assign our rights and obligations without restriction.
        </p>
      </section>

      <section>
        <h2>16. Contact Us</h2>
        <p>
          If you have questions, concerns, or feedback regarding these Terms of
          Service, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:shiftpalapp@gmail.com">support@shiftpal.app</a>
          </li>
          <li>
            <strong>Developer:</strong> James O&apos;Sullivan
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://shiftpal.app">https://shiftpal.app</a>
          </li>
        </ul>
      </section>

      <section className="mt-12 pt-8 border-t">
        <p className="text-sm text-text-secondary italic">
          These Terms of Service are effective as of December 17, 2025. Thank
          you for using ShiftPal!
        </p>
      </section>
    </LegalLayout>
  );
}
