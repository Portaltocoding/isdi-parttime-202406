function find(array,callback){
    for (const element of array) {
        if(callback(element) === true){
            return element 
        }
      
    }
    return undefined
}

const even = (value) => value%2 == 0

   
const array1 = [0,1,2,3,4,5,6,7,8,9,10]
const array2 = [2,4,6,8,10,12,14,16,18]
const array3 = []

const result1 = find(array1,even);
console.assert(result1 === array1.find(even),{
  result: result1,
  message: "Test 1 no pasado",
});
const result2 = find(array2,even);
console.assert(result2 === array2.find(even),{
  result: result2,
  message: "Test 2 no pasado",
});
const result3 = find(array3,);
console.assert(result3=== array3.find(even),{
  result: result3,
  message: "Test 3 no pasado",
});
