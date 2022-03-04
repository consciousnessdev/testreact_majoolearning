const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
  'myfavouritecats2.com',
];

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter((website) => {
    return website.includes(searchInput);
  });
  // show result as 3 result if result more than 3
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('soup'));
console.log(googleSearch('cat'));
