"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Login.module.css";

const Login = () => {
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
      setError("Credenciales incorrectas");
    }
  };

  const handleGuestLogin = () => {
    localStorage.setItem("guest", "true");
    router.push("/dashboard");
  };

  return (
    <motion.div className={styles.loginContainer}>
      <Image src="/logo.png" alt="Equilibra" width={200} height={200} />

      <div className={styles.loginText}>
        <h1>
          Bienvenido a Equilibra, tu plataforma de bienestar y productividad
        </h1>
      </div>

      <div className={styles.loginCard}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresar"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Ingresar"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label>Mostrar contraseña</label>
        </div>

        <div className={styles.loginLinks}>
          <Link href="#">¿Olvidaste tu contraseña?</Link>
          <Link href="#">Registrate</Link>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button
          onClick={handleLogin}
          className={`${styles.btn} ${styles.primary}`}
        >
          Iniciar Sesión
        </button>

        <button
          onClick={handleGuestLogin}
          className={`${styles.btn} ${styles.secondary}`}
        >
          Entrar como Invitado
        </button>
      </div>
    </motion.div>
  );
};

export default Login;
