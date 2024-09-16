import { Rocket } from "lucide-react";
import React from "react";

export default function Tape() {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to-right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-8 animate-move-left">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="text-stone-950 font-bold text-lg md:text-xl lg:text-2xl font-space_grotesk uppercase">
                      {word}
                    </span>
                    <Rocket className="w-6 h-6 text-stone-950 -rotate-12 fill-stone-950" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
