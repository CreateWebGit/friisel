import React from 'react';
import Image from 'next/image';
import theme from '../styles/theme.js';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from 'react-icons/ai';
import {
  MdEmail,
  MdOutlineAccessTime,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { BsTelephoneFill, BsLinkedin, BsFacebook } from 'react-icons/bs';
import ButtonQuote from './ButtonQuote';
import logo from './../public/images/Friis_logo.png';
import topBG from './../public/images/footerIMG.png';
import { ThemeProvider } from 'styled-components';

const mytheme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

const Footer = () => {
  return (
    <>
      <div className='topWrapper'>
        <div className='topLeftWrapper'>
          <h2>Få en gratis konsultation</h2>
          <p>Vi är alltid redo att hjälpa dig.</p>
          <ButtonQuote>Be om offert</ButtonQuote>
        </div>
        <div className='topRightWrapper'>
          <Image
            src={topBG}
            width='100%'
            height='100px'
          />
        </div>
      </div>
      <div className='container'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <Row>
              <Col
                xs={12}
                md={4}
              >
                <Image
                  src={logo}
                  width={120}
                />
                <p>
                  At Friis Eli, we understand that a reliable electrical system
                  is the lifeblood of your business.
                </p>
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
              </Col>
              <Col
                xs={12}
                md={4}
              >
                Meny
              </Col>
              <Col
                xs={12}
                md={4}
              >
                Service
              </Col>
            </Row>
            <hr />
            <Row>
              <Col
                xs={12}
                md={6}
              >
                <p className='rightWrapper'>
                  All rights reserved @ friisel.com
                </p>
              </Col>

              <Col
                xs={12}
                md={6}
              >
                <div className='policyWrapper'>
                  <div className='policyItems'>Terms & Conditions</div>
                  <div className='policyItems'>Claim</div>
                  <div className='policyItems'>Privacy Policy</div>
                </div>
              </Col>
            </Row>
          </Grid>
        </ThemeProvider>
      </div>
      <style jsx>{`
        .topWrapper {
          width: 100%;
          height: 300px;
          display: flex;
          overflow: hidden;
          .topLeftWrapper {
            width: 50%;
            padding: 50px 0px 20px 120px;
            background-color: ${theme.colors.primaryColor};
            h2 {
              font-size: 40px;
              color: #fff;
            }

            p {
              font-size: 16px;
              margin: 15px 0 80px 0;
              color: #fff;
            }
          }

          .topRightWrapper {
            width: 50%;
            height: 100%;
            background-color: ${theme.colors.primaryColor};
          }
        }
        .container {
          padding: 50px 0;

          p {
            width: 220px;
            margin: 15px 0;
          }
        }

        .contactContent {
          display: flex;
          flex-direction: column;

          .contactItem {
            color: #000;
            margin: 10px 10px 10px 0;
            display: flex;
            alignitems: center;

            span {
              margin-left: 10px;
            }
          }
        }

        .rightWrapper {
          margin: 0px !important;
        }

        .policyWrapper {
          display: flex;
          justify-content: right;

          .policyItems {
            margin: 0 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
