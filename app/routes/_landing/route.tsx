import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "@/components/nav-bar";

export default function LandingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
