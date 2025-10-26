"use client";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./search.css";
export default function SearchButton() {
  const [isVisible, setIsVisible] = useState(true);

  const handleSearch = () => {
    setIsVisible((prev) => prev);
  };
  return (
    <div className="search-container">
      {isVisible && (
        <input
          type="text"
          className="form-control serach-input mb-1"
          placeholder="Search..."
          onChange={(e) => console.log(e.target.value)}
          aria-label="Search"
        />
      )}
      <Button
        variant="none"
        onClick={handleSearch}
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <Search size={25} title="search" />
        <h4>Search</h4>
      </Button>
    </div>
  );
}
