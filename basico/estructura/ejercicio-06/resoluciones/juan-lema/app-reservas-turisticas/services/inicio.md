# Page: inicio

## Proposito

Vista principal de la app. Muestra el listado completo de destinos
usando el componente `card-destino` por cada elemento.

## Que hace esta page

1. Llama a `destinos-service.obtenerDestinos()` para traer los datos.
2. Recorre el resultado y renderiza un `card-destino` por cada destino.
3. Si el arreglo viene vacio, muestra el mensaje
   "No hay destinos disponibles por ahora." en vez de dejar la pantalla
   en blanco.

## Como crecería esta page

Al crecer el proyecto, `inicio` dejaria de mostrar todos los destinos
de golpe y agregaria filtros por categoria (usando
`filtrarPorCategoria` del service) y una barra de busqueda por nombre.
Tambien podria dividirse en `pages/inicio.md` (listado) y
`pages/detalle-destino.md` (vista individual al hacer clic en una card).
