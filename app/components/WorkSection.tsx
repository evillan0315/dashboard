// components/WorkSection.tsx

import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Grid, Chip, Grid2, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

interface Work {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

interface WorkSectionProps {
  work: Work[];
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
      {work.map((job, index) => (
        <Card key={index} sx={{ mb: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <WorkIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Grid>
              <Grid item xs>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {job.position} at {job.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                  {job.startDate} - {job.endDate}
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
                  <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Key Highlights:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {job.highlights.map((highlight, idx) => (
                      <>
                      <Card variant="outlined" color='cyan'>
                        <CardContent sx={{lineHeight: "-1em"}}>
                            <Typography variant="caption" fontSize={11}>{highlight}</Typography>
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
