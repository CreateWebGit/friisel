'use client';
import globalStyles from '../styles/reset.js';
import Footer from '../components/Footer';
import Head from 'next/head';

//import { Inter } from 'next/font/google';

//const inter = Inter({ subsets: ['latin'] });

/*
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
*/

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Dosis:wght@500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <html lang='en'>
        <body>
          {children}
          <Footer />
          <style
            jsx
            global
          >
            {globalStyles}
          </style>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
