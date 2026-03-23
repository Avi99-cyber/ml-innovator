import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            MD Farhan{" "}
            <span className="gradient-text">Akhtar</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
            Aspiring Machine Learning Engineer
          </h2>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Building intelligent systems and data-driven solutions that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 animate-pulse_glow">
              <img
                src={profileImg}
                alt="MD Farhan Akhtar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 glow-border animate-float">
              <span className="text-primary font-mono text-sm">ML Engineer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
