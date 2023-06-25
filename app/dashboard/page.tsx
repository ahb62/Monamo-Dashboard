"use client"
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';
import HeroSection from '@/components/dashboard/HeroSection';
import gettingPokemons from '@/handlers/getPokemons';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  const [pokemon, setPokemon] = useState([]);
  const getPokemonData = async () => {
    const response = await gettingPokemons();
    const data = response.results.map((pokemon: any) => pokemon.name);
    setPokemon(data);
    console.log(pokemon);
  };
  
  useEffect(() => {
    const value = localStorage.getItem("token") || "";
    setToken(value);
    const fetchData = async (): Promise<void> => {   
      if (!token) {
        router.push('/');
      } else {
        getPokemonData();
        router.push('/dashboard');
      }
    };
    
    fetchData();
  }, [token, router]);





  



  return (
    <div>

      {token ? 
      <div>

          <HeroSection  data={pokemon}/>
          

      </div> 
      : <div>Not Logged</div> }

    </div>
  );
};

export default DashboardPage;