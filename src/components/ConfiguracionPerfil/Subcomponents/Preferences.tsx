"use client";
import React from "react";
import styles from "../../../styles/Preferences.module.css";

interface PreferencesProps {
  preferencias: {
    noMolestar: boolean;
    recordatorios: boolean;
    recordatoriosPausas: boolean;
    alertasBienestar: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Preferences: React.FC<PreferencesProps> = ({
  preferencias,
  handleChange,
}) => {
  return (
    <div className={styles.container}>
      {/* GRUPO 1 */}
      <div className={styles.group}>
        <label className={styles.label}>
          <input
            id="noMolestar"
            type="checkbox"
            name="noMolestar"
            checked={preferencias.noMolestar}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span>No molestar en las noches</span>
        </label>

        <label className={styles.label}>
          <input
            id="recordatorios"
            type="checkbox"
            name="recordatorios"
            checked={preferencias.recordatorios}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span>Activar recordatorios</span>
        </label>
      </div>

      {/* TITULO */}
      <h3 className={styles.title}>Preferencias de Bienestar</h3>

      {/* GRUPO 2 */}
      <div className={styles.group}>
        <label className={styles.label}>
          <input
            id="recordatoriosPausas"
            type="checkbox"
            name="recordatoriosPausas"
            checked={preferencias.recordatoriosPausas}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span>Recibir recordatorios de pausas activas</span>
        </label>

        <label className={styles.label}>
          <input
            id="alertasBienestar"
            type="checkbox"
            name="alertasBienestar"
            checked={preferencias.alertasBienestar}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span>Recibir alertas de bienestar general</span>
        </label>
      </div>
    </div>
  );
};

export default Preferences;
