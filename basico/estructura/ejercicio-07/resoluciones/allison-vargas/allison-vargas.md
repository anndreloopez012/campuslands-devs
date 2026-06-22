# 🚀 Biblioteca Digital - Colección de Ciencia Ficción 🌌
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para resolver este desafío enfocado en una **Biblioteca de Ciencia Ficción**, implementé una arquitectura basada en el principio de **Separación Estricta de Contenido y Recursos Estáticos**. Mezclar los datos crudos (textos de sinopsis o metadatos) con las portadas físicas en la misma ruta genera un desorden crítico que dificulta las consultas eficientes.

Mi estrategia organizativa distribuyó las responsabilidades del sistema en tres pilares:
1.  **Datos Estructurados (`books/data/`):** La información bibliográfica esencial (ISBN, título, año, subgénero) queda encapsulada en formato JSON, sirviendo como la fuente de verdad para búsquedas e indexación.
2.  **Activos de Medios (`books/covers/`):** Las imágenes se aíslan por completo. Se diseñó un estándar técnico estricto de nomenclatura vinculando el número ISBN directamente con la imagen, previniendo referencias rotas o archivos huérfanos.
3.  **Contenido de Texto Libre (`reviews/`):** Las críticas literarias y textos extensos escritos por usuarios se almacenan en archivos Markdown independientes, impidiendo que saturen el archivo JSON principal de la biblioteca.

---

## 🎀 2. Arquitectura del Proyecto (Árbol de Carpetas)

El espacio de trabajo quedó distribuido de forma impecable y sumamente ordenada, cumpliendo con las directrices de entrega del aula:

```text
basico/estructura/ejercicio-07/resoluciones/allison-vargas/
├── allison-vargas.md       
├── books/
│   ├── covers/             (Repositorio de imágenes de las portadas)
│   │   └── naming-rules.txt (Estandarización técnica para nombrar medios)
│   └── data/               (Módulo de bases de datos planas)
│       └── coleccion.json  (Catálogo estructurado con metadatos de los libros)
└── reviews/                (Directorio exclusivo para críticas y reseñas)
    └── plantilla-resena.md (Molde estructurado para los textos de opinión)