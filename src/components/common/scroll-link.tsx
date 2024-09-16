"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

interface ScrollLinkProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollLink({
  id,
  children,
  className,
}: ScrollLinkProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={`#${id}`} className={className} passHref>
      <div onClick={handleClick}>{children}</div>
    </Link>
  );
}
