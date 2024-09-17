import { Sparkle } from "lucide-react";
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
    <div className="overflow-x-clip py-8 sm:py-16">
      <div className="-rotate-3 -mx-1 bg-gradient-to-r from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600">
        <div className="gradient-mask-r-[transparent,black_10%,black_90%,transparent] flex">
          <div className="flex flex-none animate-move-left gap-4 py-8 pr-4">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-4">
                    <span className="font-bold font-space_grotesk text-lg text-stone-950 uppercase md:text-xl lg:text-2xl">
                      {word}
                    </span>
                    <Sparkle className="-rotate-12 h-6 w-6 fill-stone-950 text-stone-950" />
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
