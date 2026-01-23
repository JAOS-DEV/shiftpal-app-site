import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ShiftPal",
  description:
    "ShiftPal Privacy Policy - How we collect, use, and protect your data",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 23, 2026">
      <section>
        <h2>Plain English Summary</h2>
        <p>
          We respect your privacy. ShiftPal collects only the data needed to
          provide our service, stores it securely with Firebase, and never sells
          your information to third parties. You can delete your data at any
          time.
        </p>
      </section>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to ShiftPal (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;). We are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our mobile application and related services
          (collectively, the &quot;Service&quot;).
        </p>
        <p>
          By using ShiftPal, you agree to the collection and use of information
          in accordance with this policy. If you do not agree with our policies
          and practices, please do not use our Service.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>

        <h3>2.1 Personal Information</h3>
        <p>When you create an account, we collect:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> Email address, name
            (optional), and authentication credentials
          </li>
          <li>
            <strong>Profile Data:</strong> Profile picture (optional), job
            title, employer name (optional)
          </li>
        </ul>

        <h3>2.2 Shift and Work Data</h3>
        <p>To provide our core service, we collect:</p>
        <ul>
          <li>
            <strong>Shift Records:</strong> Start and end times, break
            durations, work locations, job titles
          </li>
          <li>
            <strong>Pay Information:</strong> Hourly rates, overtime rates, tax
            settings, currency preferences
          </li>
          <li>
            <strong>Earnings Data:</strong> Calculated earnings based on your
            shifts and pay rates
          </li>
        </ul>

        <h3>2.3 Subscription and Payment Information</h3>
        <p>If you purchase a premium subscription, we collect:</p>
        <ul>
          <li>
            <strong>Subscription Data:</strong> Subscription product ID (monthly
            or yearly), subscription start date, subscription status
          </li>
          <li>
            <strong>Transaction Data:</strong> Transaction ID, original
            transaction ID, and purchase receipt (for subscription verification)
          </li>
          <li>
            <strong>Payment Processing:</strong> All payments are processed
            through Apple&apos;s In-App Purchase system. We do not collect,
            store, or have access to your credit card information or payment
            details. Apple handles all payment processing securely.
          </li>
        </ul>
        <p>
          <strong>Note:</strong> We store purchase receipts and transaction IDs
          to verify your subscription status and restore purchases across
          devices. This data is stored securely in Firebase and is not shared
          with third parties except as necessary to provide the Service.
        </p>

        <h3>2.4 Usage and Device Information</h3>
        <ul>
          <li>
            <strong>Device Data:</strong> Device type, operating system, app
            version
          </li>
          <li>
            <strong>Usage Analytics:</strong> App features used, crash reports,
            performance data
          </li>
          <li>
            <strong>Location Data:</strong> Only if you choose to enable
            location-based shift tracking (optional)
          </li>
        </ul>

        <h3>2.5 Information We Do NOT Collect</h3>
        <ul>
          <li>We do not track your browsing activity outside of ShiftPal</li>
          <li>We do not sell your personal data to third parties</li>
          <li>We do not use your data for advertising purposes</li>
          <li>
            We do not collect or store credit card information (all payments
            processed by Apple)
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>
            <strong>Provide the Service:</strong> Track your shifts, calculate
            pay, manage your subscription
          </li>
          <li>
            <strong>Process Subscriptions:</strong> Verify subscription status,
            restore purchases, manage premium features
          </li>
          <li>
            <strong>Improve Our Service:</strong> Analyze usage patterns to
            enhance features and fix bugs
          </li>
          <li>
            <strong>Communicate with You:</strong> Send important updates,
            security alerts, and respond to support requests
          </li>
          <li>
            <strong>Ensure Security:</strong> Detect and prevent fraud, abuse,
            and security incidents
          </li>
          <li>
            <strong>Comply with Legal Obligations:</strong> Respond to legal
            requests and enforce our Terms of Service
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Data Storage and Security</h2>

        <h3>4.1 Where Your Data is Stored</h3>
        <p>
          Your data is securely stored using <strong>Google Firebase</strong>, a
          trusted cloud platform with industry-leading security practices. Data
          is stored on servers located in the United States and European Union
          (depending on your region).
        </p>

        <h3>4.2 Security Measures</h3>
        <ul>
          <li>
            <strong>Encryption:</strong> All data is encrypted in transit
            (TLS/SSL) and at rest
          </li>
          <li>
            <strong>Authentication:</strong> Secure authentication using
            Firebase Authentication
          </li>
          <li>
            <strong>Access Controls:</strong> Strict access controls limit who
            can view your data
          </li>
          <li>
            <strong>Regular Audits:</strong> We regularly review our security
            practices
          </li>
        </ul>

        <h3>4.3 Data Retention</h3>
        <p>
          We retain your data for as long as your account is active. Subscription
          data (transaction IDs, receipts) is retained to verify subscription
          status and enable purchase restoration. You can delete your data at any
          time through the app settings or by contacting us at{" "}
          <a href="mailto:shiftpalapp@gmail.com">shiftpalapp@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing and Disclosure</h2>

        <h3>5.1 We Do Not Sell Your Data</h3>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties for marketing purposes.
        </p>

        <h3>5.2 Service Providers</h3>
        <p>
          We share data with trusted service providers who help us operate
          ShiftPal:
        </p>
        <ul>
          <li>
            <strong>Firebase (Google):</strong> Cloud hosting, authentication,
            and database services
          </li>
          <li>
            <strong>Apple:</strong> Payment processing for in-app purchases
            (subscriptions). Apple processes all payments and handles payment
            data according to their privacy policy. We only receive transaction
            confirmations and subscription status.
          </li>
          <li>
            <strong>Analytics Providers:</strong> Crash reporting and
            performance monitoring (anonymized data)
          </li>
        </ul>

        <h3>5.3 Legal Requirements</h3>
        <p>
          We may disclose your information if required by law, court order, or
          to protect the rights, property, or safety of ShiftPal, our users, or
          others.
        </p>

        <h3>5.4 Business Transfers</h3>
        <p>
          If ShiftPal is involved in a merger, acquisition, or sale of assets,
          your information may be transferred. We will notify you of any such
          change.
        </p>
      </section>

      <section>
        <h2>6. Your Privacy Rights</h2>
        <p>You have the following rights regarding your data:</p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of your personal data
          </li>
          <li>
            <strong>Correction:</strong> Update or correct inaccurate
            information
          </li>
          <li>
            <strong>Deletion:</strong> Delete your account and associated data
          </li>
          <li>
            <strong>Portability:</strong> Export your shift data in a portable
            format (CSV, JSON)
          </li>
          <li>
            <strong>Opt-Out:</strong> Disable analytics or location tracking
          </li>
        </ul>
        <p>
          To exercise these rights, go to <strong>Settings → Privacy</strong> in
          the app or email us at{" "}
          <a href="mailto:shiftpalapp@gmail.com">shiftpalapp@gmail.com</a>.
        </p>
        <p>
          <strong>Subscription Data:</strong> You can manage your subscription
          and payment information through Apple&apos;s subscription management
          system (Settings → [Your Name] → Subscriptions on iOS). We cannot
          modify or cancel subscriptions on your behalf, as they are managed
          entirely by Apple.
        </p>
      </section>

      <section>
        <h2>7. Children&apos;s Privacy</h2>
        <p>
          ShiftPal is not intended for users under the age of 16. We do not
          knowingly collect personal information from children. If you believe
          we have collected data from a child, please contact us immediately at{" "}
          <a href="mailto:shiftpalapp@gmail.com">shiftpalapp@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>8. International Users</h2>
        <p>
          If you are accessing ShiftPal from outside the United States, please
          note that your data may be transferred to, stored, and processed in
          the United States or other countries where our service providers
          operate. By using ShiftPal, you consent to this transfer.
        </p>
        <p>
          <strong>European Users (GDPR):</strong> If you are in the European
          Economic Area, you have additional rights under the General Data
          Protection Regulation (GDPR), including the right to lodge a complaint
          with your local data protection authority.
        </p>
      </section>

      <section>
        <h2>9. Third-Party Links</h2>
        <p>
          ShiftPal may contain links to third-party websites or services (e.g.,
          support documentation, social media). We are not responsible for the
          privacy practices of these third parties. Please review their privacy
          policies before providing any information.
        </p>
        <p>
          <strong>Apple Services:</strong> When you make a purchase, you are
          also subject to Apple&apos;s Privacy Policy and Terms of Service. We
          encourage you to review Apple&apos;s privacy practices at{" "}
          <a
            href="https://www.apple.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.apple.com/privacy/
          </a>
          .
        </p>
      </section>

      <section>
        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will notify you of
          significant changes by:
        </p>
        <ul>
          <li>Posting the updated policy in the app</li>
          <li>
            Sending an email notification (if you have provided an email
            address)
          </li>
          <li>
            Updating the &quot;Last Updated&quot; date at the top of this page
          </li>
        </ul>
        <p>
          Your continued use of ShiftPal after changes are posted constitutes
          your acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your data, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:shiftpalapp@gmail.com">shiftpalapp@gmail.com</a>
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
          This Privacy Policy is effective as of January 23, 2026. Thank you
          for trusting ShiftPal with your shift tracking needs.
        </p>
      </section>
    </LegalLayout>
  );
}


