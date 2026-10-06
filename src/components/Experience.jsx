import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    title: "Fullstack with Python Intern",
    company: "AvaIntern",
    period: "May 2026 – July 2026",
    description:
      "Completed a full-stack development internship focused on building practical web applications and strengthening frontend, backend and programming skills.",
  },
  {
    title: "AI & Cloud Intern",
    company: "IBM SkillsBuild | Edunet Foundation | AICTE",
    period: "2025",
    description:
      "Worked on an AI and Cloud focused internship project involving a Crop Recommendation System using IBM Cloud AutoAI and a Kaggle dataset.",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">04 — EXPERIENCE</span>

          <h2>
            Learning by <span>building.</span>
          </h2>

          <p>
            Internship experiences that helped me develop practical technical
            and problem-solving skills.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <motion.div
              className="experience-card"
              key={item.title}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="experience-icon">
                <Briefcase size={20} />
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  <span className="experience-date">
                    <CalendarDays size={14} />
                    {item.period}
                  </span>
                </div>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;