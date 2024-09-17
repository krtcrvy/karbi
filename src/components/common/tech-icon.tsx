export default function TechIcon({
  component,
}: { component: React.ElementType }) {
  const Component = component;

  return (
    <>
      <Component className="size-10 fill-[url(#light-tech-icon-gradient)] dark:fill-[url(#dark-tech-icon-gradient)]" />
      <svg className="absolute size-0">
        <linearGradient id="dark-tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(249 115 22)" />
          <stop offset="100" stopColor="rgb(234 88 12)" />
        </linearGradient>
      </svg>
      <svg className="absolute size-0">
        <linearGradient id="light-tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(251 146 60)" />
          <stop offset="100" stopColor="rgb(249 115 22)" />
        </linearGradient>
      </svg>
    </>
  );
}
