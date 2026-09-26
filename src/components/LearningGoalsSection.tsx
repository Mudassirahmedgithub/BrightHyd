import styles from "./LearningGoalsSection.module.css";

export default function LearningGoalsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.learningGrid}>
          <div>
            <p className={styles.eyebrow}>04 / Our learning goals</p>
            <h2>A little more you<span>in every answer.</span></h2>
          </div>
          <div>
            <p className={styles.largeText}>We aim to give students space to practise, ask questions, and work towards clear goals. Personal attention and feedback are the foundation of the learning environment we are building.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
