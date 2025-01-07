import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ArrowRight, Link } from "@mui/icons-material";
import { Button, CardContent, Grid2, Icon } from "@mui/material";

interface ProjectProps {
  project: any;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Grid2 width={"100%"} marginBottom={4}>
      <Card variant="outlined">
        <Box sx={{ p: 2 }}>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "left",
              marginBottom: "-.5em",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography>
              <ArrowRight />
            </Typography>
          </Stack>
          <Typography gutterBottom variant="body2" fontSize={11} color="grey">
            {project.startDate} / {project.endDate}
          </Typography>
        </Box>
        <Divider />
        <Stack>
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {project.description}
            </Typography>
            <Stack direction={"row"} gap={2} marginTop={4}>
              {project.frontend.features?.map(
                (
                  feature:
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
                  idx: React.Key | null | undefined
                ) => (
                  <>
                    <Card variant="elevation">
                      <CardContent>
                        <Typography
                          key={idx}
                          variant="body2"
                          lineHeight="1.3em"
                          fontSize={12}
                        >
                          {feature}
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                )
              )}
            </Stack>
          </Box>
        </Stack>

        <Stack direction={"row"} gap={2}>
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="h5">
              Frontend
            </Typography>
            <Stack marginBottom={2} sx={{ color: "text.secondary" }}>
              {project.frontend.features?.map(
                (
                  feature:
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
                  idx: React.Key | null | undefined
                ) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.3em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                )
              )}
            </Stack>
            <Stack direction="row" spacing={1} sx={{ color: "text.secondary" }}>
              {project.frontend.technologies?.map(
                (
                  feature:
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
                  idx: React.Key | null | undefined
                ) => (
                  <Chip
                    key={idx}
                    color="primary"
                    label={feature}
                    size="small"
                  />
                )
              )}
            </Stack>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="h5">
              Backend
            </Typography>
            <Stack marginBottom={2}>
              {project.backend.features?.map(
                (
                  feature:
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
                  idx: React.Key | null | undefined
                ) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.4em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                )
              )}
            </Stack>
            <Stack direction="row" spacing={1}>
              {project.backend.technologies?.map(
                (
                  feature:
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
                  idx: React.Key | null | undefined
                ) => (
                  <Chip
                    key={idx}
                    color="secondary"
                    label={feature}
                    size="small"
                  />
                )
              )}
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Grid2>
  );
};
export default Project;
