//convert this forloop to a map
// function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }
let doubleAll = (numbers)  =>{
    let result = [];
    numbers.map(value => {
        result.push(value);
    });
    return result;
};
let nums = [1,2,3,4,5,6,7,8,9,2,2,4,5]; 
doubleAll(nums);
module.exports = doubleAll;
