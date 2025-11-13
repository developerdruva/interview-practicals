// const deepCloneRecursion = (item) => {
//     if (item === null || typeof item != 'object') {
//         return item
//     }
//     const initialValues = Array.isArray(item) ? [] : {}
//     return Object.keys(item).reduce((i, key) => {
//         i[key] = deepCloneRecursion(item[key])
//         return i
//     }, initialValues)
// }

// let TempObj = {
//     name: 'rajesh',
//     age: 26,
//     role: 'developer',
//     skills: ['reactjs', 'nodejs', 'javascript', 'python', 'express'],
//     technologies: {
//         frontend: {
//             lang: 'javascript',
//             frameworks: ['nextjs', 'angular']
//         },
//         backend: {
//             lang: 'nodejs',
//             frameworks: ['express', 'nodejs']
//         }
//     }
// }

// let clonedObj = deepCloneRecursion(TempObj)
// clonedObj['technologies']['frontend']['frameworks'] = 'nextjs'
// console.log('temp object ', TempObj);
// console.log('cloned obj ', clonedObj);

// Deep clone function with artificial delay per level to visualize recursion
const deepCloneRecursion = async (item, level = 0) => {
  const indent = "  ".repeat(level);
  console.log(`${indent}Cloning level ${level}:`, item);

  // Delay function (promise-based)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1000); // Add 500ms delay at each level

  if (item === null || typeof item !== "object") {
    console.log(`${indent}Returning primitive:`, item);
    return item;
  }

  const initialValues = Array.isArray(item) ? [] : {};
  for (const key of Object.keys(item)) {
    console.log(`${indent}Processing key: '${key}'`);
    initialValues[key] = await deepCloneRecursion(item[key], level + 1);
  }

  console.log(`${indent}Returning cloned level ${level}:`, initialValues);
  return initialValues;
};

// Test object with nested levels
let TempObj = {
  name: "rajesh",
  age: 26,
  role: "developer",
  skills: ["reactjs", "nodejs", "javascript", "python", "express"],
  technologies: {
    frontend: {
      lang: "javascript",
      frameworks: ["nextjs", "angular"],
    },
    backend: {
      lang: "nodejs",
      frameworks: ["express", "nodejs"],
    },
  },
};

(async () => {
  let clonedObj = await deepCloneRecursion(TempObj);

  // Mutate the clone to verify original is untouched
  clonedObj.technologies.frontend = "nextjs";

  console.log("\nOriginal TempObj:", TempObj);
  console.log("Modified ClonedObj:", clonedObj);
})();
