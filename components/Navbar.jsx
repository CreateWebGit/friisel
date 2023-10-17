import React from 'react';
import Link from 'next/link';

export const navLinks = [
  {
    id: 0,
    name: 'HEM',
    path: '/',
  },
  {
    id: 1,
    name: 'OM OSS',
    path: '/om',
  },
  {
    id: 2,
    name: 'SERVICE',
    path: '/service',
    sublinks: [
      {
        id: 1,
        name: 'Entreprenörskap',
        path: '/service/entreprenor',
      },
      {
        id: 2,
        name: 'Tjänster',
        path: '/service/tjanster',
      },
      {
        id: 3,
        name: 'Elspåp',
        path: '/service/elskap',
      },
    ],
  },
  {
    id: 3,
    name: 'JOBB',
    path: '/jobb',
  },
  {
    id: 4,
    name: 'KONTAKTA',
    path: '/kontakta',
  },
];

const Navbar = () => {
  return (
    <div>
      <ul>
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                legacyBehavior
                key={link.id}
                href={link.path}
              >
                <a>{link.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
