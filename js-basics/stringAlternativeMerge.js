let s1 = 'abcd'
let s2 = 'pqr'

// console.log(s1.length)
let temp = ''
if(s1.length >= s2.length){
    s1.split('').forEach((item, index) => {
        temp = temp+item+s2.charAt(index)
    })
}else if(s1.length < s2.length){
    let currIndex = 0
    s1.split('').forEach((item, index) => {
        temp = temp + item + s2.charAt(index)
        currIndex = index
    })
    temp = temp + s2.slice(currIndex+1, s2.length)
}
console.log(temp)