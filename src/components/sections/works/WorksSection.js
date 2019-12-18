import React from 'react';

import './WorksSection.scss';
import WorkBoxesList from './work-boxes-list/WorkBoxesList';

const tempWorksData = [
  {
    id: 1,
    name: 'This Portfolio',
    stacks: ['React', 'SCSS', 'Azure']
  },
  {
    id: 2,
    name: 'Hacker News SPA',
    stacks: ['React', 'Redux', 'CSS Module', 'GCP']
  },
  {
    id: 3,
    name: 'Unit Test Project',
    stacks: ['Jest', 'Enzyme', 'ESLint']
  },
  {
    id: 4,
    name: 'SCSS Web Store',
    stacks: ['SASS/SCSS', 'Webpack', 'Babel']
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