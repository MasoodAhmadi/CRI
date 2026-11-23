import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollManager from "./ScrollManager";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Matches from "./pages/Matches";
import MembershipPage from "./pages/MembershipPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardEvents from "./pages/dashboard/DashboardEvents";
import DashboardMatches from "./pages/dashboard/DashboardMatches";
import DashboardUsers from "./pages/dashboard/DashboardUsers";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/membership" element={<MembershipPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/events" element={<DashboardEvents />} />
        <Route path="/dashboard/matches" element={<DashboardMatches />} />
        <Route path="/dashboard/users" element={<DashboardUsers />} />

        <Route path="/notFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
