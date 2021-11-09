import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const getMissionsFromApi = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

export default getMissionsFromApi;
