import { motion } from "framer-motion";
import { Brain, BarChart3, Database, GitBranch, Server, Code } from "lucide-react";

const services = [
  { icon: Brain, title: "ML Model Development", description: "Custom machine learning models tailored to your business needs and data." },
  { icon: BarChart3, title: "Predictive Analytics", description: "Data-driven forecasting solutions for informed decision-making." },
  { icon: Database, title: "Data Cleaning & Feature Engineering", description: "Transform raw data into meaningful features for optimal model performance." },
  { icon: GitBranch, title: "ML Pipeline Development", description: "End-to-end automated ML pipelines from data ingestion to deployment." },
  { icon: Server, title: "Model Deployment", description: "Deploy ML models as scalable APIs with Docker and cloud services." },
  { icon: Code, title: "API Integration", description: "Seamless integration of ML models into existing applications and workflows." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 hover-lift group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
