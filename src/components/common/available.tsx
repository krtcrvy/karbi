import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export default function Available() {
  return (
    <div className="z-20 mb-4 inline-flex items-center gap-4 rounded-xl border border-[#0c0a091a] bg-background/30 px-4 py-1.5 shadow backdrop-blur-sm dark:border-[#fafaf91a]">
      <div className="relative size-2.5 rounded-full bg-green-500">
        <div className="absolute inset-0 animate-ping-large rounded-full bg-green-500" />
      </div>
      <AnimatedShinyText className="font-medium text-muted-foreground text-sm">
        Available for new projects
      </AnimatedShinyText>
    </div>
  );
}
