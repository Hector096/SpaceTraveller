import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Table, Badge, Button } from 'react-bootstrap';
import getMissionsFromApi from '../redux/api';
import { getMissionsAction } from '../redux/missions';

export default function Missions() {
  const dispatch = useDispatch();

  useEffect(() => {
    getMissionsFromApi()
      .then((data) => {
        dispatch(getMissionsAction(data));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

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
          <tr className="text-lg">
            <td className="font-bold">Mark</td>
            <td>Otto</td>
            <td><Badge bg="secondary">NOT A MEMBER</Badge></td>
            <td><Button variant="outline-dark">Join Mission</Button></td>
          </tr>
          <tr className="text-lg">
            <td className="font-bold">Jacob</td>
            <td>Thornton</td>
            <td><Badge bg="primary">ACTIVE MEMBER</Badge></td>
            <td><Button variant="outline-danger">Leave Mission</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
