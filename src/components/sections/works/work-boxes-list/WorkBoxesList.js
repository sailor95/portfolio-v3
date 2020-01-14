import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

import './WorkBoxesList.scss';
import WorkBox from './work-box/WorkBox';

const WorkBoxesList = ({ worksData }) => {
  const renderWorkBoxes = works => works.map(w => (
    <WorkBox key={w.id} workData={w} />
  ));

  return (
    <Row className="m-5">
      {renderWorkBoxes(worksData)}
    </Row>
  );
};

WorkBoxesList.propTypes = {
  worksData: PropTypes.array.isRequired
};

export default WorkBoxesList;