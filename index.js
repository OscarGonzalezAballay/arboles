'use strict'

//Arboles binarios prodevs ejercicio de practica logica

//Árbol Binario de Búsqueda (Binary Search Tree)
//Implementá una clase BinarySearchTree que represente un Árbol Binario de Búsqueda.
// Este árbol debe construirse utilizando recursión y debe cumplir con las siguientes funcionalidades:
// Métodos obligatorios:
//insert(value)
//Inserta un nuevo valor en el árbol respetando la propiedad de los BST:
//Si el valor es menor que el nodo actual, lo coloca en la rama izquierda.
//Si es mayor, lo coloca en la rama derecha.
// Usar recursión.
//contains(value)
//Retorna true si el valor se encuentra en el árbol, false en caso contrario.
//Usar recursión.
//size()
//Retorna la cantidad total de nodos del árbol.
//Usar recursión.


 //Recorridos:
//depthFirstForEach(cb, order)
//Recorre el árbol aplicando la función cb a cada valor de nodo, utilizando recorrido depth-first (profundidad) según el orden especificado:

//"in-order": izquierda → nodo → derecha (default si no se pasa order)

//"pre-order": nodo → izquierda → derecha

//"post-order": izquierda → derecha → nodo

//Usar recursión.

//breadthFirstForEach(cb)
//Recorre el árbol en breadth-first (por niveles) aplicando la función cb a cada nodo.

//Implementar recursivamente simulando una cola con un array como argumento auxiliar.




class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) return true;
    if (value < this.value) {
      return this.left ? this.left.contains(value) : false;
    } else {
      return this.right ? this.right.contains(value) : false;
    }
  }

  size() {
    let leftSize = this.left ? this.left.size() : 0;
    let rightSize = this.right ? this.right.size() : 0;
    return 1 + leftSize + rightSize;
  }

  depthFirstForEach(cb, order = "in-order") {
    if (order === "pre-order") {
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
    } else if (order === "post-order") {
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
    } else { // in-order
      if (this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, order);
    }
  }

  breadthFirstForEach(cb, queue = []) {
    cb(this.value);
    if (this.left) queue.push(this.left);
    if (this.right) queue.push(this.right);
    if (queue.length > 0) {
      queue.shift().breadthFirstForEach(cb, queue);
    }
  }
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
