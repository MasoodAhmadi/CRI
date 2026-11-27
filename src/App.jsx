import React from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Matches from "./pages/Matches";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer";
import Navbar from "./components/navbars";
import ScrollManager from "./ScrollManager";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MembershipPage from "./pages/MembershipPage";
import PlayersPage from "./pages/Players";
import ShpageezaFI from "./pages/ShpageezaFI";
import DashboardUsers from "./pages/dashboard/DashboardUsers";
import DashboardEvents from "./pages/dashboard/DashboardEvents";
import DashboardMatches from "./pages/dashboard/DashboardMatches";
import DashboardPlayers from "./pages/dashboard/DashboardPlayers";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <ScrollManager />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/shpageeza-fi" element={<ShpageezaFI />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/events" element={<DashboardEvents />} />
          <Route path="/dashboard/matches" element={<DashboardMatches />} />
          <Route path="/dashboard/users" element={<DashboardUsers />} />
          <Route path="/dashboard/players" element={<DashboardPlayers />} />

          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
