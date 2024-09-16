import { Sparkle } from "lucide-react";

export default function AboutCardHeader({
  title,
  description,
}: { title: string; description: string }) {
  return (
    <div className="flex flex-col mb-4">
      <div className="inline-flex items-center gap-4 mb-4">
        <Sparkle className="w-6 h-6 text-primary fill-primary" />
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl font-space_grotesk">
          {title}
        </h3>
      </div>
      <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
