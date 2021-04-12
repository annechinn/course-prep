
const printArray = (arr, leftIndex=0, rightIndex=arr.length-1) => {

    let result = [];
    for (let i=leftIndex; i<=rightIndex;++i) {
        result.push(arr[i]);
    }
    console.log(result);
}

const swap = (arr, i, j) => {

   console.log("swap: i,j " + i + "," + j);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    printArray(arr, 0, arr.length-1);
}

const merge = (arr, leftIndex, midIndex, rightIndex) => {
    let result = [];
    let l = leftIndex;
    let r = midIndex+1;

    while (l<=midIndex && r<=rightIndex) {
        if (arr[l]<arr[r]) {
            result.push(arr[l]);
            l++;
        }
        else {
            result.push(arr[r]);
            r++;
        }
    }
    while (l<=midIndex) result.push(arr[l++]);
    while(r<=rightIndex) result.push(arr[r++]);

    l = leftIndex;
    for (let i=0;i<result.length;++i) {
        arr[l++] = result[i];
    }
}

const mergeSort = (arr, leftIndex, rightIndex) => {

    let mid = Math.floor((leftIndex+rightIndex)/2);

    if (leftIndex===rightIndex) {
        return;
    }

    mergeSort(arr, leftIndex, mid);
    mergeSort(arr, mid+1, rightIndex);
    merge(arr, leftIndex, mid, rightIndex);
}

const selectionSort = (arr) => {

    for (let i=0;i<arr.length;++i) {
        let minIndex = i;
        for (let j=i;j<arr.length;++j) {
            if (arr[j]<arr[minIndex]) {
                minIndex=j;
            }
        }
        swap(arr, i, minIndex);    
    }
}

const insertionSort = (arr) => {
    for (let i=0; i<arr.length;++i) {
        for (let j=i+1;j>=0;--j) {
            if (arr[j]<arr[j-1]) {
                swap(arr, j-1, j);
            }
        }
    }
}

const bubbleSort = (arr) => {
    for (let i=0;i<arr.length;++i) {
        for (let j=0;j<arr.length-i;++j) {
            if (arr[j]>arr[j+1]) {
                swap(arr, j+1, j);
            }
        }
    }
}

const partition = (arr, low, high) => {

    let pivot = arr[high];
    let i = low;

    // go through the elements from left to right and
    // up until the element that holds the pivot value.
    // move ones that are less than the pivot to the left
    // of lower index. when done, the index moving through 
    // will be at the last index where element is less than pivot.
    // then move the value at the current pivot index to the
    // position following the last one under.

    for (let j=low; j<high;++j) {
        if (arr[j]<=pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, high);
    return i;
}

const quickSort = (arr, low, high) => {

    if (low>=high) return;
    let partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex-1);
    quickSort(arr, partitionIndex+1, high);
}



class BinaryHeap {
    constructor(maxHeap) {
        this.heap = [null]; // 1-based
        this.maxHeap = maxHeap;
    }

    size() {
        return this.heap.length+1;
    }

    isEmpty() {
        return this.size()===0;
    }

    topIndex() {
        return 1;
    }

    peek() {
        return this.heap[1];
    }

    lastIndex() {
        return this.size();
    }

    push(elements) {
        for (let el of elements) {
            this.heap.push(el);
            this.bubbleUp(this.lastIndex());
        }

        printArray(this.heap);
    }
    
    bubbleUp(n) {
        while (n>this.topIndex()) {
            if (!this.elementShouldBubbleUp(n)) {
                break;
            }

            this.swap(n, this.parentIndex(n));
            n = this.parentIndex(n);
        }
    }

    elementShouldBubbleUp(n) {
        console.log("elementShouldBubbleUp: " + n);
        let child = this.heap[n];
        let parent = this.parent(n);
        if (this.scoreFunction(child)>this.scoreFunction(parent)) {
            return true;
        }

        return false;
    }

    sinkDown(n) {
        let parent = this.heap[n];

        while (true) {

            let lChild = this.leftChild(n);
            let rChild = this.rightChild(n);
            let swapIndex = null;

            if (lChild && this.scoreFunction(lChild)<this.scoreFunction(parent)) {
                swapIndex = this.leftChildIndex(n);
            }

            if (rChild) {
                if (this.scoreFunction(rChild)<swapIndex?this.scoreFunction(lChild):this.scoreFunction(parent)) {
                    swapIndex = this.rightChildIndex(n);
                }
            }

            if (!swapIndex) {
                break;
            }
        }
    }

    pop() {
        const elementToPop = this.peek();
        const last = this.heap.pop();
        
        if (!this.isEmpty()) {
            this.heap[this.topIndex()] = last;
            this.sinkDown(this.topIndex());
        }
        
        return elementToPop;
    }

    remove(node) {

        for (let i=this.topIndex();i<=this.lastIndex();++i) {
            if (this.heap[i]!=node) { continue; }

            let last = this.heap.pop();
            if (i=== this.size()) { break; }

            this.heap[i] = last;
            this.bubbleUp(i);
            this.sinkDown(i);
            break;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _maxHeapScoreFunction(element) {
        return -element.priority;
    }
    
    _minHeapScoreFunction(element) {
        return element.priority;
    }

    scoreFunction(element) {
        if (this.maxHeap) {
            return this._maxHeapScoreFunction(element);
        }
        else {
            return this._minHeapScoreFunction(element);
        }
    }

    leftChildExists(parentIndex) {
        return this.leftChildIndex(parentIndex)<this.size();
    }
    
    rightChildExists(parentIndex) {
        return this.rightChildIndex(parentIndex)<this.size();
    }

    leftChild(parentIndex) {
        if (!this.leftChildExists(parentIndex)) return null;
        return this.heap[this.leftChildIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        if (!this.rightChildExists(parentIndex)) return null;
        return this.heap[this.rightChildIndex(parentIndex)];
    }

    parent(parentIndex) {
        return this.heap[parentIndex];
    }

    parentIndex(childIndex) {
        return Math.floor(childIndex/2);
    }

    leftChildIndex(parentIndex) {
        return parentIndex*2;
    }

    rightChildIndex(parentIndex) {
        return (parentIndex*2)+1;
    }
}

//mergeSort(arr, 0, arr.length-1);
//selectionSort(arr);
// insertionSort(arr);
// bubbleSort(arr);
//quickSort(arr, 0, arr.length-1);

class HeapNode {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
const arr = [
    new HeapNode(1, 1), 
    new HeapNode(2, 2), 
    new HeapNode(3,3), 
    new HeapNode(4, 4), 
    new HeapNode(5, 5), 
    new HeapNode(6, 6)
];

const heap = new BinaryHeap(true);
heap.push(arr);
printArray(heap);
heap.pop();
printArray(heap);



