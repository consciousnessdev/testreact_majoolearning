const googleSearch = require('./script');

dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

// grouping with describe
describe('googleSearch', () => {
  it('this is a test', () => {
    //  googleSearch('testtest', dbMock);
    //  matchers example, true value
    //  expect('hello').toBe('hello');
    // false value
    // expect('hello').toBe('paman');
  });

  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
