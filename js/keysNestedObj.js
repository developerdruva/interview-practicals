let obj = {
  "key1.keyA": "valueI",
  "key2.keyB": "valueII",
  "key3.a.b.c": 2,
};

const objrec = (obj) => {
  let res = [];
  Object.entries(obj).forEach((i) => {
    let temp = i[0].split(".").reduceRight((j, k) => {
      return { [k]: j };
    }, i[1]);
    res.push(temp);
  });
  return res;
};

console.log(objrec(obj));
