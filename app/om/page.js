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
        filter={'rgba(0, 0, 0, 0.4)'}
        height={'85vh'}
      >
        <Navbar mypath={path} />
        <Grid>
          <div className='heroTextWrapper'>
            <h4>Lång Erfarenhet av Stora Projekt</h4>
            <h1>Vår story: Engagerad i spetskompetens</h1>
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

      <section className='solutionContainer'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <Row>
              <Col
                xs={12}
                md={6}
              >
                <div className='solutionTextWraper'>
                  <Title
                    className='solutionTitle'
                    text={'OM OSS'}
                  />

                  <h2>
                    Vi tillhandahåller innovativa ellösningar till företag
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Urna
                    morbi sapien enim pulvinar laoreet in. Lobortis ut morbi sit
                    proin commodo urna. Convallis feugiat in hac non turpis.
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
            <Row className='solutionColumnReverce'>
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
                  <Title
                    className='solutionTitle'
                    text={'OM OSS'}
                  />

                  <h2>Lösningar för kommersiella och bostadsbyggnader</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Urna
                    morbi sapien enim pulvinar laoreet in. Lobortis ut morbi sit
                    proin commodo urna. Convallis feugiat in hac non turpis.
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
                  <h2>Ett brett utbud av tjänster</h2>
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
                  <h2>Toppkvalitet till bästa pris</h2>
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
                  <h2>Ett team av proffs</h2>
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
                  <h2>Engagemang för framgång</h2>
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
            <Row className='experienceRowContainer'>
              <Col
                xs={12}
                md={6}
                className='experienceIMGContainer'
              >
                <Image
                  src={experience}
                  className='experienceIMG'
                />
              </Col>
              <Col
                xs={12}
                md={6}
              >
                <div className='experienceTextWraper'>
                  <Title text={'LÅNG ERFARENHET AV ENTREPRENÖRSKAP'} />

                  <h2>Lösningar för kommersiella och bostadsbyggnader</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                    sagittis massa morbi id hac id dui. Nulla a suspendisse
                    consectetur dui pharetra tellus diam ultrices dolor. Lorem
                    ipsum dolor sit amet consectetur. Magna id lobortis sagittis
                    massa morbi id hac id dui. Nulla a suspendisse consectetur
                    dui pharetra tellus diam ultrices dolor. Lorem ipsum dolor
                    sit amet consectetur. Magna id lobortis sagittis massa morbi
                    id hac id dui. Nulla a suspendisse consectetur dui pharetra
                    tellus diam ultrices dolor.
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

      <style jsx>{`
        //prettier-ignore
        @mixin mobile {
          @media (max-width: 850px) {
            @content
          }
        }

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

        .solutionContainer {
          :global(.solutionTitle) {
            @include mobile {
              margin: auto;
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
            @include mobile {
              align-items: center;
              margin-top: 50px;
            }
          }

          .solutionImageContainer {
            padding-top: 40px;
            display: flex;
            justify-content: center;
          }
          :global(.solutionImage) {
            @include mobile {
              margin: 0 auto;
              width: 350px !important;
            }
          }
          :global(.solutionColumnReverce) {
            @include mobile {
              flex-direction: column-reverse;
            }
          }

          @include mobile {
          }
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

            @include mobile {
              font-size: 35px;
              line-height: 40px;
            }
          }

          .benefitIconContainer {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fce5c4;
            border-radius: 5px;

            @include mobile {
              margin-top: 15px;
            }
          }
        }

        .experienceContainer {
          margin: 50px 0;
          padding: 50px 0;

          :global(.experienceRowContainer) {
            @include mobile {
              flex-direction: column-reverse;
            }
          }

          :global(.experienceIMGContainer) {
            @include mobile {
              width: 100%;
              display: flex;
              justify-content: center;
              margin-top: 20px;
            }
          }
          :global(.experienceIMG) {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            @include mobile {
              width: 90%;
              height: auto;
              margin: auto;
            }
          }

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
                text-align: left;
              }
            }

            p {
              color: #000000;
              margin-bottom: 25px;
              @include mobile {
                text-align: left;
              }
            }

            @include mobile {
              width: 90%;
            }
          }
        }
      `}</style>
    </div>
  );
}
