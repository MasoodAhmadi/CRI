"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // <-- Correct import!

import { supabase } from "../../supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    // Get user's role from profiles
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError) {
      setErrorMsg(profileError.message);
      return;
    }

    if (profile.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
