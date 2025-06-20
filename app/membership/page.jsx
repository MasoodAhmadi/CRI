"use client";
import React, { useEffect, useState } from "react";
import Navbars from "../components/navbars";
import Membership from "../components/membership";
import { supabase } from "../../supabaseClient";

function MembershipPage() {
  return (
    <>
      <Navbars />
      <Membership />
    </>
  );
}
export default MembershipPage;
