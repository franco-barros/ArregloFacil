"use client";

import React from "react";
import styles from "../../../../styles/ProfessionalCard.module.css";
import { Star } from "lucide-react";

interface Props {
  name: string;
  service: string;
  rating: number;
  location: string;
  available: boolean;
  onSelect: () => void;
}

const ProfessionalCard: React.FC<Props> = ({
  name,
  service,
  rating,
  location,
  available,
  onSelect,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.service}>{service}</p>
        </div>

        <span
          className={`${styles.badge} ${
            available ? styles.available : styles.unavailable
          }`}
        >
          {available ? "Disponible" : "Ocupado"}
        </span>
      </div>

      <div className={styles.middle}>
        <div className={styles.rating}>
          <Star size={16} />
          <span>{rating}</span>
        </div>

        <span className={styles.location}>{location}</span>
      </div>

      <button
        onClick={onSelect}
        disabled={!available}
        className={styles.button}
      >
        Ver perfil
      </button>
    </div>
  );
};

export default ProfessionalCard;
