

mergeIntervals = (i1, i2) => {
    return [
        Math.min(i1[0], i2[0]), 
        Math.max(i1[1],i2[1])];
}

test = (intervals) => {

    intervals.sort((a,b)=> {
        return a[0]-b[0];
    });

    let results = [];
    let next = 1;

    let prevInterval = intervals[0];
    while (next<intervals.length) {
        let nextInterval = intervals[next];

        // if new one start overlaps prev end merge
        if (nextInterval[0]<=prevInterval[1]) {
            prevInterval = mergeIntervals(prevInterval, nextInterval);
        }
        else {
            results.push(prevInterval);
            prevInterval = nextInterval;
        }
        next++;
    }
    results.push(prevInterval);

    return results;
}

console.log(test([[1,4], [2,5], [7,9]]));
console.log(test([[6,7], [2,4], [5,9]]));
console.log(test([[1,4], [2,6], [3,5]]));