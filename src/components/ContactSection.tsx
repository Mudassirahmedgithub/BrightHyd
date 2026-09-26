import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactHeader}>
          <p className={styles.eyebrow}>07 / Come say hello</p>
          <h2>Your next chapter can<span>start with a conversation.</span></h2>
          <p>Come by our studio, ask the practical questions, and meet the people who might teach your child next. No pressure. Just a useful first step.</p>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactAction}>
            <a href="tel:+917013396751" className="btn btn-primary">Book a Free Trial Class</a>
            <a href="tel:+917013396751">Call +91 70133 96751</a>
            <a href="https://wa.me/917013396751" target="_blank" rel="noreferrer">WhatsApp admissions</a>
          </div>
          <div className={styles.contactDetails}>
            <div><span>Visit</span><p>5th Floor, Road Number 44, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033, India</p></div>
            <div><span>Hours</span><p>Mon–Sat 09:00–18:00<br />(Sunday closed)</p></div>
            <div><span>Write</span><a href="mailto:merjanimpex.hyd@gmail.com">merjanimpex.hyd@gmail.com</a></div>
            <div><span>WhatsApp</span><a href="tel:+917013396751">+91 70133 96751</a></div>
            <div><span>Instagram</span><a href="#">@brightpath</a></div>
          </div>
        </div>
        <p className={styles.disclaimer}>BrightPath provides preparation courses and is not an official IELTS, College Board, or Goethe examination centre unless separately stated.</p>
      </div>
    </section>
  );
}
