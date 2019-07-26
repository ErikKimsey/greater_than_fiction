// const nums = [2, 7, 11, 15];  const target = 9;
const nums2 = [3,2,95,4,-3];  const target2 = 92;
const map = {};

const twoSum = function(nums, target) {
    for(let i=0; i< nums.length; i++){
      console.log(i)
        map[nums[i]] = i; 
    }
    console.log(map)
    
    for(let i=0; i< nums.length; i++){
        let complement = target - nums[i];
        console.log('complement >> ',complement)
        console.log(map[i])
        console.log(map.hasOwnProperty(complement))
        if(map.hasOwnProperty(complement)){
          console.log([i, map[complement]]);
        //     return [i, map[complement]];
        }
    }
}

twoSum(nums2, target2);