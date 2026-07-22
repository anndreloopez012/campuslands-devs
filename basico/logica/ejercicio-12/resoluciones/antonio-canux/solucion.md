# Ejercicio #12 - Cpntrol de inventario

**Camper**: Antonio Canux

## Solución (Lógica en JavaScript):

```javascript
const inventario = [
  { nombre: "Hoodie Oversize", talla: "M", stock: 3, ventasSemana: 8 }, 
  { nombre: "Cargo Pants", talla: "L", stock: 12, ventasSemana: 3 },    
  { nombre: "Graphic Tee", talla: "S", stock: 4, ventasSemana: 5 },     
  { nombre: "Sneakers Retro", talla: "M", stock: 15, ventasSemana: 6 }  
];

function generarReporteInventario(articulos) {
  const reporte = articulos.map(prenda => {
    const alertaBajoStock = prenda.stock < 5;
    const calculoReposicion = (prenda.ventasSemana * 2) - prenda.stock;
    const reposicionSugerida = Math.max(0, calculoReposicion);

    return {
      nombre: prenda.nombre,
      talla: prenda.talla,
      stockActual: prenda.stock,
      alertaBajoStock: alertaBajoStock,
      reposicionSugerida: reposicionSugerida
    };
  });

  reporte.sort((a, b) => a.talla.localeCompare(b.talla));

  return reporte;
}

const resultado = generarReporteInventario(inventario);

console.table(resultado);
```

## Explicación de cómo pensé el problema:
Para este sistema de inventario, decidí estructurar la información base en un arreglo de objetos.

Utilicé `Array.prototype.map()` para transformar los datos iniciales, evaluando prenda por prenda.

Para evitar la reposición negativa (punto 4), en lugar de usar un condicional `if` tradicional, apliqué `Math.max(0, calculoReposicion)`. Esta es una técnica muy útil en lógica matemática de programación: compara 0 contra el resultado del cálculo y siempre devuelve el número mayor, eliminando automáticamente los negativos.

Para cumplir con la visualización "por talla", utilicé `Array.prototype.sort()` comparando el campo talla. De esta manera, el reporte agrupa visualmente todas las tallas 'L', luego las 'M' y luego las 'S', lo cual es vital para el personal de bodega.