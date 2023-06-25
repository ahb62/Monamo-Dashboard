"use client"
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation';
import getPokemonByName from '@/handlers/getPokemonByName';
interface PokemonProps {
  name: string;
  url: string;
}

const Pokemon = ({params}: any) => {
  const {pokemon} = params;

  const [pokemonData, setPokemonData] = useState([]);
  const [token, setToken] = useState("");
  const router = useRouter();


  const getPokemonData = async () => 
  {
  const response = await getPokemonByName(pokemon);
  setPokemonData(response);
  console.log(response);
  };
  
  
    useEffect(() => {
      const value = localStorage.getItem("token") || "";
      setToken(value);
      const fetchData = async (): Promise<void> => {
        if (!token) {
          router.push('/');
        } else {
          getPokemonData();
          router.push(`/dashboard/pokemon/${pokemon}`);
        }
      };
  
      fetchData();
    }, [token, router]);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Pokemon