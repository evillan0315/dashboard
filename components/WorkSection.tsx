"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
  Chip,
  Grid2,
  Stack,
  List,
  ListSubheader,
  Link,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { Work } from "../types/models";
import {
  Javascript,
  JavascriptOutlined,
  TerminalOutlined,
} from "@mui/icons-material";
import { FaAws, FaGit, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "./ui/3D-Card";
import Image from "next/image";
interface WorkSectionProps {
  work: Work[] | undefined;
}

const WorkSection: React.FC<WorkSectionProps> = ({ work }) => {
  return (
    <Grid container spacing={2}>
      {work?.map((job, index) => (
        <Grid item key={index} alignItems={"center"} xs={12} md={6}>
          <CardContainer className="inter-var mb-10">
            <CardBody className="bg-gray-50 relative group/card  shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl md:px-10 md:py-8 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                <Typography
                  variant={"h5"}
                  sx={{ fontWeight: "200", marginTop: "5px" }}
                >
                  {job.position}
                </Typography>
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                <Stack direction={"row"} gap={2}>
                  <Typography variant="body1" sx={{ fontWeight: "200" }}>
                    {job.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    textAlign={"right"}
                    sx={{ fontWeight: "200" }}
                  >
                    {job.startDate} / {job.endDate}
                  </Typography>
                </Stack>
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="100"
                className="py-1 no-underline rounded-xl text-xs font-normal dark:text-white"
              >
                <List
                  className="pt-4"
                  sx={{
                    width: "100%",

                    borderBlockColor: "ActiveBorder",
                  }}
                  subheader={undefined}
                >
                  <div className="pb-1">
                    {job.highlights.length > 0 && (
                      <Box>
                        {job.highlights.map((highlight, idx) => (
                          <Box key={idx} marginBottom={1}>
                            <Typography variant="body1">{highlight}</Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </div>
                </List>
              </CardItem>
              <CardItem
                translateZ={80}
                className="px-4  text-white text-xs font-bold"
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyItems={"center"}
                  gap={4}
                >
                  <FaPython size={30} />
                  <FaReact size={30} />
                  <FaNodeJs size={30} />
                  <FaAws size={30} />
                  <FaGit size={30} />
                </Stack>
              </CardItem>
            </CardBody>
          </CardContainer>
        </Grid>
      ))}
    </Grid>
  );
};

export default WorkSection;
