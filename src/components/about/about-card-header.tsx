import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SparkleIcon } from "lucide-react";

interface AboutCardHeaderProps {
  title: string;
  description: string;
}

export default function AboutCardHeader({
  title,
  description,
}: AboutCardHeaderProps) {
  return (
    <CardHeader>
      <div className="inline-flex items-center gap-2 md:gap-4">
        <SparkleIcon className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary" />
        <CardTitle className="text-xl md:text-2xl lg:text-3xl font-space_grotesk">
          {title}
        </CardTitle>
      </div>
      <CardDescription className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-sm">
        {description}
      </CardDescription>
    </CardHeader>
  );
}
