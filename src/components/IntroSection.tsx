import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={styles.introStrip}>
      <div className="container">
        <div className={styles.introGrid}>
          <div><p className={styles.eyebrow}>A little more than tuition</p></div>
          <div className={styles.introItem}><strong>Small</strong><span>groups for real engagement</span></div>
          <div className={styles.introItem}><strong>Local</strong><span>studio in Jubilee Hills</span></div>
          <div className={styles.introItem}><strong>Jubilee Hills</strong><span>Launch programmes · Enquiries welcome</span></div>
        </div>
      </div>
    </section>
  );
}
