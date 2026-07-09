let listArray = [1, 2, 3, 4, 5, 1, 2, 3];

const uniqueList = listArray.filter((item, index) => {
  return listArray.indexOf(item) === index;
});

const uniqueList2 = [...new Set(listArray)];

const uniqueList3 = listArray.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
console.log(uniqueList);
console.log(uniqueList2);
console.log(uniqueList3);

let uniqueList4 = [];
listArray.forEach(
  (item) => !uniqueList4.includes(item) && uniqueList4.push(item),
);
console.log(uniqueList4);
