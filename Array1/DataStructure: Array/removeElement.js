
var removeElement = function(nums, val) {
    newArray =[];
    actualLength= nums.length
    for (let i = 0; i < actualLength; i++) {
        if(nums[i] == val) {
            continue;
        }else{
            newArray.push(nums[i])
        }
    }
    let h = newArray.length
    return newArray
};
result = new removeElement([3,2,2,3], 3)
console.log(result)
result = new removeElement([0,1,2,2,3,0,4,2]
    , 2)
console.log(result)
