"use client"
import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
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
          const url = "http://localhost:3001/auth/login";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": email, "password": pass }),
          });
          const data = await response.json();
          const jwt = data.token
          localStorage.setItem('token', jwt);
          console.log("your token has been saved!");  
          // Resto del código para manejar la respuesta de la solicitud
          setToken(jwt);
        } catch (error) {
          console.error(error);
        }
    };


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

<div className="App">
     <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" value={email} onChange={handleEmail} type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" value={pass} onChange={handlePass} type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Login
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2023 Monamo Technology. All rights reserved.
  </p>
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

