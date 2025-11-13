let arr1 = [1234, 1244, 3445, 5677, 4567]

let arr2 = arr1.filter((item) => {
    let temp = item.toString().length;
    if (item.toString().split('')[temp - 1] == item.toString().split('')[temp - 2]) {
        return item
    }
})

console.log(arr2)