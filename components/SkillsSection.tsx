// components/SkillsSection.tsx

import React from "react";
import { Typography, Box, Card, CardContent, Stack } from "@mui/material";
import {
  FaTerminal,
  FaServer,
  FaServicestack,
  FaCode,
  FaToolbox,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaCloud,
  FaChartLine,
} from "react-icons/fa"; // Import necessary icons
import { Skills } from "../types/models"; // Ensure this interface is defined properly
import { InfiniteMovingCards } from "./ui/InfiniMovingCards";

// Icon map to dynamically map icon name to the correct React Icon component
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
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
interface SkillType {
  name: string;
  icon: string; // This should correspond to the key names in iconMap
}

interface SkillsSectionProps {
  skills: Skills[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <>
      <InfiniteMovingCards skills={skills} direction="right" speed="slow" />
    </>
  );
};

export default SkillsSection;
