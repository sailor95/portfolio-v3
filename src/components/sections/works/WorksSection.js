import React from 'react';

import './WorksSection.scss';
import WorkBoxesList from './work-boxes-list/WorkBoxesList';

const tempWorksData = [
  {
    id: 1,
    name: 'This Portfolio',
    des: 'This SPA web page.',
    stacks: ['React', 'SCSS', 'Azure'],
    demoLink: "",
    github: ""
  },
  {
    id: 2,
    name: 'Hacker News SPA',
    des: 'An SPA fetching Hacker News API and sort into list view.',
    stacks: ['React', 'Redux', 'CSS Module', 'GCP'],
    demoLink: "",
    github: ""
  },
  {
    id: 3,
    name: 'Unit Test Project',
    des: 'An unit test porject using Jest and Enzyme to simulate front-end behavior.',
    stacks: ['Jest', 'Enzyme', 'ESLint'],
    demoLink: "",
    github: ""
  },
  {
    id: 1,
    name: 'This Portfolio',
    des: 'This SPA web page.',
    stacks: ['React', 'SCSS', 'Azure'],
    demoLink: "",
    github: ""
  },
  {
    id: 2,
    name: 'Hacker News SPA',
    des: 'An SPA fetching Hacker News API and sort into list view.',
    stacks: ['React', 'Redux', 'CSS Module', 'GCP'],
    demoLink: "",
    github: ""
  },
  {
    id: 3,
    name: 'Unit Test Project',
    des: 'An unit test porject using Jest and Enzyme to simulate front-end behavior.',
    stacks: ['Jest', 'Enzyme', 'ESLint'],
    demoLink: "",
    github: ""
  }
];

const WorksSection = () => (
  <div className="works-section">
    <div className="works-section__header">
      My Works
    </div>

    <WorkBoxesList worksData={tempWorksData} />
  </div>
);

export default WorksSection;