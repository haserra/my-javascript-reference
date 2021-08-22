/**
 * Playing with Spread syntax
 */
console.clear();

console.log(`Beginning chapter 6 `);

/**
 * Variables declared without the let keyword internally stores it as a property of the window object.
 * So we can delete the properties of the window object.
 * Just for the purpose of this exercise
 */

//let objs = [];
objs = [];

//let someObj;
someObj = {
  a: 1,
  b: 2,
  c: 3,
  x: {
    x1: 1,
    x2: 2,
  },
};

objs.push(someObj);

for (let key in someObj) {
  if (typeof someObj[key] === "object") {
    for (let k in someObj[key]) {
      console.log(
        `the inner key is ${k} - the value of that inner key is ${someObj[key][k]}`
      );
    }
  } else {
    // keys - values for the keys
    console.log(`the key is ${key} - the value of that key is ${someObj[key]}`);
  }
}

console.log(` -- `);

//let copyOfSomeObj;
copyOfSomeObj = { ...someObj };

objs.push(copyOfSomeObj);

for (let key in copyOfSomeObj) {
  //console.log(`the shallow key is ${key} - the value of that shallow key is ${copyOfSomeObj[key]}`);

  if (typeof copyOfSomeObj[key] === "object") {
    for (let k in copyOfSomeObj[key]) {
      console.log(
        `the inner key is ${k} - the value of that inner key is ${copyOfSomeObj[key][k]}`
      );
    }
  } else {
    // keys - values for the keys
    console.log(
      `the key is ${key} - the value of that key is ${copyOfSomeObj[key]}`
    );
  }
}

console.log(` -- `);

//let copyOfSomeObj2;
copyOfSomeObj2 = { ...someObj, c: 444, z: 7 };

objs.push(copyOfSomeObj2);

for (let key in copyOfSomeObj2) {
  //console.log(`the shallow key is ${key} - the value of that shallow key is ${copyOfSomeObj2[key]}`);

  if (typeof copyOfSomeObj2[key] === "object") {
    for (let k in copyOfSomeObj2[key]) {
      console.log(
        `the inner key is ${k} - the value of that inner key is ${copyOfSomeObj2[key][k]}`
      );
    }
  } else {
    // keys - values for the keys
    console.log(
      `the key is ${key} - the value of that key is ${copyOfSomeObj2[key]}`
    );
  }
}

console.log(` -- `);

//let copyOfSomeObj3;
copyOfSomeObj3 = { ...someObj, c: 444, z: 7, x: { ...someObj.x, x1: 55 } };

objs.push(copyOfSomeObj3);

for (let key in copyOfSomeObj3) {
  //console.log(`the shallow key is ${key} - the value of that shallow key is ${copyOfSomeObj2[key]}`);

  if (typeof copyOfSomeObj3[key] === "object") {
    for (let k in copyOfSomeObj3[key]) {
      console.log(
        `the inner key is ${k} - the value of that inner key is ${copyOfSomeObj3[key][k]}`
      );
    }
  } else {
    // keys - values for the keys
    console.log(
      `the key is ${key} - the value of that key is ${copyOfSomeObj3[key]}`
    );
  }
}

/**
 * Playing with Spread syntax in arrays
 */
console.log(`Now playing with Spread syntax in arrays`);

//let someArray;
someArray = [10, 20, 30, "a1", "b1", "c1", true, { z: 1, y: 2 }];

//let copysomeArray;
copysomeArray = [...someArray];

objs.push(someArray);

objs.push(copysomeArray);

function traverseArray(arr) {
  const varToString = (varObj) => Object.keys(varObj)[0];
  console.log(`Now traversing the array ${varToString({ arr })}`);

  arr.forEach((element) => {
    if (typeof element === "object") {
      for (let k in element) {
        console.log(
          `the inner key of the current object is ${k}, and the value of that key is ${element[k]}`
        );
      }
    } else {
      console.log(`the element is ${element}`);
    }
  });
}

objs.push(traverseArray);

traverseArray(someArray);
traverseArray(copysomeArray);

//let spreadCopySomeArray;
spreadCopySomeArray = [
  10,
  20,
  30,
  40,
  50,
  60,
  "a1",
  "b1",
  "c1",
  "d1",
  "e1",
  true,
  ...someArray,
];
traverseArray(spreadCopySomeArray);

objs.push(spreadCopySomeArray);

/**
 * Destroy current objects
 */

(function destroyObjs(objs) {
  objs.forEach((obj) => (obj = null));
  //objs = null;
  console.log(`All cleared.`);
})(objs);

objs = null;
