"use client";

import React from "react";
import { Professional } from "../Types/Professionals";
import ProfessionalCard from "../Cards/ProfessionalCard/ProfessionalCard";
import styles from "../../../styles/Dashboard/ProfessionalsGrid.module.css";

interface Props {
  professionals: Professional[];
  onSelect: (id: string) => void;
}

const ProfessionalsGrid: React.FC<Props> = ({ professionals, onSelect }) => {
  return (
    <div className={styles.grid}>
      {professionals.map((prof) => (
        <ProfessionalCard
          key={prof.id}
          {...prof}
          onSelect={() => onSelect(prof.id)}
        />
      ))}
    </div>
  );
};

export default ProfessionalsGrid;
