import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const StatusIndicator = () => (
  <div className="bg-green-500 size-2.5 rounded-full animate-pulse" />
);

const AvailableMessage = () => (
  <AnimatedShinyText>
    <span className="text-sm md:text-base">Available for new projects</span>
  </AnimatedShinyText>
);

export default async function Available() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group border border-[#0000001a] dark:border-[#ffffff1a] px-4 py-1.5 rounded-lg",
        )}
      >
        <div className="inline-flex items-center justify-center px-4 py-1 transition ease-out gap-4">
          <StatusIndicator />
          <AvailableMessage />
        </div>
      </div>
    </div>
  );
}
