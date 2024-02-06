function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;
  let currentSum = 0;

  // Calc sum of first k items
  for (let i = 0; i < k; i++) {
    maxSum = i === 0 ? (maxSum = arr[i]) : (maxSum += arr[i]);
  }

  currentSum = maxSum;

  // Slide the window and calc sum
  for (let i = k; i < arr.length; i++) {
    // Update currentSum by subtracting item that left the window and adding the new item
    currentSum = currentSum - arr[i - k] + arr[i];

    // Update maxSum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
