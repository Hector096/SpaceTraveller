import React from 'react';
import {
  Card, Button, Col, Badge,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocket';
import './App.css';

export default function Rocket(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const toggleClick = () => {
    dispatch(reserveRocket(data.id));
  };
  return (
    <div>
      <Card className="m-4 d-flex flex-row p-2">
        <Col className="col-3"><Card.Img variant="bottom" className="p-2" src={data.images[0]} /></Col>
        <Card.Body>
          <Card.Title>{data.rocketName}</Card.Title>
          <Card.Text>
            {' '}
            {data.reserved ? <Badge bg="success">Reserved</Badge> : <></>}
            {' '}
            {data.description}
          </Card.Text>
          {data.reserved ? <Button onClick={toggleClick} className="btn btn-light"> Cancel Reservation</Button>
            : <Button onClick={toggleClick} variant="primary">Reserve Rocket</Button>}
        </Card.Body>
      </Card>
    </div>
  );
}

Rocket.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
