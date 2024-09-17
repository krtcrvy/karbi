import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <SparkleIcon className="h-5 w-5 fill-primary text-primary md:h-6 md:w-6" />
        <CardTitle className="font-space_grotesk text-xl md:text-2xl lg:text-3xl">
          {title}
        </CardTitle>
      </div>
      <CardDescription className="max-w-sm text-muted-foreground text-sm md:text-base lg:text-lg">
        {description}
      </CardDescription>
    </CardHeader>
  );
}
