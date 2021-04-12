

const test = (intervals, intervalToMerge) => {

    let results = [];

    let mergeStart = intervalToMerge[0];
    let nextIndex = 0;
    let last = null;
    while (nextIndex<intervals.length && intervals[nextIndex][0]<mergeStart) {
        last = intervals[nextIndex];
        results.push(last);
        nextIndex++;
    }

    if (last && last[1]>=intervalToMerge[0]) {
        last[1] = Math.max(last[1],intervalToMerge[1]);
    }
    else {
        results.push(intervalToMerge);
        last = intervalToMerge;
    }

    while (nextIndex<intervals.length) {
        let next = intervals[nextIndex];
        if (next[0]<=last[1]) {
            last[1] = Math.max(last[1],next[1]);
        }
        else {
            results.push(next);
        }
        nextIndex++;
    }

    return results;
}

//console.log(test([[1,3], [5,7], [8,12]], [4,6]));
//console.log(test([[1,3], [5,7], [8,12]], [4,10]));
console.log(test([[2,3],[5,7]], [1,4]));