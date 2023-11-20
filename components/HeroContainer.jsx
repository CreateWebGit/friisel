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
        //prettier-ignore
        @mixin mobile {
          @media (max-width: 850px) {
            @content
          }
        }
        .filter {
          width: 100%;
          display: flex;
          align-items: center;

          height: ${height};

          background-color: ${filter};
          z-index: 999;
          @include mobile {
            align-items: center;
          }
        }
        .container {
          height: ${height};
          background: url(${backgroundUrl}) no-repeat ${placement} center;
          background-size: cover;
          z-index: 99;
          @include mobile {
          }
        }
      `}</style>
    </>
  );
};

export default HeroContainer;
