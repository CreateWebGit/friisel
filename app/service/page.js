'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Service() {
  const [isActivelinks, setActivelinks] = useState('');

  const router = useRouter();
  const path = router.path;

  return (
    <div className='container'>
      <Navbar mypath={path} />
      <h1>Hello Next.js</h1>
      <p>Let's explore different ways to style Next.js apps</p>
      <style jsx>{`
        .container {
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
}
