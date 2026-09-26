"use client";

import { useState, type FormEvent } from "react";
import styles from "./contact.module.css";

/* --------------------------------------------------------------------------
   Static contact info — pull from env/config/CMS later if it becomes dynamic.
   -------------------------------------------------------------------------- */
const CONTACT_INFO = {
  phone: "+91 73867611",
  email: "info@akaashindustries.com",
  address:
    "Akaash Industries, 7th floor, Javid gulshan, Brindavan colony, Tolichowki, Hyderabad, Telangana 500008",
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) errors.name = "Please enter your name.";

  if (!form.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.subject.trim()) errors.subject = "Please add a subject.";
  if (!form.message.trim()) errors.message = "Please add a message.";

  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(field: keyof FormState) {
    return (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Get in touch with us</h1>
          <p className={styles.subtitle}>
            Any question or remarks? Just write us a{" "}
            <span className={styles.subtitleAccent}>message!</span>
          </p>
        </header>

        <div className={styles.panel}>
          {/* Contact information */}
          <section className={styles.infoCard} aria-label="Contact information">
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <p className={styles.infoDescription}>
              Fill up the form and our team will get back to you within 24
              hours.
            </p>

            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <PhoneIcon className={styles.infoIcon} />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`}
                  className={`${styles.infoText} ${styles.infoLink}`}
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className={styles.infoItem}>
                <MailIcon className={styles.infoIcon} />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className={`${styles.infoText} ${styles.infoLink}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className={styles.infoItem}>
                <PinIcon className={styles.infoIcon} />
                <span className={styles.infoText}>{CONTACT_INFO.address}</span>
              </li>
            </ul>

            <div className={styles.responseBadge}>
              <span className={styles.responseDot} aria-hidden="true" />
              <span className={styles.responseText}>
                Usually replies within a day
              </span>
            </div>
          </section>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className={styles.input}
                value={form.name}
                onChange={handleChange("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className={styles.fieldError}>
                  {errors.name}
                </span>
              )}
            </div>

            <div className={`${styles.row} ${styles.row2}`}>
              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={styles.input}
                  value={form.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className={styles.fieldError}>
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className={styles.fieldError}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className={styles.input}
                value={form.subject}
                onChange={handleChange("subject")}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <span id="subject-error" className={styles.fieldError}>
                  {errors.subject}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className={styles.textarea}
                value={form.message}
                onChange={handleChange("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className={styles.fieldError}>
                  {errors.message}
                </span>
              )}
            </div>

            <div className={styles.submitRow}>
              {status === "success" && (
                <span className={`${styles.statusText} ${styles.statusSuccess}`}>
                  Message sent — we'll be in touch soon.
                </span>
              )}
              {status === "error" && (
                <span className={`${styles.statusText} ${styles.statusError}`}>
                  Something went wrong. Please try again.
                </span>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && (
                  <SendIcon className={styles.submitIcon} />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

/* --------------------------------------------------------------------------
   Icons — inline SVGs, no external icon package required.
   -------------------------------------------------------------------------- */

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}