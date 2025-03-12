class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head;

function addNodeAtFirst(data) {
  const newNode = new Node(data);
  newNode.next = head;
  head = newNode;

  return head;
}
function specificPosition(head, position, data) {
  let current = head;
  let length = 0;
  const newNode = new Node(data);
  if (!head) {
    return null;
  }
  if (!head.next) {
    return null;
  }

  while (current) {
    length++;
    current = current.next;
  }

  if (position > length) {
    return null;
  }
  if (position === 0) {
    newNode.next = head;
    return newNode;
  }
  current = head;

  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;
  return head;
}

function printList(head) {
  let current = head;
  let answer = "";
  while (current) {
    answer += current.data + "->";
    current = current.next;
  }
  return answer + null;
}
console.log(addNodeAtFirst(10));
console.log(addNodeAtFirst(20));
console.log(addNodeAtFirst(30));
head = specificPosition(head, 6, 80);
// console.log(specificPosition(head, 0, 80));
console.log(printList(head));
