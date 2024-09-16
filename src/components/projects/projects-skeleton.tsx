import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          className="sticky h-[28.2rem] md:h-[39.7rem] lg:h-[22.25rem] xl:h-[23.475rem] w-screen max-w-screen-sm lg:max-w-screen-xl rounded-xl"
          style={{
            top: `calc(64px + ${index * 40}px)`,
          }}
        />
      ))}
    </>
  );
}
