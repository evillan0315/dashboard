import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useRouter } from "next/router";
const AuthCallback: React.FC = () => {
  const router = useRouter();
  const { code } = router.query; // Access the "code" query parameter
  
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const exchangeLinkedInToken = async (code: any) => {
    try {
      const response = await axios.post('/api/auth/callback/linkedin', {
        code,
        redirectUri: 'http://localhost:3000/api/auth/callback/linkedin',
      });
  
      console.log('Access Token:', response.data);
    } catch (error) {
      console.error('Error exchanging token:', error);
    }
  };
  useEffect(() => {
    if(code){
      exchangeLinkedInToken(code).then((response:any) => {
        setAccessToken(response);
      });
    }
    
  }, [code]);

  return (
    <div>
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <p>Fetching access token...</p>
      )}
    </div>
  );
};

export default AuthCallback;
