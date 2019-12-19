import React from 'react';

import './WorksSection.scss';
import WorkBoxesList from './work-boxes-list/WorkBoxesList';

const tempWorksData = [
  {
    id: 1,
    name: 'This Portfolio',
    stacks: ['React', 'SCSS', 'Azure'],
    demoLink: "",
    github: ""
  },
  {
    id: 2,
    name: 'Hacker News SPA',
    stacks: ['React', 'Redux', 'CSS Module', 'GCP'],
    demoLink: "",
    github: ""
  },
  {
    id: 3,
    name: 'Unit Test Project',
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