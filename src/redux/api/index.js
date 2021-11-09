import axios from 'axios';

export const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getBooksFromApi = async () => {
  const finalData = [];
  const response = await axios.get(`${baseUrl}`);
  console.log(response);
  // Object.entries(response.data).forEach((data) => {
  //   const itemId = data[0];
  //   const [{ title, category }] = data[1];

  //   const obj = {
  //     item_id: itemId,
  //     title,
  //     category,
  //     percentage,
  //     category_section: generateRandomCategory(),
  //     chapter: generateRandomChapter(),
  //   };

  //   finalData.push(obj);
  // });
  return finalData;
};
