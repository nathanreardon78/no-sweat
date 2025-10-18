"use client";
import { useState } from 'react';
import { COLORS, FONTS, BUTTON_CLASSES } from '@/constants/constants';

interface FormState {
  name: string;
  email: string;
  company: string;
  units: string;
  message: string;
}

export default function WholesaleForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    units: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you’d submit this data to a backend or service.
    alert('Thank you for your inquiry!');
    setFormData({ name: '', email: '', company: '', units: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
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
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
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
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
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
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
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
          value={formData.message}
          onChange={handleChange}

          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className={BUTTON_CLASSES}>
        Submit
      </button>
    </form>
  );
}
