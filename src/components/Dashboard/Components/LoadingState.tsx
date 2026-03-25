"use client";

import styles from "../../../styles/Dashboard/LoadingState.module.css";

const LoadingState = () => {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={styles.skeleton} />
      ))}
    </div>
  );
};

export default LoadingState;
