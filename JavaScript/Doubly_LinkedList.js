class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }
  
  insert_at_last(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      newNode.prev = this.last;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  
  delete_from_last() {
    if (this.length === 0) return undefined;
    const temp = this.last;
    if (this.length === 1) {
      this.head = null;
      this.last = null;
    } else {
      this.last = temp.prev;
      this.last.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  
  delete_from_first() {
    if (this.length === 0) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.last = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  
  insert_at_first(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
 
 display(){
  let temp = this.head;
  while(temp != null){
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const lst = new DoublyLinkedList;
lst.insert_at_first(1);
lst.insert_at_first(2);
lst.insert_at_first(3);
lst.insert_at_first(4);
lst.insert_at_last(5);

lst.display();
