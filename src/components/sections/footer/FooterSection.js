import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './FooterSection.scss';
import SocialMediaLinksBox from 'components/links/social-media-links-box/SocialMediaLinksBox';

const FooterSection = () => {

  return (
    <footer>
      <Container fluid>
        <Row className="footer__upper">
          <Col>
            <h3>Contact</h3>
            <div>bugman195.work@gmail.com</div>
            <SocialMediaLinksBox />
          </Col>
        </Row>
        <Row className="footer__lower">
          <Col>
            Built by &copy; David Huang
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;