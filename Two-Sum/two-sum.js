/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    nums.map((item, index) => {
        hashMap[item] = index;
    });
    for (let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap[complement]) {
            let j = hashMap[complement];
            return [i, j];
        }
    }
};
