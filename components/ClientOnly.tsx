"use client";
import { useState, ReactNode } from "react";

export default function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted] = useState<boolean>(typeof window !== "undefined");


  if (!hasMounted) return null;

  return <>{children}</>;
}
