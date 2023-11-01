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
        backgroundUrl='../images/offert/head.jpg'
        placement='top'
        filter={'rgba(0, 0, 0, 0.6)'}
      >
        <Navbar mypath={path} />
        <div className='heroWrapper'></div>
      </HeroContainer>
      <div className='main'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <h1>
              Vi tillhandahåller all slags el service till små- och medelstora
              företag, samt privatpersoner
            </h1>

            <Row>
              <Col
                xs={12}
                md={4}
              ></Col>
            </Row>
          </Grid>
        </ThemeProvider>
      </div>

      <style jsx>{`
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

        .main {
          padding: 80px 0;
          h1 {
            font-size: 34px;
          }

          p {
            font-size: 20px;
            margin: 25px 0;
          }
        }
      `}</style>
    </div>
  );
}
