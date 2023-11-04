'use client';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroContainer from './../../../components/HeroContainer';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import theme from './../../../styles/theme';
import { ThemeProvider } from 'styled-components';
import bg from '../../../public/images/offert/bgMeter.jpg';
import Form from '../../../components/Form';
import Title from '../../../components/Title';
import ButtonQuote from '../../../components/ButtonQuote';

import tjanst1 from './../../../public/images/tjanster/tjanst1.png';
import tjanst2 from './../../../public/images/tjanster/tjanst2.png';
import tjanst3 from './../../../public/images/tjanster/tjanst3.png';
import tjanst4 from './../../../public/images/tjanster/tjanst4.png';
import tjanst5 from './../../../public/images/tjanster/tjanst5.png';

import dialogue from './../../../public/images/tjanster/dialogue.png';
import electricpanel from './../../../public/images/tjanster/electric-panel.png';
import greenenergy from './../../../public/images/tjanster/green-energy.png';
import skyline from './../../../public/images/tjanster/skyline.png';

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
        <div className='heroWrapper'></div>
      </HeroContainer>
      <section className='benefitContainer'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <Row>
              <Col
                xs={12}
                md={6}
              >
                <div className='benefitTitleWrapper'>
                  <Title text={'OM OSS'} />
                  <h2>
                    Fördelarna i att <br /> anlita oss
                  </h2>
                </div>
              </Col>
              <Col
                xs={12}
                md={6}
              >
                <div className='benefitTextWrapper'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Urna
                    morbi sapien enim pulvinar laoreet in. Lobortis ut morbi sit
                    proin commodo urna. Convallis feugiat in hac non turpis.
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </ThemeProvider>
      </section>
      <section className='cardContainer'>
        <Grid>
          <Row>
            <Col
              xs={12}
              md={4}
            >
              <div className='card'>
                <Image src={tjanst1} />
                <h3>Fast Work Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                  sagittis massa morbi id hac id dui. Nulla a suspendisse
                  consectetur dui pharetra tellus diam ultrices dolor.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
            >
              <div className='card'>
                <Image src={tjanst2} />
                <h3>Fast Work Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                  sagittis massa morbi id hac id dui. Nulla a suspendisse
                  consectetur dui pharetra tellus diam ultrices dolor.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
            >
              <div className='card'>
                <Image src={tjanst3} />
                <h3>Fast Work Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                  sagittis massa morbi id hac id dui. Nulla a suspendisse
                  consectetur dui pharetra tellus diam ultrices dolor.
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
      <section className='provideContainer'>
        <Grid>
          <Row>
            <Col
              xs={12}
              md={4}
            >
              <div className='provideBG'></div>
            </Col>
            <Col
              xs={12}
              md={8}
            >
              <div className='provideHead'>
                <Title
                  text={'OM OSS'}
                  className='provideTitle'
                />
                <h2>
                  Vi tillhandahåller professionella lösningar <br /> till
                  företag och privatpersoner
                </h2>
              </div>

              <Row>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='provideCard'>
                    <div className='iconContainer'>
                      <Image src={skyline} />
                    </div>
                    <h3>Titel text</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='provideCard'>
                    <div className='iconContainer'>
                      <Image src={skyline} />
                    </div>
                    <h3>Titel text</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='provideCard'>
                    <div className='iconContainer'>
                      <Image src={skyline} />
                    </div>
                    <h3>Titel text</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='provideCard'>
                    <div className='iconContainer'>
                      <Image src={skyline} />
                    </div>
                    <h3>Titel text</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </div>
                </Col>
              </Row>

              <div className='provideFooter'>
                <ButtonQuote background={theme.colors.primaryColor}>
                  Begär offert
                </ButtonQuote>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap');

        //prettier-ignore
        @mixin mobile {
          @media (max-width: 850px) {
            @content
          }
        }
        .heroWrapper {
          width: 100%;
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;

          h1 {
            font-size: 120px;
            color: #fff;
          }
        }

        .benefitContainer {
          margin: 30px 0;

          .benefitTitleWrapper {
            @include mobile {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            h2 {
              margin-top: 10px;
              font-size: 48px;
              font-weight: bold;

              @include mobile {
                text-align: center;
                margin: 10px 0;
              }
            }
          }

          .benefitTextWrapper {
            p {
              color: #686868;
              font-size: 18px;
              font-family: 'Roboto', sans-serif;
              font-weight: 600;
              word-wrap: break-word;
              margin-top: 15px;

              @include mobile {
                text-align: left;
                margin: 0 40px;
              }
            }
          }
        }

        .cardContainer {
          margin: 50px 0;
          .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 25px 15px;
            background-color: #f9f9fb;

            h3 {
              margin: 15px 0;
              font-size: 36px !important;
              font-weight: bold;
              text-align: center;
            }

            p {
              text-align: center;
            }

            @include mobile {
              margin-bottom: 40px;
            }
          }
        }

        .provideContainer {
          margin: 50px 50px;
          padding: 50px 0;
          background-color: #f9f9fb;

          .provideBG {
            height: 100%;
            width: 100%;
            background: url(/images/tjanster/tjanst4.png) no-repeat top center;
            background-size: cover;
          }

          .provideHead {
            padding-left: 20px;

            h2 {
              font-size: 32px;
              font-weight: bold;
              margin: 10px 0px;

              @include mobile {
                text-align: center;
              }
            }

            @include mobile {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }

          .provideCard {
            padding: 20px;
            .iconContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 60px;
              height: 60px;
              background-color: #fce5c4;
              border-radius: 50%;
            }
            h3 {
              font-size: 32px;
              font-weight: bold;
              margin: 10px 0;
            }

            p {
            }

            @include mobile {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }

          .provideFooter {
            padding: 20px 0;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
