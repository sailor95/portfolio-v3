import React from 'react';

import './LandingSection.scss';
import LinksBox from './links-box/LinksBox';
import CheckOutArrow from './check-out-arrow/CheckOutArrow';

const LandingSection = () => (
  <div className="landingPage">
    <div className="header">
      <span className="header__main">I am David Huang</span>
      <span className="header__sub">Web full-stack / Tech geek / All sorts of arts</span>
      <LinksBox />
    </div>

    <CheckOutArrow />
  </div>
);

export default LandingSection;