// reducers/blogsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [
    {
      id: 1,
      blogImg : "img/i.jpg",

      title: "Getting Started with React Getting Started with React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitSed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      author: "John Doe",
      publication_date: "2024-02-29",
      tags: ["React", "JavaScript", "Frontend"],
      authorImg: "img/1.png",

    },
    
    {
      id: 2,
      blogImg : "img/i.jpg",
      title: "State Management in React with Redux",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      author: "Jane Smith",
      authorImg: "img/p.jpg",

      publication_date: "2024-02-28",
      tags: ["React", "Redux", "State Management"]
    },
    {
      id: 3,
      blogImg : "img/i.jpg",

      title: "Building RESTful APIs with Node.js and Express",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisSed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      author: "Alice Johnson",
      authorImg: "img/1.png",

      publication_date: "2024-02-27",
      tags: ["Node.js", "Express", "Backend"]
    },
    {
      id: 4,
      blogImg : "img/i.jpg",

      title: "Getting Started with React Getting Started with React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitSed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      author: "John Doe",
      publication_date: "2024-02-29",
      tags: ["React", "JavaScript", "Frontend"],
      authorImg: "img/1.png",

    },
  ],
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
});

export const selectAllBlogs = (state) => state.blogs.blogs;

export default blogsSlice.reducer;
