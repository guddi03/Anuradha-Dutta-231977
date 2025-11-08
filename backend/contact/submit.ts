import { api } from "encore.dev/api";
import db from "../db";

export interface SubmitContactRequest {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export interface SubmitContactResponse {
  success: boolean;
  whatsappUrl: string;
}

// Submits a contact form inquiry and returns a WhatsApp redirect URL.
export const submit = api<SubmitContactRequest, SubmitContactResponse>(
  { expose: true, method: "POST", path: "/contact/submit" },
  async (req) => {
    // Store the contact in database
    await db.exec`
      INSERT INTO contacts (name, phone, service, message)
      VALUES (${req.name}, ${req.phone}, ${req.service}, ${req.message})
    `;

    // Generate WhatsApp URL
    const whatsappMessage = `Name: ${req.name}%0APhone: ${req.phone}%0AService: ${req.service}%0AMessage: ${req.message}`;
    const whatsappUrl = `https://wa.me/918910920188?text=${whatsappMessage}`;

    return {
      success: true,
      whatsappUrl,
    };
  }
);
