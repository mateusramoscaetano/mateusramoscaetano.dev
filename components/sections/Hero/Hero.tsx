"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageContext } from "../../../lib/contexts/LanguageContext";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import { TextReveal, TypewriterText } from "../../ui/TextAnimations";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const Hero: React.FC = () => {
  const { translations } = useLanguageContext();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    window.open("/curriculo-mateus-ramos.pdf", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white  overflow-hidden">
      <Scene />
      <Container className="relative z-10 md:min-w-4xl">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-violet-400 font-mono text-sm mb-4 min-h-[20px]">
            <TypewriterText text={translations.hero.greeting} delay={0.5} />
          </div>

          <div className="flex flex-col text-9xl mb-6 tracking-tight leading-tight">
            <div className="font-display-condensed font-medium text-white flex justify-start text-start md:mr-4 tracking-tight min-h-[1em]">
              <TextReveal delay={1.5}>MATEUS</TextReveal>
            </div>

            <motion.span
              className="font-serif italic font-medium text-violet-400 text-7xl text-center md:mr-4 leading-tighter"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
            >
              Ramos
            </motion.span>

            <div className="font-display-condensed text-gray-300 uppercase tracking-tight flex justify-end min-h-[1em]">
              <TextReveal delay={2.8}>Caetano</TextReveal>
            </div>
          </div>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-sans font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
          >
            {translations.hero.title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.8 }}
          >
            {translations.hero.subtitle}
          </motion.p>

          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-gray-300 text-sm mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 4.1 }}
          >
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
            {translations.hero.experience}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.4 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToProjects}
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {translations.hero.cta}
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={downloadCV}
              icon={<Download className="w-5 h-5" />}
            >
              {translations.hero.downloadCV}
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
