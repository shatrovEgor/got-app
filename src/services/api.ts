import axios from 'axios';

export const gotService = {
  async getFiltredData(page: number, pageSize: number, filter: string) {
    return axios
      .get(`https://www.anapioficeandfire.com/api/${filter}?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.data);
  },
  async getAllData(type: string) {
    return axios.get(`https://www.anapioficeandfire.com/api/${type}`).then((res) => res.data);
  },
};
