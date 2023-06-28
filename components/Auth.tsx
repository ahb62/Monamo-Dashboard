"use client"
import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import handleVerification from '@/handlers/verification';
interface AuthModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

function AuthModal({ title, isOpen, onClose }: AuthModalProps) {
    
    const [token, setToken] = useState("");
    const router = useRouter();
    
    const [email, setEmail] = useState("");
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    
    const [pass, setPass] = useState("");
      const handlePass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
      }


      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email, pass);
    
        try {
<<<<<<< HEAD
          const url = `http://localhost:3001/auth/login`;
=======
          const url = `https://pokemonamo.up.railway.app/auth/login`;
>>>>>>> d8951aaf29328430d09859a2c2c29248dd4db4d0
          const response = await fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": email, "password": pass }),
          });
          const data = await response.json();
          const jwt = data.token
          setToken(jwt);
          localStorage.setItem('token', jwt);
          // Resto del código para manejar la respuesta de la solicitud
  
        } catch (error) {
          console.error(error);
        }
    };





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
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
                 
                          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

<div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title my-3">Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email Here"
              value={email}
              onChange={handleEmail}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={pass}
              onChange={handlePass}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="card-actions my-3 justify-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>



              </Transition.Child>
            </div>
          </div>
            </Dialog>
          </Transition>
        </>
      )
}   
export default AuthModal;

