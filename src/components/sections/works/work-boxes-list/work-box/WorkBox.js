import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Button } from 'react-bootstrap';

import './WorkBox.scss';
import { ReactComponent as GitHubIcon } from 'res/github.svg';
import { ReactComponent as PlayIcon } from 'res/play-button.svg';

const WorkBox = ({ workData }) => {
  const renderStacks = arr => arr.join(', ');

  return (
    <Col xs={12} md={6} xl={4} className="mb-5">
      <Card className="workbox h-100">
        <Card.Img className="p-3" variant="top" src={require("res/browser.svg")} height="80" width="100" />
        <Card.Body>
          <Card.Title>
            {workData.name}
          </Card.Title>
          <Card.Text>
            {workData.des}
          </Card.Text>
          <Card.Text className="blockquote-footer">
            {renderStacks(workData.stacks)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="secondary" className="mr-3">
            <PlayIcon className="play-icon mr-2" />
            <span>Demo</span>
          </Button>
          <Button variant="secondary">
            <GitHubIcon className="github-icon mr-2" />
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