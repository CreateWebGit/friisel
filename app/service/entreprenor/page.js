'use client';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroContainer from './../../../components/HeroContainer';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import theme from './../../../styles/theme';
import { ThemeProvider } from 'styled-components';
import ButtonQuote from '../../../components/ButtonQuote';
import Title from '../../../components/Title';

import skanska from './../../../public/images/entreprenor/skanska.png';
import decathlon from './../../../public/images/entreprenor/decathlon.png';
import heving from './../../../public/images/entreprenor/heving.png';
import mcdonald from './../../../public/images/entreprenor/mcdonald.png';
import multeral from './../../../public/images/entreprenor/multeral.png';
import mvb from './../../../public/images/entreprenor/mvb.png';
import rolfredriks from './../../../public/images/entreprenor/rolfredriks.png';
import wastbygg from './../../../public/images/entreprenor/wastbygg.png';

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
        backgroundUrl='../images/entreprenor/hero.png'
        placement='top'
        filter={'rgba(0, 0, 0, 0.4)'}
        height={'85vh'}
      >
        <Navbar mypath={path} />
        <Grid>
          <div className='heroTextWrapper'>
            <h4>Lång Erfarenhet av Stora Projekt</h4>
            <h1>Effektiviserade lösningar & problemfria tjänster</h1>
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

      <section className='customersContainer'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <div className='customersTextWraper'>
              <Title
                className='solutionTitle'
                text={'SERVICE'}
              />

              <h2>
                Det här är några stora företag vi har som samarbetspartner
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                sagittis massa morbi id hac id dui. Nulla a suspendisse
                consectetur dui pharetra tellus diam ultrices dolor. Lorem ipsum
                dolor sit amet consectetur. Magna id lobortis sagittis massa
                morbi id hac id dui. Nulla a suspendisse consectetur dui
                pharetra tellus diam ultrices dolor.
              </p>
            </div>

            <Row>
              <Col
                xs={12}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={skanska}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={mvb}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={wastbygg}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={heving}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={rolfredriks}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={multeral}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                mdOffset={2}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={decathlon}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
              >
                <div className='customerCard'>
                  <div className='customerLogoContainer'>
                    <Image
                      src={mcdonald}
                      className='customerLogo'
                      height={50}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui.
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </ThemeProvider>
      </section>

      <style jsx>{`
        //prettier-ignore
        @mixin mobile {
          @media (max-width: 850px) {
            @content
          }
        }
        .heroTextWrapper {
          color: #fff;
          width: 500px;

          @include mobile {
            width: 100%;
          }

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
            @include mobile {
              font-size: 28px;
              line-height: 30px;
            }
          }

          h2 {
            font-size: 22px;
            margin-bottom: 30px;
            @include mobile {
              font-size: 22px;
            }
          }

          .heroButtonWrapper {
            width: 320px;
            display: flex;
            justify-content: space-between;
          }
        }

        .customersContainer {
          padding: 30px 0;

          .customersTextWraper {
            height: 100%;
            width: 60%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h2 {
              font-weight: bold;
              font-size: 38px;
              margin: 15px 0;
              text-align: center;
              @include mobile {
              }
            }

            p {
              color: #000000;
              margin-bottom: 25px;
              text-align: center;
              @include mobile {
              }
            }
            @include mobile {
              align-items: center;
              margin-top: 50px;
            }
          }

          .customerCard {
            padding: 18px 14px;
            margin: 0 0 25px 0;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
              rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
              rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

            .customerLogoContainer {
              display: flex;
              justify-content: center;

              :global(.customerLogo) {
                margin: 35px 0;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
