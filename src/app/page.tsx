"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Greeting } from "../components/AnimatedGreeting";
import { Login } from "../components/Login";

export default function Home() {
  const isLoggedIn = false;
  const [showGreeting, setShowGreeting] = useState(!isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        setShowGreeting(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {!isLoggedIn ? (
        showGreeting ? (
          <Greeting />
        ) : (
          <Login />
        )
      ) : (
        <div>Bienvenido a Equilibra</div>
      )}
    </motion.div>
  );
}
