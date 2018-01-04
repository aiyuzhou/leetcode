/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 /**
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @return {ListNode}
  */
 var addTwoNumbers = function(l1, l2) {
     var l1_arr = [], l2_arr = [],l1_val = 0,l2_val = 0,sum;
     getNodeValue(l1,l1_arr);
     getNodeValue(l2,l2_arr);
     for(var i = 0,j=0; i < l1_arr.length && j< l2_arr.length; i++,j++){
         if(i < l1_arr.length) l1_val += l1_arr[i]*Math.pow(10,i);
         if(j < l2_arr.length) l2_val += l2_arr[j]*Math.pow(10,j);
     }
     sum = l1_val + l2_val;
     var sum_arr = sum.toString().split('');
     return getValueNode(sum_arr,{});
     // return sum_arr;
 };

 var getNodeValue = function(l,arr) {
     arr.push(l.val);
     if(l.next !== null) {
         getNodeValue(l.next,arr);
     }
     return arr;
 };

 var getValueNode = function(arr,ls) {
     if(arr.length > 0){
         ls.val = arr[arr.length-1];
         ls.next = getValueNode(arr.slice(0,arr.length-1),{});
     }
     if(ls.val === undefined) ls = null;
     return ls;
 };
