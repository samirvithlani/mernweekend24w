import React from "react";
//<link rel stylesheet href="path">
import "../assets/css/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{marginBottom:"20px"}}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                NETFLIX Home 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                NETFLIX SHOWS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                FORM DEMO 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                FORM DEMO 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                API DEMO 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/omdb">
                OMDB
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
