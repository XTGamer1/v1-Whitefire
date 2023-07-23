import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg py-2 ">
      <div class="container">
        <Link class="navbar-brand fs-4 text-purple-700  " to="/">
          WhiteFireCode
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link cursor-pointer hover:border-b-2 hover:border-purple-700 active:border-b-4"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blogs">
                Link
              </Link>
            </li>
            <button class="btn custom-button">Sign In</button>
          </ul>
        </div>
      </div>
    </nav>
    
    
  );
}
