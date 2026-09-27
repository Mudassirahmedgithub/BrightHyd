import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className={styles.videoOverlay}></div>

      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.location}>
              Jubilee Hills · Hyderabad
            </p>

            <h1>
              Global futures
              <span>start here.</span>
            </h1>

            <p className={styles.heroDescription}>
              BrightPath is a new education centre in Jubilee Hills focused
              on small groups, personal attention, measurable progress, and
              international exam preparation.
            </p>

            <div className={styles.heroActions}>
              <a href="#courses" className="btn btn-primary">
                Explore our courses
              </a>

              <a
                href="#contact"
                className={`btn btn-secondary ${styles.heroSecondary}`}
              >
                Book a free trial class
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}