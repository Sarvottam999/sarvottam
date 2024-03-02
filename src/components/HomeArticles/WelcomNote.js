import React from 'react';
import banner from "../../imgs/img/7248468_3585693.svg"


function WelcomeContent() {
  return (
    <div className="m-auto content max-width-1 my-2">
      <div className="content-left">
        <h1>Welcome to my blog</h1>
        <p>
          I believe that learning is a lifelong journey, and every day presents an opportunity to expand our knowledge and skills. My mission is to curate and share valuable resources that we encounter in our daily learning endeavors, empowering you to grow personally and professionally.
        </p>
        <p>
          Whether you're passionate about Programming, Reading, my platform is your go-to destination for insightful articles, tutorials, videos, podcasts, and more.
        </p>
      </div>
      <div className="content-right">
        <img src={banner} alt="iBlog" />
      </div>
    </div>
  );
}

function Divider() {
  return <div className="max-width-1 m-auto"><hr /></div>;
}

export { WelcomeContent, Divider };
