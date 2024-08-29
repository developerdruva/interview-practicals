let arr = [1,2,3,4,5,1,4,2,5,3,1]

// console.log('sorted using sorting method', arr.sort((a, b) => a - b));

// console.log('set ', [...new Set(arr)])

let temp = []

// arr.reduce((i,j,index) => {
//     console.log( 
//         'index - value', index,
//         'i - value', i,
//         'j - value', j
//         )
//         if(!temp.includes(j)){
//             return temp.push(j)
//         }
    
// },[temp])

arr.filter((item, index)=> {
    if(!temp.includes(item)){
        temp.push(item)
    }
})

console.log(temp)