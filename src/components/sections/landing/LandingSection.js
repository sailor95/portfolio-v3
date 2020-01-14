import React from 'react';

import './LandingSection.scss';
import { LANDING } from 'constants/ui/sections/landingConsts';
import LinksBox from './links-box/LinksBox';
import CheckOutArrow from './check-out-arrow/CheckOutArrow';

const LandingSection = () => (
  <div className="landing-section">
    <div className="header">
      <span className="header__main">{LANDING.header.main}</span>
      <span className="header__sub">{LANDING.header.sub}</span>
      <LinksBox />
    </div>

    <CheckOutArrow />
  </div>
);

export default LandingSection;