'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import ButtonQuote from '../components/ButtonQuote';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroContainer from '../components/HeroContainer';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import theme from '../styles/theme';
import solutionIMG from '../images/index/Solutions_images.png';
//import myIcon from 'images/icons/dialogue.png';

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
      >
        <Navbar />
        haha
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
                  Be om offert
                </ButtonQuote>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
            >
              <Image
                src={solutionIMG}
                width={433}
                height={535}
                className='solutionImage'
              />
            </Col>
          </Row>
        </Grid>
      </section>
      <section className='serviceContainer'>
        <Title
          text={'Vår service'}
          align={'center'}
        />
        <h2>Våra EL Lösningar</h2>
        <Grid>
          <Row around='sm'>
            <Col
              xs={12}
              sm={3}
              md={3}
            >
              <div className='card'>
                <div className='eclips'>
                  <Image
                    src='/images/icons/dialogue.png'
                    width='29'
                    height='29'
                  />
                </div>
                <h2>Commercial Electrical Installations</h2>
                <p>
                  Welcome to Friis El - Where Excellence in Electrical Services
                  Meets Your Business Goals!"
                </p>
                <span>Läs mer</span>
              </div>
            </Col>
            <Col
              xs={12}
              sm={3}
              md={3}
            >
              <div className='card'>
                <div className='eclips'>
                  <Image
                    src='/images/icons/dialogue.png'
                    width='29'
                    height='29'
                  />
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={3}
              md={3}
            >
              <div className='card'>
                <div className='eclips'>
                  <Image
                    src='/images/icons/dialogue.png'
                    width='29'
                    height='29'
                  />
                </div>
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

        .solutionImage {
          @include mobile {
            margin: 0 auto;
            width: 250px;
          }
        }

        .serviceContainer {
          padding: 50px 0;
          background-color: #f9f9fb;
          h2 {
            font-weight: bold;
            font-size: 38px;
            text-align: center;
            margin: 15px 0;
          }
        }

        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;
          height: 300px;
          padding: 20px 15px;
          box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
            rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

          h2 {
            font-size: 20px;
            font-weight: bold;
            text-align: left;
          }

          span {
            text-align: center;
          }
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
      `}</style>
    </div>
  );
}
