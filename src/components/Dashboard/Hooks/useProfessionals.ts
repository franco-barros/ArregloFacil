"use client";

import { useEffect, useState } from "react";
import { Professional } from "../Types/Professionals";
import { mockProfessionals } from "../Data/mockProfessionals";

export const useProfessionals = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de fetch
    const timeout = setTimeout(() => {
      setProfessionals(mockProfessionals);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return {
    professionals,
    loading,
  };
};
