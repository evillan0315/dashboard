import * as React from 'react';
import { Button, Container, Typography, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function HomePage() {
  const { data: session } = useSession();

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h4" gutterBottom>
        Welcome, {session?.user?.name || 'User'}!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Users</Typography>
            <Typography variant="body1">Manage users in the system.</Typography>
            <Button variant="contained" color="primary" component={Link} href="/users">
              Go to Users
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Posts</Typography>
            <Typography variant="body1">Manage posts in the system.</Typography>
            <Button variant="contained" color="primary" component={Link} href="/posts">
              Go to Posts
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Settings</Typography>
            <Typography variant="body1">Manage system settings.</Typography>
            <Button variant="contained" color="primary" component={Link} href="/settings">
              Go to Settings
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Line Chart</Typography>
            <Line data={lineChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Bar Chart</Typography>
            <Bar data={barChartData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

HomePage.requireAuth = true;