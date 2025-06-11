"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbars";

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/notFound");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" />
          <p className="fw-semibold text-muted">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>Admin Dashboard</h1>
      <a href="/">Logout</a>
    </div>
  );
}
