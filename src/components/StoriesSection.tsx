import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

import storyMovement from "@/assets/story-movement.jpg";
import storyNutrition from "@/assets/story-nutrition.jpg";
import storyMind from "@/assets/story-mind.jpg";
import storySleep from "@/assets/story-sleep.jpg";
import storyRelationships from "@/assets/story-relationships.jpg";
import storyStress from "@/assets/story-stress.jpg";
import storyNature from "@/assets/story-nature.jpg";
import storySpiritual from "@/assets/story-spiritual.jpg";
import storyAwareness from "@/assets/story-awareness.jpg";

const allStories = [
  { title: "Nutrition", image: storyNutrition, description: "Fuel your body the right way" },
  { title: "Movement", image: storyMovement, description: "Build strength, mobility & energy" },
  { title: "Mind", image: storyMind, description: "Clarity • Focus • Resilience" },
  { title: "Sleep", image: storySleep, description: "Recover deeper, perform better" },
  { title: "Relationships", image: storyRelationships, description: "Deep connections that anchor purpose & joy" },
  { title: "Stress", image: storyStress, description: "Master calm amid chaos for sustained energy" },
  { title: "Nature", image: storyNature, description: "Reconnect outdoors to reset nervous system" },
  { title: "Spiritual", image: storySpiritual, description: "Find meaning, gratitude & inner alignment" },
  { title: "Awareness", image: storyAwareness, description: "Cultivate presence to live intentionally" },
] as const;

type Story = typeof allStories[number];
type SizedStory = Story & { size: "large" | "medium" | "small" };

const LAYOUT: SizedStory["size"][] = ["large", "medium", "small", "small"];

/* --------------------------
   INITIAL STORIES (NO DUPES)
---------------------------*/
function getInitialStories(): SizedStory[] {
  const shuffled = [...allStories].sort(() => Math.random() - 0.5);
  return LAYOUT.map((size, i) => ({
    ...shuffled[i],
    size,
  }));
}

/* --------------------------
   PICK NEW STORY (NO DUPES)
---------------------------*/
function pickNewStory(excludeTitles: Set<string>): Story {
  const available = allStories.filter(
    story => !excludeTitles.has(story.title)
  );

  return available.length
    ? available[Math.floor(Math.random() * available.length)]
    : allStories[Math.floor(Math.random() * allStories.length)];
}

/* ==========================
   COMPONENT
==========================*/

const StoriesSection = () => {
  const [stories, setStories] = useState<SizedStory[]>(getInitialStories());

  useEffect(() => {
    const interval = setInterval(() => {
      setStories(prev => {
        const slotToChange = Math.floor(Math.random() * 4);

        const usedTitles = new Set(prev.map(s => s.title));
        const newStory = pickNewStory(usedTitles);

        const next = [...prev];
        next[slotToChange] = {
          ...newStory,
          size: LAYOUT[slotToChange],
        };

        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="stories"
      className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-background"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <AnimatedSection>
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Fundamentals
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Stories that matter
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12 lg:mb-16">
            Core principles gently refreshing to inspire you.
          </p>
        </AnimatedSection>

        {/* GRID */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            auto-rows-[260px] sm:auto-rows-[280px] lg:auto-rows-[320px]
            gap-4 sm:gap-5 lg:gap-6
          "
        >
          {stories.map((story, i) => {
            const isLarge = story.size === "large";
            const isMedium = story.size === "medium";

            return (
              <motion.a
                key={`${story.title}-${i}`}
                href="#"
                layout
                whileHover={{
                  scale: 1.06,
                  y: -15,
                  boxShadow: "0 30px 70px -15px rgba(0,0,0,0.6)",
                }}
                transition={{ layout: { duration: 0.8 } }}
                className={`
                  group relative overflow-hidden rounded-2xl sm:rounded-3xl
                  ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${isMedium ? "lg:col-span-2" : ""}
                `}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={story.title}
                    className="absolute inset-0"
                    initial={{
                      x: 140,
                      rotate: 3,
                      opacity: 0.6,
                      scale: 0.95,
                    }}
                    animate={{
                      x: 0,
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      x: -140,
                      rotate: -3,
                      opacity: 0.6,
                      scale: 0.95,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-[2500ms] ease-out
                        group-hover:scale-110
                      "
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="
                      absolute inset-0 
                      bg-gradient-to-t from-black/85 via-black/40 to-transparent
                      transition-all duration-700
                    " />

                    {/* Text */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                      <h3
                        className="
                          font-display text-3xl sm:text-4xl lg:text-5xl
                          font-bold text-white tracking-tight uppercase
                          drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]
                          group-hover:translate-y-[-8px]
                          transition-transform duration-500
                        "
                      >
                        {story.title}
                      </h3>

                      <p
                        className="
                          mt-3 text-white/85 text-base sm:text-lg font-body
                          group-hover:opacity-100
                          transition-all duration-700
                        "
                      >
                        {story.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.a>
            );
          })}
        </div>

        {/* FOOTER LINK */}
        <AnimatedSection delay={0.4} className="mt-12 lg:mt-16 text-center">
          <a
            href="#"
            className="
              inline-block font-body text-sm uppercase tracking-[0.2em]
              text-muted-foreground hover:text-foreground
              transition-colors border-b border-muted-foreground/40 pb-1.5
              hover:border-foreground/70
            "
          >
            Explore all stories
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default StoriesSection;