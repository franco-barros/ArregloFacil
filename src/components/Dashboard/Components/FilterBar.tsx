"use client";

import React from "react";
import styles from "../../../styles/Dashboard/FiltersBar.module.css";

interface Props {
  onFilterChange: (filter: string) => void;
}

const FiltersBar: React.FC<Props> = ({ onFilterChange }) => {
  return (
    <div className={styles.filters}>
      <button onClick={() => onFilterChange("all")}>Todos</button>
      <button onClick={() => onFilterChange("available")}>Disponibles</button>
      <button onClick={() => onFilterChange("electricista")}>
        Electricistas
      </button>
      <button onClick={() => onFilterChange("gasista")}>Gasistas</button>
    </div>
  );
};

export default FiltersBar;
