'use strict'

//Arboles binarios prodevs ejercicio de practica logica

//Árbol Binario de Búsqueda (Binary Search Tree)
//Implementá una clase BinarySearchTree que represente un Árbol Binario de Búsqueda. Este árbol debe construirse utilizando recursión y debe cumplir con las siguientes funcionalidades:
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


}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
