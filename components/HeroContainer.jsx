import React from 'react';

const HeroContainer = ({
  children,
  backgroundUrl,
  placement,
  filter,
  height,
}) => {
  return (
    <>
      <div className='container'>
        <div className='filter'>{children}</div>
      </div>
      <style jsx>{`
        .filter {
          width: 100%;
          display: flex;
          align-items: center;

          height: ${height};

          background-color: ${filter};
          z-index: 999;
        }
        .container {
          height: ${height};
          background: url(${backgroundUrl}) no-repeat ${placement} center;
          background-size: cover;
          z-index: 99;
        }
      `}</style>
    </>
  );
};

export default HeroContainer;
