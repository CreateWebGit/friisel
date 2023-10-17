'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='container'>
      <Navbar />
      <h1>Hello Next.js</h1>
      <p>Let's explore different ways to style Next.js apps</p>
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
}
