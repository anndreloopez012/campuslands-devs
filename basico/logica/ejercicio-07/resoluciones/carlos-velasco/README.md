# Diagnóstico rápido de mecánica
## Estructura y Procesamiento de Datos: Sistema de Diagnóstico Mecánico

Se ha implementado una función en JavaScript diseñada para automatizar el proceso de diagnóstico básico de motocicletas. Este sistema utiliza una base de conocimiento predefinida para mapear síntomas reportados con soluciones técnicas recomendadas.

* **Descripción del proceso:**
* **Base de Conocimiento:** Se estructuró un objeto (`baseConocimiento`) que actúa como un diccionario donde cada síntoma (clave) está asociado a una acción correctiva (valor).
* **Lógica de Diagnóstico:** La función `diagnosticar` recibe un arreglo de síntomas. Utiliza el método `.map()` para iterar sobre ellos, buscando coincidencias en la base de datos.
* **Gestión de Errores/Casos no previstos:** Si un síntoma no existe en la base de datos, el sistema retorna automáticamente un mensaje ("Consultar manual técnico"), garantizando que el usuario siempre reciba una respuesta orientativa.


* **Tecnologías:** JavaScript (Node.js).

### Lógica del Código

```text
// Definición de la base de datos técnica con síntomas comunes y soluciones
function diagnosticar(sintomas) {
  const baseConocimiento = {
    "no enciende": "Revisar bujía y sistema eléctrico",
    "vibra": "Revisar balanceo de llantas y tornillería",
    "pierde aceite": "Revisar empaques y retenes",
    "frena poco": "Revisar pastillas de freno y líquido"
  };

  // Validación inicial: si no hay síntomas, retorna un mensaje de alerta
  if (!sintomas || sintomas.length === 0) return "No se reportaron síntomas.";

  // Procesamiento de síntomas: mapea cada entrada a su solución o a un mensaje genérico
  const reporte = sintomas.map(s => baseConocimiento[s] || "Consultar manual técnico");
  
  return reporte;
}

// Ejemplo de uso: reporte para un piloto con dos problemas específicos
const sintomasPiloto = ['vibra', 'frena poco'];
console.log("Reporte de diagnóstico:", diagnosticar(sintomasPiloto));

```

---

**Estructura del Proyecto:**

```text
proyecto-diagnostico/
└── app.js

```

**Hecho por:**

* *Carlos Velasco*