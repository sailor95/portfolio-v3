import React from 'react';
import PropTypes from 'prop-types';

import './WorkBox.scss';

const WorkBox = ({ workData }) => {
  const renderStacks = arr => arr.map(a => (
    <div>{a}</div>
  ));

  return (
    <div className="col-1-of-4">
      <div className="work-box">
        <div className="work-box__title">
          {workData.name}
        </div>
        <div className="work-box__stacks">
          {renderStacks(workData.stacks)}
        </div>
      </div>
    </div>
  );
};

WorkBox.propTypes = {
  workData: PropTypes.object.isRequired
};

export default WorkBox;