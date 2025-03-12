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
  current = head;
  let answer = "";
  while (current) {
    answer += current.data + "->";
    current = current.next;
  }
  return answer + null;
}

function SearchElement(head, x) {
  let current = head;
  while (current) {
    if (current.data === x) {
      return "yes";
    }
    current = current.next;
  }
  return "No";
}
console.log(SearchElement(head, 50));
console.log(printElements(head));
