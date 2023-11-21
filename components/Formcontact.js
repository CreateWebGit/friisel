import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { ThemeProvider } from 'styled-components';
import ButtonQuote from '../components/ButtonQuote';
import theme from '../styles/theme';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const mytheme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 2, // rem
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

const Formcontact = () => {
  return (
    <>
      <ThemeProvider theme={mytheme}>
        <Grid>
          <div className='formContainer'>
            <form className='form'>
              <Row>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='styledInput'>
                    <input
                      className='input'
                      type='text'
                      name='user_name'
                      placeholder=' '
                      required
                    />
                    <label className='label'>Namn:</label>
                    <div className='line'></div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='styledInput'>
                    <input
                      className='input'
                      type='text'
                      name='user_name'
                      placeholder=' '
                      required
                    />
                    <label className='label'>Företag:</label>
                    <div className='line'></div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='styledInput'>
                    <input
                      className='input'
                      type='text'
                      name='user_name'
                      placeholder=' '
                      required
                    />
                    <label className='label'>Epost:</label>
                    <div className='line'></div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={6}
                >
                  <div className='styledInput'>
                    <input
                      className='input'
                      type='text'
                      name='user_name'
                      placeholder=' '
                      required
                    />
                    <label className='label'>Telefon:</label>
                    <div className='line'></div>
                  </div>
                </Col>
              </Row>
              <div className='styledInput'>
                <textarea
                  className='textarea'
                  name='message'
                  rows='4'
                  required
                />
                <label className='label'>Meddelande:</label>
                <div className='line'></div>
              </div>
              <div className='submitContainer'>
                <div className={'button'}>
                  <input
                    type='submit'
                    value='Skicka'
                  />
                  <IoIosArrowDroprightCircle
                    className={'icon'}
                    size={22}
                  />
                </div>
              </div>
            </form>
          </div>
        </Grid>
      </ThemeProvider>

      <style jsx>{`
        .button {
          display: inline-flex;
          align-items: center;
          padding: 12px 18px;
          border: 3px solid #fad59c;
          border-radius: 30px;
          background-color: ${theme.colors.primaryColor};
          color: #fff;
          font-size: 18px;
        }

        :global(.icon) {
          margin-left: 10px;
        }
        .formContainer {
          background-color: #f5f5f5;
          padding: 40px;
        }
        .form {
          position: relative;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          font-size: 16px;
          fieldset {
            position: relative;
          }

          input {
            height: 35px;
            outline: none;
            background-color: #fff;
          }

          label {
            color: #999;
            position: absolute;
            top: 3px;
            left: 3px;
            font-size: 1.2em;
            font-weight: 500;
            webkit-transition: all 0.15s ease-in-out;
            moz-transition: all 0.15s ease-in-out;
            transition: all 0.15s ease-in-out;
            pointer-events: none;
          }

          input[type='submit'] {
            position: realative;

            background-color: ${theme.colors.primaryColor};

            color: #fff;
            border: 0px solid #fff;
            float: right;
            font-size: 16px;
            cursor: pointer;
          }
        }

        .styledInput {
          width: 100%;
          position: relative;
          margin-bottom: 50px;
          input[type='text'],
          input[type='email'],
          textarea {
            background-color: #fff;
            margin-right: 0px;
            webkit-appearance: none;
            moz-appearance: none;
            ms-appearance: none;
            o-appearance: none;
            appearance: none;
            webkit-transition: all 0.2s ease-in-out;
            moz-transition: all 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
            border: none;
            border-bottom: 1px solid #000;
            padding: 0.3em 0.5em 0.2em 0em;
            text-decoration: none;
            outline: 0;
            line-height: 1em;
            margin: 0px;
            width: 100%;
            font-size: 1.4em;
            font-weight: 400;
            color: black;
          }

          input:focus ~ label,
          input[type='text']:valid ~ label,
          input:not(:placeholder-shown) ~ label,
          textarea:focus ~ label,
          textarea:valid ~ label {
            top: -15px;
            position: absolute;
            font-size: 1em;
            webkit-transition: all 0.3s ease-in-out;
            moz-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          input[type='text']:focus ~ div,
          input[type='email']:focus ~ div,
          textarea:focus ~ div {
            width: 100%;
            webkit-transition: all 0.5s ease-in-out;
            moz-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
          }
          input[type='text']:focus,
          input[type='email']:focus,
          textarea:focus {
            border-bottom-width: 0px;
          }
          div {
            height: 2px;
            width: 0%;
            background-color: #316aff;
            position: absolute;
            bottom: 0px;
          }
        }
        .submitContainer {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Formcontact;
