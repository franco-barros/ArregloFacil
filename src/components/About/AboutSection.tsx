"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/AboutSection.module.css";
import { Home, Hammer, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Servicios del hogar",
    description: "Conectamos usuarios con profesionales confiables.",
  },
  {
    icon: Hammer,
    title: "Profesionales verificados",
    description: "Gasistas, pintores, electricistas y más.",
  },
  {
    icon: Clock,
    title: "Rápido y simple",
    description: "Solicitá un servicio en pocos pasos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro y confiable",
    description: "Perfiles con reputación y valoraciones.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.wrapper}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h1 className={styles.title}>Arregla Fácil</h1>

          <p className={styles.subtitle}>
            La forma más simple de encontrar profesionales del hogar en tu zona.
          </p>

          <p className={styles.description}>
            Arregla Fácil conecta personas con especialistas verificados para
            resolver tareas del hogar de manera rápida, segura y transparente.
            Desde reparaciones pequeñas hasta servicios más complejos, todo en
            un solo lugar.
          </p>

          <button className={styles.cta}>Comenzar ahora</button>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={styles.featureRow}>
                <div className={styles.iconBox}>
                  <Icon className={styles.icon} />
                </div>

                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
