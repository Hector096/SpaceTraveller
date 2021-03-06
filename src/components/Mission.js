import { useDispatch } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { reserveMissionAction } from '../redux/missions/mission';

const Mission = (prop) => {
  const dispatch = useDispatch();

  const { detail } = prop;
  const {
    missionId, missionName,
    description, reserved,
  } = detail;

  const handleReserve = (missionId) => {
    dispatch(reserveMissionAction({ missionId }));
  };

  return (
    <tr className="text-lg">
      <td className="w-64 font-bold">{missionName}</td>
      <td className="w-2/3">{description}</td>
      <td className="h-40">
        <div className="flex items-center justify-center h-full p-3">
          <Badge bg={reserved ? 'primary' : 'secondary'} className="">
            {reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
          </Badge>
        </div>
      </td>
      <td className="h-40">
        <div className="flex items-center justify-center h-full p-3">
          <Button
            onClick={() => handleReserve(missionId)}
            variant={reserved ? 'outline-danger' : 'outline-dark'}
            className="text-lg"
          >
            {reserved ? 'Leave Mission' : 'Join Mission'}
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default Mission;
