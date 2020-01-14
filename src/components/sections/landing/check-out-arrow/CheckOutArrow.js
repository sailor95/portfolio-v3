import React from 'react';
import { Link } from 'react-scroll';

import './CheckOutArrow.scss';
import { LANDING } from 'constants/ui/sections/landingConsts';
import { ReactComponent as DownArrow } from 'res/down-arrow.svg';

const CheckOutArrow = () => (
  <Link className="check-out-box" to="works-section" smooth={true} duration={500}>
    <span className="check-out-box__des">{LANDING.checkout.des}</span>
    <DownArrow className="check-out-box__down-arrow" alt="down-arrow" />
  </Link>
);

export default CheckOutArrow;