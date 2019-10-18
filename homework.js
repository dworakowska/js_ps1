// // //1. From years in array check for leap years [1974, 1900, 1985, 2000]


// let years = [1974, 1900, 1985, 2000];
// let tab = [];
// for(year of years) {
//     if((year%4===0 && year%100!==0) || year%400===0) {
//         tab.push(year);
//     }
// }
// console.log(tab);


// // //2. Calculate factorial of 7.

// let i = 1;
// let result = 1;
// while (i <= 7) {
//     result = result * i;
//     i++;
// }
// console.log(result);

// //3. Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]


// let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let sum= 0;
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     if (element%2 !==0) {
//         sum += element;
//     }
// }
// console.log(sum);

// //4. Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

// let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let highest;
// let lowest;
// for (let i = 0; i < numbers.length; i++) {
//    let element = numbers[i];
//     if (highest === undefined && lowest === undefined) {
//         highest = element;
//         lowest = element;
//     } else {
//         if (element < lowest) {
//             lowest = element;
//         } else if (element > highest) {
//             highest = element;
//         }
//     }
// } 

// console.log(highest);
// console.log(lowest);



// //5. Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. 

// let strings = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
// let longest;
// for (i = 0; i < strings.length; i++){
//     let element = strings[i];
//     if (i == 0) {
//         longest = element
//     } else {
//         if (element.length > longest.length) {
//             longest =  element;
//         }
//     }

// }
// console.log(longest);

// //6. Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 

// let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let hv;
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     if (hv === undefined) {
//         hv = element;
//     } else {
//         if (element > hv) {
//             hv = element;
//             hvi = []
//             hvi.push(i)
//         } else if (element == hv) {
//             hvi.push(i)
//         }
//     }
// }
// console.log(hvi);

// //7. Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]

// let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i]
//     if (element %2 == 0) {
//         sum += element;
//         count++;
//     } 
// }

// let av = sum / count;
// console.log(av);


// //8. Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]

// let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i]
//     if (i%2===0 && i!==0) {
//         sum += element;
//         count++;
//     }
// }
// let av = sum / count;
// console.log(av);


// //9. With a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98]

// let numbers = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i]
//     if (element%2===0) {
//         sum += element;
//     } else {
//         sum -= element;
//     }
// }

// console.log(sum);