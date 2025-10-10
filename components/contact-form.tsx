"use client";

import { send } from "@/lib/email";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email(),
  message: z.string().min(1, "Message is required"),
});

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed = formSchema.safeParse(formData);
    if (!parsed.success) {
      toast.error("Please fill all fields correctly");
      return;
    }

    toast.loading("Sending message...");
    const res = await send(formData);

    if (res?.success) {
      // ✅ match server action return
      toast.dismiss();
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.dismiss();
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-10">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className="shadow-custom focus:ring-primary rounded-md p-4 text-sm focus:ring-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className="shadow-custom rounded-md p-4 text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          placeholder="You are awesome, tell me about yourself!"
          value={formData.message}
          onChange={handleChange}
          className="shadow-custom focus:ring-primary resize-none rounded-md p-2 text-sm focus:ring-2 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
};
