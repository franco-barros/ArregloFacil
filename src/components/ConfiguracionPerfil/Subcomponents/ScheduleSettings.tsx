"use client";
import React from "react";
import styles from "../../../styles/ScheduleSettings.module.css";

interface ScheduleSettingsProps {
  daysOfWeek: string[];
  inicioDias: string[];
  horaInicio: string;
  finalDias: string[];
  horaFinal: string;
  isInicioDropdownOpen: boolean;
  isFinalDropdownOpen: boolean;
  toggleInicioDia: (day: string) => void;
  toggleFinalDia: (day: string) => void;
  setIsInicioDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFinalDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHoraInicio: React.Dispatch<React.SetStateAction<string>>;
  setHoraFinal: React.Dispatch<React.SetStateAction<string>>;
}

const ScheduleSettings: React.FC<ScheduleSettingsProps> = ({
  daysOfWeek,
  inicioDias,
  horaInicio,
  finalDias,
  horaFinal,
  isInicioDropdownOpen,
  isFinalDropdownOpen,
  toggleInicioDia,
  toggleFinalDia,
  setIsInicioDropdownOpen,
  setIsFinalDropdownOpen,
  setHoraInicio,
  setHoraFinal,
}) => {
  return (
    <div className={styles.container}>
      {/* INICIO */}
      <h3 className={styles.title}>Inicio de jornada laboral</h3>

      <div className={styles.row}>
        <div className={styles.column}>
          <p className={styles.label}>Día</p>

          <button
            onClick={() => setIsInicioDropdownOpen(!isInicioDropdownOpen)}
            className={styles.dropdownButton}
          >
            {inicioDias.length > 0 ? inicioDias.join(", ") : "Selecciona días"}
          </button>

          {isInicioDropdownOpen && (
            <div className={styles.dropdown}>
              {daysOfWeek.map((day) => (
                <button
                  key={"inicio-" + day}
                  onClick={() => toggleInicioDia(day)}
                  className={`${styles.dayButton} ${
                    inicioDias.includes(day) ? styles.selected : ""
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.column}>
          <p className={styles.label}>Hora de inicio</p>

          <input
            type="time"
            value={horaInicio}
            onChange={(e) => setHoraInicio(e.target.value)}
            className={styles.input}
          />
        </div>
      </div>

      {/* FINAL */}
      <h3 className={styles.title}>Finalización de jornada laboral</h3>

      <div className={styles.row}>
        <div className={styles.column}>
          <p className={styles.label}>Día</p>

          <button
            onClick={() => setIsFinalDropdownOpen(!isFinalDropdownOpen)}
            className={styles.dropdownButton}
          >
            {finalDias.length > 0 ? finalDias.join(", ") : "Selecciona días"}
          </button>

          {isFinalDropdownOpen && (
            <div className={styles.dropdown}>
              {daysOfWeek.map((day) => (
                <button
                  key={"final-" + day}
                  onClick={() => toggleFinalDia(day)}
                  className={`${styles.dayButton} ${
                    finalDias.includes(day) ? styles.selected : ""
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.column}>
          <p className={styles.label}>Hora de finalización</p>

          <input
            type="time"
            value={horaFinal}
            onChange={(e) => setHoraFinal(e.target.value)}
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleSettings;
