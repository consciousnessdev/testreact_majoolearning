const fetch = require('node-fetch');
const swapi = require('./script2');

// // done on parameter indicate callback which is 'it' scope on getPeople has done
// it('calls swapi to get people ', (done) => {
//   // expect.assertions(val) = val means how much assertion called in "it" scope
//   expect.assertions(1);
//   swapi.getPeople(fetch).then(data => {
//     expect(data.count).toEqual(87);
//     done();
//   })
// });

// if expect assertions only 1 use 'return' only
it('calls swapi to get people ', () => {
  expect.assertions(1);
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  })
});

// it('calls swapi promise to get people ', () => {
//   swapi.getPeoplePromise(fetch).then((data) => {
//     expect(data.count).toEqual(87);
//   });
// });

// if expect assertion 2, it must contain 2 expect within return scope
it('calls swapi promise to get people ', () => {
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});