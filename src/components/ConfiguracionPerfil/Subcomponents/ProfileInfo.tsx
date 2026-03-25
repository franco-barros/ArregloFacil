"use client";
import React from "react";
import styles from "../../../styles/ProfileInfo.module.css";

interface ProfileInfoProps {
  nombre: string;
  correo: string;
  empresaDepartamento: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  nombre,
  correo,
  empresaDepartamento,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <label htmlFor="nombre" className={styles.label}>
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          readOnly
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="correo" className={styles.label}>
          Correo:
        </label>
        <input
          id="correo"
          type="email"
          value={correo}
          readOnly
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="empresaDepartamento" className={styles.label}>
          Empresa/Departamento:
        </label>
        <input
          id="empresaDepartamento"
          type="text"
          value={empresaDepartamento}
          readOnly
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
