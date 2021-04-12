

// Subarrays with given sum
// We are given an unsorted array containing positive and negative numbers, 
// we need to find the number of subarrays with the given sum, k. For example,
// Input: 
// arr = [2, 4, -5, -5, 6] and k = -10
// Output: 
// 1
// nums = given array
// k = sum
// https://algorithmsandme.com/category/data-structures/arrays/
//
// int subarraySum(vector<int>& nums, int k) {
//     int ans = 0;   // to store the final count
//     int sum = 0;  // to store sum
 
//     // to store prefix sum along with frequency
//     map<int, int> map;  
//     map[0] = 1;  // for case like k = sum[0, i]
   
//     for(int i = 0; i < nums.size(); i++)
//     {
//             // calculating sum in the range[0, i]
//         sum += nums[i];    
//              // if sum - k is alread seen 
//         if(map.find(sum - k) != map.end())            
//                 ans += map[sum - k]; // add frequency
      
//             // if sum is not seen in the past
//         if(map.find(sum) == map.end())    
//                 map[sum] = 1;
//         else
//                 map[sum] = map[sum] + 1;
//     }
  
//     return and;
// }

const printSubArraySums = (arr, K) => {

    let matches = 0;
    let map = {};
    let sum = 0;
    for (let i=0; i<arr.length;++i) {
        // as we iterate through we are
        // calculating the sum for each
        // increasing subarray from [0...i]
        // and storing it in a map

        sum+=arr[i];
        console.log(`[0..${i}]:${sum}`);
        // if the difference between the current sum
        // and an earlier sum is 0, then we know that the
        // span between them is 0.
        const diff = sum - K;
        if (map[diff]) {
            matches++;
            console.log("diff: " + diff);
        }

        if (map[sum]) map[sum]=map[sum]+1;
        else map[sum]=1;   
    }

    console.log(matches);
}

printSubArraySums([2,4,3,5,2,6,5,1,6], 7);