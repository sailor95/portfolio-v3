import React from 'react';

import classes from './LinksBox.module.css';
import { ReactComponent as GitHubLogo } from 'res/github.svg';
import { ReactComponent as LinkedInLogo } from 'res/linkedin.svg';
import { ReactComponent as MediumLogo } from 'res/medium.svg';

const LinksBox = () => (
  <div>
    <a
      href="https://github.com/sailor95"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className={classes.linksBoxSvg} alt="github" />
    </a>
    <a
      href="https://www.linkedin.com/in/tsung-wei-huang-217561179/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInLogo className={classes.linksBoxSvg} alt="linkedin" />
    </a>
    <a
      href="https://medium.com/sailor-spaceship"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MediumLogo className={classes.linksBoxSvg} alt="medium" />
    </a>
  </div>
);

export default LinksBox;