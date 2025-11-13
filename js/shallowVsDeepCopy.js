let obj = {
    name: 'rks',
    role: 'software'
}

let obj2 = obj

console.log('obj - ', obj)
console.log('obj - ', obj2)

obj2['name'] = 'rajesh'

console.log('obj --> ', obj)
console.log('obj --> ', obj2)

let obj3 = JSON.parse(JSON.stringify(obj));

obj3['name'] = 'kumar'

console.log('deepcopy --> ', obj)
console.log('deepcopy --> ', obj3)
