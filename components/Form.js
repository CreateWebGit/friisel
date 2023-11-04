import React, { useRef, useState } from 'react';

const Form = () => {
  const [isCustomer, setCustomer] = useState('ja');
  return (
    <>
      <div>
        <form className='form'>
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
          <div className='styledInput'>
            <input
              className='input'
              type='text'
              name='user_phone'
              placeholder=' '
              required
            />
            <label className='label'>Telefon:</label>
            <div className='line'></div>
          </div>
          <div className='styledInput'>
            <input
              className='input'
              type='email'
              name='user_email'
              placeholder=' '
              required
            />
            <label className='label'>Epost:</label>
            <div className='line'></div>
          </div>
          <div className='ifCustomerContainer'>
            <p>Tidigare kund hos oss?</p>
            <div className='ifCustomerWrapper'>
              <input
                onClick={() => setCustomer('ja')}
                type='radio'
                id='html'
                name='fav_language'
                value='ja'
              />
              <label
                className='ifCustomerLabel'
                for='html'
              >
                Ja
              </label>
              <input
                onClick={() => setCustomer('nej')}
                type='radio'
                id='css'
                name='fav_language'
                value='nej'
              />
              <label
                className='ifCustomerLabel'
                for='css'
              >
                Nej
              </label>
            </div>
          </div>
          <div className='noneCustomerContainer'>
            <div className='styledInput'>
              <input
                className='input'
                type='text'
                name='user_phone'
                placeholder=' '
                required
              />
              <label className='label'>Adress:</label>
              <div className='line'></div>
            </div>
            <div className='adressContainer'>
              <div className='styledInput'>
                <input
                  className='input'
                  type='text'
                  name='user_phone'
                  placeholder=' '
                  required
                />
                <label className='label'>Postnummer:</label>
                <div className='line'></div>
              </div>
              <div className='styledInput'>
                <input
                  className='input'
                  type='text'
                  name='user_phone'
                  placeholder=' '
                  required
                />
                <label className='label'>Ort:</label>
                <div className='line'></div>
              </div>
            </div>
            <div className='styledInput'>
              <input
                className='input'
                type='text'
                name='user_phone'
                placeholder=' '
                required
              />
              <label className='label'>Organisations Nr:</label>
              <div className='line'></div>
            </div>
          </div>
          <div className='styledInput'>
            <textarea
              className='textarea'
              name='message'
              required
            />
            <label className='label'>Beskrivning:</label>
            <div className='line'></div>
          </div>
          <div className='submitContainer'>
            <input
              type='submit'
              value='Send'
            />
          </div>
        </form>
      </div>
      <style jsx>{`
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
            background-color: transparent;
          }

          label {
            color: #999;
            position: absolute;
            top: 0px;
            left: 0px;
            font-size: 1.2em;
            font-weight: 500;
            webkit-transition: all 0.15s ease-in-out;
            moz-transition: all 0.15s ease-in-out;
            transition: all 0.15s ease-in-out;
            pointer-events: none;
          }

          input[type='submit'] {
            position: realative;
            width: 150px;
            margin: 20px 20px 0 0;
            background-color: #316aff;
            border-radius: 15px;
            color: #fff;
            border: 1px solid #fff;
            float: right;
          }
        }

        .ifCustomerContainer {
          p {
            color: #999;
            font-size: 1.2em;
            font-weight: 500;
            margin-top: 10px;
          }
        }

        .ifCustomerWrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ifCustomerLabel {
          position: relative !important;
          margin-right: 15px;
        }

        .noneCustomerContainer {
          height: 0px;
          padding-left: 50px;
          overflow: hidden;
          min-height: ${isCustomer === 'ja' ? '0px' : '300px'};
          transition: all 0.3s;

          .adressContainer {
            display: flex;
          }
        }

        .styledInput {
          width: 100%;
          position: relative;
          margin-top: 20px;

          input[type='text'],
          input[type='email'],
          textarea {
            background-color: transparent;
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
          float: right;
        }
      `}</style>
    </>
  );
};

export default Form;
