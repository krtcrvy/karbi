"use client";

import Footer from "@/components/layout/footer";
import BlurFade from "@/components/magicui/blur-fade";
import RetroGrid from "@/components/magicui/retro-grid";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="relative flex flex-col items-center">
      <section className="mx-auto max-w-screen-xl px-4 py-32 lg:px-12">
        <div className="mx-auto mb-16 max-w-screen-sm text-center">
          <BlurFade inView>
            <span className="mb-4 inline-block font-semibold text-primary text-sm uppercase tracking-wider md:text-base">
              Let&apos;s connect
            </span>
          </BlurFade>

          <BlurFade delay={0.25} inView>
            <h2 className="mb-8 font-bold font-space_grotesk text-3xl md:text-4xl lg:text-5xl">
              Get in Touch
            </h2>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <p className="mb-8 text-base text-muted-foreground md:text-lg lg:text-xl">
              My inbox is always open! Whether you have a question or just want
              to say hi, I&apos;ll try my best to get back to you!
            </p>
          </BlurFade>

          <BlurFade delay={0.75} inView>
            <Button size="lg" asChild>
              <Link href={`mailto:${siteConfig.links.email}`}>Say Hello</Link>
            </Button>
          </BlurFade>
        </div>
      </section>
      <Footer />
      <RetroGrid />
    </div>
  );
}
