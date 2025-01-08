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
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { Work } from "../../types/models";



interface WorkSectionProps {
  work: Work[] | undefined;
}

const WorkSection: React.FC<WorkSectionProps> = ({ work }) => {
  return (
    <Box my={4} sx={{ width: "100%" }}>
      <Typography
        variant="h3"
        gutterBottom
        align="left"
        sx={{ fontWeight: "300" }}
      >
        Work Experience
      </Typography>
      {work?.map((job: { position: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; startDate: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; endDate: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; summary: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; highlights: (string | number | bigint | boolean | React.ReactPortal | Promise<React.AwaitedReactNode> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined)[]; }, index: React.Key | null | undefined) => (
        <Card key={index} sx={{ mb: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <WorkIcon sx={{ fontSize: 40, color: "primary.main" }} />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {job.position} at {job.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontStyle: "italic" }}
                >
                  {job.startDate} / {job.endDate}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" paragraph>
              {job.summary}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {job.highlights.length > 0 && (
                <Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Key Highlights:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {job.highlights.map((highlight: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, idx: any) => (
                      <>
                        <Card variant="outlined" color="cyan">
                          <CardContent sx={{ lineHeight: "-1em" }}>
                            <Typography variant="caption" fontSize={11}>
                              {highlight}
                            </Typography>
                          </CardContent>
                        </Card>
                      </>
                    ))}
                  </Stack>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default WorkSection;
