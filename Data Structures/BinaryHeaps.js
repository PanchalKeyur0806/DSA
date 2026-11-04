class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // function for inserting value to binaryheap
  insert(value) {
    // push value
    this.values.push(value);

    // function for updaing parent after inserting value
    this.bubbleUp();
  }

  // function for removing maximum value
  extractMax() {
    // get the first element
    let max = this.values[0];
    // remove the last elemetn
    let end = this.values.pop();

    // if length is bigger than zero
    if (this.values.length > 0) {
      // add last element to the top
      this.values[0] = end;
      // use shrinkDown function
      this.shrinkDown();
    }

    // return deleted element
    return max;
  }

  // helper function of insert
  bubbleUp() {
    // get the index of newly inserted value
    let index = this.values.length - 1;
    // get the value
    const element = this.values[index];

    // loop untill index become zero, if current inserted value is bigger
    // if value is smaller break the loop
    while (index > 0) {
      // get the parent index
      const parentIdx = Math.floor((index - 1) / 2);
      // get the parent value
      const parent = this.values[parentIdx];

      // if current element is smaller than parent,
      // break the loop
      if (element <= parent) {
        break;
      }

      // swap the values
      this.values[parentIdx] = element;
      this.values[index] = parent;

      // now update the index to parent, and loop again if parent is smaller than current inserted value
      index = parentIdx;
    }
  }

  // helper function for removing the element
  shrinkDown() {
    let index = 0;
    // get the element by index
    let element = this.values[0];
    // get the total length of the binaryheap
    let length = this.values.length;

    // run untill loop breaks
    while (true) {
      // get the left and right child index
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;

      // create left and right child variable
      let leftChild, rightChild;
      // variable is used for tracking the index
      // this is used for swapping elements
      let swap = null;

      // check that left child index is valid
      if (leftChildIdx < length) {
        // get the left child element
        leftChild = this.values[leftChildIdx];

        // if left child is bigger than current element
        if (leftChild > element) {
          // store left child index to swap variable
          swap = leftChildIdx;
        }
      }

      // check that right side index is valid
      if (rightChildIdx < length) {
        // get the right child element
        rightChild = this.values[rightChildIdx];

        // first condition checks, if right element is bigger than current element, and swap should be null
        // second condition checks if right side of the element is bigger than left side element
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          // store the right child element index to swap variable
          swap = rightChildIdx;
        }
      }

      // if elements are not swapped then break the loop
      // all the items are in correct order
      if (swap === null) break;

      // swap the values
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      // update the index variable to swap
      // now second time loop with start with swapped index
      index = swap;
    }
  }
}

const binaryHeap = new MaxBinaryHeap();
console.log(binaryHeap.insert(55));
console.log(binaryHeap.insert(56));
console.log(binaryHeap.values);

console.log(binaryHeap.extractMax());
console.log(binaryHeap.values);

console.log(binaryHeap.extractMax());
console.log(binaryHeap.values);
