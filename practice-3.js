function make_avg(arr, size) {
  if (size === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  const average = sum / size;
  
  return average;
}

const numbers1 = [10, 20, 30];
const size1 = numbers1.length;
const avg1 = make_avg(numbers1, size1);
console.log(avg1); 

const numbers2 = [5, 15, 25, 35, 45];
const size2 = numbers2.length;
const avg2 = make_avg(numbers2, size2);
console.log(avg2);

const numbers3 = [2, 4, 6, 8, 10];
const size3 = numbers3.length;
const avg3 = make_avg(numbers3, size3);
console.log(avg3);

