import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './FooterSection.scss';
import { FOOTER } from 'constants/ui/sections/footerConsts';
import SocialMediaLinksBox from './social-media-links-box/SocialMediaLinksBox';

const FooterSection = () => {

  return (
    <footer>
      <Container fluid>
        <Row className="footer__upper">
          <Col>
            <h3>{FOOTER.upper.contact}</h3>
            <div>{FOOTER.upper.email}</div>
            <SocialMediaLinksBox />
          </Col>
        </Row>

        <Row className="footer__lower">
          <Col>
            {FOOTER.lower.author}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterSection;