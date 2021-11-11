import React from 'react';
import {
  Col, Row, Card, ListGroup,
} from 'react-bootstrap';

export default function Profile() {
  return (
    <div>
      <Row>
        <Col className="m-4">
          <h2>My Missions</h2>
          <Card className="mt-4">
            <ListGroup variant="flush">
              <ListGroup.Item className="p-4">Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col className="m-4">
          <h2>My Rockets</h2>
          <Card className="mt-4">
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
