import React from 'react';

import './LandingPage.scss';
import LinksBox from './links-box/LinksBox';

const LandingPage = () => (
  <div className="landingPage">
    <div className="headerBox">
      <span className="headerMain">I am David Huang</span>
      <span className="headerSub">Web Full-stack / Tech geek / All sorts of arts</span>

      <LinksBox />
    </div>
  </div>
);

export default LandingPage;