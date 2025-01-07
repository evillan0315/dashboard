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



interface SkillsSectionProps {
  skills: any;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <>
      <Stack gap={2} direction="row" overflow={"auto"}>
        {skills.map((skill: { icon: string | number; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
          <>
            <Box width={200}>
              <Card sx={{ background: "none" }}>
                <CardContent>
                  <Box
                    key={index}
                    sx={{ padding: 0, borderRadius: 2, minWidth: "200px" }}
                  >
                    <Box
                      display="flex"
                      gap={2}
                      alignItems={"center"}
                      justifyItems={"left"}
                    >
                      <Box sx={{ fontSize: 40 }}>{iconMap[skill.icon]}</Box>
                      {/* Dynamically render the icon based on the 'icon' field */}
                      <Typography
                        minWidth="120px"
                        textAlign="left"
                        variant="h5"
                        sx={{ marginLeft: 1, fontSize: "1em" }}
                      >
                        {skill.name}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </>
        ))}
      </Stack>
    </>
  );
};

export default SkillsSection;
