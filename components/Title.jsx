import React from 'react';
import theme from '../styles/theme.js';

const Title = ({ text, align }) => {
  return (
    <div className='container'>
      <div className='rectangle'></div>
      <div className='text'>{text}</div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: ${align};
        }

        .rectangle {
          height: 10px;
          width: 10px;
          margin-right: 5px;
          background-color: ${theme.colors.primaryColor};
        }

        .text {
          font-size: 12px;
          color: ${theme.colors.primaryColor};
        }
      `}</style>
    </div>
  );
};

export default Title;
