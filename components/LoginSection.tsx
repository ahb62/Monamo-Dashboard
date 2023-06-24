"use client"
import { useState } from 'react'
import AuthModal from './Auth'
import Image from 'next/image'
export default function LoginSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (

    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Monamo Technology</a>
        </div>
        <div className="navbar-end">
          <button onClick={handleModalOpen} className="btn">
            <AuthModal
              title="Login / Signup"
              isOpen={isModalOpen}
              onClose={handleModalClose}
            />
            Login
          </button>
        </div>
      </div>
      </header>

      <div className="hero min-h-screen" >
        <Image src="/pokemon_dark_screen.jpg" alt="Picture of the author" width={1920} height={1200} />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}
