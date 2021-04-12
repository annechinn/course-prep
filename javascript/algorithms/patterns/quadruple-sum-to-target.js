

const getPairsWithTarget = (arr, firstIndex, target) => {

    let map = {};
    let results = [];
    for (let i=firstIndex+1;i<arr.length;++i) {
        let num = arr[i];
        let lookForNum = target-num;
        if (lookForNum in map) {
            results.push([num, lookForNum]);
        }
        map[num] = map[num]+1||1;
    }
    return results;
}

const getTripletWithTarget = (arr, firstIndex, target) => {

    let results = [];
    for (let i = firstIndex+1;i<arr.length;++i) {
        let num = arr[i];
        let pairs = getPairsWithTarget(arr, i, target-num);
        for (let pair of pairs) {
            results.push([...pair, num]);
        }
    }

    return results;
}

const test = (arr, target) => {

    let results = [];
    for (let i=0;i<arr.length;++i) {
        let num = arr[i];

        let triplets = getTripletWithTarget(arr, i, target-num);
        for (let triplet of triplets) {
            results.push([...triplet, num]);
        }
    }

    return results;
}


console.log(test([4, 1, 2, -1, 1, -3], 1));
//console.log(test([2, 0, -1, 1, -2, 2], 2));
