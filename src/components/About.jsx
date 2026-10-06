import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Brain, Layers3 } from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">01 — ABOUT ME</span>

          <h2>
            Building with <span>curiosity.</span>
          </h2>

          <p>
            I enjoy turning ideas into practical software, combining
            artificial intelligence with modern web development.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I'm a Computer Science Engineering student specializing in
              Artificial Intelligence & Machine Learning. My interests span
              AI/ML, computer vision, frontend development, and practical
              full-stack applications.
            </p>

            <p>
              I like learning by building — from AI-powered applications and
              computer vision projects to web platforms and internship
              projects. My goal is to create technology that is useful,
              understandable, and impactful.
            </p>

            <a href="#projects" className="about-link">
              Explore my projects
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="about-cards">
            <motion.div
              className="about-mini-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="about-icon">
                <Brain size={21} />
              </div>

              <div>
                <h3>AI & ML</h3>
                <p>Machine Learning, Computer Vision & Generative AI</p>
              </div>
            </motion.div>

            <motion.div
              className="about-mini-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-icon">
                <Code2 size={21} />
              </div>

              <div>
                <h3>Web Development</h3>
                <p>HTML, CSS, JavaScript & React</p>
              </div>
            </motion.div>

            <motion.div
              className="about-mini-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="about-icon">
                <Layers3 size={21} />
              </div>

              <div>
                <h3>Project Focus</h3>
                <p>Building practical projects and learning through implementation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;