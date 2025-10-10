"use server";

import { formSchema } from "@/components/contact-form";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

export const send = async (formData: z.infer<typeof formSchema>) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = formData;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["anxit3107@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email, // ✅ use camelCase
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error("Email send error:", error);
      return { success: false };
    }

    return { success: true }; // ✅ return plain JSON-safe object
  } catch (error) {
    console.error("Server error:", error);
    return { success: false };
  }
};
