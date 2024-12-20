import React from 'react';
import './styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <CutoutTextLoader
        height="100vh"
        imgUrl="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734601339/zade/808867832474604375_urxq7d.png" // Desktop image URL
        mobileImgUrl="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734603222/zade/808870692922608083_gqsynv.png" // Mobile image URL
      />
    </div>
  );
};

const CutoutTextLoader = ({ height, imgUrl, mobileImgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0 desktop-img"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-0 mobile-img"
        style={{
          backgroundImage: `url(${mobileImgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 animate-pulse z-10"
        style={{ backgroundColor: '#ebebeb' }} // Optional, can be adjusted or removed
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          lineHeight: height,
          fontFamily: 'main',
          fontWeight: 'bold'
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;
