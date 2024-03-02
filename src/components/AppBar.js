// AppBar.js
import React from 'react';
import logo from "../imgs/img/logo.svg"


function AppBar() {
  return (
   <>
    <nav className="navigation max-width-1 m-auto">
        <div className="nav-left">
            <a href="/">
                <span><img src={logo}  alt=""/></span>
            </a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </div>
        <div className="nav-right">
            <form action="/search.html" method="get">
                <input className="form-input" type="text" name="query" placeholder="Article Search"/>
                <button className="btn">Search</button>
            </form>

        </div>

    </nav>
    <hr className="nav-divider"></hr>
   </>
  );
}

export default AppBar;
