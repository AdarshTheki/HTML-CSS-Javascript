const roadMaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];

// Using Set()
const uniqueWithSet = [...new Set(roadMaps)];
console.log(uniqueWithSet);

// Using filter()
const uniqueWithFilter = roadMaps.filter((arr, index) => roadMaps.indexOf(arr) === index);
console.log(uniqueWithFilter);

// Using reduce()
const uniqueWithReduce = roadMaps.reduce((unique, arr) => {
  return unique.includes(arr) ? unique : [...unique, arr];
}, []);
console.log(uniqueWithReduce);

// Using forEach()
const uniqueForEach = [];
roadMaps.forEach((roadmap) => {
  if (!uniqueForEach.includes(roadmap)) {
    uniqueForEach.push(roadmap);
  }
});

// Using for...of
const uniqueForOf = [];
for (const roadmap of roadMaps) {
  if (!uniqueForOf.includes(roadmap)) {
    uniqueForOf.push(roadmap);
  }
}
