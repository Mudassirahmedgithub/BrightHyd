import styles from "./PromiseSection.module.css";

export default function PromiseSection() {
  return (
    <section className={styles.promise}>
      <div className="container">
        <div className={styles.promiseInner}>
          <p className={styles.eyebrow}>The BrightPath promise</p>
          <h2>Leave with more questions —<span>and the tools to answer them.</span></h2>
          <p>We care about scores, of course. We care just as much about the voice a student uses to explain them, the curiosity behind them, and the person they become along the way.</p>
          <div className={styles.promiseFooter}><span>Made for the long view</span><span>Focus on the progress.</span></div>
        </div>
      </div>
    </section>
  );
}
