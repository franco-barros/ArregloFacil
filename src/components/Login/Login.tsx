"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Login.module.css";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setError("");
    if (email === "test@test.com" && password === "1234") {
      localStorage.setItem("token", "fake-token");
      router.push("/dashboard");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  const handleGuestLogin = () => {
    localStorage.setItem("guest", "true");
    router.push("/dashboard");
  };

  return (
    <motion.div
      className={styles.loginContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* LOGO */}
      <motion.div
        className={styles.logoWrapper}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Image
          src="/Logoconllaves.png"
          alt="Arreglo Fácil"
          width={140}
          height={140}
        />
      </motion.div>

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        className={styles.mainContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {/* TEXTO */}
        <motion.div
          className={styles.loginText}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h1 className={styles.desktopOnly}>
            Solucioná problemas de tu hogar de forma rápida y segura
          </h1>
          <p className={styles.desktopOnly}>
            Conectamos clientes con profesionales de confianza 🔧
          </p>
        </motion.div>

        {/* FORMULARIO */}
        <motion.div
          className={styles.loginCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.checkboxContainer}>
            <input
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword">Mostrar contraseña</label>
          </div>

          <div className={styles.loginLinks}>
            <Link href="#">¿Olvidaste tu contraseña?</Link>
            <Link href="#">Crear cuenta</Link>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button
            onClick={handleLogin}
            className={`${styles.btn} ${styles.primary}`}
          >
            Iniciar sesión
          </button>

          <button
            onClick={handleGuestLogin}
            className={`${styles.btn} ${styles.secondary}`}
          >
            Explorar como invitado
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
