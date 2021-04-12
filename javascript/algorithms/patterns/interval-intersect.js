
const fillMap = (map, intervals) => {
    for (let i=0;i<intervals.length;++i) {
        for (let j=intervals[i][0];j<=intervals[i][1];++j) {
            map[j] = map[j]+1 || 1;
        }
    }
}

const endCurrInterval = (results, nextInterval, lastKey) => {
    nextInterval.push(lastKey);
    results.push(nextInterval);
    nextInterval = [];
    console.log("end", results);
}

const test = (intervals1, intervals2) => {
    let map = {};
    let results = [];

    fillMap(map, intervals1);
    fillMap(map, intervals2);

    let nextInterval = [];
    let lastKey = null;
    console.log(map);
    for (let key of Object.keys(map)) {

        if (map[key]==2) {
            console.log('key', key, "last", lastKey);
            // starting a new interval
            if (
                // gap in sequeunce
                parseInt(key)-lastKey>1 || 
                // last one wasn't in sequence
                map[lastKey]!=2) {
                    console.log("start");
                    if (nextInterval.length==1) {
                        endCurrInterval(results, nextInterval, lastKey);
                    }
                    nextInterval = [key];
                    console.log("nextInterval", nextInterval);
                }
            else {
                // continuing same sequence
            }
        }
        else {
           if (map[key]==1) {
            if (nextInterval.length==1) {
              endCurrInterval(results, nextInterval, lastKey);
            }  
           }
        }
        lastKey = parseInt(key);
    }
    if (nextInterval.length==1) {
        nextInterval.push(lastKey);
        results.push(nextInterval);
    }
    return results;
}

console.log(test([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]));
//console.log(test([[1, 3], [5, 7], [9, 12]], [[5, 10]]));
