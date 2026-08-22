"use server";

import nodemailer from "nodemailer";

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: SendEmailParams) {
  if (!name || !email || !message) {
    return { success: false, error: "Missing fields" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ukr.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.UKRNET_EMAIL || "3182009060@ukr.net",
        pass: process.env.UKRNET_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Hanna Truba Brand" <${process.env.UKRNET_EMAIL || "3182009060@ukr.net"}>`,
      to: "3182009060@ukr.net",
      replyTo: email,
      subject: `Нове звернення з сайту від ${name}`,
      text: `Ім'я: ${name}\nEmail: ${email}\n\nПовідомлення:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #2F211A; background-color: #F5EFE3;">
          <h2 style="color: #5A3828; border-bottom: 2px solid #D4B58A; padding-bottom: 8px;">
            Нове повідомлення з сайту HannaTrubaBrand
          </h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Email відправника:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 16px; padding: 16px; background-color: #ffffff; border-left: 4px solid #304832;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Помилка відправки пошти:", error);
    return { success: false, error: "Failed to send" };
  }
}