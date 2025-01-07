import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import * as React from 'react';



export default function OrdersPage() {
  const { data: session } = useSession();
  if (!session) {
    router.push("/auth/signin");
  }

  return (
    <Typography>
      Welcome to the Toolpad orders!
    </Typography>
  );
}

OrdersPage.requireAuth = true;
