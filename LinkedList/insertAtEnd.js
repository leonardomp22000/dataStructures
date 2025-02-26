{
  /**Insert a node at the end */
}
// Node strucructure

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
  addFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  addAtEnd(data) {
    const node = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  printList() {
    let current = this.head;
    let answer = "";
    if (this.head === null) {
      answer = "La lista esta vacia";
      return answer;
    }
    while (current) {
      if (current.next) {
        answer += current.data + "->";
      } else {
        answer += current.data;
      }
      current = current.next;
    }
    return answer;
  }
}

const list1 = new LinkedList();

list1.addFirst(10);
list1.addFirst(20);
list1.addFirst(30);
list1.addFirst(40);
list1.addFirst(50);

list1.addAtEnd(80);

console.log(list1.printList());

// const list = new LinkedList();
// const node1 = new Node();

// function insertNodeAtTail(head, data) {
//   const newNode = new Node(data);
//   let current = head;
//   if (head === null) {
//     head = newNode;
//     return head;
//   } else {
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = newNode;
//     return head;
//   }
// }
