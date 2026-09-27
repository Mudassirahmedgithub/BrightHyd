"use client";

import { useState } from "react";
import styles from "./CoursesSection.module.css";

const categories = [
  { id: "languages", label: "Languages" },
  { id: "exams", label: "Exam preparation" },
  { id: "support", label: "Learning support" },
];

const courses = [
  {
    id: "spoken-english",
    category: "languages",
    title: "Weekend Spoken English",
    description:
      "Build a confident voice for classrooms, campuses, interviews, and every room beyond.",
    duration: "4 weeks",
  },
  {
    id: "german",
    category: "languages",
    title: "German A1–B2",
    description:
      "Build practical communication skills and a strong language foundation for education and travel.",
    duration: "8–10 weeks",
  },
  {
    id: "ielts-prep",
    category: "exams",
    title: "IELTS Preparation",
    description:
      "Develop the language, exam strategy, and confidence to pursue study and work opportunities worldwide.",
    duration: "6–8 weeks",
  },
  {
    id: "ielts-mock",
    category: "exams",
    title: "IELTS Mock Test with feedback",
    description:
      "Practise with a mock test and receive feedback to guide your next preparation steps.",
    duration: "Test & review",
  },
  {
    id: "sat",
    category: "exams",
    title: "SAT Study Club",
    description:
      "Make time for SAT practice, study routines, and discussion of exam strategies.",
    duration: "Monthly",
  },
  {
    id: "after-school",
    category: "support",
    title: "After-school Club",
    description:
      "A focused environment for guided study, homework support, and continuous learning.",
    duration: "Monthly",
  },
  {
    id: "tutoring",
    category: "support",
    title: "One-to-one Tutoring",
    description:
      "Personalised attention tailored to specific academic goals and individual learning paces.",
    duration: "Hourly",
  },
  {
    id: "workshops",
    category: "support",
    title: "School Workshops",
    description:
      "Schools are welcome to discuss a workshop proposal tailored to their learning goals.",
    duration: "Custom schedule",
  },
];

export default function CoursesSection() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all" ? courses : courses.filter((c) => c.category === active);

  const categoryLabel = (id) => categories.find((c) => c.id === id)?.label ?? id;

  return (
    <section id="courses" className={styles.coursesSection}>
      <div className="container">
        <div className={styles.coursesHeader}>
          <div>
            <p className={styles.eyebrow}>02 / What we teach</p>
            <h2>
              Choose your
              <span> path.</span>
            </h2>
          </div>
          <p>
            Explore language learning, international exam preparation, and study
            support. Programmes are subject to batch availability.
          </p>
        </div>

        <div
          className={styles.filterRow}
          role="tablist"
          aria-label="Filter programmes by category"
        >
          <button
            type="button"
            role="tab"
            aria-selected={active === "all"}
            className={`${styles.filterTab} ${
              active === "all" ? styles.filterTabActive : ""
            }`}
            onClick={() => setActive("all")}
          >
            All programmes
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              className={`${styles.filterTab} ${
                active === cat.id ? styles.filterTabActive : ""
              }`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.courseList} key={active}>
          {visible.map((course, i) => (
            <article
              className={styles.courseRow}
              key={course.id}
              style={{ "--row-index": i }}
            >
              <div className={styles.courseCategory}>
                <span className={styles.categoryDot} aria-hidden="true" />
                {categoryLabel(course.category)}
              </div>
              <div className={styles.courseBody}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
              <div className={styles.courseDuration}>{course.duration}</div>
              <a className={styles.courseLink} href="#contact">
                Learn more<span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <div className={styles.courseQuestion}>
          <span>Not sure where to start?</span>
          <a href="#contact">Talk to us →</a>
        </div>
      </div>
    </section>
  );
}