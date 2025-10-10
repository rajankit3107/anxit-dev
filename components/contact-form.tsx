"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  // ✅ useState must be at the top level
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
    // console.log("handle submit clicked");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Api call successful");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Something went wrong");
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
          placeholder="name"
          onChange={handleChange}
          className="shadow-custom focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
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
          placeholder="email"
          onChange={handleChange}
          className="shadow-custom rounded-md px-2 py-1 text-sm"
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
          placeholder="you are awesome , tell me about yourself!"
          name="message"
          onChange={handleChange}
          className="shadow-custom focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
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
