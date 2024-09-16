"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function AboutCard({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  const { theme } = useTheme();
  return (
    <MagicCard
      className={cn(
        `p-4 md:p-8 lg:p-16 bg-card/75 dark:bg-card/75 backdrop-blur-sm border border-[#0c0a091a] dark:border-[#fafaf91a] rounded-xl`,
        className,
      )}
      gradientColor={theme === "dark" ? "#292524" : "#d6d3d155"}
    >
      {children}
    </MagicCard>
  );
}
