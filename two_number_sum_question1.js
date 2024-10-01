// // using two array approach  O(n^2)
// function twoSum(arr, target) {
//     const n = arr.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     throw new Error("No two sum solution exists.");
// }

// const arr = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(arr, target));

// using map O(n)
function twoSum(arr, target) {
  const a = new Map();

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (a.has(diff)) {
      return [a.get(diff), i];
    } else {
      a.set(arr[i], i);
    }
  }
  throw new Error("No Two sum Found");
}

const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target));

// const nums = [2, 7, 11, 15];
// const sum = 17;
// console.log(twoSum(nums, sum));
