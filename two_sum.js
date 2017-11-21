/**

TWO SUM

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

**/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twosum(nums, target) {

     var idx1 = null;
     var idx2 = null;

     // iterate each number of the array nums
     for(var j=0; j<nums.length; j++){
         idx1 = j;
         for(var i=1; i<nums.length; i++){
         if(nums[j] + nums[i] === target){
             idx2 = i;
             break;
         }
       }
     }

     return [idx2, idx1];
 };

module.exports = twosum;
