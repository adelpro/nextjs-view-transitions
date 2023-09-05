"use client";
import useAnimatedRouter from "@/hooks/useAnimatedRouter";
import React from "react";

export default function Footer() {
  const { viewTransitionsStatus } = useAnimatedRouter();
  return (
    <footer className="bg-gray-800 opacity-75 text-white p-1 text-center fixed bottom-0 left-0 right-0">
      <span>{viewTransitionsStatus()}</span>
    </footer>
  );
}
