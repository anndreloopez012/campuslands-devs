# Bitácora de viajes extremos

## Gestión de Reservas de Viajes (JS)

Este script implementa un motor de filtrado y cálculo de costos para un sistema de reservas de actividades turísticas. Su objetivo es garantizar la seguridad de los usuarios aplicando restricciones de edad y calculando automáticamente los impuestos correspondientes.

* **Descripción del proceso:**
* **Validación de seguridad:** Se filtra la lista original de reservas para excluir a menores de edad (menores de 18 años) que intenten realizar actividades de alto riesgo como el paracaidismo.
* **Cálculo de impuestos:** Se transforma la lista aprobada mediante el mapeo de cada reserva, calculando el costo total tras aplicar un impuesto del 12%.
* **Generación de resumen:** Se despliega en consola la información consolidada de los usuarios aptos para participar, mostrando el costo final desglosado.


* **Tecnologías:**
* JavaScript (ES6+).
* Funciones de orden superior (`filter`, `map`).



### Lógica del Código

```javascript
// 1. Constante de impuestos
const IMPUESTO = 0.12;

// 2. Procesamiento de datos
const procesarReservas = (lista) => {
  return lista
    // Exclusión por edad en actividades de riesgo
    .filter(r => !(r.actividad === "paracaidismo" && r.edad < 18))
    // Transformación: Adición del costo total calculado
    .map(r => ({
      ...r,
      costoTotal: r.costoBase * (1 + IMPUESTO)
    }));
};

```
----

### Explicación de la Lógica

El código se basa en una arquitectura de **flujo de datos declarativo**, muy común en el desarrollo moderno de JavaScript:

1. **`filter` (Seguridad)**: Se utiliza la lógica negada `!(r.actividad === "paracaidismo" && r.edad < 18)`. Esto garantiza que solo los registros que **no** cumplan la condición de "menor en riesgo" pasen a la siguiente etapa. Es una forma limpia y segura de aplicar reglas de negocio.
2. **`map` (Transformación)**: Al procesar la lista, el uso del operador *spread* (`...r`) es fundamental. Permite crear una copia del objeto original y añadirle únicamente la nueva propiedad `costoTotal`, cumpliendo con el principio de **inmutabilidad** (no alterar el objeto base).
3. **Encadenamiento**: Al encadenar `.filter().map()`, el código se vuelve altamente legible y eficiente, procesando la lista en un solo flujo lógico de izquierda a derecha.

**Evidencia**

* El sistema procesa el *array* de 4 objetos, detecta la restricción para el usuario "Ana" (menor de edad en paracaidismo) y lo excluye automáticamente del procesamiento final.

**Estructura del Proyecto:**

```plaintext
sistema-reservas/
├── app.js          # Lógica de validación y cálculo
└── README.md       # Documentación del sistema

```

Hecho por:
Carlos Velasco

