
const removeDuplicates = (nums) => {
    let j = 0;
    let i = 0;

    for (; i < nums.length; i += 1){
        if (nums[i] !== nums[i + 2]) {
            nums[j] = nums[i];
            j += 1;
        }
    }

    return j;
};

result = removeDuplicates([1,1,1,2,2,3])
console.log(result)


// result = new removeElement([0,1,2,2,3,0,4,2]
//     , 2)
// console.log(result)
