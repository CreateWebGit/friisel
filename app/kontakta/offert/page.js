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

const mytheme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
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
        backgroundUrl='../images/offert/head.jpg'
        placement='top'
        filter={'rgba(0, 0, 0, 0.6)'}
        height={'80vh'}
      >
        <Navbar mypath={path} />
        <div className='heroWrapper'>
          <h1>BEGÄR OFFERT</h1>
        </div>
      </HeroContainer>
      <div className='main'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <Title
              className='solutionTitle'
              text={'OFFERT'}
            />

            <h1>Begär kostnadsfri offert</h1>
            <p>
              Vårt erfarna team är alltid redo att hjälpa dig med dina elbehov
              och vi strävar alltid efter att erbjuda den bästa servicen och
              kvaliteten.
            </p>
            <Row>
              <Col
                xs={12}
                md={4}
              ></Col>
            </Row>
          </Grid>
        </ThemeProvider>
      </div>
      <div className='formContainer'>
        <div className='formContainerFilter'>
          <div className='formWrapper'>
            <Form />
          </div>
        </div>
      </div>

      <style jsx>{`
        //prettier-ignore
        @mixin mobile {
          @media (max-width: 850px) {
            @content
          }
        }

        .main {
          padding: 0 50px;
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
            @include mobile {
              font-size: 60px;
            }
          }
        }

        .main {
          padding: 80px 0;
          h1 {
            font-size: 34px;
            margin-top: 10px;
          }

          p {
            font-size: 20px;
            margin: 25px 0;
          }
        }

        .formContainer {
          background-image: url(${bg.src});

          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
        }

        .formContainerFilter {
          background-color: rgba(0, 0, 0, 0.6);
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .formWrapper {
          width: 70%;
          margin: 50px 50px;
          padding: 50px;
          background-color: #fff;
          opacity: 0.9;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
