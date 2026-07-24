
# Ejercicio 004: Catálogo de Autos de Lujo

* **Estudiante:** Irma Yaneht Arias García
* **Temática:** Organización y estructuración de un proyecto web/backend para un catálogo de vehículos de alta gama.

## 📌 Razonamiento y Proceso
1. **Análisis de Requisitos:** Se organizó un entorno modular separando los datos estructurados en formato JSON, los recursos multimedia en carpetas específicas, los scripts lógicos en `src` y la documentación técnica.
2. **Convenciones para Nombrar Imágenes:**
   - Formato obligatorio: `marca-modelo-angulo.jpg` (Ejemplo: `rollsroyce-phantom-frontal.jpg`, `bentley-continental-lateral.jpg`). Se utiliza minúsculas y guiones medios para evitar conflictos en servidores.
3. **Lista de Verificación de Validación:**
   - Verificar que no existan precios negativos o en cero en el archivo `autos.json`.
   - Comprobar que los recursos gráficos cumplan con la nomenclatura establecida.
   - Validar que los scripts de renderizado manejen correctamente los estados de disponibilidad.

## 🗂️ Árbol de Carpetas

basico/
└── estructura/
    └── ejercicio-04/
        └── resoluciones/
            └── irma-arias/
                ├── datos/
                │   └── autos.json
                ├── activos/
                │   └── coches/
                ├── documentos/
                ├── src/
                │   └── render.js
                └── README.md