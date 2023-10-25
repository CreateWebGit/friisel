'use client';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroContainer from './../../components/HeroContainer';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import theme from './../../styles/theme';
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

export default function Om() {
  const [isActivelinks, setActivelinks] = useState('');

  const router = useRouter();
  const path = router.path;

  return (
    <div className='container'>
      <HeroContainer
        backgroundUrl='../images/about/aboutHead.jpg'
        placement='top'
      >
        <Navbar mypath={path} />
      </HeroContainer>
      <div className='main'>
        <ThemeProvider theme={mytheme}>
          <Grid>
            <h1>Om oss</h1>
            <p>Vi levererar de bästa av de bästa!</p>
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
        .container {
        }

        .main {
          height: 80vh;

          h1 {
            font-size: 34px;
          }

          p {
            font-size: 20px;
          }
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
}
