import { motion } from "framer-motion";
import { Trophy, Award, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "3rd Prize — JNTUGV Level-3 Hackathon",
    description:
      "Won 3rd Prize with a ₹7,000 award at the 24-Hour Hackathon.",
    label: "Hackathon",
  },
  {
    icon: Award,
    title: "Runner-Up — Power BI Hackathon",
    description:
      "Secured Runner-Up position in a Power BI Hackathon with a ₹1,500 prize.",
    label: "Data & Analytics",
  },
  {
    icon: Trophy,
    title: "2nd Prize — GYAN 2K24",
    description:
      "Secured 2nd Prize at the GYAN 2K24 Tech Fest.",
    label: "Tech Fest",
  },
  {
    icon: Users,
    title: "Leadership & Volunteering",
    description:
      "Active involvement in NSS, Street Cause, Dilides Club and CSMD event activities.",
    label: "Activities",
  },
];

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">05 — ACHIEVEMENTS</span>

          <h2>
            Beyond the <span>classroom.</span>
          </h2>

          <p>
            Competitions, hackathons and activities that shaped my
            technical and teamwork experience.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="achievement-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="achievement-icon">
                  <Icon size={22} />
                </div>

                <span>{item.label}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;