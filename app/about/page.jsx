"use client";
import React, { useState } from "react";
import { dummyEvents } from "../../data/dummyData";

export default function AboutUs() {
  const params = "";
  const [events, setEvents] = useState(dummyEvents);

  console.log("events", events);

  return (
    <div className="container py-5">
      <h2>AboutUs</h2>
      <p>Welcome to the AboutUs page!</p>
      <p>Here you can manage your Aboutus.</p>
      {/* Add more content or components related to events here */}
    </div>
  );
}
