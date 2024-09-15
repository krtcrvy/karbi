import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export default function Available() {
  return (
    <div className="border border-[#0c0a091a] dark:border-[#fafaf91a] px-4 py-1.5 mb-8 inline-flex items-center gap-4 rounded-lg">
      <div className="bg-green-500 size-2.5 rounded-full animate-pulse" />
      <AnimatedShinyText className="text-muted-foreground text-sm font-medium">
        Available for new projects
      </AnimatedShinyText>
    </div>
  );
}
