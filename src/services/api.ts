import axios from 'axios';

export const gotService = {
  async getCharacters(page: number, pageSize: number) {
    return axios
      .get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)
      .then((res) => res.data);
  },
};
