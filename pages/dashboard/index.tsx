'use client'
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Dashboard from '../../app/components/Dashboard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/auth/signin");
  }
  return (
    
    <Dashboard />
  );
}
//DashboardPage.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;
    
DashboardPage.requireAuth = true;
