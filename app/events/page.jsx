"use client";
import React, { useState } from "react";
import { dummyEvents } from "../../data/dummyData";

export default function EventsPage() {
  const params = "";
  const [events, setEvents] = useState(dummyEvents);

  console.log("events", events);

  return (
    <div className="container py-5">
      <h2>Events</h2>
      <p>Welcome to the events page!</p>
      <p>Here you can manage your events.</p>
      {/* Add more content or components related to events here */}
    </div>
  );
}
