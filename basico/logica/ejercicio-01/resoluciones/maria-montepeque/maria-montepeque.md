# 🏆 Battle Royale - Tournament Ranking System
**Desarrolladora:** Maria Jose Montepeque Zet  
**Módulo:** Lógica de Programación Básica (Ejercicio 01)  

---

## 🧠 Paradigma y Pensamiento Aplicado

El problema se resolvió bajo principios de **Clean Code** y **Programación Funcional** mediante las siguientes estrategias:

* **Mapeo Directo:** Se usó un diccionario clave-valor para obtener los puntos del podio de forma inmediata, eliminando estructuras condicionales complejas.
* **Caída por Defecto:** Las posiciones fuera del podio (Top 4+) reciben automáticamente los 4 puntos base reglamentarios, asegurando estabilidad ante cualquier dato.
* **Inmutabilidad:** Los datos originales de la partida nunca se modifican; en su lugar, se genera un nuevo arreglo con los resultados calculados.
* **Flujo en Cadena:** La transformación matemática y el ordenamiento descendente se ejecutan en una secuencia continua, optimizando el uso de memoria.
* **Salida Dinámica:** Se aprovecha el índice del ciclo de recorrido para enumerar de forma natural el ranking final de mayor a menor puntaje.

---

## 🛠️ Trazabilidad de Operaciones Git

Historial de los comandos aplicados sobre la consola local para la correcta segregación del archivo en el espacio de nombres asignado:

```bash
# Sincronización del entorno local con el árbol de desarrollo remoto
git checkout dev
git pull origin dev

# Aislamiento del entorno en una rama de desarrollo limpia
git checkout -b feature/ejercicio-logica-01

# Evaluación del estado previo a la indexación y adición de la carpeta personal
git status
git add basico/logica/ejercicio-01/resoluciones/maria-montepeque/

# Confirmación de cambios y distribución remota de la rama técnica hacia el origen
git commit -m "Resolver ejercicio 01 de logica"
git push origin feature/ejercicio-logica-01