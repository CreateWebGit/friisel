import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const ButtonQuote = ({ children, onClick, background }) => {
  return (
    <div>
      <div
        className={'button'}
        onClick={onClick}
      >
        {children}
        <IoIosArrowDroprightCircle
          className={'icon'}
          size={22}
        />
      </div>
      <style jsx>{`
        .button {
          display: inline-flex;
          align-items: center;
          padding: 12px 18px;
          border: 3px solid #fad59c;
          border-radius: 30px;
          background-color: ${background};
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }

        :global(.icon) {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
};

export default ButtonQuote;
