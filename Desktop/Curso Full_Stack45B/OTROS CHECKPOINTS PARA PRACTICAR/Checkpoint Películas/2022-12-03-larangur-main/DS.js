function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

function Stack() {
  this.array = [];
}

Stack.prototype.push = function (elemento) {
  this.array.push(elemento);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

Stack.prototype.size = function () {
  return this.array.length;
};

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (valor) {
  var nuevoNodo = new Node(valor);

  if (!this.head) {
    this.head = nuevoNodo;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
  }
};

LinkedList.prototype.remove = function () {
  if (!this.head) {
    return undefined;
  }

  if (this.head.next === null) {
    var unicoNodo = this.head;
    this.head = null;
    return unicoNodo.value;
  }

  var nodoActual = this.head.next;
  var nodoPrevious = this.head;
  while (nodoActual.next !== null) {
    nodoPrevious = nodoActual;
    nodoActual = nodoActual.next;
  }
  nodoPrevious.next = null;
  return nodoActual.value;
};

LinkedList.prototype.search = function (arg) {
  var nodoActual = this.head;

  if (nodoActual === null) {
    return null;
  }

  while (nodoActual !== null) {
    if (typeof arg === "function") {
      if (arg(nodoActual.value)) {
        return nodoActual.value;
      }
    } else if (nodoActual.value === arg) {
      return nodoActual.value;
    }
    nodoActual = nodoActual.next;
  }

  return null;
};

function Node(valor) {
  this.value = valor;
  this.next = null;
}

function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value.horario < this.value.horario) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value.horario === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};



function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].año < right[rightIndex].año) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function ordenarPeliculas(catalogo, nuevasPeliculas) {
  const todasLasPeliculas = catalogo.concat(nuevasPeliculas);
  return mergeSort(todasLasPeliculas);
}
module.exports = {
  Queue,
  Stack,
  Node,
  LinkedList,
  BinarySearchTree,
};
