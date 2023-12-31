import Link from "next/link";
import React, { useEffect } from "react";

interface props {
  data: any;
}
export default function HeroSection({data}: props) {
const pokemons = data;

  return (
<>
<div className="container flex justify-center">


  <div className="grid grid-cols-3 gap-6">
{pokemons.map((element: any, index: number) =>  (

  <div key={element} className="card w-96 bg-neutral shadow-xl m-6">
          <div className="card-body">
            
            <Link href={`/dashboard/pokemon/${index + 1}`}>
          <figure>
            <img
              crossOrigin="anonymous"
              width={120}
              height={120}
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index + 1 }.svg`}
              alt={`${element}`}
              />
            <div className="badge badge-outline">type</div>
          </figure>
          </Link>
          <h2 className="card-title my-3">{element}</h2>
          </div>
  </div>
      ))}
      </div>

</div>

</>
  )
}
