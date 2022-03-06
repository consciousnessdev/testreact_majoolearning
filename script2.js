import fetch from 'node-fetch';

export const getPeoplePromise = async (fetch) => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data = await getRequest.json();
  console.log(data);
  const { count, resuls } = data;
  return {
    count,
    results: resuls,
  };
};

export const getPeople = (fetch, callback) => {
  return fetch('http://swapi.py4e.com/api/people')
    .then((response) => response.json())
    .then((data) => {
      const { count, resuls } = data;
      callback(data);
      return {
        count,
        results: resuls,
      };
    });
};
