import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Exp from './experience'

const Home = () => {
  return (
    <div className="container home">
      <div className="card about d-flex justify-content-center align-items-center m-2 bg-dark text-white">
        <h1>Hi, I'm ****</h1>
        <p>software developer at somewhere</p>
        <div>
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="card skills">
        <div className="card text-white" style={{ backgroundColor: '#00001C' }}>
          <h1>Skills</h1>
          <ul>
            <li>
              <h2>Front-End</h2>
              <span>React, Bootstrap, HTML</span>
            </li>
            <li>
              <h2>Back-End</h2>
              <span>Django, Nodejs</span>
            </li>
            <li>
              <h1>Languages</h1>
              <span>Python, Javascript, C++, C, Java</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card m-3">
        <div className="card p-2" style={{ fontFamily: 'sans-serif' }}>
          <h1 className="display-4">#DoHardThings</h1>
          <p className="lead">
            Embrace the challenge, let it fuel your growth,
            Break it down, tackle each part, own it both,<br />
            Seek guidance, learn from those who came before,
            Stay persistent, errors are chances to explore,<br />
            Remember your passion, why you code with might
            Believe in yourself, unleash your coding light,<br />
            Hard things are stepping stones, not walls to dread,
            In coding's realm, greatness lies ahead
          </p>
        </div>
      </div>
      <Exp />
    </div>
  );
}

export default Home;