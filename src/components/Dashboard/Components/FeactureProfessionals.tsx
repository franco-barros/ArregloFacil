"use client";

import React from "react";
import { Professional } from "../Types/Professionals";
import ProfessionalCard from "../Cards/ProfessionalCard/ProfessionalCard";
import styles from "../../../styles/Dashboard/Featured.module.css";

interface Props {
  professionals: Professional[];
  onSelect: (id: string) => void;
}

const FeaturedProfessionals: React.FC<Props> = ({
  professionals,
  onSelect,
}) => {
  return (
    <div className={styles.section}>
      <h3>Recomendados para vos ⭐</h3>

      <div className={styles.grid}>
        {professionals.slice(0, 2).map((prof) => (
          <ProfessionalCard
            key={prof.id}
            {...prof}
            onSelect={() => onSelect(prof.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProfessionals;
