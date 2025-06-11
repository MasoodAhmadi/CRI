"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // <-- Correct import!
import { supabase } from "../../supabaseClient";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      router.push("/login");
    };
    logout();
  }, [router]);

  return <p>Logging out...</p>;
}
