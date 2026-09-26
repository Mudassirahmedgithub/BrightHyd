import styles from "./FAQSection.module.css";

const faqs = [
  { question: "Do you offer trial classes?", answer: "Yes, we offer free trial classes so students can experience our teaching style and environment before committing." },
  { question: "What are the batch sizes?", answer: "We keep our batches intentionally small to ensure personal attention and focused learning. Contact us for specifics on your chosen course." },
  { question: "What is the fee structure?", answer: "Fees vary by programme. Contact us for current fee details and batch availability." },
  { question: "When do classes take place?", answer: "Class schedules depend on the programme and batch availability. Contact us to confirm current batch times and your preferred trial date before making plans." },
  { question: "What are your operating hours?", answer: "We are open Monday to Saturday, 09:00 to 18:00. We are closed on Sundays." },
];

export default function FAQSection() {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.faqGrid}>
          <div><p className={styles.eyebrow}>06 / Common questions</p><h2>Questions<span>&amp; Answers.</span></h2></div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary><span>{faq.question}</span><b>+</b></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
