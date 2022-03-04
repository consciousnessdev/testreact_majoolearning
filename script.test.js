// commonjs import
// arrange
const googleSearch = require('./script');

// mock db
// arrange
dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

it('this is a test', () => {
  //  googleSearch('testtest', dbMock);
  
  //  matchers example, true value
  //  expect('hello').toBe('hello');

  // false value
  // expect('hello').toBe('paman');
});

it('is searching google', () => {
  // assert
  expect(googleSearch('testtest', dbMock))
    .toEqual([]); //assert
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});