

// memo holds failed paths
const canJumpToEnd = (arr, pos, failedRoutes = {}) => {
    if (pos>=arr.length-1) return true;
    if (arr[pos]===0) return false;

    if (failedRoutes[pos]) return false;

    let maxJumpLen = arr[pos];
    for (let i=1;i<=maxJumpLen;++i) {
        if (canJumpToEnd(arr, pos+i, failedRoutes)) return true;
    }

    failedRoutes[pos] = true;
    return false;
}


const minJumpsToEnd = (arr, pos, seenRoutes = {}) => {
    if (pos>=arr.length-1) return 0;

    if (seenRoutes[pos]) return seenRoutes[pos];

    let maxJumpLen = arr[pos];
    let minJumpsRemainder = Number.MAX_VALUE;
    for (let i=1;i<=maxJumpLen;++i) {
        const jumpsForThisRoute = minJumpsToEnd(arr, pos+i, seenRoutes);
        if (jumpsForThisRoute!==-1) {
            minJumpsRemainder = Math.min(minJumpsRemainder, 1 + jumpsForThisRoute);
        }
    }
    seenRoutes[pos] = minJumpsRemainder;
    return seenRoutes[pos];
}

const minJumpsToEndIterative = (arr) => {

    let minJumps = Number.MAX_VALUE;
    cache = {};

    // have to start at end and work backwards
    for (let i=arr.length-2;i>0; --i) {
        let maxJumpLen = arr[i];
        for (let j=i-maxJumpLen;j<1)

    }
}


let input = [2,3,1,1,4];

input = [2, 5, 8, 9, 2, 6, 7, 6,1, 2, 5, 8, 9, 2, 6, 7, 6, 8, 9, 1, 1,6, 8, 9, 1,1,1];

const time = process.hrtime();

let minJumps = minJumpsToEndIterative(input, 0);

const diff = process.hrtime(time);

console.log(`Execution time for ${minJumps} = ${diff} ms`);

