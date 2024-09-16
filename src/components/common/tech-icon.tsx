export default function TechIcon({
  component,
}: { component: React.ElementType }) {
  const Component = component;

  return <Component className="size-10" />;
}
