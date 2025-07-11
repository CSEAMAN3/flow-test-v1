'use client';

import { scrollHooks } from "@/lib/scrollhooks";
import HookCard from "./HookCard";
import { motion } from "framer-motion";

export default function Hook() {
  const combinedHooks = [...scrollHooks, ...scrollHooks, ...scrollHooks, ...scrollHooks]; // duplicated for seamless loop

  return (
    <div className="relative w-full overflow-hidden bg-accent py-2">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {combinedHooks.map((hook, index) => (
          <HookCard key={`${hook.id}-${index}`} title={hook.title} icon={hook.icon}/>
        ))}
      </motion.div>
    </div>
  );
}

