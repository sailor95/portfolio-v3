import React from 'react';
import { Row, Col } from 'react-bootstrap';

import classes from './LandingPage.module.css';
import LinksBox from './links-box/LinksBox';

const LandingPage = () => (
  <Row className="justify-content-center">
    <Col xs="auto" className={classes.headerBox}>
      <span className={classes.headerMain}>I am David Huang</span>
      <span className={classes.headerSub}>Web Full-stack / Tech geek / All sorts of arts</span>

      <LinksBox />
    </Col>
  </Row>
);

export default LandingPage;