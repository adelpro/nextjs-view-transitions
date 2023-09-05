import Link from "next/link";
import React from "react";
import AnimatedLink from "./animatedLink";

export default function Header() {
  return (
    <div className="bg-slate-700 text-slate-50 py-4 ">
      <div className="container mx-auto flex gap-2">
        <AnimatedLink href="/">Home</AnimatedLink>
        <AnimatedLink href="/about">About</AnimatedLink>
        <AnimatedLink href="/contact">Contact</AnimatedLink>
      </div>
    </div>
  );
}
