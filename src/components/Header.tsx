import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoMark}>B</span>
            <span>
              <strong>BrightPath</strong>
              <small>Jubilee Hills · Hyderabad</small>
            </span>
          </a>
          <div className={styles.navLinks}>
            <a href="#courses">Courses</a>
            <a href="#about">About us</a>
            <a href="#why-us">Why BrightPath</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn btn-primary">Book free trial</a>
        </nav>
      </div>
    </header>
  );
}
