// SinglePostPage.js

import React from 'react';
import BlogPost from './BlogPost';

const SinglePostPage = () => {
  // Fetch single blog post data
  const blogPostData = {
    title: 'Example Blog Post',
    content: 'This is the content of the example blog post.',
    author: 'John Doe',
    date: 'February 29, 2024',
    // Add more properties as needed
  };

  return (
    <div className="single-post-page">
      <BlogPost {...blogPostData} />
    </div>
  );
}

export default SinglePostPage;



