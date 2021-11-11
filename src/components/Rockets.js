import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { fetchRocketData } from '../redux/rockets/rocket';
import Rocket from './Rocket';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => rockets.data.length === 0 && dispatch(fetchRocketData()), []);
  useEffect(() => {
    rockets.data.length === 0 ? dispatch(fetchRocketData()) : [];
  }, []);

  return (
    <div>
      {rockets.loading !== true ? (
        <div className="mission-container">
          {rockets.data === null || rockets.data.length === 0 ? (
            <h2 className="text-center fw-bold mt-5">No Rockets Found..</h2>
          ) : (rockets.data.map((item) => (
            <Rocket data={item} key={item.id} />
          )))}
        </div>
      ) : (<Spinner animation="grow" className="spinner" size="lg" />)}
    </div>

  );
}
