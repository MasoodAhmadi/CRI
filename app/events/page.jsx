"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function CreateNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("news")
      .insert([{ title, content }]);

    if (error) {
      alert("Error creating news: " + error.message);
    } else {
      router.push("/events");
    }
  };

  return (
    <div className="container py-5">
      <h2>Create News</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control my-2"
          placeholder="Content"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="btn btn-primary mt-2" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
