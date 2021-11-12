import React from 'react';
import {
  Col, Row, Card, ListGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions.missionsArray);

  const myrockets = rockets.data !== null
    ? rockets.data.filter((item) => item.reserved !== false) || []
    : [];

  const myMissions = missions !== null
    ? missions.filter((item) => item.reserved !== false) || []
    : [];

  return (
    <div>
      <Row>
        <Col className="m-4">
          <h2>My Missions</h2>
          <Card className="mt-4">
            <ListGroup variant="flush">
              {myMissions.length !== 0 ? (
                myMissions.map((mission) => (
                  <ListGroup.Item className="p-4" key={mission.missionId}>
                    {mission.missionName}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="p-4">
                  No Missions Reserved
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
        <Col className="m-4">
          <h2>My Rockets</h2>
          <Card className="mt-4">
            <ListGroup variant="flush">
              {myrockets.length !== 0 ? (
                myrockets.map((item) => (
                  <ListGroup.Item className="p-4" key={item.id}>
                    {item.rocketName}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="p-4">
                  No Rockets Reserved
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

// (
//   <ListGroup.Item className="p-4" key={mission.missionId}>
//     {mission.missionName}
//   </ListGroup.Item>
// ))

// {
//   missions.length !== 0 ? (
//     missions.map((mission) => (
//       mission.reserved
//         && (
//           <ListGroup.Item className="p-4" key={mission.missionId}>
//             {mission.missionName}
//           </ListGroup.Item>
//         )
//     ))
//   ) : (
//     <ListGroup.Item className="p-4">
//       No Missions Reserved
//     </ListGroup.Item>
//   )
// }
