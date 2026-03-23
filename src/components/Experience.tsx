import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Engineer Trainee",
    company: "Technocolabs Software",
    period: "Jul 2025 – Jan 2026",
    points: [
      "Built end-to-end ML pipeline for startup prediction",
      "Processed 1M+ records with feature engineering",
      "Developed ensemble models (RF, XGBoost, Lasso)",
      "Deployed FastAPI service on Render",
      "Built frontend for user interaction",
    ],
  },
  {
    title: "AI Data Entry",
    company: "Innovatetech Pvt. Ltd.",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Converted content into LaTeX using AI models",
      "Automated academic sheet generation",
      "Improved content processing efficiency",
    ],
  },
  {
    title: "Data Scientist Intern",
    company: "Technocolabs Software",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Built ETA prediction system (MAE ~4 min)",
      "Processed 2M+ records",
      "Deployed real-time API with Docker + CI/CD",
    ],
  },
  {
    title: "Graphic Design Intern",
    company: "Innovatetech",
    period: "Mar 2024 – Sep 2024",
    points: [
      "Designed interactive eBooks using Adobe tools",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-xs text-primary font-mono">{exp.period}</span>
                  </div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
