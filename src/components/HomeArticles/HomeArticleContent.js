// HomeArticleContent.js
import React from 'react';

function HomeArticleContent({ title, author, date }) {
  return (
    <div className="home-article-content font1 center">
      <a href="/blogpost.html"><h3>{title}</h3></a>
      <div>{author}</div>
      <span>{date}</span>
    </div>
  );
}

export default HomeArticleContent;
