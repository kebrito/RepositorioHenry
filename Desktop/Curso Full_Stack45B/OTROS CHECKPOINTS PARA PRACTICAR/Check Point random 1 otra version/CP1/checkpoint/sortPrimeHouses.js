//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
//
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false
"use strict";

let noSwaps;

    do {
        noSwaps = true;

        for (let i = 0; i < todasLasPeliculas.length - 1; i++) {
            if (todasLasPeliculas[i].año > todasLasPeliculas[i + 1].año) {
                const temp = todasLasPeliculas[i];
                todasLasPeliculas[i] = todasLasPeliculas[i + 1];
                todasLasPeliculas[i + 1] = temp;
                noSwaps = false;
            }
        }
    } while (!noSwaps);

    return todasLasPeliculas;
}














    nombre: Ratatouille   nombre: Ratatouille

    año: 2007       año: 2007

    genero: Infantil/Animación   genero: Infantil/Animación

    taquillera: false       taquillera: false

    nombre: Up  nombre: Up

    año: 2009   año: 2009

    genero: Infantil/Animación/Aventura   genero: Infantil/Animación/Aventura

    taquillera: true    taquillera: true

    nombre: Shang-Chi y la leyenda de los Diez Anillos

    año: 2021

    genero: Fantasia/Aventura/Acción

    taquillera: true

    nombre: Black Panther

    año: 2018

    genero: Fantasia/Aventura/Acción

    taquillera: true

Expected Output

    



    



    

   

    

   

    nombre: Black Panther

    año: 2018

    genero: Fantasia/Aventura/Acción

    taquillera: true

    nombre: Shang-Chi y la leyenda de los Diez Anillos

    año: 2021

    genero: Fantasia/Aventura/Acción

    taquillera: true















const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

class BinarySearchTree {
	constructor(valor) {
		this.value = valor;
		this.left = null;
    this.right = null
    
    ---------------------------
      
      const prendasEncontradas = [];

  // Función auxiliar recursiva para buscar en el árbol.
  const buscarPrenda = (nodo) => {
    if (nodo === null) {
      // Si el nodo es nulo, hemos llegado al final de esta rama.
      return;
    }
    if (nodo.value.nombre === prendaBuscada) {
      // Si el nombre de la prenda en el nodo actual coincide con el buscado, agregamos al resultado.
      for (let i = 0; i < nodo.value.num; i++) {
        prendasEncontradas.push(nodo.value.nombre);
      }
    }
    // Continuamos la búsqueda en los subárboles izquierdo y derecho.
    buscarPrenda(nodo.left);
    buscarPrenda(nodo.right);
  };

  // Iniciamos la búsqueda desde la raíz del árbol.
  buscarPrenda(this.root);
  return prendasEncontradas;
};
    
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



    const prendasEncontradas = [];

  
  const buscarPrenda = (nodo) => {
    if (nodo === null) {
 
      return;
    }
    if (nodo.value.nombre === prendaBuscada) {
     
      for (let i = 0; i < nodo.value.num; i++) {
        prendasEncontradas.push(nodo.value.nombre);
      }
    }
  
    buscarPrenda(nodo.left);
    buscarPrenda(nodo.right);
  };


  buscarPrenda(this.root);
  return prendasEncontradas;
};
      class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
    }

    insert(value) {
        const newNode = new Node(value);

        const insertNode = (node, newNode) => {
            if (newNode.value.nombre < node.value.nombre) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        insertNode(this.root, newNode);
    }

    obtenerPrendas(prendaBuscada) {
        const prendasEncontradas = [];

        const buscarPrendas = nodo => {
            if (nodo === null) {
                return;
            }

            if (nodo.value.nombre === prendaBuscada) {
                prendasEncontradas.push(nodo.value.nombre);
            }

            buscarPrendas(nodo.left);
            buscarPrendas(nodo.right);
        };

        buscarPrendas(this.root);
        return prendasEncontradas;
    }
};
	}

	insert(value) {
		if (value.nombre < this.value.nombre) {
			if (this.left === null) {
				var newTree = new BinarySearchTree(value);
				this.left = newTree;
			} else this.left.insert(value);
		} else {
			if (this.right === null) {
				var newTree = new BinarySearchTree(value);
				this.right = newTree;
			} else this.right.insert(value);
		}
	}
}

const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 13 });
arbol.insert({ nombre: "Zapato", num: 7 });
arbol.insert({ nombre: "Camiseta", num: 24 });
arbol.insert({ nombre: "Pollera", num: 6 });
arbol.insert({ nombre: "Zapato", num: 16 });
arbol.insert({ nombre: "Chaqueta", num: 27 });
arbol.insert({ nombre: "Chaqueta", num: 3 });
arbol.insert({ nombre: "Zapato", num: 45 });
arbol.insert({ nombre: "Zapato", num: 4 });


/*
 * Completa el método 'obtenerPrendas' a continuación.
 *
 * La función debería retornar un ARREGLO DE STRINGS.
 * La función recibe como parámetro un STRING.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

"use strict";



let prendasEncontradas = [];
    
    const buscarPrenda = (nodo) => {
        if (nodo === null) {
            return;
        }
        
        if (nodo.value.nombre === prenda) {
            prendasEncontradas.push(nodo.value.nombre);
        }
        
        if (prenda < nodo.value.nombre) {
            buscarPrenda(nodo.left);
        } else if (prenda > nodo.value.nombre) {
            buscarPrenda(nodo.right);
        } else {
            buscarPrenda(nodo.left);
            buscarPrenda(nodo.right);
        }
    };
    
    buscarPrenda(this.root);
    return prendasEncontradas;
};

let prendasEncontradas = [];
    
    const buscarPrenda = (nodo) => {
        if (nodo === null) {
            return;
        }
        
        if (nodo.value.nombre === prenda) {
            prendasEncontradas.push(nodo.value.nombre);
        }
        
        if (prenda < nodo.value.nombre) {
            buscarPrenda(nodo.left);
        } else if (prenda > nodo.value.nombre) {
            buscarPrenda(nodo.right);
        } else {
            buscarPrenda(nodo.left);
            buscarPrenda(nodo.right);
        }
    };
    
    buscarPrenda(this.root);
    return prendasEncontradas;
};

function pelisEstrenos(catalogo) {
    return function(actualizarEstrenos(estrenos) {
        const encontrado = [];

        estrenos.forEach(nombre => {
            const pelicula = catalogo.find(pelicula => pelicula.nombre === nombre);
            if (pelicula) {
                pelicula.estreno = true;
                encontrado.push(nombre);
            }
        });

        if (encontrado.length === estrenos.length) {
            return catalogo;
        } else {
            return "No se encontró alguna de esas películas en nuestro catálogo";
        }
    });
}

function sortPrimeHouses(array) {
  // Tu código aquí:
  let aux;
  for(let i = 0; i < array.length; i++){
    let min = i;

    if(!esPrimo(array[i])) return false;

    for(let j = i + 1; j < array.length; j++){
      if(array[min] > array[j]){
        min = j;
      }        
    }

    if(min !== i){
      aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  } 

  return array;
}

function esPrimo(numero){
	if (numero == 0 || numero == 1 || numero == 4) return false;

	for (let x = 2; x < numero / 2; x++) {
		if (numero % x === 0) return false;
	}

	return true;
}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};