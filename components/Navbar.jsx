'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

export const Navigation = () => {
  const [isSublinks, setSublinks] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {navLinks.map(link => {
        return (
          <>
            {link.sublinks ? (
              <div
                className='withSubLinksConatner'
                onMouseEnter={() => setSublinks(true)}
                onMouseLeave={() => setSublinks(false)}
              >
                <div className='links'>
                  <li>
                    <Link
                      legacyBehavior
                      key={link.id}
                      href={link.path}
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
                        <li>
                          <Link
                            legacyBehavior
                            key={sublink.id}
                            href={sublink.path}
                          >
                            <a>{sublink.name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <div className='links'>
                <li>
                  <Link
                    legacyBehavior
                    key={link.id}
                    href={link.path}
                  >
                    <a>{link.name}</a>
                  </Link>
                </li>
              </div>
            )}
            <style jsx>{`
              $primary-color: #f49a11;
              $mobile: 850px;

              //prettier-ignore
              @mixin mobile {
                @media (max-width: $mobile) {
                  @content
                }
              }

              .withSubLinksConatner {
                position: relative;
              }
              .links {
                display: flex;
                alignitems: center;
                li {
                  display: flex;
                  alignitems: center;
                  position: relative;
                  margin-left: 20px;
                  font-size: 18px;
                  curser: pointer;
                  a {
                    text-decoration: none;
                    color: #fff;
                  }
                  a:before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #f49a11;
                    transform: ${pathname === link.path
                      ? 'scaleY(1)'
                      : 'scaleY(0)'};
                    transition: transform 0.3s ease;
                  }
                  a:hover:before {
                    transform: scaleX(1);
                  }
                }
              }
              .subLinksConatner {
                position: absolute;
                left: 20px;
                li {
                  position: relative;
                  margin: 5px 0;
                  fontsize: 18px;
                  curser: pointer;
                }
                a {
                  text-decoration: none;
                  color: #fff;
                }
              }
            `}</style>
          </>
        );
      })}
    </>
  );
};

const Navbar = ({ mypath }) => {
  const [isNav, setIsNav] = useState(false);

  const [isActivelinks, setActivelinks] = useState('');
  const [sticky, setSticky] = useState(true);

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
                <span> info@friisel.se </span>
              </div>
              <div className='contactItem'>
                <MdOutlineAccessTime
                  className='contactIcon'
                  color='#F49A11'
                />
                <span> Måndag - Fredag 08.00 16.00 </span>
              </div>
              <div className='contactItem'>
                <BsTelephoneFill
                  className='contactIcon'
                  color='#F49A11'
                />
                <span> 123-456-789 </span>
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
            <ul>
              <Navigation />
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
            <div className='navMobileHead'>
              {/* <Image src={logo} width="80" height="80" alt="create web" /> */}

              <div
                onClick={handleNav}
                className='navCloseIcon'
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className='navMobileBody'>
              <ul>
                {navLinks.map(link => {
                  return (
                    <li>
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
            max-width: 1200px;
            width: 100%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include mobile {
              display: none;
            }

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

                span {
                  margin-left: 10px;
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

          .navContent {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            margin: auto;
            max-width: 1200px;
            width: 100%;
            @include mobile {
              width: 100%;
            }

            //transition: "all 0.3s ease-in-out",

            .logoContainer {
              margin-left: 20px;
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
            }

            .navOpenIcon {
              display: none;
              @include mobile {
                margin-right: 20px;
                display: block;
                z-index: 1000;
              }
            }
          }
        }

        /***********************/
        /*** Nav Mobile *******/
        /**********************/

        .navMobileActive {
          display: none;
          @include mobile {
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 999;
          }
        }

        .navMobileContainer {
          position: fixed;
          height: 100vh;
          left: ${isNav ? '0px' : '-100%'};
          top: 0;
          background-color: #ecf0f3;
          padding: 0px;
          transition: all 0.5s ease-in;
          z-index: 999;
          @include mobile {
            width: 75%;
          }

          .navMobileHead {
            position: relative;

            width: 100%;
            height: 150px;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #000;

            .navCloseIcon {
              position: absolute;
              top: 5px;
              right: 5px;
              border: 1px solid #000;

              padding: 6px;
              border-radius: 100%;
              cursor: pointer;
              background-color: #fff;
              box-shadow: 0 10px 15px -3px rgb(156 175 175 / 0.5),
                0 4px 6px -4px rgb(156 175 175 / 0.5);
            }
          }

          .navMobileBody {
            padding: 0 8px;
            display: flex;
            flex-direction: column;

            ul {
              text-transform: uppercase;

              li {
                padding: 16px 0;
                cursor: pointer;

                a {
                  text-decoration: none;
                }
              }
            }

            .navMobileSlogan {
              padding-top: 160px;
              P {
                text-transform: uppercase;
                color: #5651e5;
                letter-spacing: 1px;
                text-align: center;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
