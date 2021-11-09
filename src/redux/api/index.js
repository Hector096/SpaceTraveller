import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const getMissionsFromApi = async () => {
  const array = [];
  const response = await axios.get(`${baseUrl}`);

  response.data.forEach((data) => {
    const missionObject = {
      mission_id: data.mission_id,
      mission_name: data.mission_name,
      description: data.description,
    };

    array.push(missionObject);
  });

  return { data: array };
};

export default getMissionsFromApi;
