import React from 'react';
import './styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <CutoutTextLoader
        height="100vh"
        imgUrl="https://res.cloudinary.com/dwcxwpn7q/image/upload/v1734466121/zade/808277497809506964_kikpql.png" // Replace with your background image URL
      />
    </div>
  );
};

const CutoutTextLoader = ({ height, imgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 animate-pulse z-10"
        style={{ backgroundColor: '#ffffff' }} // Optional, can be adjusted or removed
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
