Copy code
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    obtenerPrendas(nombrePrenda) {
        const prendasEncontradas = [];

        const buscarPrenda = nodo => {
            if (nodo) {
                if (nodo.value.nombre === nombrePrenda) {
                    prendasEncontradas.push(nodo.value.nombre);
                }
                buscarPrenda(nodo.left);
                buscarPrenda(nodo.right);
            }
        };

        buscarPrenda(this.root);
        return prendasEncontradas;
    }
}