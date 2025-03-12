class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head;

head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

function printElements(head) {
  let current = head;
  let answer = "";
  while (current) {
    answer += current.data + "->";
    current = current.next;
  }
  return answer + null;
}

function nodeWithReference(referenceNode) {
  const newNode = new Node(80);
  newNode.next = referenceNode.next;
  referenceNode.next = newNode;
}

function addAtEnd(head) {
  const newNode = new Node(90);
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}
nodeWithReference(head.next);
head = addAtEnd(head);
console.log(printElements(head));
