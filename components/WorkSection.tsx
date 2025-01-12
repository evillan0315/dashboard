// components/WorkSection.tsx

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
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { Work } from "../types/models";
import {
  Javascript,
  JavascriptOutlined,
  TerminalOutlined,
} from "@mui/icons-material";
import { FaAws, FaGit, FaNodeJs, FaPython, FaReact } from "react-icons/fa";

interface WorkSectionProps {
  jobTech: any;
  work: Work[] | undefined;
}

const WorkSection: React.FC<WorkSectionProps> = ({ work, jobTech }) => {
  console.log(jobTech, "jobTech");
  return (
    <Grid2 spacing={{ xs: 2, md: 3 }} columns={3}>
      {work?.map(
        (
          job: {
            position:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            name:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            startDate:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            endDate:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            summary:
              | string
              | number
              | bigint
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
            highlights: (
              | string
              | number
              | bigint
              | boolean
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | null
              | undefined
            )[];
          },
          index: React.Key | null | undefined
        ) => (
          <>
            <Stack
              marginBottom={"60px"}
              direction={"row"}
              gap={6}
              sx={{ marginTop: "2em", paddingBottom: "2em" }}
            >
              {/*                     <Grid2 alignItems="left" flex={1}>
                      <WorkIcon sx={{ fontSize: 40, color: "primary.main" }} />
                    </Grid2> */}
              <Box flex={5}>
                <Typography
                  variant={"h4"}
                  sx={{ fontWeight: "200", marginTop: "5px" }}
                >
                  {job.position}
                </Typography>
                <Stack direction={"row"} gap={2}>
                  <Typography variant="caption" sx={{ fontWeight: "200" }}>
                    {job.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    textAlign={"right"}
                    sx={{ fontWeight: "200" }}
                  >
                    {job.startDate} / {job.endDate}
                  </Typography>
                </Stack>
                <Typography sx={{ marginTop: "2em", fontSize: "1em" }}>
                  {job.summary}
                </Typography>
                <Typography variant="h3">
                  <Stack direction={"row"} gap={4} marginTop={4}>
                    <FaPython size={40} />
                    <FaReact size={40} />
                    <FaNodeJs size={40} />
                    <FaAws size={40} />
                    <FaGit size={40} />
                  </Stack>

                  {Object.keys(jobTech).map((key) =>
                    key === job.name ? (
                      <span key={key}>{jobTech[key].join(",")} </span>
                    ) : null
                  )}
                </Typography>
              </Box>

              <Box flex={7} sx={{}}>
                <List
                  className="bg-zinc-950 pt-6 px-4 shadow-lg shadow-zinc-800 rounded-lg"
                  sx={{
                    width: "100%",
                    minHeight: "260px",
                    borderBlockColor: "ActiveBorder",
                  }}
                  subheader={
                    <ListSubheader className="bg-transparent">
                      <Typography
                        marginBottom={2}
                        variant="h5"
                        sx={{ fontWeight: "100" }}
                      >
                        Key Highlights:
                      </Typography>
                    </ListSubheader>
                  }
                >
                  <div className="px-5 pb-5">
                    {job.highlights.length > 0 && (
                      <Box>
                        {job.highlights.map(
                          (
                            highlight:
                              | string
                              | number
                              | bigint
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | Promise<React.AwaitedReactNode>
                              | null
                              | undefined,
                            idx: any
                          ) => (
                            <>
                              <Box key={idx} flex={2}>
                                <Typography
                                  className="pb-3"
                                  variant="body1"
                                  sx={{ fontSize: "1em" }}
                                >
                                  {highlight}
                                </Typography>
                              </Box>
                            </>
                          )
                        )}
                      </Box>
                    )}
                  </div>
                </List>
              </Box>
            </Stack>
          </>
        )
      )}
    </Grid2>
  );
};

export default WorkSection;
