let arr1Ref = document.getElementById("arr1-ref");
let arr2Ref = document.getElementById("arr2-ref");
let result = document.getElementById("result");

let arr1 = [11, 2, 3];
let arr2 = [8, 3, 11];

arr1Ref.innerText = `Array 1: [${arr1}]`;
arr2Ref.innerText = `Array 2 : [${arr2}]`;

let arr1Sorted = arr1.sort();
let arr2Sorted = arr2.sort();

if (arr1Sorted.toString() == arr2Sorted.toString()) {
  result.innerHTML = `Arrays are <span>Identical</span>`;
} else {
  result.innerHTML = `Arrays are <span>Not Identical</span>`;
}
