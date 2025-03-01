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

  deleteNode(position) {
    let nextNode;
    let current = this.head;
    let counter = 0;
    let prev;
    if (this.head === null) {
      return "La lista esta vacia";
    }
    if (position === 0) {
      nextNode = current.next;
      this.head = nextNode;
    } else {
      while (counter <= position) {
        if (counter === position - 1) {
          prev = current;
        }
        current = current.next;
        counter++;
      }
      prev.next = current;
    }
  }

  addSpecificPosition(data, position) {
    const node = new Node(data);
    if (position === 0 || this.head === null) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head; // Current no es una copia de head, si no que se hace una referencia a la memoria del objeto
      let nextNode;
      let counter = 1;
      while (current) {
        if (counter === position) {
          break;
        }
        current = current.next; // No se afecta llist o en este caso head, ya que solo se cambia el puntero de lugar
        counter++;
      }
      nextNode = current.next;
      current.next = node; // En este caso ya que se accede a una propiedad de un nodo al cual current esta apuntando, es por eso que se modifica llist o en este caso la lista
      node.next = nextNode;
    }
  }
  addFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this.head;
  }
  // Se usa una variable auxiliar en este caso current, para recorrer la lista, ya de esta forma se hace una copia del head. No se modifica la referencia inicial.
  addAtEnd(data) {
    const node = new Node(data);
    let current = this.head;
    while (current.next) {
      //Se evalua el next la referencia del siguiente nodo, cuando la referencia es null, entonces se detiene y se inserta el siguiente nodo
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
      //Se evaluan todos los nodos de su valor next
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
list1.addSpecificPosition(4, 1);
list1.deleteNode(3);
console.log(list1.printList());

{
  /** Notas del ejercicio addSpecificPosition
1️⃣ JavaScript maneja objetos por referencia, no por valor.
2️⃣ current es solo una variable auxiliar que apunta a nodos dentro de llist, pero las modificaciones que haces en los nodos afectan a llist directamente.
3️⃣ No retornamos current porque perderíamos la estructura completa de la lista.
4️⃣ Retornamos llist porque es la cabeza de la lista y mantiene toda la estructura.
  */
}

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
