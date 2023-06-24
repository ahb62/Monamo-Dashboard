"use client"
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';
import HeroSection from '@/components/dashboard/HeroSection';
import handleVerification from '@/handlers/verification';
const DashboardPage: React.FC = () => {
  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    const value = localStorage.getItem("token") || "";
    setToken(value);
  }, []);
  
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await handleVerification();
      // Lógica de renderizado condicional
      // Redirección si no está logueado
      if (!token) {
        router.push('/');
      } else {
        router.push('/dashboard');
      }
    };
    
    fetchData();
  }, [token, router]);

  return (
    <div>

      {token ? 
      <div>

          <HeroSection />
          

      </div> 
      : <div>Not Logged</div> }

    </div>
  );
};

export default DashboardPage;