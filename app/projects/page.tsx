"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Github, MoveUpRight } from "lucide-react";
import { projects } from "@/data";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { ImageSwiper } from "@/components/ui/image-swiper";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const cardVariants: Variants = {
  offscreen: {
    rotateX: 20,
  },
  onscreen: {
    rotateX: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const Projects = () => {
  const projectsContainerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // const lenis = new Lenis();
      // lenis.on("scroll", ScrollTrigger.update);
      // gsap.ticker.add((time) => {
      //   lenis.raf(time * 500);
      // });
      // gsap.ticker.lagSmoothing(0);

      let tabs: HTMLElement[] = gsap.utils.toArray(".tab");
      tabs.forEach((tab, i) => {
        gsap.set(tab, {
          y: 0,
        });
        ScrollTrigger.create({
          trigger: tab,
          start: "top top",
          pin: i !== tabs.length - 1,
          pinSpacing: false,
          scrub: true,
          onUpdate: (data) => {
            if (i !== tabs.length - 1) {
              const { progress } = data;

              gsap.set(tab, {
                scale: 1 - progress * 0.5,
                y: 0,
                filter: `blur(${progress * 10}px)`,
              });
            }
          },
        });
      });
    },
    { scope: projectsContainerRef }
  );
  return (
    <main className="min-h-screen grid place-items-center py-32">
      <section ref={projectsContainerRef} className="space-y-3 md:w-3/4">
        {projects.map(
          (
            { name, images, imageDir, description, liveURL, sourceCodeURL },
            i
          ) => {
            return (
              <motion.div
                key={`project-${i}`}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                className={cn("tab w-full h-screen grid place-items-center")}
              >
                <motion.div
                  variants={cardVariants}
                  className="p-4 dark:bg-neutral-950 border border-neutral-700 bg-white rounded-xl relative"
                >
                  <BorderBeam />
                  <ImageSwiper images={images} />
                  <div className="mt-3">
                    <div className="mb-2 flex justify-between align-bottom">
                      <h1 className="text-xl sm:text-2xl text-foreground font-semibold text-neutral-900 dark:text-neutral-50">
                        {name}
                      </h1>
                      <div className="space-x-3">
                        {liveURL && (
                          <Link href={liveURL} target="_blank">
                            <Button variant="outline" size="sm" title="Visit">
                              <MoveUpRight size={16} className="mr-2" /> Visit
                            </Button>
                          </Link>
                        )}
                        {sourceCodeURL && (
                          <Link href={sourceCodeURL} target="_blank">
                            <Button variant="outline" size="sm" title="Visit">
                              <Github size={16} className="mr-2" />
                              Source Code
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-foreground text-neutral-600 dark:text-neutral-100">
                      {description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          }
        )}
      </section>
    </main>
  );
};

export default Projects;
