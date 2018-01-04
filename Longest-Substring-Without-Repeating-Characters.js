/**
 * Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

 /**
  * @param {string} s
  * @return {number}
  */
 var lengthOfLongestSubstring = function(s) {
     if(s === '') return 0;
     var s_arr = s.split('');
     var j_start = 0, start = 0, end = 1, result_arr = [];
     for(var i = 1; i < s_arr.length; i++){
         for(var j = j_start; j < i; j++){
             if(s_arr[i] !== s_arr[j]){
                 if(i-j === 1) end = i+1;
             } else {
                 result_arr.push([start, end]);
                 start = j + 1;
                 end = start + 1;
                 j_start = start;
             }
         }
     }
     result_arr.push([start, end]);

     if(result_arr.length !== 0){
         var max_length = result_arr[0][1]-result_arr[0][0];
         var max_len_index = 0;
         for(var i in result_arr){
             if(result_arr[i][1]-result_arr[i][0] > max_length){
                 max_length = result_arr[i][1]-result_arr[i][0];
                 max_len_index = i;
             }
         }
         return max_length;
     }

     return s.length;
 };
