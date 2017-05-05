//-------------------------------------------------------
// Definicion del objeto grafo
var grafoDirigido = {};

// Se crea el nodo fuente, todos los nodos del grafo tendrian estas dos propiedades, dentro de la lista nodosAdyacentes hay objetos Nodo
var nodoFuente = {
    idNodo: 4,
    nodosAdyecentes: []
};

grafoDirigido.fuente = nodoFuente;

//-------------------------------------------------------
// Definicion del objeto arbol binario
var arbolBinario = {};

// Se crea el nodo raiz, todos los nodos del arbol tendran estas 3 propiedades, nodoDerecha y nodoIzquierda tambien son objetos nodo
var nodoRaiz = {
    idNodo: 8,
    nodoDerecha: null,
    nodoIzquierda: null
}
arbolBinario.raiz = nodoRaiz;

//-------------------------------------------------------
// Operaciones

grafoDirigido.buscar = function funcionBuscar(idNodo) {
    // Implementar
}

grafoDirigido.agregar = function funcionAgregar(nodo){
    // Implementar
}

arbolBinario.buscar = function funcionBuscar(idNodo) {
    // Implementar
}

arbolBinario.agregar = function funcionAgregar(nodo){
    // Implementar
}