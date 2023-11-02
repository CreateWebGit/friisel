'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroContainer from './../../components/HeroContainer';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import theme from './../../styles/theme';
import { ThemeProvider } from 'styled-components';
import ButtonQuote from '../../components/ButtonQuote';
import Title from '../../components/Title';
import about1 from './../../public/images/about/about1.png';
import about2 from './../../public/images/about/about2.png';

import chartIcon from './../../public/images/about/chartIcon.png';
import shieldIcon from './../../public/images/about/shieldIcon.png';
import userIcon from './../../public/images/about/userIcon.png';
import workIcon from './../../public/images/about/workIcon.png';
import experience from './../../public/images/about/experience.png';

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
        backgroundUrl='../images/about/aboutHead.jpg'
        placement='top'
        filter={'rgba(0, 0, 0, 0.2)'}
        height={'80vh'}
      >
        <Navbar mypath={path} />
      </HeroContainer>
      <div className='main'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <Row>
              <Col
                xs={12}
                md={6}
              >
                <div className='solutionTextWraper'>
                  <Title text={'OM OSS'} />

                  <h2>Solutions for Commercial & Residential Buildings</h2>
                  <p>
                    At Friis Eli, we understand that a reliable electrical
                    system is the lifeblood of your business. Whether you're a
                    big corporation or a small enterprise, our dedicated team of
                    expert electricians is here to ensure your operations run
                    seamlessly. Discover the spark that sets us apart!
                  </p>
                  <ButtonQuote background={theme.colors.primaryColor}>
                    Begär offert
                  </ButtonQuote>
                </div>
              </Col>
              <Col
                xs={12}
                md={6}
              >
                <div className='solutionImageContainer'>
                  <Image src={about1} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                md={6}
              >
                <div className='solutionImageContainer'>
                  <Image src={about2} />
                </div>
              </Col>
              <Col
                xs={12}
                md={6}
              >
                <div className='solutionTextWraper'>
                  <Title text={'OM OSS'} />

                  <h2>Solutions for Commercial & Residential Buildings</h2>
                  <p>
                    At Friis Eli, we understand that a reliable electrical
                    system is the lifeblood of your business. Whether you're a
                    big corporation or a small enterprise, our dedicated team of
                    expert electricians is here to ensure your operations run
                    seamlessly. Discover the spark that sets us apart!
                  </p>
                  <ButtonQuote background={theme.colors.primaryColor}>
                    Begär offert
                  </ButtonQuote>
                </div>
              </Col>
            </Row>
          </Grid>
        </ThemeProvider>
        <section className='benefitContainer'>
          <Grid>
            <Row>
              <Col
                xs={12}
                md={4}
              >
                <Title text={'FÖRDELARNA'} />
                <h2 className='benefitsIntro'>
                  I decennier har vi tillhandahållit tjänster till små och stora
                  företag.
                </h2>
              </Col>
              <Col
                xs={12}
                md={8}
              >
                <Row>
                  <Col
                    xs={12}
                    md={6}
                  >
                    <div className='benefitIconContainer'>
                      <Image src={workIcon} />
                    </div>
                    <h2>A wide range of services</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                  >
                    <div className='benefitIconContainer'>
                      <Image src={shieldIcon} />
                    </div>
                    <h2>A wide range of services</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                  >
                    <div className='benefitIconContainer'>
                      <Image src={userIcon} />
                    </div>
                    <h2>A wide range of services</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                  >
                    <div className='benefitIconContainer'>
                      <Image src={chartIcon} />
                    </div>
                    <h2>A wide range of services</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                      sagittis massa morbi id hac id dui. Nulla a suspendisse
                      consectetur dui pharetra tellus diam ultrices dolor.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className='experienceContainer'>
          <ThemeProvider theme={mytheme}>
            <Grid fluid>
              <Row>
                <Col
                  xs={12}
                  md={6}
                >
                  <Image src={experience} />
                </Col>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='experienceTextWraper'>
                    <Title text={'LÅNG ERFARENHET AV ENTREPRENÖRSKAP'} />

                    <h2>Solutions for Commercial & Residential Buildings</h2>
                    <p>
                      At Friis Eli, we understand that a reliable electrical
                      system is the lifeblood of your business. Whether you're a
                      big corporation or a small enterprise, our dedicated team
                      of expert electricians is here to ensure your operations
                      run seamlessly. Discover the spark that sets us apart!
                    </p>
                    <ButtonQuote background={theme.colors.primaryColor}>
                      Begär offert
                    </ButtonQuote>
                  </div>
                </Col>
              </Row>
            </Grid>
          </ThemeProvider>
        </section>
      </div>

      <style jsx>{`
        //prettier-ignore
        @mixin mobile {
          @media (max-width: 850px) {
            @content
          }
        }

        .solutionTextWraper {
          height: 100%;
          width: 80%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          h2 {
            font-weight: bold;
            font-size: 38px;
            margin: 15px 0;

            @include mobile {
              text-align: center;
            }
          }

          p {
            color: #000000;
            margin-bottom: 25px;
            @include mobile {
              text-align: center;
            }
          }
        }

        .solutionImageContainer {
          padding-top: 20px;
          display: flex;
          justify-content: center;
        }
        :global(.solutionImage) {
          @include mobile {
            margin: 0 auto;
            width: 350px !important;
          }
        }

        .main {
        }

        .benefitContainer {
          margin: 50px 0;
          padding: 50px 50px 50px 0;
          background-color: #f9f9fb;

          h2 {
            font-sixe: 26px;
            font-weight: bold;
            margin: 10px 0;
          }

          p {
            font-sixe: 18px;
            margin-bottom: 10px;
          }

          .benefitsIntro {
            font-size: 48px;
            line-height: 60px;
          }

          .benefitIconContainer {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fce5c4;
            border-radius: 5px;
          }
        }

        .experienceContainer {
          margin: 50px 0;
          padding: 50px 0;

          .experienceTextWraper {
            height: 100%;
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            h2 {
              font-weight: bold;
              font-size: 38px;
              margin: 15px 0;

              @include mobile {
                text-align: center;
              }
            }

            p {
              color: #000000;
              margin-bottom: 25px;
              @include mobile {
                text-align: center;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
