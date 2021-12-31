/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//  You must write an algorithm with O(log n) runtime complexity.
 
  
 
//  Example 1:
 
//  Input: nums = [1,3,5,6], target = 5
//  Output: 2
//  Example 2:
 
//  Input: nums = [1,3,5,6], target = 2
//  Output: 1
//  Example 3:
 
//  Input: nums = [1,3,5,6], target = 7
//  Output: 4
  
 
//  Constraints:
 
//  1 <= nums.length <= 104
//  -104 <= nums[i] <= 104
//  nums contains distinct values sorted in ascending order.
//  -104 <= target <= 104


// Comments : its recursive Binary Search Algorithm with logn line to check is 44

 var searchInsert = function(nums, target) {
    return binarySearch(nums,target,0,nums.length-1);
};

var binarySearch = function (array,target,start,end) {
    
    
    if (start > end) return start;
    
    const mid = Math.floor((end+start) / 2);
    
    if (array[mid] === target) {
        return mid;
    } 
    
    if (array[mid] > target) {
        return binarySearch(array,target, start, mid - 1);
    }
    
    if (array[mid] < target) {
        return binarySearch(array,target, mid + 1, end);
    }
    
}