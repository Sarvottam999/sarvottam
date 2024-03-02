import logo from './logo.svg';
import './css/App.css';
import './css/utils.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppBar from './components/AppBar';
import BlogList from './components/HomeArticles/BlogList';
// import PostFilter from './components/HomeArticles/PostFilter';
// import { Divider, WelcomeContent } from './components/HomeArticles/WelcomNote';
import Footer from './components/Footer';
// import Layout from './Layout';
import About from './components/about.js';
 
function App() {
  return (
    <div className="App">
      {/* 
      <WelcomeContent />
      <Divider />
      <PostFilter/>
      
     */}
      <AppBar/>
       {/* <BrowserRouter basename='/sarvottam'> */}
      <Routes>
        {/* <Route path="/" element={}> */}
        <Route exact path="/" element={<BlogList/>} ></Route>
        <Route path="/about" element={<About />} />


          {/* <Route index element={<Home />} />
          // <Route path="About" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    {/* </BrowserRouter> */}
    <Footer/> 

      {/* <Blogs/> */}
     
    </div>
  );
}

export default App;
