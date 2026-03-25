"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/DashboardSection.module.css";

import DashboardHeader from "./Components/DashboardHeader";
import SearchBar from "./Components/SearchBar";
import FiltersBar from "./Components/FilterBar";
import FeaturedProfessionals from "./Components/FeactureProfessionals";
import ProfessionalsGrid from "./Components/ProfessionalsGrid";
import LoadingState from "./Components/LoadingState";
import EmptyState from "./Components/EmptyState";

import { useProfessionals } from "./Hooks/useProfessionals";

const DashboardSection: React.FC = () => {
  const { professionals, loading } = useProfessionals();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSelect = (id: string) => {
    console.log("Seleccionado:", id);
  };

  const filtered = professionals.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.service.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "available" && p.available) ||
      p.service.toLowerCase() === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.card}>
        <DashboardHeader />

        <SearchBar value={search} onChange={setSearch} />

        <FiltersBar onFilterChange={setFilter} />

        {loading ? (
          <LoadingState />
        ) : filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <FeaturedProfessionals
              professionals={filtered}
              onSelect={handleSelect}
            />

            <ProfessionalsGrid
              professionals={filtered}
              onSelect={handleSelect}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default DashboardSection;
