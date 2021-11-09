import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Mission from './Mission';

export default function Missions() {
  const state = useSelector((state) => state.missionsReducer);

  useEffect(() => {}, []);

  return (
    <div className="px-20 py-30">
      <Table
        striped
        bordered
        hover
        className="cursor-pointer"
        responsive="sm | md | ld | xl"
      >
        <thead>
          <tr className="text-xl">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            state.missionsArray.map(
              (mission) => <Mission key={mission.missionId} detail={mission} />,
            )
          }
        </tbody>
      </Table>
    </div>
  );
}
