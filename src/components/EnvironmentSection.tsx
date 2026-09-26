import styles from "./EnvironmentSection.module.css";

export default function EnvironmentSection() {
  return (
    <section className={styles.environment}>
      <div className="container">
        <div className={styles.environmentHeader}>
          <p className={styles.eyebrow}>05 / The Environment</p>
          <h2>Focus and attention.<span>A space designed for purposeful learning.</span></h2>
        </div>
        <div className={styles.environmentGrid}>
          <div className={styles.environmentVisual}><span>BP</span></div>
          <div className={styles.environmentDetails}>
            <div><span>01</span><h3>Clear feedback</h3><p>Our approach is to use practical feedback and learning checkpoints so students and parents can discuss progress.</p></div>
            <div><span>02</span><h3>Jubilee Hills</h3><p>A new education centre in Hyderabad focused on international exam preparation, language learning, and study support.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}