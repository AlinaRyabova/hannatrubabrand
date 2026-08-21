"use client";

import { useState } from "react";
import { Dictionary } from "@/dictionaries";

interface ContactFormProps {
  dict: Dictionary["contact"];
}

export function ContactForm({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Імітація обробки форми (підключення API/Server Action)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-espresso/15 bg-ivory p-8 shadow-sm md:p-10"
    >
      <h3 className="font-serif text-2xl font-bold text-espresso">
        {dict.formTitle}
      </h3>

      {/* Поле: Ім'я */}
      <div>
        <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-espresso/70">
          {dict.nameLabel}
        </label>
        <input
          type="text"
          required
          placeholder={dict.namePlaceholder}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-2 w-full rounded-lg border border-espresso/20 bg-transparent px-4 py-3 font-sans text-sm text-espresso outline-hidden transition-colors focus:border-espresso focus:ring-1 focus:ring-espresso"
        />
      </div>

      {/* Поле: Email */}
      <div>
        <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-espresso/70">
          {dict.emailLabel}
        </label>
        <input
          type="email"
          required
          placeholder={dict.emailPlaceholder}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-2 w-full rounded-lg border border-espresso/20 bg-transparent px-4 py-3 font-sans text-sm text-espresso outline-hidden transition-colors focus:border-espresso focus:ring-1 focus:ring-espresso"
        />
      </div>

      {/* Поле: Напрямок співпраці */}
      <div>
        <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-espresso/70">
          {dict.serviceLabel}
        </label>
        <input
          type="text"
          placeholder={dict.servicePlaceholder}
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="mt-2 w-full rounded-lg border border-espresso/20 bg-transparent px-4 py-3 font-sans text-sm text-espresso outline-hidden transition-colors focus:border-espresso focus:ring-1 focus:ring-espresso"
        />
      </div>

      {/* Поле: Повідомлення */}
      <div>
        <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-espresso/70">
          {dict.messageLabel}
        </label>
        <textarea
          required
          rows={4}
          placeholder={dict.messagePlaceholder}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-2 w-full rounded-lg border border-espresso/20 bg-transparent px-4 py-3 font-sans text-sm text-espresso outline-hidden transition-colors focus:border-espresso focus:ring-1 focus:ring-espresso resize-none"
        />
      </div>

      {/* Кнопка відправки */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-espresso px-8 py-3.5 font-sans text-xs font-semibold tracking-wider uppercase text-ivory transition-all duration-200 hover:bg-dark-olive disabled:opacity-50 cursor-pointer"
      >
        {status === "submitting" ? dict.submittingButton : dict.submitButton}
      </button>

      {/* Статусні повідомлення */}
      {status === "success" && (
        <p className="rounded-lg bg-sage/15 p-3 text-center font-sans text-xs font-medium text-dark-olive">
          {dict.successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-100 p-3 text-center font-sans text-xs font-medium text-red-800">
          {dict.errorMessage}
        </p>
      )}
    </form>
  );
}