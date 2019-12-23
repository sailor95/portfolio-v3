import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Button } from 'react-bootstrap';

import './WorkBox.scss';
import { ReactComponent as GitHubIcon } from 'res/github.svg';
import { ReactComponent as PlayIcon } from 'res/play-button.svg';

const WorkBox = ({ workData }) => {
  const renderStacks = arr => arr.map(a => (
    <div>{a}</div>
  ));

  return (
    <Col sm={12} md={4}>
      <Card className="workbox">
        <Card.Header>
          {workData.name}
        </Card.Header>
        <Card.Body>
          {renderStacks(workData.stacks)}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-around">
          <Button variant="secondary">
            <PlayIcon className="play-icon mr-3" />
            <span>Demo</span>
          </Button>
          <Button variant="secondary">
            <GitHubIcon className="github-icon mr-3" />
            <span>GitHub</span>
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

WorkBox.propTypes = {
  workData: PropTypes.object.isRequired
};

export default WorkBox;