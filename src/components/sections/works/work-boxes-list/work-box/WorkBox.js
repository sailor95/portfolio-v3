import React from 'react';
import PropTypes from 'prop-types';

import './WorkBox.scss';
import { ReactComponent as GitHubIcon } from 'res/github.svg';
import { ReactComponent as PlayIcon } from 'res/play-button.svg';

const WorkBox = ({ workData }) => {
  const renderStacks = arr => arr.map(a => (
    <div>{a}</div>
  ));

  return (
    <div className="col-1-of-3">
      <div className="work-box">
        <div className="work-box__title">
          {workData.name}
        </div>
        <div className="work-box__detail">
          <div className="work-box__stacks">
            {renderStacks(workData.stacks)}
          </div>
          <div className="work-box__links">
            <div className="work-box__links--demo">
              <PlayIcon className="play-icon" />
              <span>Demo</span>
            </div>
            <div className="work-box__links--github">
              <GitHubIcon className="github-icon" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkBox.propTypes = {
  workData: PropTypes.object.isRequired
};

export default WorkBox;