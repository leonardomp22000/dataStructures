class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBegining(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtEnd(data) {
    const newNode = new Node(data);
    let current = this.head;
    if (current === null) {
      this.head = newNode;
    }
    if (current != null) {
      while (current.next != null) {
        console.log(current.data);
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkedList();

list.insertAtEnd(100);
list.printList();
