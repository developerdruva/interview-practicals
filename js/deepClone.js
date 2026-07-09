const employee = {
  id: 101,
  personal: {
    name: "Rajesh",
    contact: {
      email: "rajesh@gmail.com",
      phone: "9876543210",
    },
  },
  company: {
    name: "Altimetrik",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
    },
  },
};

const deepClone = (item) => {
  if (item === null || typeof item !== "object") {
    return item;
  }
  const initialVals = Array.isArray(item) ? [] : {};
  Object.keys(item).forEach((key) => {
    initialVals[key] = deepClone(item[key]);
  });
  return initialVals;
};

let emp = deepClone(employee);
console.log(emp);
