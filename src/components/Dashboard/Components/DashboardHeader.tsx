"use client";

import React from "react";
import styles from "../../../styles/Dashboard/DashboardHeader.module.css";
import { Bell } from "lucide-react";

const DashboardHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <h2 className={styles.title}>Hola 👋</h2>
        <p className={styles.subtitle}>Encontrá profesionales cerca tuyo</p>
      </div>

      <div className={styles.actions}>
        <Bell size={20} />
      </div>
    </div>
  );
};

export default DashboardHeader;
