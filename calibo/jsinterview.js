// const data = [
//   { name: "user1", role: "admin" },
//   { name: "user2", role: "admin" },
//   { name: "user3", role: "admin" },
//   { name: "user4", role: "user" },
//   { name: "user5", role: "user" },
// ];

// const groupData = (inputData, key) => {
//   let temp = [];
//   inputData.forEach((item) => {
//     if (!temp.includes(item[key])) {
//       console.log("-- ", item);
//       return temp.push(item[key]);
//     }
//   });
//   console.log(temp);
//   let key1 = temp[0];
//   let key2 = temp[1];
//   const d1 = inputData.filter((item) => item[key] == key1);

//   const d2 = inputData.filter((item) => item[key] == key2);

//   return {
//     [key1]: d1,
//     [key2]: d2,
//   };
// };

// const result = groupData(data, "role");
// console.log("Group Data :: ", result);

// const output = {
//   admin: [
//     { name: "user1", role: "admin" },
//     { name: "user2", role: "admin" },
//     { name: "user3", role: "admin" },
//   ],
//   user: [
//     { name: "user4", role: "user" },
//     { name: "user5", role: "user" },
//   ],
// };
var fetchData;
function fetchData() {
  return "hi";
}
console.log(fetchData());
