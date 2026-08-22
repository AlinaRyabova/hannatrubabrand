"use client";

import { useState } from "react";
import { Dictionary } from "@/dictionaries";
import { sendEmail } from "@/app/actions/sendEmail";

interface ContactFormProps {
  formDict: Dictionary["contact"]["form"];
}

export function ContactForm({ formDict }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border border-[#F5EFE3]/15 bg-[#F5EFE3]/5 p-8 backdrop-blur-sm md:p-10"
    >
      <h3 className="font-serif text-2xl font-bold text-[#F5EFE3]">
        {formDict.title}
      </h3>
      <p className="font-sans text-xs text-[#E9DDCA]/80">
        {formDict.description}
      </p>

      <div>
        <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-[#D4B58A]">
          {formDict.nameLabel}
        </label>
        <input
          type="text"
          required
          placeholder={formDict.namePlaceholder}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-2 w-full border border-[#F5EFE3]/20 bg-transparent px-4 py-3 font-sans text-sm text-[#F5EFE3] outline-hidden placeholder:text-[#F5EFE3]/30 transition-colors focus:border-[#D4B58A]"
        />
      </div>

      <div>
        <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-[#D4B58A]">
          {formDict.emailLabel}
        </label>
        <input
          type="email"
          required
          placeholder={formDict.emailPlaceholder}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-2 w-full border border-[#F5EFE3]/20 bg-transparent px-4 py-3 font-sans text-sm text-[#F5EFE3] outline-hidden placeholder:text-[#F5EFE3]/30 transition-colors focus:border-[#D4B58A]"
        />
      </div>

      <div>
        <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-[#D4B58A]">
          {formDict.messageLabel}
        </label>
        <textarea
          required
          rows={4}
          placeholder={formDict.messagePlaceholder}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-2 w-full border border-[#F5EFE3]/20 bg-transparent px-4 py-3 font-sans text-sm text-[#F5EFE3] outline-hidden placeholder:text-[#F5EFE3]/30 transition-colors focus:border-[#D4B58A] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center border border-[#D4B58A] bg-[#D4B58A] px-8 py-3.5 font-sans text-xs font-bold tracking-wider uppercase text-[#2F211A] transition-all hover:bg-white hover:border-white disabled:opacity-50 cursor-pointer"
      >
        {status === "submitting" ? formDict.submittingBtn : formDict.submitBtn}
      </button>

      {status === "success" && (
        <p className="border border-[#657A55] bg-[#304832] p-3 text-center font-sans text-xs font-medium text-[#F5EFE3]">
          {formDict.successMsg}
        </p>
      )}
      {status === "error" && (
        <p className="border border-red-500/50 bg-red-950/40 p-3 text-center font-sans text-xs font-medium text-red-200">
          {formDict.errorMsg}
        </p>
      )}
    </form>
  );
}