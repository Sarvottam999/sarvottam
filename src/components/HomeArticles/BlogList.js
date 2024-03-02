 // BlogList.js
import React from 'react';
import BlogPost from './BlogPost';
import { useSelector } from 'react-redux';

import { selectAllBlogs } from '../../redux/reduces/blogSlice';
import { Divider, WelcomeContent } from './WelcomNote';
import Title from './title';

function BlogList() {
  // Assuming you have blog data in an array
  const blogs = useSelector(selectAllBlogs);


  return (
    <div>
      <Title/>
      <WelcomeContent/>
      <Divider />



<section className="post container max-width-2 m-auto mt">
      {blogs.map((blog, index) => (
        <BlogPost
        key={blog.id} blog={blog}
        />
      ))}
    </section>

    </div>
   
  );
}

export default BlogList;
