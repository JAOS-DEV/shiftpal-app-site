import type { Metadata } from "next";
import DeleteAccountForm from "@/components/DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete your ShiftPal account - ShiftPal",
  description:
    "Request deletion of your ShiftPal account and associated data. Email support or use the form to submit your request.",
};

const SUPPORT_EMAIL = "shiftpalapp@gmail.com";

export default function DeleteAccountPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container-custom max-w-4xl">
        <header className="mb-10 border-b pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Delete your ShiftPal account
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-text-secondary mb-6">
            To request deletion of your ShiftPal account and associated data,
            email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=ShiftPal%20account%20deletion%20request`}
              className="text-primary hover:underline font-medium"
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            from the email address linked to your account, or submit the form
            below.
          </p>

          <DeleteAccountForm />

          <p className="text-text-secondary text-sm mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
            Deleting your account permanently removes your ShiftPal account and
            associated app data.
          </p>
        </div>
      </div>
    </div>
  );
}
