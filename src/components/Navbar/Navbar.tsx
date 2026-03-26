"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 👇 auth frontend simple
    const token = localStorage.getItem("token");
    const guest = localStorage.getItem("guest");
    setIsLoggedIn(!!token || !!guest);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("guest");
    setIsLoggedIn(false);
    router.push("/login");
  };

  if (!mounted || pathname === "/" || pathname.startsWith("/login"))
    return null;

  return (
    <motion.nav className={styles.navbar}>
      <div className={styles.container}>
        <Image
          src="/Logoconllaves.png"
          alt="Equilibra"
          width={100}
          height={100}
        />

        <ul className={styles.menuDesktop}>
          <li>
            <a href="/dashboard">Inicio</a>
          </li>
          <li>
            <a href="/about">Acerca de</a>
          </li>
          <li>
            <a href="/perfil">Perfil</a>
          </li>

          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </li>
          ) : (
            <li>
              <a href="/login">Iniciar Sesión</a>
            </li>
          )}
        </ul>

        <div className={styles.mobileMenuBtn}>
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <a href="/dashboard" onClick={() => setIsOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setIsOpen(false)}>
                Acerca de
              </a>
            </li>
            <li>
              <a href="/perfil" onClick={() => setIsOpen(false)}>
                Perfil
              </a>
            </li>

            {isLoggedIn ? (
              <li>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </li>
            ) : (
              <li>
                <a href="/login" onClick={() => setIsOpen(false)}>
                  Iniciar Sesión
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
