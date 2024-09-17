import TechIcon from "@/components/common/tech-icon";
import { cn } from "@/lib/utils";
import type { TechStackItems } from "@/types";

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
        `flex gradient-mask-r-[transparent,black_10%,black_90%,transparent]`,
        className,
      )}
    >
      <div
        className={cn(
          `flex flex-none py-0.5 gap-6 pr-4`,
          itemsWrapperClassName,
        )}
      >
        {items.map((tech: TechStackItems, index: number) => (
          <div
            key={index}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-[#0c0a091a] dark:outline-[#fafaf91a] bg-background/30 backdrop-blur-sm rounded-lg shadow"
          >
            <TechIcon component={tech.iconType} />
            <span className="font-semibold">{tech.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
