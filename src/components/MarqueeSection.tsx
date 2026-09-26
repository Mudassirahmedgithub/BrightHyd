import styles from "./MarqueeSection.module.css";

export default function MarqueeSection() {
  return (
    <section className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        <span>Learn deliberately</span><i>/</i>
        <span>Think beyond the syllabus</span><i>/</i>
        <span>Begin in Hyderabad</span><i>/</i>
        <span>Go further</span><i>/</i>
        <span>Learn deliberately</span><i>/</i>
        <span>Think beyond the syllabus</span><i>/</i>
        <span>Begin in Hyderabad</span><i>/</i>
        <span>Go further</span>
      </div>
    </section>
  );
}
