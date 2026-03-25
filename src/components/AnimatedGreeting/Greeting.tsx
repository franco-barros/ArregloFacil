"use client";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../../styles/Greeting.module.css";

const Greeting: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { darkMode } = themeContext;

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
      <AnimatePresence>
        <motion.h1
          className={styles.greeting}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          Bienvenidos a{" "}
          <span className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Logo de Equilibra"
              width={150}
              height={50}
              priority
            />
          </span>{" "}
          tu plataforma de bienestar
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Greeting;
