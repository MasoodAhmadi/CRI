// app/logout/page.jsx or pages/logout.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("user");
    router.push("/login");
  }, [router]);

  return null;
}
