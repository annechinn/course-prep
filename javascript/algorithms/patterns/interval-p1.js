

// for every overlap we need a unqiue room.
// if there are overlaps then we don't need any additonal rooms for the non-overlaps
// if there are no overlaps, then we need a single room for the non-overlaps

const meetingsOverlap = (lastStart, currStart, lastEnd, currEnd) => {
    return currStart>=lastStart && currStart<lastEnd;
}

const test = (meetings) => {

    if (meetings.length<=1) return 1;

    meetings.sort((a,b)=>a[0]-b[0]);

    lastStart = meetings[0][0];
    lastEnd = meetings[0][1];
    let overlapCount = 0;
    let nonOverlapCount = 0;

    for (let i=1;i<meetings.length;++i) {
        let curr = meetings[i];
        let currStart = curr[0];
        let currEnd = curr[1];
      //  console.log("lastStart:", lastStart, "lastEnd", lastEnd, "currStart", currStart, "currEnd", currEnd);
 
        if (meetingsOverlap(lastStart, currStart, lastEnd, currEnd)) {
            lastStart = Math.min(lastStart,currStart);
            lastEnd = Math.max(lastEnd, currEnd);
            if (overlapCount==0) {
                overlapCount+=2;
            }
            else {
                overlapCount++;
            }
        }
        else {
            lastStart = currStart;
            lastEnd = currEnd;
            nonOverlapCount++;
        }
    }
    if (overlapCount==0) return 1;
    else return overlapCount;
}

console.log(test( [[1,4], [2,5], [7,9]]));
console.log(test([[6,7], [2,4], [8,12]]));
console.log(test( [[1,4], [2,3], [3,6]]));