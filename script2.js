const fetch = require('node-fetch');

const getPeoplePromise = async (fetch) => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data = await getRequest.json();
  const { count, results } = data;
  return {
    count,
    results: results,
  };
};

const getPeople = (fetch, callback) => {
  return fetch('http://swapi.py4e.com/api/people')
    .then((response) => response.json())
    .then((data) => {
      const { count, results } = data;
      return {
        count,
        results: results,
      };
    });
};

module.exports = {
  getPeoplePromise,
  getPeople,
};
