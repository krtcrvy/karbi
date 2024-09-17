"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Repo } from "@/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { GitFork, Globe, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

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
      <Card className="bg-card/75 dark:bg-card/75 backdrop-blur-sm border border-[#0c0a091a] dark:border-[#fafaf91a] shadow-md md:grid md:grid-cols-2 md:items-center">
        <div>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl lg:text-3xl font-space_grotesk">
              {project.repo}
            </CardTitle>
            <CardDescription className="text-sm md:text-base lg:text-lg text-muted-foreground">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row lg:items-center gap-2 lg:gap-4 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-sm md:text-base">{project.owner}</span>
              </div>

              <span className="hidden md:block">•</span>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span className="text-sm lg:text-base">{project.stars}</span>
              </div>

              <span className="hidden md:block">•</span>

              <div className="flex items-center gap-2">
                <GitFork className="w-5 h-5" />
                <span className="text-sm md:text-base">{project.forks}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link
                  target="_blank"
                  href={project.website}
                  rel="noopener noreferrer"
                  aria-label={project.repo}
                >
                  <Globe className="w-6 h-6" />
                </Link>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <Link
                  target="_blank"
                  href={project.link}
                  rel="noopener noreferrer"
                  aria-label={project.repo}
                >
                  <GitHubLogoIcon className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
        <CardFooter className="md:pt-6">
          <Image
            src={project.image}
            alt={project.repo}
            width={1200}
            height={600}
            className="rounded-xl"
            priority
          />
        </CardFooter>
      </Card>
    </div>
  );
}
