"use client";

import { useEffect, useState } from "react";
import styles from "./ContactSection.module.css";

const PHONE_DISPLAY = "+91 76750 43207";
const PHONE_HREF = "tel:+917675043207";
const WHATSAPP_HREF = "https://wa.me/917675043207";
const ADDRESS =
  "4th Floor, Road Number 44, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033, India";
const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

// Studio hours are fixed to the studio's own timezone (Hyderabad),
// regardless of the visitor's local timezone.
function getStudioStatus() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type) => parts.find((p) => p.type === type)?.value;
  const weekday = get("weekday");
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const minutesNow = hour * 60 + minute;

  if (weekday === "Sun") {
    return { open: false, label: "Closed today · opens Monday 9:00" };
  }

  const opensAt = 9 * 60;
  const closesAt = 18 * 60;

  if (minutesNow < opensAt) {
    return { open: false, label: "Closed · opens 9:00 today" };
  }
  if (minutesNow >= closesAt) {
    return { open: false, label: "Closed · opens 9:00 tomorrow" };
  }
  return { open: true, label: "Open now · until 18:00" };
}

export default function ContactSection() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(getStudioStatus());
    const id = setInterval(() => setStatus(getStudioStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactHeader}>
          <p className={styles.eyebrow}>07 / Come say hello</p>
          <h2>
            Your next chapter can<span>start with a conversation.</span>
          </h2>
          <p>
            Come by our studio, ask the practical questions, and meet the people
            who might teach your child next. No pressure. Just a useful first
            step.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.actionCard}>
            {status && (
              <div className={styles.statusRow}>
                <span
                  className={`${styles.statusDot} ${
                    status.open ? styles.statusDotOpen : ""
                  }`}
                  aria-hidden="true"
                />
                {status.label}
              </div>
            )}

            <a href={PHONE_HREF} className="btn btn-primary">
              Book a free trial class
            </a>

            <div className={styles.actionLinks}>
              <a href={PHONE_HREF}>
                Call {PHONE_DISPLAY}
                <span aria-hidden="true">↗</span>
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                WhatsApp admissions
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>
                <span className={styles.detailDot} aria-hidden="true" />
                Visit
              </div>
              <div className={styles.detailValue}>
                <p>{ADDRESS}</p>
                <a href={MAPS_HREF} target="_blank" rel="noreferrer">
                  Get directions<span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>
                <span className={styles.detailDot} aria-hidden="true" />
                Hours
              </div>
              <div className={styles.detailValue}>
                <p>
                  Mon–Sat 09:00–18:00
                  <br />
                  Sunday closed
                </p>
              </div>
            </div>

            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>
                <span className={styles.detailDot} aria-hidden="true" />
                Email
              </div>
              <div className={styles.detailValue}>
                <a href="mailto:brightpatheduhyd@gmail.com">
                  brightpatheduhyd@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>
                <span className={styles.detailDot} aria-hidden="true" />
                Instagram
              </div>
              <div className={styles.detailValue}>
                <a href="https://www.instagram.com/brightpathhyd">@brightpathyd</a>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.disclaimer}>
          BrightPath provides preparation courses and is not an official IELTS,
          College Board, or Goethe examination centre unless separately stated.
        </p>
      </div>
    </section>
  );
}