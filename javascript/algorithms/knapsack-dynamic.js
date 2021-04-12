

class Fruit {
    constructor(name, weight, profit) {
        this.name = name;
        this.weight = weight;
        this.profit = profit;
    }
}

let maxWeight = 5;

const getComboProfit = (fruit) => {
    let total = 0;
    for (let i=0;i<fruit.length;++i) {
        total+=fruit[i].profit;
    }
    return total;
}

const getComboWeight = (fruit) => {
    let total = 0;
    for (let i=0;i<fruit.length;++i) {
        total+=fruit[i].weight;
    }
    return total;
}

const printCombo = (title, fruit) => {
    console.log(title);
    fruit.forEach(x=> console.log(x.name + " "));
}

const getCombinations = (fruit) => {

    let maxCombo = [fruit[0]];
    let currentCombo = [fruit[0]];

    for (let i = 1; i<fruit.length;++i) {
        // console.log(" ");
        // console.log("fruit: " + fruit[i].name);
        // printCombo("maxCombo before: ", maxCombo);
        // printCombo("currentCombo before: ", currentCombo);
        let nextWeight = fruit[i].weight;
        if (getComboWeight(currentCombo)+nextWeight>maxWeight) {
            currentCombo=[fruit[i]];
        }
        else {
            currentCombo = [...currentCombo, fruit[i]];
        }
        if (getComboProfit(currentCombo)>getComboProfit(maxCombo)) {
            maxCombo = currentCombo;
        }

        // printCombo("maxCombo after: ", maxCombo);
        // printCombo("currentCombo after: ", currentCombo);
    }

    return maxCombo;
}

let apple = new Fruit('apple', 2,4);
let orange = new Fruit('orange', 3,5);
let banana = new Fruit('banana', 1, 3);
let melon = new Fruit('melon', 4,7);

let fruit = [apple, orange, banana, melon];

//let fruit = ['a', 'o', 'b', 'm'];

let maxCombo = getCombinations(fruit);

console.log(maxCombo);



