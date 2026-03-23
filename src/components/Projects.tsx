import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BayMax — Diabetes Predictor",
    description: "Full-stack ML web app with Django + ML for real-time diabetes predictions, health insights dashboard, and authentication system.",
    tags: ["Django", "scikit-learn", "Python", "ML"],
    github: "#",
  },
  {
    title: "Startup Predictor",
    description: "Predict startup success using ensemble ML models with dashboard, API, CLI interface, KPI insights and PDF reporting.",
    tags: ["FastAPI", "XGBoost", "React", "Docker"],
    github: "#",
  },
  {
    title: "IPL Score Prediction",
    description: "ML model for cricket score forecasting using historical data analysis and pattern extraction techniques.",
    tags: ["Python", "Pandas", "scikit-learn", "ML"],
    github: "#",
  },
  {
    title: "Product Management System",
    description: "Rental tracking and inventory management system for efficient product lifecycle management.",
    tags: ["Django", "SQL", "Python", "CRUD"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
