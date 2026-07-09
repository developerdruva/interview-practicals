import React, { useState, useEffect } from "react";

// interface {
//   b: Integer,
//   c: String,
//   d: Array<string>[],
// e : {
//   a : Integer,

// }
// }
export default function App() {
  const [locations, setLocations] = useState(null);
  let inp = [
      "chennai",
      "bangalore",
      "pune",
      "hyderabad",
      "bangalore",
      "chennai",
      "chennai",
    ],
    op = {};
  /**
   *  {chennai: 3, bangalore: 2,pune: 1,hyderabad: 1  }
   */

  const a = {
    b: 4,
    c: "abc",
    d: ["a", "b", "c"],
    e: { a: 1, b: 2 },
  };

  const findingUninqs = (inp) => {
    let uniqs = inp.filter((item, index) => inp.indexOf(item) != index);
    console.log(" res uniqs   ", uniqs);
    return uniqs;
  };
  // Code here...
  const inputFiltering = (inp) => {
    let res = {};

    let uniqs = findingUninqs(inp);

    uniqs.forEach((item) => {
      res = { ...res, [item]: inp.filter((i) => item == i).length };
    });
    console.log("res ", res);
    setLocations(res);
  };
  // console.log('Test---->', op);
  useEffect(() => {
    findingUninqs(inp);
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
        <button onClick={() => inputFiltering(inp)}>click me</button>
        <table>
          <tr>
            <th>location</th>
            <th>count</th>
          </tr>
          {locations &&
            Object.keys(locations).map((item) => (
              <>
                <tr>
                  <td>{item}</td>
                  <td>{locations[item]}</td>
                </tr>
              </>
            ))}
        </table>
        <a href="/"> test </a>
      </div>
    </div>
  );
}
// git status
// git add .
// git
