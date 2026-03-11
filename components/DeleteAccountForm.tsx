"use client";

import { useState, useCallback } from "react";

const SUPPORT_EMAIL = "shiftpalapp@gmail.com";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent("ShiftPal account deletion request");
      const body = encodeURIComponent(
        `I request deletion of my ShiftPal account and associated data.\n\nAccount email: ${email}${reason ? `\n\nReason (optional): ${reason}` : ""}`
      );
      window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    },
    [email, reason]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label
          htmlFor="account-email"
          className="block text-sm font-medium text-text-light mb-1"
        >
          Account email
        </label>
        <input
          id="account-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="reason"
          className="block text-sm font-medium text-text-light mb-1"
        >
          Reason <span className="text-text-secondary font-normal">(optional)</span>
        </label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Optional reason for deletion"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-y"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors min-h-[44px]"
      >
        Submit request
      </button>
    </form>
  );
}
