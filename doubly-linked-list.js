/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at that idx */

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
    newNode.prev = null;
    if (this.head === null) this.head = newNode;

    if (this.tail !== null) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

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
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1).val;
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0).val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // if the index is greater than or equal to the length of the list, throw an error
    if (idx >= this.length || idx < 0) throw new Error("Invalid index");

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // if the index is greater than or equal to the length of the list, throw an error
    if (idx >= this.length || idx < 0) throw new Error("Invalid index");

    let current = this._get(idx);
    current.val = val;

    return val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // if the index is greater than the length of the list, throw an error
    if (idx > this.length || idx < 0) throw new Error("Invalid index");

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let newNode = new Node(val);
    let next = this._get(idx);
    let prev = next.prev;

    newNode.next = next;
    newNode.prev = prev;
    prev.next = newNode;

    this.length++;
    return val;
  }

  /** removeAt(idx): return & remove node at idx */

  removeAt(idx) {
    // handle empty list and negative idx
    if (idx >= this.length || idx < 0) throw new Error("Invalid index");
    
    let val;

    // remove head and handle case of list with only one node
    if (idx === 0) {
      val = this.head;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;

      this.length--;
      if (this.length === 0) this.head = null;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    
    // remove tail
    if (idx === (this.length - 1)) {
      val = this.tail;
      this.tail = this.tail.prev;
      if (this.tail.prev) this.tail.prev.next = null;
      
      this.length--;
      if (this.length < 2) this.tail = this.head;
      return val;
    }
    
    // remove from middle
    let current = this._get(idx);
    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.length--;
    return val;
    
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;

    if (this.length === 0) return 0;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return (sum / this.length);
  }
}

module.exports = DoublyLinkedList;
