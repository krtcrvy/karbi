import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          className="sticky h-[30.25rem] md:h-[19.25rem] lg:h-[20.5rem] xl:h-[20.475rem] rounded-xl"
          style={{
            top: `calc(64px + ${index * 40}px)`,
          }}
        />
      ))}
    </>
  );
}
