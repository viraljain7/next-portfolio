"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/data";

export default function Navbar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
