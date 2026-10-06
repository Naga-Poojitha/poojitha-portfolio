import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">06 — CONTACT</span>

          <h2>
            Let’s build something <span>meaningful.</span>
          </h2>

          <p>
            I’m open to internships, entry-level opportunities,
            collaborations and interesting technology projects.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:gullanagapoojitha@gmail.com"
              className="btn btn-primary"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://github.com/Naga-Poojitha"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/naga-poojitha-gulla-110038297/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;