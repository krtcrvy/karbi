"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Repo } from "@/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { GitFork, Globe, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Repo;
  className?: string;
  style?: React.CSSProperties;
}

export default function ProjectCard({
  project,
  className,
  style,
}: ProjectCardProps) {
  return (
    <div className={cn(className)} style={style}>
      <Card className="bg-card/75 dark:bg-card/75 backdrop-blur-sm border border-[#0c0a091a] dark:border-[#fafaf91a] rounded-xl">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 p-4 gap-4 md:p-8 md:gap-8 lg:p-16 lg:gap-16">
          <div className="mb-4 md:mb-0">
            <h3 className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl font-space_grotesk">
              {project.repo}
            </h3>
            <p className="mb-4 text-sm md:text-base lg:text-lg line-clamp-3 text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{project.owner}</span>
              </div>

              <span className="hidden lg:block">•</span>

              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>{project.stars}</span>
              </div>

              <span className="hidden lg:block">•</span>

              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4" />
                <span>{project.forks}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                target="_blank"
                href={project.website}
                rel="noopener noreferrer"
                aria-label={project.repo}
                className="text-muted-foreground transition-colors ease-in hover:text-foreground"
              >
                <Globe className="w-6 h-6" />
              </Link>

              <Link
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                aria-label={project.repo}
                className="text-muted-foreground transition-colors ease-in hover:text-foreground"
              >
                <GitHubLogoIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <Image
            src={project.image}
            alt={project.repo}
            width={1200}
            height={600}
            className="rounded-lg"
            priority
          />
        </div>
      </Card>
    </div>
  );
}
