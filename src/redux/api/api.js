import axios from 'axios';
const baseUrl = 'https://api.spacexdata.com/v3';

export const getMissionsFromApi = async () => {
  const array = [];
  try {
    const response = await axios.get(`${baseUrl}/missions`);

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
  } catch (e) {
    throw e.toString();
  }
};

export const getRocketsFromApi = async () => {
  const array = [];
  try {
    const response = await axios.get(`${baseUrl}/rockets`);

    response.data.forEach((data) => {
      const rocketObject = {
        id: data.id,
        rocketName: data.rocket_name,
        description: data.description,
        images: data.flickr_images,
        reserved: false,
      };

      array.push(rocketObject);
    });

    return array;
  } catch (e) {
    throw e.toString();
  }
};
