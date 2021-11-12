import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spinner } from 'react-bootstrap';
import { getMissionsFromApi } from '../redux/api/api';
import Mission from './Mission';
import { getMissionsAction } from '../redux/missions/mission';

export default function Missions() {
  const state = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (state.missionsArray.length === 0) {
      getMissionsFromApi()
        .then((data) => {
          dispatch(getMissionsAction(data));
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  }, []);

  return (
    <div className="m-5 mission-container">
      <Table
        striped
        bordered
        hover
        className="cursor-pointer"
        responsive="sm | md | ld | xl"
      >
        <thead>
          <tr className="text-xl h-14">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            state.loading !== true ? (
              <>
                {state.missionsArray === null || state.missionsArray.length === 0 ? (
                  <h2 className="text-center fw-bold mt-5">No Missions Found..</h2>
                ) : (state.missionsArray.map((mission) => (
                  <Mission
                    key={mission.missionId}
                    detail={mission}
                  />
                )))}
              </>
            ) : (<Spinner animation="grow" className="spinner" size="lg" />)
          }
        </tbody>
      </Table>
    </div>
  );
}
