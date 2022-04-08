const URL = 'http://localhost:4000/api/tuits';

export const findAllTuits = () =>
  fetch(URL)
    .then(response => response.json());

export default {
  findAllTuits
};
