# solucion de ejercicio 02: clonar base de torneo RPG

* estudiante: brandon estiben ixen teleguario
* fecha: mayo 2026
modulo: fundamentos de git par aun trabajo colaborativo.

--

## 1. explicacion del razonamiento.

para poder trabajar esto de una mejor manera, dividí el proceso en tres partes muy importantes:

1. **Conexión y Descarga (Aislamiento):** Traer el código base remoto a mi entorno local para no alterar el entorno de producción directamente.

2. **Inspección de Entorno (Contexto):** Diagnosticar en qué punto del mapa de desarrollo (ramas) me encuentro antes de dar cualquier paso en falso.

3. **Documentación Limpia (Entrega):** Registrar de forma fidedigna los comandos aplicados, garantizando la transparencia y la replicabilidad del ejercicio para el resto del equipo de desarrollo.

--

## 2. comandos ejecutivos y evidencia (salida de terminal)

A continuación, se detalla el paso a paso técnico ejecutado en la terminal del sistema:

### Paso 1: Clonar el repositorio remoto
Para descargar la base del torneo RPG a mi máquina local:
```bash
git clone https://github.com (nombre_del_repositorio_remoto)

```

### Paso 2: Acceder al directorio del proyecto
Me desplazo dentro de la carpeta clonada para poder interactuar con el entorno Git:
```bash
cd campuslands-devs
```

### Paso 3: Cambiar a la rama de desarrollo base (`dev`)
Como regla del proyecto, el trabajo debe iniciar desde la rama de desarrollo integrada:
```bash
git checkout dev
```

### Paso 4: Crear y activarse en la rama de la característica personal
Creo mi propia rama de trabajo para aislar mis cambios del resto de los desarrolladores:
```bash
git checkout -b feature/brandonestibenixenteleguario (este comando me perimite crear y moverme dentro de mi misma rama)
```

### Paso 5: Inspección del estado actual del repositorio
Ejecuto el comando de diagnóstico para comprobar el estado de mi copia de trabajo y verificar la rama actual:
```bash
git status
```

**Evidencia de salida en terminal:**
```text
HEAD desacoplada de 7eedd2e
Cambios a ser confirmados:
  (usa "git restore --staged <archivo>..." para sacar del área de stage)
        nuevos archivos: basico/git/ejercicio-02/resoluciones/brandon-ixen.md

```

---

## 3. Evidencia de Validación del Entorno

Para validar que me encuentro correctamente posicionado dentro de la estructura de desarrollo y rastrear el origen del commit base, utilizo el registro en línea:

```bash
git log --oneline -n 3
```

**Evidencia de salida en terminal:**
```text
afb72f8 (HEAD, origin/feature/brandonestibenixenteleguario) :sparkles: feat ejercicio dos del apartado de git

```

---

## 4. Conclusiones de la Exploración Inicial

* **Identificación del problema resuelto:** El comando `git clone` resuelve el problema y asi cada desarrollador podra tener una copia sin afectar el repositorio padre.

* **Importancia de `git status`:** Este comando permite ver el estado de los archivos, si tienen cambios realizados y asi poder evitar confuciones y problemas.

