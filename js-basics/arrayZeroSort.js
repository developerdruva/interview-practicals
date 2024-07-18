let nums = [0,1,0,3,12,5,3]
console.log(nums.filter(item => item != 0).sort((a,b)=>a-b).concat(nums.filter(item => item == 0)))

// console.log(nums.sort((a,b)=> a-b))

// let temp = nums.filter(item => item != 0).sort().join(nums.filter(item => item == 0))

// let temp2 = nums.filter(item => item == 0)
// temp2.forEach(item => {
//     temp.push(item)
// })

// const sortFunction = (arr) => {
    
// }