# Análisis de Arsenal para Squad de Shooters (Ranked)

**Desarrollador:** Selvin Lem

---

## 1. Enfoque

Cuando juegas en equipo y vas a entrar a una partida clasificatoria (Ranked), no puedes llevar cualquier cosa que te encuentres en el inventario. Necesitas estrategia. 

Para resolver este problema decidí separar las cosas para que el proyecto sea limpio y escalable:
1. **Los Datos en su lugar (`armas.json`):** Toda la lista de armas, balas y rarezas se guardó en un archivo independiente. Si el día de mañana el juego añade más armas, solo tocamos este archivo sin romper el código.
2. **La Lógica de Selección (`app.js`):** Aquí es donde el sistema toma las decisiones en frío. En lugar de meter filtros complejos en una sola línea que nadie entiende, usé el método `.filter()` de JavaScript para limpiar el inventario en dos fases claras: seguridad (balas) y categoría (tipo).

---