import React from 'react';

import './LinksBox.scss';
import { ReactComponent as GitHubLogo } from 'res/github.svg';
import { ReactComponent as LinkedInLogo } from 'res/linkedin.svg';
import { ReactComponent as MediumLogo } from 'res/medium.svg';

const LinksBox = () => (
  <>
    <a
      className="linkBoxAnchor"
      href="https://github.com/sailor95"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className="linksBoxSvg" alt="github" />
    </a>
    <a
      className="linkBoxAnchor"
      href="https://www.linkedin.com/in/tsung-wei-huang-217561179/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInLogo className="linksBoxSvg" alt="linkedin" />
    </a>
    <a
      className="linkBoxAnchor"
      href="https://medium.com/sailor-spaceship"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MediumLogo className="linksBoxSvg" alt="medium" />
    </a>
  </>
);

export default LinksBox;