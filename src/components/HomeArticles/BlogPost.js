 
// HomeArticles.js
import React from 'react';
// import HomeArticle from './HomeArticle';
import img11 from "../../imgs/img/11.svg"
// import img1 from "../../imgs/img/1.png"
// import img2 from "../../imgs/img/2.png"
 

// BlogPost.js
 
function BlogPost({ blog }) {
  return (
    <div className={`post-box {category}`}>
      <img src = {blog.blogImg} className="post-img" alt="" />
      <h1 className="category">Music</h1>
      <span className="post-title">{blog.title}</span>
      <span className="post-data">{blog.date}</span>
      <p className="post-description">{blog.description}</p>
      <div className="profile">
        <img src={blog.authorImg} className="profile-img" alt="" />
        <span className="profile-name">{blog.author}</span>
      </div>
    </div>
  );
}

export default BlogPost;

