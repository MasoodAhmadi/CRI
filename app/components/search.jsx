"use client";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

export default function SearchButton({ onClick }) {
  return (
    <Button variant="none" onClick={onClick} style={{ color: "white" }}>
      <Search size={30} /> {/* You can adjust the size */}
    </Button>
  );
}
