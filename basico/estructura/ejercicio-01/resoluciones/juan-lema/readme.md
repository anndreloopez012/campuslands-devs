# Resolución: Ejercicio 01 - Estructura de Proyecto

**Estudiante:** Juan Lema  
**Dificultad:** Intermedia  
**Temática:** Videojuegos de estrategia y puzzles  

---

## 1. Proceso de Análisis

Antes de crear cualquier carpeta, revisé el enunciado y definí tres pasos a seguir:

1. **Ubicación correcta:** Verifiqué la ruta indicada para las entregas y coloqué mi solución en `basico/estructura/ejercicio-01/resoluciones/Juan-Lema/`, evitando tocar cualquier archivo fuera de mi carpeta personal.
2. **Organización según el género:** Un juego de estrategia y puzzles necesita separar claramente los elementos de lógica (código), los tableros o niveles (configuraciones), y los recursos gráficos (íconos, piezas, fondos). Por eso dividí los assets en subcategorías según su función dentro del juego.
3. **Registro en Git:** Dado que las carpetas vacías no se suben a un repositorio por defecto, agregué archivos `.gitkeep` en cada una para que la estructura completa quede versionada y disponible para el resto del equipo.

---

## 2. Estructura Final del Proyecto

```text
basico/estructura/ejercicio-01/resoluciones/Juan-Lema/
├── assets/
│   ├── icons/
│   │   └── .gitkeep
│   ├── backgrounds/
│   │   └── .gitkeep
│   └── pieces/
│       └── .gitkeep
├── config/
│   └── .gitkeep
├── src/
│   └── .gitkeep
├── docs/
│   └── .gitkeep
└── .gitkeep
```