import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.location}>Jubilee Hills · Hyderabad</p>
            <h1>Global futures<span>start here.</span></h1>
            <p className={styles.heroDescription}>
              BrightPath is a new education centre in Jubilee Hills focused on small groups, personal attention, measurable progress, and international exam preparation.
            </p>
            <div className={styles.heroActions}>
              <a href="#courses" className="btn btn-primary">Explore our courses</a>
              <a href="#contact" className={`btn btn-secondary ${styles.heroSecondary}`}>Book a free trial class</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardTop}>
                <span>BRIGHTPATH</span><span>01 / 04</span>
              </div>
              <div className={styles.heroCircle}>
                <span>Learn</span><span>deliberately.</span>
              </div>
              <div className={styles.heroCardBottom}>
                <span>Jubilee Hills</span><span>Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
