import React from 'react';
import PropTypes from 'prop-types';

import './WorkBoxesList.scss';
import WorkBox from './work-box/WorkBox';

const WorkBoxesList = ({ worksData }) => {
  const renderWorkBoxes = works => works.map(w => (
    <WorkBox key={w.id} workData={w} />
  ));

  return (
    <div className="work-boxes-list">
      <div className="row">
        {renderWorkBoxes(worksData)}
      </div>
    </div>
  );
};

WorkBoxesList.propTypes = {
  worksData: PropTypes.array.isRequired
};

export default WorkBoxesList;