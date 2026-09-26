import styles from "./WhyUsSection.module.css";

export default function WhyUsSection() {
  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>03 / Why choose us</p>
          <h2>Good teaching<span>is a practice.</span></h2>
          <p className={styles.sectionIntro}>There's no shortcut to meaningful progress. There is, however, a better environment for it.</p>
        </div>
        <div className={styles.reasonsGrid}>
          <article><span>01</span><h3>Small rooms, real attention</h3><p>Our focus is small-group learning with time for questions and personal attention.</p></article>
          <article><span>02</span><h3>Preparation with purpose</h3><p>Language learning and international exam preparation, based in Jubilee Hills.</p></article>
          <article><span>03</span><h3>Progress you can see</h3><p>Clear checkpoints and thoughtful feedback for students and parents.</p></article>
        </div>
      </div>
    </section>
  );
}
