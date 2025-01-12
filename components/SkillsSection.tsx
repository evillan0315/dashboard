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

interface SkillType {
  name: string;
  icon: string; // This should correspond to the key names in iconMap
}

interface SkillsSectionProps {
  skills: Skills[] | null;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Stack direction="row" gap={2} sx={{ overflowX: "auto", paddingY: 2 }}>
      {skills?.map((skill, index) => (
        <Box key={index} width={200}>
          <Card sx={{ background: "none", borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ padding: 0 }}>
                <Box display="flex" gap={2} alignItems="center">
                  <Box sx={{ fontSize: 40 }}>{iconMap[skill.icon]}</Box>
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: 1, fontSize: "1rem", flexGrow: 1 }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Stack>
  );
};

export default SkillsSection;
