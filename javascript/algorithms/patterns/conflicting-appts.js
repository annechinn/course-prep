

const intervalsOverlap = (lastLow, lastHigh, currLow, currHigh) => {
    //console.log("lastLow:", lastLow, "lastHigh", lastHigh, "currLow", currLow, "currHigh", currHigh);
    return currLow>=lastLow && currLow<lastHigh;
}

const test = (appts) => {

    if (appts.length<=2) return true;

    let count = appts.length;
    appts.sort((a,b)=>a[0]-b[0]);

    let lastLow = appts[0][0];
    let lastHigh = appts[0][1];
    for (let i=1;i<appts.length;++i) {
        let curr = appts[i];
        let currLow = curr[0];
        let currHigh = curr[1];
        if (intervalsOverlap(lastLow, lastHigh, currLow, currHigh)) {
            lastLow = Math.min(lastLow, currLow);
            lastHigh = Math.max(lastHigh, currHigh);
            count--;
        }
        else {
            lastLow = curr[0];
            lastHigh = curr[1];
        }
    }


    return count==appts.length;
}

console.log(test([[1,4], [2,5], [7,9]]));
console.log(test([[6,7], [2,4], [8,12]]));
console.log(test([[4,5], [2,3], [3,6]]));
console.log(test([[1,2], [2,3], [4,5]]));