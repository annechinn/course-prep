
class Item {
    constructor(name, weight, profit) {
        this.name = name;
        this.weight = weight;
        this.profit = profit;
    }
}

class KnapSack {

    solveKnapSack(items) {
        return this.solveKnapSackRecursive(items, 0);
    }

    solveKnapSackRecursive(items, currentIndex) {

        if (currentIndex=items.length) return 0;

        

    }
}

let apple = new Item('apple', 2,4);
let orange = new Item('orange', 3,5);
let banana = new Item('banana', 1, 3);
let melon = new Item('melon', 4,7);

let items = [apple, orange, banana, melon];

let knapSack = new KnapSack();

let result = knapSack.solveKnapSack(items);