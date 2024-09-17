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
        `bg-card/75 dark:bg-card/75 backdrop-blur-sm border border-[#0c0a091a] dark:border-[#fafaf91a] shadow-md overflow-hidden`,
        className,
      )}
    >
      {children}
    </Card>
  );
}
