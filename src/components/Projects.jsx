import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Avanthi Alumni Portal",
    category: "Full-Stack Development",
    description:
      "An ongoing 4th-year full-stack alumni platform designed to connect students, alumni, teachers and administrators through networking, jobs, events, mentorship and community features.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
    status: "Ongoing 4th-Year Project",
  },

  {
    number: "02",
    title: "MusicVerse",
    category: "Web Development",
    description:
      "A Telugu and Tollywood music discovery platform with artist, song and movie exploration, favorites, music links and upcoming event discovery.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
    status: "Live Project",
    demo: "https://naga-poojitha.github.io/MusicVerse/",
  },

  {
    number: "03",
    title: "HirevAI",
    category: "AI Interview Platform",
    description:
      "An AI-powered interview platform created using Lovable.ai with resume screening, personalized interview questions, voice interviews, scoring and candidate reports.",
    technologies: [
      "Lovable.ai",
      "React",
      "Gemini AI",
      "Supabase",
    ],
    status: "AI Application",
    demo: "https://ai-hiring-1.lovable.app/",
  },

  {
    number: "04",
    title: "Gesture Controlled Game",
    category: "Computer Vision",
    description:
      "A gesture-based game interface using camera input to recognize hand movements and control gameplay in real time.",
    technologies: [
      "Python",
      "MediaPipe",
      "OpenCV",
      "cvzone",
    ],
    status: "Hackathon Project",
    demo:
      "https://drive.google.com/file/d/1rfhSwnYoZavC_SHtbS7gFP8JBRpHWSUa/view?pli=1",
  },

  {
    number: "05",
    title: "Real-Time Object Detection",
    category: "Computer Vision",
    description:
      "A real-time object detection project using YOLOv8 with image processing, object annotation and camera-based detection.",
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "NumPy",
    ],
    status: "Computer Vision",
    demo:
      "https://drive.google.com/file/d/1nphtyQt64CrmRlQuN8COJkk3ZfFtoIPd/view",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            03 — PROJECTS
          </span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            A selection of projects across full-stack development,
            artificial intelligence, computer vision and modern web
            applications.
          </p>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.number === "01"
                  ? "project-featured"
                  : ""
              }`}
              key={project.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>

              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

              <div className="project-links">

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                ) : (
                  <span className="project-private">
                    <ArrowUpRight size={16} />
                    Ongoing Project
                  </span>
                )}

              </div>

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;