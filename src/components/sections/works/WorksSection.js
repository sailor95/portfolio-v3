import React from 'react';

import './WorksSection.scss';
import { WORKS } from 'constants/ui/sections/worksConsts';
import WorkBoxesList from './work-boxes-list/WorkBoxesList';
import { tempWorksData } from 'constants/ui/mockDataConsts';

const WorksSection = () => (
  <div className="works-section" id="works-section">
    <div className="works-section__header">{WORKS.header}</div>

    <WorkBoxesList worksData={tempWorksData} />
  </div>
);

export default WorksSection;