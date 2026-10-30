class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //   function for inserting value in binary search tree
  insert(value) {
    // if root is not created, then create it
    if (!this.root) {
      const newNode = new Node(value);
      this.root = newNode;
      return this;
    }

    // get the currentRoot
    const currentRoot = this.root;

    // run addValue function recursively
    return this.addValue(value, currentRoot);
  }

  //   recursive function for adding value to binary search tree
  addValue(value, node) {
    // if value is less than current node value, then insert it on left
    if (value < node.value) {
      // if there is no left node, create the node
      if (node.left === null) {
        const newNode = new Node(value);
        node.left = newNode;
        return this;
      }

      //   if there is a left node, use recursive function untill it doesn't found left node to be null
      return this.addValue(value, node.left);
    }
    // if value is bigger than current node then insert it on right
    else if (value > node.value) {
      // if there is no right node, create it
      if (node.right === null) {
        const newNode = new Node(value);
        node.right = newNode;
        return this;
      }

      //   if there is right node, use recursive function untill it doesn't found any right node
      return this.addValue(value, node.right);
    }
    // if node is same as current node, return undefined
    // we don't insert this on the binary search tree because it already inserted
    else {
      return undefined;
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(45);
bst.insert(12);
bst.insert(29);
bst.insert(199);
bst.insert(68);
bst.insert(200);
bst.insert(11);
bst.insert(10);
bst.insert(1);
bst.insert(2002);
bst.insert(2005);
bst.insert(46);

console.log(JSON.stringify(bst, null, 4));
