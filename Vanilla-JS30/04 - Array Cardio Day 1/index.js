'use strict';
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornAfter = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByBirthdate = inventors.sort((a, b) => a.year > b.year ? 1 : -1)

// Alternative:
// const sortByBirthdate = inventors.sort((a, b) => a.year - b.year)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// Alternative:
// const yrsAlive = inventors.map(inventor => inventor.passed - inventor.year);
// const sumYrsAlive = yrsAlive.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, 0
// );

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const blvdParis =
  ['Boulevard Auguste-Blanqui',
    'Boulevard Barbès',
    'Boulevard Beaumarchais',
    'Boulevard de l\'Amiral - Bruix',
    'Boulevard Mortier',
    'Boulevard Poniatowski',
    'Boulevard Soult',
    'Boulevard des Capucines',
    'Boulevard de la Chapelle',
    'Boulevard de Clichy',
    'Boulevard du Crime',
    'Boulevard du Général-d\'Armée - Jean - Simon',
    'Boulevard Haussmann',
    'Boulevard de l\'Hôpital',
    'Boulevard des Italiens',
    'Boulevard Lefebvre',
    'Boulevard de la Madeleine',
    'Boulevard de Magenta',
    'Boulevard Marguerite-de-Rochechouart',
    'Boulevard Montmartre',
    'Boulevard du Montparnasse',
    'Boulevard Raspail',
    'Boulevard Richard-Lenoir',
    'Boulevard Saint-Germain',
    'Boulevard Saint-Michel',
    'Boulevard de Sébastopol',
    'Boulevard de Strasbourg',
    'Boulevard du Temple',
    'Boulevard Voltaire,Boulevard de la Zone'];
const blvdWithDe = blvdParis.filter(blvd => blvd.includes('de'));

// On the website in DevTools:
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSort = people.sort((a, b) => {
  return a > b ? 1 : -1;
}
);

// Alternative:
// const alpha = people.sort((lastOne, nextOne) => {
//   const [aLast, aFirst] = lastOne.split(', ');
//   const [bLast, bFirst] = nextOne.split(', ');
//   return aLast > bLast ? 1 : -1;
// });

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
