/* Here is a function that takes an object that may contain nested objects 
   and returns a new object where the nesting is flattened.
   Also, each key should represent its path using a dot [.] to separate levels.

For example:

Input:
const profile = {
  user: {
    name: {
      first: "Jane",
      last: "Doe"
    },
    age: 28
  }
};
Output:
{
  "user.name.first": "Jane",
  "user.name.last": "Doe",
  "user.age": 28
}
*/

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

/* What I did to program this:
   1) Firstly, I made the function 'flattenObject' with parameters:
   ❀ 'obj' (input object),
   ❀ 'parentKey' (defaults to empty string for paths),
   ❀ 'result' (defaults to empty object for flattened output).
   
   2) Then, I used a 'for...in' loop to iterate over each key in 'obj'.

   3) Also, I checked if the key is owned by 'obj' using ❀'hasOwnProperty' to avoid inherited properties.

   4) Next, I built 'newKey' by appending 'key' to 'parentKey' with a dot if 'parentKey' exists; otherwise, just use 'key'.

   5) Then, if the value is a non-null object, the code will recurse by calling 'flattenObject' on it with updated 'newKey' and same 'result'.
      Alternatively, if it's a primitive value, it will be added to 'result' under 'newKey'.

   6) In the end, after the loop, I returned the populated 'result' (this fixes the original missing return). 

This code uses recursion to handle nesting levels: it "dives" into nested objects, building the path as it goes.
And also adds value as a result when it reaches a non-object value.
When recursion finishes for a branch, it returns to the parent call until everything is flattened.
*/

// ★The function in action:★
const profile = {
  user: {
    name: {
      first: "Taylor",
        last: "Swift"
    },
    age: 35
  }
};
console.log(flattenObject(profile));
/* Output:
 {  "user.name.first": "Taylor",
    "user.name.last": "Swift",
    "user.age": 35
 }
"Strategy sets the scene for the tale" (ᴗᵔᴥᵔ)*/