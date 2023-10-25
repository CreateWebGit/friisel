import React from 'react';

const HeroContainer = ({ children, backgroundUrl, placement }) => {
  return (
    <>
      <div className='container'>
        <div className='filter'>{children}</div>
      </div>
      <style jsx>{`
        .filter {
          width: 100%;
          height: 80vh;

          background-color: rgba(0, 0, 0, 0.3);
          z-index: 999;
        }
        .container {
          height: 80vh;
          background: url(${backgroundUrl}) no-repeat ${placement} center;
          background-size: cover;
          z-index: 99;
        }
      `}</style>
    </>
  );
};

export default HeroContainer;
