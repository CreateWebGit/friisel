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
import ButtonQuote from './ButtonQuote';
import theme from '../styles/theme';

export const navLinks = [
  {
    id: 0,
    name: 'Hem',
    path: '/',
  },
  {
    id: 1,
    name: 'Om oss',
    path: '/om',
  },
  {
    id: 2,
    name: 'Service',
    path: '/service',
    sublinks1: [
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
    name: 'Jobb',
    path: '/jobb',
  },
  {
    id: 4,
    name: 'Kontakta',
    path: '/kontakta',
    sublinks2: [
      {
        id: 1,
        name: 'Offert',
        path: '/kontakta/offert',
      },
    ],
  },
];

export const Navigation = () => {
  const [isSublinks, setSublinks] = useState('');
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(link => {
        return (
          <>
            {link.sublinks1 || link.sublinks2 ? (
              <>
                {link.sublinks1 ? (
                  <div
                    className='withSubLinksConatner'
                    onMouseEnter={() => setSublinks('sublinks1')}
                    onMouseLeave={() => setSublinks('')}
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
                    {isSublinks === 'sublinks1' ? (
                      <div className='subLinksConatner'>
                        {link.sublinks1.map(sublink => {
                          return (
                            <>
                              <li>
                                <Link
                                  legacyBehavior
                                  key={sublink.id}
                                  href={sublink.path}
                                >
                                  <a>{sublink.name}</a>
                                </Link>
                              </li>
                              {/*<div className='subLinksSplitter'></div>*/}
                            </>
                          );
                        })}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                {link.sublinks2 ? (
                  <div
                    className='withSubLinksConatner'
                    onMouseEnter={() => setSublinks('sublinks2')}
                    onMouseLeave={() => setSublinks('')}
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
                    {isSublinks === 'sublinks2' ? (
                      <div className='subLinksConatner'>
                        {link.sublinks2.map(sublink => {
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
                  ''
                )}
              </>
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

                    bottom: -5px;
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
                padding-top: 10px;
                li {
                  position: relative;
                  margin: 0;
                  padding: 10px 15px;
                  fontsize: 18px;
                  curser: pointer;
                  background-color: #fff;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                li:hover {
                  background-color: ${theme.colors.primaryColor};
                }
                a {
                  text-decoration: none;
                  color: #000;
                }

                .subLinksSplitter {
                  height: 1px;
                  width: 100%;
                }
              }
            `}</style>
          </>
        );
      })}
    </>
  );
};

export const NavigationMobile = () => {
  const [isSublinks, setSublinks] = useState('');
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(link => {
        return (
          <>
            {link.sublinks1 || link.sublinks2 ? (
              <>
                {link.sublinks1 ? (
                  <div
                    className='withSubLinksConatner'
                    onMouseEnter={() => setSublinks('sublinks1')}
                    onMouseLeave={() => setSublinks('')}
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
                      +
                    </div>
                    {isSublinks === 'sublinks1' ? (
                      <div className='subLinksConatner'>
                        {link.sublinks1.map(sublink => {
                          return (
                            <>
                              <li>
                                <Link
                                  legacyBehavior
                                  key={sublink.id}
                                  href={sublink.path}
                                >
                                  <a>{sublink.name}</a>
                                </Link>
                              </li>
                              {/*<div className='subLinksSplitter'></div>*/}
                            </>
                          );
                        })}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                {link.sublinks2 ? (
                  <div
                    className='withSubLinksConatner'
                    onMouseEnter={() => setSublinks('sublinks2')}
                    onMouseLeave={() => setSublinks('')}
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
                    </div>
                    <div className='offertLink'>
                      <Link
                        legacyBehavior
                        href={'/kontakta/offert'}
                      >
                        <a>Offert</a>
                      </Link>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </>
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
                align-items: center;
                li {
                  display: flex;
                  alignitems: center;
                  position: relative;
                  margin: 8px 6px;

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

                    bottom: -5px;
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
              .offertLink {
                margin: 8px 6px;

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

                  bottom: -5px;
                  left: 0;
                  background-color: #f49a11;
                  transform: ${pathname === link.path
                    ? 'scaleY(1)'
                    : 'scaleY(0)'};
                  transition: transform 0.3s ease;
                }
              }
              .subLinksConatner {
                position: relative;
                left: 10px;
                padding-top: 10px;
                li {
                  position: relative;
                  margin: 0;
                  padding: 10px 15px;
                  fontsize: 18px;
                  curser: pointer;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                li:hover {
                  background-color: ${theme.colors.primaryColor};
                }
                a {
                  text-decoration: none;
                  color: #000;
                }

                .subLinksSplitter {
                  height: 1px;
                  width: 100%;
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
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  const [isNav, setIsNav] = useState(false);

  const [isActivelinks, setActivelinks] = useState('');
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

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
            <div className='linksWrapper'>
              <ul>
                <Navigation />
              </ul>
              <div className='linksSplitterWrapper'>
                <div className='linksSplitter'></div>
              </div>
              <div className='buttonQuoteContainer'>
                <ButtonQuote background={theme.colors.primaryColor}>
                  Begär offert
                </ButtonQuote>
              </div>
            </div>
            <div
              onClick={handleNav}
              className='navOpenIcon'
            >
              <AiOutlineMenu
                size={25}
                color='#fff'
              />
            </div>
          </div>
        </div>
        <div className={isNav ? 'navMobileActive' : ''}>
          <div className='navMobileContainer'>
            <div className='navMobileHead'>
              <div className='logoContainerMobile'>
                <Image
                  className='logo'
                  src={logo}
                  width={120}
                />
              </div>

              <div
                onClick={handleNav}
                className='navCloseIcon'
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className='navMobileBody'>
              <ul>
                <NavigationMobile />
              </ul>

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
            <div className='navMobileFooter'>
              <p>Experter inom Elteknik i Stockholm</p>
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
          position: fixed;
          top: 0;
          z-index: 1000;
        }
        .topWraper {
          background-color: rgba(0, 0, 0, 0.4);

          display: ${clientWindowHeight > 30 ? 'none' : 'block'};
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
          background-color: ${clientWindowHeight > 30
            ? 'rgba(0, 0, 0, 0.7)'
            : ''};
          transition: all 0.5s ease-in-out;
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
              @include mobile {
                margin-left: 40px;
              }
            }

            .linksWrapper {
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: #fff;
              @include mobile {
                display: none;
              }

              .linksSplitterWrapper {
                margin: 0 20px;
                font-size: 24px;

                .linksSplitter {
                  width: 1px;
                  height: 25px;
                  background-color: rgba(255, 255, 255, 0.5);
                }
              }

              ul {
                display: flex;
                cursor: pointer;
                liststyletype: none;
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

            .navCloseIcon {
              position: absolute;
              top: 5px;
              right: 5px;

              padding: 6px;
              border-radius: 100%;
              cursor: pointer;
              background-color: #fff;
              box-shadow: 0 10px 15px -3px rgb(156 175 175 / 0.5),
                0 4px 6px -4px rgb(156 175 175 / 0.5);
            }

            .logoContainerMobile {
              padding-top: 20px;
              display: flex;
              justify-content: center;
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

            @include mobile {
              padding-left: 35px;
            }
          }

          .navMobileFooter {
            padding-top: 160px;
            P {
              text-transform: uppercase;
              color: #5651e5;
              letter-spacing: 1px;
              text-align: center;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
