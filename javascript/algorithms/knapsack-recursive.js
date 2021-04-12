

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

const printMemo = (title, memo) => {
    console.log(title);
    for (const [key, value] of Object.entries(memo)) {
        console.log(`${key}: ${value}`);
      }
}

const getComboKey = (combo) => {
    let key = '';
    for (let i =0;i<combo.length;++i) {
        key+= combo[i].name + ':';
    }
    return key;
}


// recursive solution
//
const getCombinations = (fruit, memo = {}) => {
    if (fruit.length===0) return [[]];
   
    const first = fruit[0];
    const rest = fruit.slice(1);

    const newCombos = [];
    const restOfCombos = getCombinations(rest);
    restOfCombos.forEach(combo=> {
        const newCombo = [...combo, first];
        let totalWeight = 0;
        for (let i=0;i<newCombo.length;++i) {
            totalWeight+= newCombo[i].weight;
        }
        if (totalWeight<=maxWeight){
            newCombos.push(newCombo);
        }
    });
    
    let result = [...restOfCombos, ...newCombos];
    return result;
}

let apple = new Fruit('apple', 2,4);
let orange = new Fruit('orange', 3,5);
let banana = new Fruit('banana', 1, 3);
let melon = new Fruit('melon', 4,7);

let fruit = [apple, orange, banana, melon];

//let fruit = ['a', 'o', 'b', 'm'];

let combinations = getCombinations(fruit);

console.log(combinations);

let maxProfit = 0;
let bestCombo = [];
combinations.forEach(combo=> {
    let profitForCombo = 0;
    combo.forEach(fruit=> {
        profitForCombo+=fruit.profit;
    });
    if (profitForCombo>maxProfit) {
        maxProfit = profitForCombo;
        bestCombo = combo;
    }
});

console.log("");
console.log(bestCombo);