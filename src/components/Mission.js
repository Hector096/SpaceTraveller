import { Badge, Button } from 'react-bootstrap';

const Mission = (prop) => {
  const { detail } = prop;
  const { missionId, missionName, description } = detail;
  return (
    <tr className="text-lg" key={missionId}>
      <td className="font-bold">{missionName}</td>
      <td>{description}</td>
      <td><Badge bg="secondary">NOT A MEMBER</Badge></td>
      <td><Button variant="outline-dark">Join Mission</Button></td>
    </tr>
  );
};

export default Mission;

// {/* <tr className="text-lg">
//   <td className="font-bold">Mark</td>
//   <td>Otto</td>
//   <td><Badge bg="secondary">NOT A MEMBER</Badge></td>
//   <td><Button variant="outline-dark">Join Mission</Button></td>
// </tr>
// <tr className="text-lg">
//   <td className="font-bold">Jacob</td>
//   <td>Thornton</td>
//   <td><Badge bg="primary">ACTIVE MEMBER</Badge></td>
//   <td><Button variant="outline-danger">Leave Mission</Button></td>
// </tr> */}
