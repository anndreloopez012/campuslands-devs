# Ejercicio #08 - Gestión de menú urbano
**Camper:** Antonio Canux

## 1. Estructura de Carpetas (Árbol del Proyecto)

```
antonio-canux/
├── assets/
│   └── photos/              # Carpeta exclusiva para los recursos estáticos (fotografías)
├── docs/
│   └── reglas-precios.md    # Documentación sobre el cálculo de costos y promociones
├── menu/
│   ├── bebidas.json         # Datos estructurados de las bebidas
│   ├── combos.json          # Datos estructurados de los combos
│   └── platos.json          # Datos estructurados de los platos principales
├── scripts/                 # Scripts para procesamiento, automatización o validación de datos
│
└── solucion.md              # Entregable   
```

## 2. Archivo menu/platos.json

```JSON
[
  {
    "id": "plt-001",
    "nombre": "Hamburguesa Clásica",
    "descripcion": "Carne de res de 150g, lechuga fresca, tomate y queso cheddar.",
    "precio": 45.00,
    "disponible": true,
    "imagen_path": "assets/photos/hamburguesa_clasica.jpg"
  },
  {
    "id": "plt-002",
    "nombre": "Tacos al Pastor",
    "descripcion": "Orden de 3 tacos tradicionales con piña, cilantro y cebolla.",
    "precio": 35.00,
    "disponible": true,
    "imagen_path": "assets/photos/tacos_pastor.jpg"
  }
]
```

## 3. ¿Por qué no conviene mezclar imágenes con datos?

Mezclar los archivos multimedia (como fotografías en `.jpg` o `.png`) directamente en las mismas carpetas donde guardamos los datos estructurados o el código es una mala práctica por las siguientes razones:

- **Separación de responsabilidades:** Los datos (JSON) manejan la información del negocio, mientras que las imágenes son recursos visuales de presentación. Mantenerlos separados hace que la arquitectura del proyecto sea limpia y predecible.

- **Rendimiento y Escalabilidad:** En un entorno real, las imágenes son archivos binarios pesados que suelen servirse desde un CDN (Content Delivery Network) o un almacenamiento en la nube (como AWS S3) para optimizar la carga. Los datos suelen venir de una base de datos o una API.

- **Control de Versiones (Git):** Los archivos de texto como JSON o Markdown son ligeros y sus cambios son fáciles de rastrear. Las imágenes ensucian el historial de Git y aumentan el peso del repositorio innecesariamente. Al tenerlas en una carpeta aislada (assets/), es muy sencillo configurar el archivo .gitignore para excluirlas.

## 4. Explicación de cómo se pensó el problema?
Para abordar este reto, primero, identifiqué las entidades principales que pedía el ejercicio y creé directorios para cada una de ellas.

En lugar de crear un único archivo gigante para todo el menú, se crearon dentro de la carpeta menu tres archivos JSON distintos (platos, bebidas y combos). Esto garantiza que el proyecto sea escalable; si el negocio agrega 50 bebidas nuevas, los datos de los platos no se verán afectados, evitando conflictos al modificar la información.

## 5. Evidencia de validación
- **Requisitos estructurales:** Se crearon las carpetas menu, assets/photos, docs y scripts exitosamente.

- **Segmentación:** Se separó lógicamente la comida en platos, bebidas y combos.

- **Sintaxis de Datos:** El archivo de ejemplo platos.json fue diseñado utilizando la sintaxis estándar de JSON (comillas dobles para claves y strings, tipos de datos booleanos y numéricos correctos, y estructura de array de objetos). Las rutas de las imágenes en el JSON apuntan correctamente al directorio relativo assets/photos/.