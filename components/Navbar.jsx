'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from 'react-icons/ai';
import {
  MdEmail,
  MdOutlineAccessTime,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { BsTelephoneFill, BsLinkedin, BsFacebook } from 'react-icons/bs';

import { FaLinkedinIn } from 'react-icons/fa';
//import Social from '../Social';
//import Container from '../Container';
import logo from './../public/images/Friis_logo.png';

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
  const [isNav, setIsNav] = useState(false);
  const [isSublinks, setSublinks] = useState(false);
  const [isActivelinks, setActivelinks] = useState('');
  const [sticky, setSticky] = useState(true);

  const router = useRouter();
  const path = router.path;

  const handleNav = () => {
    setIsNav(!isNav);
  };
  return (
    <>
      <div className='container'>
        <div className='topWraper'>
          <div className='topContent'>
            <div className='contactContent'>
              <div className='contactItem'>
                <MdEmail
                  className='contactIcon'
                  color='#F49A11'
                />
                info@friisel.se
              </div>
              <div className='contactItem'>
                <MdOutlineAccessTime
                  className='contactIcon'
                  color='#F49A11'
                />
                Måndag - Fredag 08.00 16.00
              </div>
              <div className='contactItem'>
                <BsTelephoneFill
                  className='contactIcon'
                  color='#F49A11'
                />
                123-456-789
              </div>
            </div>
            <div className='socialContent'>
              <BsFacebook color='#F49A11' />
              <AiFillInstagram color='#F49A11' />
              <BsLinkedin color='#F49A11' />
            </div>
          </div>
        </div>
        <div className='navWraper'>
          <div className='navContent'>
            <Link
              href={'/'}
              className='logoLink'
            >
              <div className='logoContainer'>
                <Image
                  className='logo'
                  src={logo}
                  width={120}
                />
              </div>
            </Link>
            <ul className='ul'>
              {navLinks.map(link => {
                return (
                  <>
                    {link.name === 'SERVICE' ? (
                      <div
                        className='withSubLinksConatner'
                        onMouseEnter={() => setSublinks(true)}
                        onMouseLeave={() => setSublinks(false)}
                      >
                        <div
                          className={
                            router.pathname === link.path
                              ? 'sublinkActive'
                              : 'sublink'
                          }
                        >
                          <li>
                            <Link
                              legacyBehavior
                              key={link.id}
                              href={link.path}
                              onClick={() => setSublinks(link.path)}
                            >
                              <a>{link.name}</a>
                            </Link>
                          </li>
                          <MdKeyboardArrowDown color='#fff' />
                        </div>
                        {isSublinks ? (
                          <div className='subLinksConatner'>
                            {link.sublinks.map(sublink => {
                              return (
                                <div className='subLinkItem'>
                                  <Link
                                    legacyBehavior
                                    key={sublink.id}
                                    href={sublink.path}
                                  >
                                    <a>{sublink.name}</a>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    ) : (
                      <div
                        className={
                          router.pathname === link.path
                            ? 'linksActive'
                            : 'links'
                        }
                      >
                        <li>
                          <Link
                            legacyBehavior
                            key={link.id}
                            href={link.path}
                            onClick={() => setSublinks(link.path)}
                          >
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      </div>
                    )}
                  </>
                );
              })}
            </ul>
            <div
              onClick={handleNav}
              className='navOpenIcon'
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div className={isNav ? 'navMobileActive' : ''}>
          <div className='navMobileContainer'>
            <div>
              <div className='navMobileHead'>
                {/* <Image src={logo} width="80" height="80" alt="create web" /> */}
                <div
                  onClick={handleNav}
                  className='navCloseIcon'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div>
                <p>Låt oss bygga något legendariskt tillsammans</p>
              </div>
            </div>
            <div className='navMobileBody'>
              <ul>
                {navLinks.map(link => {
                  return (
                    <Link
                      key={link.id}
                      href={link.path}
                    >
                      <li key={link.id}>{link.name}</li>
                    </Link>
                  );
                })}
              </ul>
              <div className='navMobileSlogan'>
                <p>Låt oss konekta</p>
              </div>
              {/*
            <div className='navMobileSocialContainer'>
              <a href='#'>
                <div className='navMobileSocial'>
                  <Social socialtype='facebook' />
                </div>
              </a>
              <a href='#'>
                <div className='navMobileSocial'>
                  <Social socialtype='instagram' />
                </div>
              </a>
              <a href='#'>
                <div className='navMobileSocial'>
                  <Social socialtype='linkedin' />
                </div>
              </a>
            </div>
            */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        $primary-color: #f49a11;
        $mobile: 850px;

        //prettier-ignore
        @mixin mobile {
          @media (max-width: $mobile) {
            @content
          }
        }

        .container {
          width: 100%;
          position: relative;
          top: 0;
          z-index: 1000;
        }
        .topWraper {
          background-color: rgba(0, 0, 0, 0.4);

          .topContent {
            height: 50px;
            width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .contactContent {
              display: flex;

              .contactItem {
                color: $primary-color;
                margin: 0 10px;
                display: flex;
                alignitems: center;

                .contactIcon {
                  margin-right: 10px;
                }
              }
            }
            .socialContent {
              width: 130px;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }
          }
        }

        .navWraper {
          width: 100%;
          // borderBottom: 1px solid rgba(255,255,255,0.9);
          top: 0px;
          right: 0px;
          left: 0px;

          .navContent {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            margin: auto;
            width: 1200px;

            //transition: "all 0.3s ease-in-out",

            .logoContainer {
              text-align: center;
              cursor: pointer;
            }

            ul {
              display: flex;
              cursor: pointer;
              liststyletype: none;
              @include mobile {
                display: none;
              }
              li {
                display: flex;
                alignitems: center;
                position: relative;
                margin-left: 20px;
                font-size: 18px;
                curser: pointer;
                a {
                  text-decoration: none;
                  color: #333;
                }
                a:before {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 2px;
                  bottom: 0;
                  left: 0;
                  background-color: #f49a11;
                  transform: ${isActivelinks === router.pathname
                    ? 'scaleX(1)'
                    : 'scaleY(0)'};
                  transition: transform 0.3s ease;
                }
                a:hover:before {
                  transform: scaleX(1);
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
