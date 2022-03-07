const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people ', () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  })
});

it('calls swapi promise to get people ', () => {
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it('getPeople return count and results', () => {
  // declare mock fetch & spying
  const mockFetch = jest.fn() // check jest.fn() in docs
    .mockReturnValue(Promise.resolve({ // mockReturnValue check docs
      json: () => Promise.resolve({
        count: 87,
        results: [0,1,2,3,4,5]
      })
    }));

  expect.assertions(4); // test for how much assertion within return
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1); // check mock.calls on docs
    // it means mockFetch called by n-times

    expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people');
    // toBeCalledWith is ensure getPeoplePromise is
    // get from http://swapi.py4e.com/api/people

    // for checking expect.assertion value
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);

  });
});