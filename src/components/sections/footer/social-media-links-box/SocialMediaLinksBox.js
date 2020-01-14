import React from 'react';

import './SocialMediaLinksBox.scss';
import { ReactComponent as GitHubLogo } from 'res/github.svg';
import { ReactComponent as LinkedInLogo } from 'res/linkedin.svg';
import { ReactComponent as MediumLogo } from 'res/medium.svg';

const SocialMediaLinksBox = () => (
  <>
    <a
      className="socialLinkAnchor"
      href="https://github.com/sailor95"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className="socialLinkSvg" alt="github" />
    </a>
    <a
      className="socialLinkAnchor"
      href="https://www.linkedin.com/in/tsung-wei-huang-217561179/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInLogo className="socialLinkSvg" alt="linkedin" />
    </a>
    <a
      className="socialLinkAnchor"
      href="https://medium.com/sailor-spaceship"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MediumLogo className="socialLinkSvg" alt="medium" />
    </a>
  </>
);

export default SocialMediaLinksBox;