'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import ButtonQuote from '../components/ButtonQuote';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroContainer from '../components/HeroContainer';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import theme from '../styles/theme';
import solutionIMG from './../public/images/index/Solutions_images.png';
import dots from './../public/images/index/dots.png';
import project1 from './../public/images/index/project1.png';
import project2 from './../public/images/index/project2.png';
import project3 from './../public/images/index/project3.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
//import myIcon from 'images/icons/dialogue.png';
MdKeyboardDoubleArrowRight;

const URL = process.env.STRAPIBASEURL;

export async function getData(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
      oms {
        data {
          id
          attributes {
            Titel
            Text
          }
        }
      }
     } `,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();
  return {
    props: data.oms.data.attributes.text,
  };
}

export default function Home({ data }) {
  const [isActivelinks, setActivelinks] = useState('');

  const router = useRouter();
  const path = router.path;
  console.log('data ' + data);
  return (
    <div className='container'>
      <HeroContainer
        backgroundUrl='../images/index/heroIMG.png'
        placement='bottom'
        filter={'rgba(0, 0, 0, 0.2)'}
        height={'100vh'}
      >
        <Navbar />
        <Grid>
          <div className='heroTextWrapper'>
            <h4>Lång Erfarenhet av Stora Projekt</h4>
            <h1>
              Styr din framgång, din pålitliga elpartner för stora och små
              företag
            </h1>
            <h2>
              Välkommen till Friis El - Vi är Professionella elektriker Låt oss
              uppfylla dina affärsmål!
            </h2>
            <div className='heroButtonWrapper'>
              <ButtonQuote background={theme.colors.primaryColor}>
                Begär offert
              </ButtonQuote>
              <ButtonQuote background='transparence'>Läs mer</ButtonQuote>
            </div>
          </div>
        </Grid>
      </HeroContainer>
      <section className='solutionContainer'>
        <Grid>
          <Row>
            <Col
              xs={12}
              md={6}
            >
              <div className='solutionTextWraper'>
                <Title text={'Great Experiences in Commercial Buildings'} />

                <h2>Solutions for Commercial & Residential Buildings</h2>
                <p>
                  At Friis Eli, we understand that a reliable electrical system
                  is the lifeblood of your business. Whether you're a big
                  corporation or a small enterprise, our dedicated team of
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
                <Image
                  src={solutionIMG}
                  width={433}
                  height={535}
                  className='solutionImage'
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
      <section className='serviceContainer'>
        <Title
          text={'Vår service'}
          align={'center'}
        />
        <h2>Vi erbjuder följande tjänster</h2>
        <Grid>
          <Row around='sm'>
            <Col
              xs={12}
              sm={4}
              md={4}
            >
              <div className='card'>
                <div className='eclips'>
                  <Image
                    src='/images/icons/skyline.png'
                    width='29'
                    height='29'
                  />
                </div>
                <h2>Entreprenörskap</h2>
                <p>
                  Welcome to Friis El - Where Excellence in Electrical Services
                  Meets Your Business Goals!"
                </p>

                <span>
                  <Link
                    legacyBehavior
                    href='/service/entreprenor'
                  >
                    <a>
                      {' '}
                      Service detaljer
                      <MdKeyboardDoubleArrowRight
                        className='cardLinksIcon'
                        color={theme.colors.primaryColor}
                      />
                    </a>
                  </Link>
                </span>
              </div>
            </Col>
            <Col
              xs={12}
              sm={4}
              md={4}
            >
              <div className='card'>
                <div className='eclips'>
                  <Image
                    src='/images/icons/wrench.png'
                    width='29'
                    height='29'
                  />
                </div>
                <h2>EL Service</h2>
                <p>
                  Welcome to Friis El - Where Excellence in Electrical Services
                  Meets Your Business Goals!"
                </p>
                <span>
                  <Link
                    legacyBehavior
                    href='/service/tjanster'
                  >
                    <a>
                      {' '}
                      Service detaljer
                      <MdKeyboardDoubleArrowRight
                        className='cardLinksIcon'
                        color={theme.colors.primaryColor}
                      />
                    </a>
                  </Link>
                </span>
              </div>
            </Col>
            <Col
              xs={12}
              sm={4}
              md={4}
            >
              <div className='card'>
                <div className='eclips'>
                  <Image
                    src='/images/icons/electric-panel.png'
                    width='29'
                    height='29'
                  />
                </div>
                <h2>Uthyrning av elskåp</h2>
                <p>
                  Welcome to Friis El - Where Excellence in Electrical Services
                  Meets Your Business Goals!"
                </p>
                <span>
                  <Link
                    legacyBehavior
                    href='/service/elskap'
                  >
                    <a>
                      Service detaljer
                      <MdKeyboardDoubleArrowRight
                        className='cardLinksIcon'
                        color={theme.colors.primaryColor}
                      />
                    </a>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
      <section className='projectsContainer'>
        <Grid>
          <Title
            text={'Våra projekt'}
            align={'left'}
          />
          <h2>Våra senaste projekt</h2>
          <Row className='projectItem'>
            <Col
              className='test'
              xs={12}
              md={6}
            >
              <Image
                src={dots}
                className='dotsIMG'
              />
              <Image
                src={project1}
                className='projectIMG'
              />
            </Col>
            <Col
              className='projectTextContainer'
              xs={12}
              md={6}
            >
              <div className='projectText'>
                <h2>Ett spännande project i samarbete med Skanska</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                  sagittis massa morbi id hac id dui. Nulla a suspendisse
                  consectetur dui pharetra tellus diam ultrices dolor.{' '}
                </p>
                <ButtonQuote background={theme.colors.primaryColor}>
                  Begär offert
                </ButtonQuote>
              </div>
            </Col>
          </Row>
          <Row className='projectItem'>
            <Col
              className='test'
              xs={12}
              md={6}
            >
              <Image
                src={dots}
                className='dotsIMG'
              />
              <Image
                src={project2}
                className='projectIMG'
              />
            </Col>
            <Col
              className='projectTextContainer'
              xs={12}
              md={6}
            >
              <div className='projectText'>
                <h2>Ett spännande project i samarbete med Skanska</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                  sagittis massa morbi id hac id dui. Nulla a suspendisse
                  consectetur dui pharetra tellus diam ultrices dolor.{' '}
                </p>
                <ButtonQuote background={theme.colors.primaryColor}>
                  Begär offert
                </ButtonQuote>
              </div>
            </Col>
          </Row>
          <Row className='projectItem'>
            <Col
              className='test'
              xs={12}
              md={6}
            >
              <Image
                src={dots}
                className='dotsIMG'
              />
              <Image
                src={project3}
                className='projectIMG'
              />
            </Col>
            <Col
              className='projectTextContainer'
              xs={12}
              md={6}
            >
              <div className='projectText'>
                <h2>Ett spännande project i samarbete med Skanska</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Magna id lobortis
                  sagittis massa morbi id hac id dui. Nulla a suspendisse
                  consectetur dui pharetra tellus diam ultrices dolor.{' '}
                </p>
                <ButtonQuote background={theme.colors.primaryColor}>
                  Begär offert
                </ButtonQuote>
              </div>
            </Col>
          </Row>
        </Grid>
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

          h4 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          h1 {
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
          padding: 50px 0;
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

        .serviceContainer {
          padding: 100px 0;
          background-color: #f9f9fb;
          h2 {
            font-weight: bold;
            font-size: 38px;
            text-align: center;
            margin: 15px 0px 35px 0px;
          }
        }

        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;
          height: 200px;
          padding: 20px 15px;
          box-shadow: 0px 20px 21px -13px #b25d43;

          @include mobile {
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
              rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            margin: 30px 0;
          }

          h2 {
            font-size: 32px;
            font-weight: bold;
            text-align: left;
          }

          span {
            position: relative;
            padding-right: 20px;
            text-align: right;

            cursor: pointer;

            a {
              color: ${theme.colors.primaryColor};
              text-decoration: none;
            }
          }
        }

        :global(.cardLinksIcon) {
          margin-top: 10px;
          position: absolute;
          right: 0px;
          bottom: 0px;
        }

        .eclips {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 100%;
          background-color: #fce5c4;
        }

        .projectsContainer {
          padding: 50px 0;
          margin: 100px 0;
          position: relative;
          h2 {
            font-weight: bold;
            font-size: 38px;
            text-align: left;
            margin: 15px 0px 35px 0px;
          }

          :global(.projectItem) {
            height: 100%;
            display: flex;
            align-items: stretch !important;
            padding: 50px 0;
            position: relative;
            border-bottom: solid 1px rgba(0, 0, 0, 0.2);

            :global(.test) {
            }

            :global(.projectIMG) {
              flex: 1;
              width: 100%;
              height: 100%;
              resizemode: stretch;
              position: relative;
              z-index: 100;
            }

            :global(.dotsIMG) {
              position: absolute;
              bottom: 30px;
              left: 0px;
              margin-left: -15px;
              z-index: 50;

              @include mobile {
                display: none;
              }
            }

            :global(.projectTextContainer) {
              position: relative !important;

              display: flex;
              align-items: stretch;

              .projectText {
                margin: 40px 0;
                position: relative !important;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: stretch;

                @include mobile {
                  align-items: center;
                }

                h2 {
                  font-size: 36px;
                  width: 60%;

                  @include mobile {
                    width: 100%;
                    text-align: center;
                  }
                }

                p {
                  font-size: 18px;
                  width: 60%;

                  @include mobile {
                    width: 100%;
                    margin-bottom: 20px;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
