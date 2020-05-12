/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at that */

  _get(idx) {
    let i = 0;
    let current = this.head;

    while (current !== null && i !== idx) {
      i++;
      current = current.next;
    }

    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    // handle empty list
    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    // handle empty list
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // declare val;
    // if tail is null, return
    // this tail is not equal to null, set val to tail
    // find the node with next of val / tail
    // set that next to null
    // decrement length
    // return val

    // if (this.head === null) throw new Error("Invalid index");

    // let nodeToDelete = this.tail;
    // let current = this.head;

    // while (current !== null) {
    //   if (current.next === this.tail) {
    //     this.tail = current;
    //     current.next = null;
    //   }
    //   current = current.next;
    //   console.log(`\n\n\n The value of current is `, current, '\n\n\n');
    // }

   // case of a list with only one element

    // 

    this.length--;
    return nodeToDelete.val;

  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // if the index is greater than or equal to the length of the list, return an error
    if (idx >= this.length || idx < 0) throw new Error("Invalid index");

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // if the index is greater than or equal to the length of the list, return an error
    if (idx >= this.length || idx < 0) throw new Error("Invalid index");

    let current = this._get(idx);
    current.val = val;

    return val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // if the index is greater than or equal to the length of the list, return an error
    if (idx > this.length || idx < 0) throw new Error("Invalid index");

    if (idx === 0) return this.unshift(val);
    if (idx === this.length - 1) return this.pop(val);

    let newNode = new Node(val);
    let prev = this._get(idx - 1);
    let next = prev.next;
    newNode.next = next;
    prev.next = newNode;

    this.length++;
    return val;
  }

  /** removeAt(idx): return & remove item at idx */

  removeAt(idx) {
    // handle empty list and negative idx
    if (idx >= this.length || idx < 0) throw new Error("Invalid index");
    
    let val;

    // remove head
    if (idx === 0) {
      val = this.head;
      this.head = this.head.next;
      this.length--;
      return val;
    }

    let prev = this._get(idx - 1);
    
    // remove tail
    if (idx === (this.length - 1)) {
      val = this.tail;
      prev.next = null;
      this.length--;
      return val;
    }

    // remove from middle
    prev.next = prev.next.next;
    this.length--;
    return val;
    
  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
