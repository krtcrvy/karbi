import TechIcon from "@/components/common/tech-icon";
import { cn } from "@/lib/utils";
import type { TechStackItems } from "@/types";
import React from "react";

interface TechStackItemsProps {
  items: TechStackItems[];
  className?: string;
  itemsWrapperClassName?: string;
}

export default function TechStackItems({
  items,
  className,
  itemsWrapperClassName,
}: TechStackItemsProps) {
  return (
    <div
      className={cn(
        `gradient-mask-r-[transparent,black_10%,black_90%,transparent] flex`,
        className,
      )}
    >
      <div
        className={cn(
          `flex flex-none gap-6 py-0.5 pr-4`,
          itemsWrapperClassName,
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {items.map((tech: TechStackItems, index: number) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 rounded-lg bg-background/30 px-3 py-2 shadow outline outline-2 outline-[#0c0a091a] backdrop-blur-sm dark:outline-[#fafaf91a]"
              >
                <TechIcon component={tech.iconType} />
                <span className="font-semibold">{tech.title}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
