import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Machine Learning enthusiast with hands-on experience building 
              end-to-end ML pipelines, predictive models, and full-stack ML applications. 
              As a Machine Learning Trainee, I've processed millions of records, developed 
              ensemble models, and deployed real-time prediction APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My focus lies at the intersection of data science and software engineering — 
              creating intelligent systems that deliver measurable impact in real-world scenarios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold">Education</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                BSc (Hons) Computing with Artificial Intelligence
              </p>
              <p className="text-sm text-primary font-medium">First Class Honors</p>
              <p className="text-xs text-muted-foreground mt-1">
                Islington College, Kathmandu (London Metropolitan University) — Dec 2025
              </p>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Briefcase className="text-accent" size={20} />
                </div>
                <h3 className="font-semibold">Experience</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                ML Engineer Trainee, Data Scientist Intern, AI Data Entry
              </p>
              <p className="text-sm text-primary font-medium">3+ Roles in ML & Data</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
