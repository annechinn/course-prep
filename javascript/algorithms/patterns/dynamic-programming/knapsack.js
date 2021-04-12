
const calculateProfit = (profits, weights, capacity, pos, memo = {}) => {

    if (capacity <= 0 || pos >= profits.length) return 0;

    let memoKey = `${capacity}:${pos}`
    let profit = memo[memoKey];
    if (profit) return profit;

    let profit1 = 0;
    if (weights[pos] <= capacity) {
      profit1 =
        profits[pos] +
        calculateProfit(profits, weights, capacity - weights[pos], pos + 1);
    }

    // recursive call after excluding the element at the currentIndex
    const profit2 = calculateProfit(profits, weights, capacity, pos + 1);
    
    let maxProfit = Math.max(profit1, profit2);
    memo[memoKey] = maxProfit;
    return maxProfit;
}

console.log(calculateProfit([1, 6, 10, 16], [1, 2, 3, 5] , 7, 0));
