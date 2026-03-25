"use client";

import styles from "../../../styles/Dashboard/EmptyState.module.css";
import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className={styles.empty}>
      <SearchX size={40} />
      <p>No se encontraron profesionales</p>
    </div>
  );
};

export default EmptyState;
