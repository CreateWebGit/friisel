'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroContainer from './../../components/HeroContainer';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import theme from './../../styles/theme';
import { ThemeProvider } from 'styled-components';
import bg from '../../public/images/offert/bgMeter.jpg';
import Form from '../../components/Form';
import Formcontact from '../../components/Formcontact';

import call from './../../public/images/kontakta/Call.png';
import location from './../../public/images/kontakta/Location.png';
import message from './../../public/images/kontakta/Message.png';
import ButtonQuote from '../../components/ButtonQuote';

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

export default function Om() {
  const [isActivelinks, setActivelinks] = useState('');

  const router = useRouter();
  const path = router.path;

  return (
    <div className='container'>
      <HeroContainer
        backgroundUrl='../images/tjanster/hero.png'
        placement='top'
        filter={'rgba(0, 0, 0, 0.4)'}
        height={'80vh'}
      >
        <Navbar mypath={path} />
        <Grid>
          <div className='heroTextWrapper'>
            <h4>Lång Erfarenhet av Stora Projekt</h4>
            <h1>
              Vi tillhandahåller lösningar även till små företag och
              privatpersoner
            </h1>
            <h2>
              Friis EL har varit ett pålitligt namn inom elbranschen i 10+ år.
              Vi är stolta över vårt engagemang för kvalitet, säkerhet och
              kundnöjdhet
            </h2>
            <div className='heroButtonWrapper'>
              <ButtonQuote background={theme.colors.primaryColor}>
                Begär offert
              </ButtonQuote>
            </div>
          </div>
        </Grid>
      </HeroContainer>
      <section className='infoContactContainer'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <h2>Vi är här för att hjälpa dig</h2>
            <p>
              Friis EL har varit ett pålitligt namn inom elbranschen i 9+ år. Vi
              är stolta över vårt engagemang för kvalitet, säkerhet och
              kundnöjdhet
            </p>

            <Row>
              <Col
                xs={12}
                md={4}
              >
                <div className='contactCard'>
                  <div className='iconContainer'>
                    <Image src={location} />
                  </div>
                  <p>Besök oss</p>
                  <h3>Telegramvägen 44, 132 35 Saltsjö-Boo</h3>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='contactCard'>
                  <div className='iconContainer'>
                    <Image src={message} />
                  </div>
                  <p>Skicka maila</p>
                  <h3>info@friisel.se</h3>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='contactCard'>
                  <div className='iconContainer'>
                    <Image src={call} />
                  </div>
                  <p>Slå en signal</p>
                  <h3>08 - 64 09 920</h3>
                </div>
              </Col>
            </Row>
          </Grid>
        </ThemeProvider>
      </section>
      <section className='formContactContainer'>
        <Grid>
          <h2>Hör av dig!</h2>
          <p></p>
          <div className='formContainer'>
            <Formcontact />
          </div>
        </Grid>
      </section>

      <style jsx>{`
        .heroTextWrapper {
          margin-top: 200px;
          color: #fff;
          width: 500px;

          h4 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          h1 {
            font-family: 'Dosis', sans-serif !important;
            font-size: 38px;
            font-weight: bold;
            line-height: 50px;
            margin-bottom: 10px;
          }

          h2 {
            font-size: 22px;
            margin-bottom: 30px;
          }

          .heroButtonWrapper {
            width: 320px;
            display: flex;
            justify-content: space-between;
          }
        }

        .infoContactContainer {
          padding: 50px 0;
          h2 {
            font-size: 34px;
            text-align: center;
          }

          p {
            font-size: 20px;
            margin: 25px 250px;
            text-align: center;
          }

          .contactCard {
            height: 200px;
            padding: 30px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
              rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            margin: 30px 0;

            p {
              margin: 25px 0px;
            }

            .iconContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 60px;
              height: 60px;
              background-color: #fce5c4;
              border-radius: 50%;
            }
          }
        }

        .formContactContainer {
          margin: 50px 0;

          h2 {
            font-size: 36px;
            text-align: center;
            margin-bottom: 30px;
          }

          p {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
