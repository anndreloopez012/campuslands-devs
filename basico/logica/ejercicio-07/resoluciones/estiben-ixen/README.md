# Resolución: Diagnóstico Rápido de Mecánica
* Autor: Estiben Ixen
* Fecha: 11 de junio de 2026
* Ejercicio: 07 - Lógica de diagnóstico (Mecánica de motos)

# Razonamiento
- El problema requiere transformar una lista de síntomas (entradas) en recomendaciones técnicas (salidas). Mi enfoque fue:

- Estructura de datos: Utilicé un objeto diccionarioDiagnosticos como "base de conocimientos" para mapear cada síntoma con su causa probable. Esto hace que el código sea escalable y fácil de mantener si se añaden más síntomas.

- Procesamiento: La función diagnosticar recorre el arreglo de síntomas proporcionado, busca la coincidencia en el diccionario y construye un reporte detallado.

- Flexibilidad: El sistema permite pasar múltiples síntomas y maneja casos donde el síntoma no esté registrado.

## Validación

- Caso Normal: Al ingresar ['vibra', 'frena poco'], el sistema devuelve correctamente las recomendaciones de balanceo y revisión de pastillas.

- Caso Límite: Al ingresar un síntoma desconocido como ['ruido extraño'], el sistema devuelve un mensaje de advertencia indicando que el síntoma no está registrado, evitando errores de ejecución.

1. Implementación (JavaScript)
JavaScript

```javascript
const diagnosticos = {
  "no enciende": "Revisar batería, bujía o sistema de combustible.",
  "vibra": "Revisar balanceo de llantas o soportes de motor.",
  "pierde aceite": "Verificar sellos, empaques o fugas en el cárter.",
  "frena poco": "Revisar nivel de líquido de frenos y desgaste de pastillas."
};

function diagnosticar(sintomas) {
  if (!Array.isArray(sintomas) || sintomas.length === 0) {
    return "No se han proporcionado síntomas para diagnosticar.";
  }

  const reporte = sintomas.map(s => {
    return diagnosticos[s] ? `${s}: ${diagnosticos[s]}` : `${s}: Síntoma no registrado en base de datos.`;
  });

  return reporte.join("\n");
}

// Ejemplo de uso:
const sintomasPiloto = ['vibra', 'frena poco'];
console.log("--- Reporte de Diagnóstico ---");
console.log(diagnosticar(sintomasPiloto));
```

# Conclusión
Este ejercicio refuerza la importancia de usar estructuras de datos (como objetos de mapeo) en lugar de múltiples condicionales if-else anidados, lo cual mejora la legibilidad del código. Además, el uso de funciones modulares permite que el sistema de diagnóstico pueda integrarse fácilmente en una aplicación más grande de gestión de taller.

# commit
