import styles from "./CoursesSection.module.css";

const courses = [
  { number: "01", category: "ENGLISH", title: "Weekend Spoken English", description: "Build a confident voice for classrooms, campuses, interviews, and every room beyond.", duration: "4 weeks" },
  { number: "02", category: "IELTS", title: "IELTS Preparation", description: "Develop the language, exam strategy, and confidence to pursue study and work opportunities worldwide.", duration: "6–8 weeks" },
  { number: "03", category: "IELTS MOCK", title: "IELTS Mock Test with feedback", description: "Practise with a mock test and receive feedback to guide your next preparation steps.", duration: "Test & Review" },
  { number: "04", category: "GERMAN", title: "German A1–B2", description: "Build practical communication skills and a strong language foundation for education and travel.", duration: "8–10 weeks" },
  { number: "05", category: "SAT", title: "SAT Study Club", description: "Make time for SAT practice, study routines, and discussion of exam strategies.", duration: "Monthly" },
  { number: "06", category: "CLUB", title: "After-school Club", description: "A focused environment for guided study, homework support, and continuous learning.", duration: "Monthly" },
  { number: "07", category: "TUTORING", title: "One-to-one tutoring", description: "Personalized attention tailored to specific academic goals and individual learning paces.", duration: "Hourly" },
  { number: "08", category: "WORKSHOPS", title: "School Workshops", description: "Schools are welcome to discuss a workshop proposal tailored to their learning goals.", duration: "Custom schedule" },
];

export default function CoursesSection() {
  return (
    <section id="courses" className={styles.coursesSection}>
      <div className="container">
        <div className={styles.coursesHeader}>
          <div>
            <p className={styles.eyebrow}>02 / What we teach</p>
            <h2>Choose your<span>path.</span></h2>
          </div>
          <p>Explore language learning, international exam preparation, and study support. Programmes are subject to batch availability.</p>
        </div>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <article className={styles.courseCard} key={course.number}>
              <div className={styles.courseTop}><span>{course.number}</span><span>{course.category}</span></div>
              <div className={styles.courseBody}><h3>{course.title}</h3><p>{course.description}</p></div>
              <div className={styles.courseBottom}>
                <span>{course.duration}</span>
                <a href="#contact">Learn More <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.courseQuestion}><span>Not sure where to start?</span><a href="#contact">Talk to us →</a></div>
      </div>
    </section>
  );
}
