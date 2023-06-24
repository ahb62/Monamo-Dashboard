"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AuthModal from './Auth'
const navigation = [
  { name: 'Monamo.io', href: '#', key: 1 },
  { name: 'Monamo.io', href: '#', key: 2 },
  { name: 'Monamo.io', href: '#', key: 3 },
  { name: 'Monamo.io', href: '#', key: 4 },
]

export default function HeroSection() {

  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
