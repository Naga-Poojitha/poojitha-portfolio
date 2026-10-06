import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid" />

      <div className="container hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={15} />
            <span>AI/ML • Full-Stack Development</span>
          </motion.div>

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gulla Naga
            <span> Poojitha.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI/ML & Full-Stack Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Engineering student specializing in Artificial
            Intelligence & Machine Learning, building practical web
            applications and AI-powered solutions.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="hero-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://github.com/Naga-Poojitha"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-text">GH</span>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/naga-poojitha-gulla-110038297/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-text">in</span>
              LinkedIn
            </a>

            <a href="mailto:gullanagapoojitha@gmail.com">
              <Mail size={18} />
              Email
            </a>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <motion.div
            className="hero-image-glow"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="hero-image-wrapper">
            <img
              src="/profile.jpg"
              alt="Gulla Naga Poojitha"
              className="hero-image"
            />
          </div>

          {/* WEB DEVELOPMENT CARD */}
          <motion.div
            className="floating-card floating-card-one"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="floating-icon">&lt;/&gt;</span>

            <div>
              <strong>Web</strong>
              <small>Development</small>
            </div>
          </motion.div>

          {/* AI CARD */}
          <motion.div
            className="floating-card floating-card-two"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="floating-icon">AI</span>

            <div>
              <strong>Artificial</strong>
              <small>Intelligence</small>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}

export default Hero;