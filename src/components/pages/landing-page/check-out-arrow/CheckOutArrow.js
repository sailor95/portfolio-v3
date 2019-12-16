import React from 'react';

import './CheckOutArrow.scss';
import { ReactComponent as DownArrow } from 'res/down-arrow.svg';

const CheckOutArrow = () => (
  <div className="check-out-box">
    <span className="check-out-box__des">Check out my works</span>
    <DownArrow className="check-out-box__down-arrow" alt="down-arrow" />
  </div>
);

export default CheckOutArrow;