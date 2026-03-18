"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FlipWords({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const nextWord = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    const timer = setTimeout(startAnimation, duration);
    return () => clearTimeout(timer);
  }, [currentWord, duration, startAnimation]);

  return (
    <AnimatePresence onExitComplete={() => setIsAnimating(false)} mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{ opacity: 0, y: -30, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" }}
        className={cn("relative inline-block text-left px-2", className)}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, i) => (
          <motion.span
            key={word + i}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: i * 0.3, duration: 0.3 }}
            className="inline-block whitespace-nowrap"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
