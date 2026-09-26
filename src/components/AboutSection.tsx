import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>01 / About BrightPath</p>
          <h2>International ambition,<span>grounded locally.</span></h2>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLead}>
            <p>The right preparation opens a world of possibilities.</p>
            <a href="#contact" className={styles.textLink}>Talk to us <span>↗</span></a>
          </div>
          <div className={styles.aboutText}>
            <p>BrightPath is a new education centre in Jubilee Hills. We are building our programmes around small groups, personal attention, and clear learning goals.</p>
            <p>Our focus is spoken English, German, international exam preparation, and study support. We aim to make progress measurable through practice, feedback, and regular learning checkpoints.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
