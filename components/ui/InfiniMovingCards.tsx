"use client";

import { Box, Typography } from "@mui/material";
import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaCloud,
  FaChartLine,
  FaTerminal,
  FaServer,
  FaCode,
  FaDatabase,
  FaToolbox,
  FaServicestack,
} from "react-icons/fa";

const iconMap: { [key: string]: JSX.Element } = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaCloud: <FaCloud />,
  FaChartLine: <FaChartLine />,
  FaTerminal: <FaTerminal />,
  FaServer: <FaServer />,
  FaCode: <FaCode />,
  FaDatabase: <FaDatabase />,
  FaToolbox: <FaToolbox />,
  FaServicestack: <FaServicestack />,
  // Add more mappings for other icons here
};
export const InfiniteMovingCards = ({
  skills,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  skills: {
    keywords: any;
    icon: string;
    level: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {skills.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative light:text-black dark:text-white rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <Box display="flex" gap={3} alignItems="center">
              <Box sx={{ fontSize: 60 }}>{iconMap[item.icon]}</Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ marginLeft: 1, fontSize: "1.5rem", flexGrow: 1 }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginLeft: 1, fontSize: "1rem", flexGrow: 1 }}
                >
                  {item.level}
                </Typography>
              </Box>
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
};
