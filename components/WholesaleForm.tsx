"use client";

import { useState } from "react";
import { COLORS, FONTS, BUTTON_CLASSES } from "@/constants/constants";

interface FormState {
  name: string;
  email: string;
  company: string;
  units: string;
  message: string;
  hiddenField?: string; // honeypot
}

export default function WholesaleForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    units: "",
    message: "",
    hiddenField: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    //  Honeypot check: if filled, assume bot
    if (formData.hiddenField) {
      console.warn("Bot detected, ignoring submission.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}wholesale-inquiry/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            expected_units: formData.units,
            message: formData.message,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to send inquiry. Please try again.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        units: "",
        message: "",
        hiddenField: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 md:p-10 bg-[#F7FBFD] rounded-xl shadow-md">
      <h2
        className={`text-3xl md:text-4xl mb-6 text-center ${FONTS.heading}`}
        style={{ color: COLORS.jetBlack }}
      >
        Wholesale / Commercial Inquiry
      </h2>

      <p
        className={`${FONTS.body} mb-8 text-center`}
        style={{ color: COLORS.jetBlack }}
      >
        Fill out the form below and we’ll contact you with pricing and
        partnership details.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden honeypot field */}
        <input
          type="text"
          name="hiddenField"
          value={formData.hiddenField}
          onChange={handleChange}
          className="hidden"
          autoComplete="off"
          tabIndex={-1}
        />

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className={`${FONTS.body} block mb-1`}
            style={{ color: COLORS.jetBlack }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00AEEF] outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className={`${FONTS.body} block mb-1`}
            style={{ color: COLORS.jetBlack }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00AEEF] outline-none"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className={`${FONTS.body} block mb-1`}
            style={{ color: COLORS.jetBlack }}
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            style={{ color: COLORS.jetBlack }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00AEEF] outline-none"
          />
        </div>

        {/* Expected Monthly Units */}
        <div>
          <label
            htmlFor="units"
            className={`${FONTS.body} block mb-1`}
            style={{ color: COLORS.jetBlack }}
          >
            Expected Monthly Units
          </label>
          <input
            id="units"
            name="units"
            type="number"
            value={formData.units}
            onChange={handleChange}
            style={{ color: COLORS.jetBlack }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00AEEF] outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className={`${FONTS.body} block mb-1`}
            style={{ color: COLORS.jetBlack }}
          >
            Additional Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            style={{ color: COLORS.jetBlack }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00AEEF] outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`${BUTTON_CLASSES} w-full mt-6`}
        >
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>

      {/* Feedback Messages */}
      {success && (
        <p className="mt-6 text-green-600 text-center font-medium">
          ✅ Inquiry sent successfully! We’ll contact you shortly.
        </p>
      )}
      {error && (
        <p className="mt-6 text-red-600 text-center font-medium">❌ {error}</p>
      )}
    </section>
  );
}
