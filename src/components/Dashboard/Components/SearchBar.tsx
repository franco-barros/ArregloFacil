"use client";

import React from "react";
import styles from "../../../styles/Dashboard/SearchBar.module.css";
import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <Search size={18} />
      <input
        type="text"
        placeholder="Buscar profesionales..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
