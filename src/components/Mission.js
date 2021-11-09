import { Badge, Button } from 'react-bootstrap';

const Mission = (prop) => {
  const { detail } = prop;
  const {
    missionId, missionName,
    description, reserved,
  } = detail;
  return (
    <tr className="text-lg" key={missionId}>
      <td className="w-20 font-bold">{missionName}</td>
      <td className="w-60">{description}</td>
      <td>
        <Badge bg={reserved ? 'primary' : 'secondary'} className="mx-equal">
          {reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
        </Badge>
      </td>
      <td>
        <Button variant={reserved ? 'outline-danger' : 'outline-dark'} className="mx-equal-2">
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

export default Mission;
