import { useSession } from 'next-auth/react';
import router from 'next/router';
import * as React from 'react';
import Resume from '../../app/components/Resume';


export default function ResumePage() {
  const { data: session } = useSession();
  if (!session) {
    router.push("/auth/signin");
  }
  return (
   <Resume />
  );
}

ResumePage.requireAuth = true;
