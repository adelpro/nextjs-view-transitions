import useAnimatedRouter from "@/hooks/useAnimatedRouter";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};
export default function AnimatedLink({ href, children }: Props) {
  const { animatedRoute } = useAnimatedRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        console.log("Animated link clicked!");
        animatedRoute(href);
      }}
      passHref
      // prefetch={true}
    >
      {children}
    </Link>
  );
}
