"use client";
import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ThemeContext } from "../../context/ThemeContext";
import { Wrench } from "lucide-react";
import styles from "../../styles/Greeting.module.css";

const Greeting: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const themeContext = useContext(ThemeContext);
  const [show, setShow] = useState(true);

  if (!themeContext)
    throw new Error("ThemeContext must be used within a ThemeProvider");

  const { darkMode } = themeContext;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 2500); // 2.5s antes de salir
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
          {/* Logo fijo sin animación */}
          <div className={styles.logoWrapper}>
            <Image
              src="/Logoconllaves.png"
              alt="Logo de Arreglo Fácil"
              width={140}
              height={140}
              priority
            />
          </div>

          {/* Texto animado */}
          <motion.div
            className={styles.textWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={styles.greeting}>
              Bienvenido a <span className={styles.brand}>Arreglo Fácil</span>
            </h1>

            <p className={styles.subtitle}>
              <Wrench size={18} style={{ marginRight: "6px" }} />
              Soluciones rápidas para tu hogar
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Greeting;
