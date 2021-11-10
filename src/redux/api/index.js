import axios from 'axios';
// import generateRandomReversedStatus from '../../utils/generator';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const getMissionsFromApi = async () => {
  const array = [];
  const response = await axios.get(`${baseUrl}`);

  response.data.forEach((data) => {
    const missionObject = {
      missionId: data.mission_id,
      missionName: data.mission_name,
      description: data.description,
      reserved: false,
    };

    array.push(missionObject);
  });

  return array;
};

export default getMissionsFromApi;
