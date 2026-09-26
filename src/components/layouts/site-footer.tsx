import styles from "./Footer.module.css";

const quickLinks = [
  { label: "About Us", href: "https://akaash-industries.vercel.app/about" },
  { label: "Pyrolysis Plant", href: "https://akaash-industries.vercel.app/pyrolysis" },
  { label: "Services", href: "https://akaash-industries.vercel.app/services" },
  { label: "Contact", href: "https://akaash-industries.vercel.app/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <h3 className={styles.brandName}>Akaash Industries</h3>
            <p className={styles.tagline}>Make new the most</p>

            <p className={styles.connectLabel}>Connect with us</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77A4.9 4.9 0 0 1 5.46.52C6.1.27 6.83.1 7.89.05 8.94.01 9.3 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 0 0-2.33 1.17 1.17 0 0 0 0 2.33Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className={styles.col} aria-label="Quick links">
            <h4 className={styles.colHeading}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Us */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact Us</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:info@akaashindustries.com" className={styles.footerLink}>
                  Email Us
                  <br />
                  info@akaashindustries.com
                </a>
              </li>
              <li>
                <a href="tel:+919849197608" className={styles.footerLink}>
                  Call Us
                  <br />
                  +91 9849197608
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Location</h4>
            <address className={styles.address}>
              Javid Gulshan, 7th Floor
              <br />
              Brindavan Colony, Tolichowki
              <br />
              Hyderabad, Telangana 500008
            </address>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {year} Akaash Industries. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="https://akaash-industries.vercel.app/privacy" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="https://akaash-industries.vercel.app/terms" className={styles.legalLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}