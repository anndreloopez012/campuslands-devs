# Ejercicio 12 – Buenas prácticas de mensajes de commit

**Alumna:** Maria Montepeque  
**Nivel:** Básica retadora  
**Temática:** Viajes y turismo

---

## Razonamiento

El objetivo es demostrar cómo escribir mensajes de commit claros y profesionales en un proyecto de turismo. Un buen mensaje de commit responde a la pregunta: *¿qué cambia y por qué?*

Un mensaje genérico como `fix` o `cambios` no le dice nada a otro desarrollador. En cambio, un mensaje como `agrega validación de fechas en reservas` describe exactamente qué ocurrió.

La estructura recomendada es:

```
<verbo en presente> + <qué> + <contexto si aplica>
```

Verbos útiles: `agrega`, `corrige`, `elimina`, `actualiza`, `refactoriza`, `documenta`.

---

## Tres cambios simulados con sus commits

### Cambio 1 – Archivo de destinos turísticos

Se crea un archivo con los destinos disponibles para el sistema de reservas.

**Archivo creado:** `destinos.json`

```json
[
  {
    "id": "antigua-001",
    "nombre": "Antigua Guatemala",
    "categoria": "cultural",
    "precio_por_noche": 350,
    "disponible": true
  },
  {
    "id": "atitlan-001",
    "nombre": "Lago de Atitlán",
    "categoria": "naturaleza",
    "precio_por_noche": 280,
    "disponible": true
  },
  {
    "id": "tikal-001",
    "nombre": "Tikal",
    "categoria": "arqueologico",
    "precio_por_noche": 420,
    "disponible": false
  }
]
```

**Comando de commit:**
```bash
git add destinos.json
git commit -m "agrega catálogo inicial de destinos turísticos de Guatemala"
```

**Por qué este mensaje:** Indica el verbo (`agrega`), el objeto (`catálogo de destinos`) y el contexto (`Guatemala`). Otro desarrollador sabe exactamente qué entró al repositorio.

---

### Cambio 2 – Validación de disponibilidad

Se agrega una función que filtra únicamente los destinos disponibles para mostrarlos al cliente.

**Archivo creado:** `filtrar-disponibles.js`

```js
// filtrar-disponibles: filtra destinos con disponibilidad activa

const destinos = require("./destinos.json");

function obtenerDestinosDisponibles(lista) {
  if (!lista || lista.length === 0) return [];
  return lista.filter((destino) => destino.disponible === true);
}

const disponibles = obtenerDestinosDisponibles(destinos);

console.log("Destinos disponibles:", disponibles.length);
disponibles.forEach((d) => {
  console.log(`- ${d.nombre} (${d.categoria}) — Q${d.precio_por_noche}/noche`);
});
```

**Comando de commit:**
```bash
git add filtrar-disponibles.js
git commit -m "agrega función para filtrar destinos disponibles al cliente"
```

**Por qué este mensaje:** Describe la acción (`agrega función`), su propósito (`filtrar destinos disponibles`) y el destinatario (`al cliente`). Es específico sin ser largo.

---

### Cambio 3 – Corrección de precio en destino límite

Se detecta que el destino `tikal-001` tiene precio en cero por error. Se corrige y se deja marcado como no disponible temporalmente para revisión.

**Archivo modificado:** `destinos.json` (precio corregido de `0` a `420`)

**Comando de commit:**
```bash
git add destinos.json
git commit -m "corrige precio incorrecto en destino Tikal y marca como no disponible"
```

**Por qué este mensaje:** El verbo `corrige` indica que es una reparación. Se nombra el destino afectado (`Tikal`) y el efecto secundario (`marca como no disponible`). Sin ese contexto, parecería un cambio arbitrario.

---

## Historial resultante

```bash
git log --oneline
```

```
a3f1c82 corrige precio incorrecto en destino Tikal y marca como no disponible
b7d09e1 agrega función para filtrar destinos disponibles al cliente
c2a45f0 agrega catálogo inicial de destinos turísticos de Guatemala
```

---

## Evaluación: ¿otro dev entendería el historial?

| Criterio                                      | Resultado |
|-----------------------------------------------|-----------|
| Cada commit describe un solo cambio           | ✅        |
| Los mensajes usan verbo en presente           | ✅        |
| Se evitan palabras genéricas (fix, cambios)   | ✅        |
| El historial tiene orden cronológico lógico   | ✅        |
| Un dev externo puede reconstruir el trabajo   | ✅        |

**Conclusión:** El historial es legible. Cada línea comunica qué ocurrió sin necesidad de abrir el archivo para entenderlo. Eso es el objetivo de un buen mensaje de commit.

---

## Rama de trabajo

```bash
git checkout dev
git checkout -b feature/ejercicio-12-maria-montepeque
# ... trabajo ...
git push origin feature/ejercicio-12-maria-montepeque
```
