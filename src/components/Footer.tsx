import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoMark}>B</span>
            <span><strong>BrightPath</strong><small>Jubilee Hills · Hyderabad</small></span>
          </a>
          <div className={styles.footerAddress}>
            5th Floor, Road Number 44, CBI Colony,<br />
            Jubilee Hills, Hyderabad,<br />
            Telangana 500033, India
          </div>
          <a href="#" className={styles.instagram}>@brightpath</a>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} BrightPath</span>
          <a href="#">Privacy Policy</a>
          <a href="#" className={styles.backTop}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
