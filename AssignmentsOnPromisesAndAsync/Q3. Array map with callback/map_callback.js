// Q.3 Array map with callback - Implement a function ‘mapArray’ that takes an array and a callback function as arguments. ‘mapArray’ should apply the callback function to each element of the array and return a new array with the modified values.




function mapArray(arr, callback){
    
    const newArr = [];

   
    function xyz(element, index, array){
        newArr[index] = callback(arr[index])
    }
    
    

    arr.forEach(xyz);


// assert : newArr is an array such that newArr[i] = callback(arr[i])
return newArr
}

const testArr = [1, 2, 3, 4];
function add1(element) {
    return element * element;
}

mapArray(testArr, add1)

newArr = mapArray(testArr, add1)
console.log(newArr)