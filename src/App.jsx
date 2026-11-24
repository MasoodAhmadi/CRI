import React from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Matches from "./pages/Matches";
import NotFound from "./pages/NotFound";
import ScrollManager from "./ScrollManager";
import { Routes, Route } from "react-router-dom";
import MembershipPage from "./pages/MembershipPage";
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
