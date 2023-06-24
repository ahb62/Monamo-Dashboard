"use client"
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';
import HeroSection from '@/components/dashboard/HeroSection';


const DashboardPage: React.FC = () => {
  const [token, setToken] = useState("");
    const router = useRouter();
  useEffect(() => {
    const value = localStorage.getItem("token") || "";
    setToken(value);
  }, []);
console.log(token);
  const handleVerification = async () => {
    try {
      const verifyToken = localStorage.getItem('token');
      console.log(verifyToken);
      return JSON.stringify(verifyToken);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await handleVerification();
      // Lógica de renderizado condicional
      console.log(data);

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