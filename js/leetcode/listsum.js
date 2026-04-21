let l1 = new NodeList(2, 4, 3);
let l2 = new NodeList(5, 6, 4);
// 807
let sum = l1.join("") * 1 + l2.join("") * 1;
let reverseSum = sum.toString().split("").reverse();
console.log(reverseSum);

// // ' let suml1 = 0
//     let suml2 = 0
//     while (l1.next) {
//         suml1 = suml1 + l1.val
//     }
//     while (l2.next) {
//         suml2 = suml2 + l2.val
//     }
//     let sum = suml1 + suml2;
//     let orginSum = sum
//     let rev = 0;
//     let rem = 0;
//     while (sum) {
//         rem = sum % 10;
//         sum = sum / 10;
//         rev = (rev * 10) + rem;
//     }
//     console.log(rev)
//     return rev;
// '
