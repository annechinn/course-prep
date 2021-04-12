
let results = [];

canSum = (count, target, numbers, currentCombo = []) => {

    count++;
    if (count>10) return false;

    if (target === 0) {
        results.push(currentCombo);
        return;
    }

    if (target<0) {
        return;
    }

    for (let number of numbers) {
        let remainder = target - number;
        let newCombo = [...currentCombo];
        newCombo.push(number);
        canSum(count, remainder, numbers, newCombo);
    }
}

canSum(1, 4, [1,2,3]);
console.log(results);