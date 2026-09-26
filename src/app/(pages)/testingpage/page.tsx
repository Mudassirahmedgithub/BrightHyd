"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./testing.module.css";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Akaash Industries has been reliable in supplying recovered pyrolysis oil for our industrial operations. Their consistency in quality and professional approach makes them a dependable partner.",
    name: "Industrial Buyer",
    role: "Telangana",
  },
  {
    quote:
      "We appreciate Akaash Industries' approach to responsible tyre waste management. Their collection and processing system provides a practical solution for diverting end-of-life tyres from improper disposal.",
    name: "EPR Partner",
    role: "Hyderabad",
  },
  {
    quote:
      "The quality of the recovered materials and the responsiveness of the team have made our association with Akaash Industries smooth and dependable.",
    name: "Bulk Material Buyer",
    role: "Telangana",
  },
  {
    quote:
      "Working with Akaash Industries has given us a reliable channel for sourcing recovered carbon and steel from end-of-life tyres. Their team has been professional throughout our association.",
    name: "Recycling Industry Partner",
    role: "",
  },
  {
    quote:
      "Akaash Industries combines waste recovery with practical industrial value. Their pyrolysis process helps transform scrap tyres into useful materials while maintaining a strong focus on responsible processing.",
    name: "Sustainability Partner",
    role: "Hyderabad",
  },
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hasMore, setHasMore] = useState(true);

  const checkScrollEnd = () => {
    const el = trackRef.current;
    if (!el) return;
    const remaining = el.scrollWidth - el.scrollLeft - el.clientWidth;
    setHasMore(remaining > 8);
  };

  useEffect(() => {
    checkScrollEnd();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollEnd, { passive: true });
    window.addEventListener("resize", checkScrollEnd);
    return () => {
      el.removeEventListener("scroll", checkScrollEnd);
      window.removeEventListener("resize", checkScrollEnd);
    };
  }, []);

  const scrollNext = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.clientWidth ?? 320;
    el.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.header}>
        <h2 id="testimonials-heading" className={styles.title}>
          Testimonials
        </h2>
        <p className={styles.subtitle}>
          Don&apos;t believe us, hear it our from our clients and partners...
        </p>
      </div>

      <div className={styles.trackWrap}>
        <div className={styles.track} ref={trackRef}>
          {testimonials.map((t, index) => (
            <article className={styles.card} key={index}>
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.author}>
                <p className={styles.authorName}>{t.name}</p>
                {t.role && <p className={styles.authorRole}>{t.role}</p>}
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className={styles.scrollHint}
          onClick={scrollNext}
          aria-label="Show more testimonials"
          data-hidden={!hasMore}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}