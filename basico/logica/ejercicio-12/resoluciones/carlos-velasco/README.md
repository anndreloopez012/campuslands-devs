# Control de inventario streetwear

## Sistema de Gestión de Inventario (JS)

Este script automatiza el análisis del inventario de productos, identificando artículos con niveles críticos de existencias y generando recomendaciones automáticas de reabastecimiento basadas en la rotación de ventas semanal.

* **Descripción del proceso:**
* **Análisis de estado:** Clasifica automáticamente cada producto como "Bajo Stock" si la cantidad actual es menor a 5 unidades.
* **Cálculo de reposición:** Implementa una lógica predictiva que sugiere la cantidad a reponer calculando el doble de las ventas semanales menos el stock actual, asegurando un margen de seguridad.
* **Visualización de datos:** Formatea el reporte final como una tabla para facilitar la auditoría rápida de los productos críticos.


* **Tecnologías:**
* JavaScript (ES6+).
* Funciones de orden superior (`map`).



### Lógica del Código

```javascript
// Transformación del inventario mediante un reporte calculado
const reporte = productos.map(item => {
  const bajoStock = item.stock < 5;
  // Lógica: Si hay bajo stock, se proyecta el doble de ventas de la semana
  const reposicionSugerida = bajoStock 
    ? Math.max(0, (item.ventasSemana * 2) - item.stock) 
    : 0;

  return {
    ...item,
    estado: bajoStock ? "Bajo Stock" : "Stock Saludable",
    reposicionSugerida
  };
});

```
---

### Explicación de la Lógica

El código emplea una estrategia de **procesamiento funcional** para transformar datos estáticos en información accionable:

1. **Detección de umbral**: La variable `bajoStock` actúa como un *flag* booleano que simplifica todas las decisiones posteriores. Es una práctica recomendada para mejorar la legibilidad del código.
2. **Lógica predictiva (Operador Ternario)**: La línea de `reposicionSugerida` es el núcleo del sistema.
* Utiliza `Math.max(0, ...)` como medida de seguridad para evitar números negativos en caso de que el stock actual fuera excepcionalmente alto o los cálculos arrojaran inconsistencias.
* La fórmula `(ventasSemana * 2) - stock` sigue una política de mantener stock para cubrir dos semanas de demanda, lo que protege contra quiebres de inventario.


3. **Inmutabilidad**: Al igual que en ejercicios previos, el uso de `{ ...item, ... }` garantiza que no modifiquemos los datos originales del *array* `productos`, permitiendo que el reporte sea un nuevo conjunto de datos que convive con el original sin sobrescribirlo.


**Estructura del Proyecto:**

```plaintext
sistema-inventario/
├── inventario.js          
└── README.md       

```

Hecho por:
Carlos Velasco

