"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AboutCard({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <Card
      className={cn(
        `overflow-hidden border border-[#0c0a091a] bg-card/75 shadow-md backdrop-blur-sm dark:border-[#fafaf91a] dark:bg-card/75`,
        className,
      )}
    >
      {children}
    </Card>
  );
}
