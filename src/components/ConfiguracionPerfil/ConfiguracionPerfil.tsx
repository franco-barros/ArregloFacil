"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfileInfo from "./Subcomponents/ProfileInfo";
import Preferences from "./Subcomponents/Preferences";
import ScheduleSettings from "./Subcomponents/ScheduleSettings";
import styles from "../../styles/ConfiguracionPerfil.module.css";

const ConfiguracionPerfil: React.FC = () => {
  const [nombre] = useState("@nombre");
  const [correo] = useState("@correo");
  const [empresaDepartamento] = useState("@empresa/departamento");

  const [preferencias, setPreferencias] = useState({
    noMolestar: false,
    recordatorios: false,
    recordatoriosPausas: false,
    alertasBienestar: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferencias({
      ...preferencias,
      [e.target.name]: e.target.checked,
    });
  };

  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const [inicioDias, setInicioDias] = useState<string[]>([]);
  const [horaInicio, setHoraInicio] = useState("");
  const [finalDias, setFinalDias] = useState<string[]>([]);
  const [horaFinal, setHoraFinal] = useState("");

  const [isInicioDropdownOpen, setIsInicioDropdownOpen] = useState(false);
  const [isFinalDropdownOpen, setIsFinalDropdownOpen] = useState(false);

  const toggleInicioDia = (day: string) => {
    setInicioDias((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const toggleFinalDia = (day: string) => {
    setFinalDias((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const handleGuardarCambios = () => {
    const datosPerfil = {
      nombre,
      correo,
      empresaDepartamento,
      preferencias,
      inicioJornada: { dias: inicioDias, hora: horaInicio },
      finalJornada: { dias: finalDias, hora: horaFinal },
    };
    console.log("Guardando cambios:", datosPerfil);
  };

  return (
    <motion.div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Configuración de Perfil</h2>

        <ProfileInfo
          nombre={nombre}
          correo={correo}
          empresaDepartamento={empresaDepartamento}
        />

        <Preferences preferencias={preferencias} handleChange={handleChange} />

        <ScheduleSettings
          daysOfWeek={daysOfWeek}
          inicioDias={inicioDias}
          horaInicio={horaInicio}
          finalDias={finalDias}
          horaFinal={horaFinal}
          isInicioDropdownOpen={isInicioDropdownOpen}
          isFinalDropdownOpen={isFinalDropdownOpen}
          toggleInicioDia={toggleInicioDia}
          toggleFinalDia={toggleFinalDia}
          setIsInicioDropdownOpen={setIsInicioDropdownOpen}
          setIsFinalDropdownOpen={setIsFinalDropdownOpen}
          setHoraInicio={setHoraInicio}
          setHoraFinal={setHoraFinal}
        />

        <motion.button
          onClick={handleGuardarCambios}
          className={styles.saveBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Guardar Cambios
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ConfiguracionPerfil;
