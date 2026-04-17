"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Breadcrumb } from "react-bootstrap";

export default function BreadCrump() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Breadcrumb className="mt-3">
      <Breadcrumb.Item onClick={() => router.push("/")}>Home</Breadcrumb.Item>

      <Breadcrumb.Item onClick={() => router.push("/dashboard")}>
        Dashboard
      </Breadcrumb.Item>

      {pathname.includes("users") && (
        <Breadcrumb.Item active>User Management</Breadcrumb.Item>
      )}

      {pathname.includes("events") && (
        <Breadcrumb.Item active>Event Management</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
