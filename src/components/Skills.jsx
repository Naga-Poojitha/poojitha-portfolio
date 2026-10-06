import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend & Database",
    skills: ["Python", "Node.js", "MongoDB", "SQL", "Supabase"],
  },
  {
    title: "AI / ML",
    skills: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "Computer Vision",
      "OpenCV",
      "MediaPipe",
      "YOLOv8",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Google Colab"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">02 — SKILLS</span>

          <h2>
            My technical <span>toolkit.</span>
          </h2>

          <p>
            Technologies I use to build web applications, AI projects and
            practical software solutions.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-number">0{index + 1}</div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;