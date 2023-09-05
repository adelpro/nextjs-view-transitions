"use client";
import { ExtendedDocument } from "@/types/extendedDocument";
import { useRouter } from "next/navigation";

export default function useAnimatedRouter() {
  const router = useRouter();
  const viewTransitionsStatus = () => {
    const extendedDocument = document as ExtendedDocument;
    let status = "Opss, Your browser doesn't support View Transitions API";
    if (extendedDocument?.startViewTransition) {
      status = "Yess, Your browser support View Transitions API";
    }
    return status;
  };
  // Navigate to the new route
  const animatedRoute = (url: string) => {
    const extendedDocument = document as ExtendedDocument;
    if (!extendedDocument.startViewTransition) {
      return router.push(url);
    } else {
      extendedDocument.startViewTransition(() => {
        router.push(url);
      });
    }
  };
  return { animatedRoute, viewTransitionsStatus };
}
