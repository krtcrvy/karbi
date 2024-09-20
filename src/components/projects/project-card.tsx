"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Repo } from "@/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { GitFork, Globe, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

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
      <Card className="border border-[#0c0a091a] bg-card/75 shadow-md backdrop-blur-sm md:grid md:grid-cols-2 md:items-center dark:border-[#fafaf91a] dark:bg-card/75">
        <div>
          <CardHeader>
            <CardTitle className="font-space_grotesk text-xl md:text-2xl lg:text-3xl">
              {project.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm md:text-base lg:text-lg">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 text-muted-foreground md:flex-row lg:items-center">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span className="text-sm lg:text-base">
                  {project.stargazerCount}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <GitFork className="h-5 w-5" />
                <span className="text-sm md:text-base">
                  {project.forkCount}
                </span>
              </div>
            </div>

            <div className="mb-6 flex gap-2">
              {project.languages.map((lang) => (
                <Badge key={lang.name} variant="secondary">
                  {lang.name}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link
                  target="_blank"
                  href={project.homepageUrl}
                  rel="noopener noreferrer"
                  aria-label={project.name}
                >
                  <Globe className="h-6 w-6" />
                </Link>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <Link
                  target="_blank"
                  href={project.url}
                  rel="noopener noreferrer"
                  aria-label={project.name}
                >
                  <GitHubLogoIcon className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>

        <CardFooter className="md:pt-6">
          <Image
            src={`https://raw.githubusercontent.com/krtcrvy/${project.name}/main/social-preview.jpg`}
            alt={project.name}
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
