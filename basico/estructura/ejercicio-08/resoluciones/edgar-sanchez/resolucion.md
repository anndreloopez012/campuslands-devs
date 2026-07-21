# Estructura del Proyecto: Menú de Restaurante

Este documento describe la arquitectura de carpetas y archivos del proyecto, explicando la función de cada componente y cómo se organizan para mantener un sistema modular, escalable y fácil de mantener.

---

## 1. Árbol de Estructura de Directorios

```text
proyecto-restaurante/
├── menu/
│   ├── platos.json       # Datos de los platos principales
│   ├── bebidas.json      # Datos de la oferta de bebidas
│   └── combos.json       # Datos de promociones y paquetes
├── assets/
│   └── photos/           # Recursos gráficos e imágenes del menú
├── docs/
│   └── reglas-precios.md # Documentación comercial y políticas de precios
└── scripts/              # Lógica de programación y scripts del sistema
```

---

## 2. Uso y Propósito de Cada Carpeta y Archivo

### Directorio `menu/`
Contiene la base de datos documental del restaurante en formato JSON. Se divide en archivos temáticos para facilitar su mantenimiento y evitar archivos masivos:
* **`menu/platos.json`**: Almacena los ítems del menú principal (entradas, fuertes y postres), incluyendo sus ingredientes, precios e identificadores visuales.
* **`menu/bebidas.json`**: Contiene el catálogo de bebidas (frías, calientes, alcohólicas y refrescos).
* **`menu/combos.json`**: Contiene las promociones especiales y combinaciones de platos y bebidas a un precio paquete.

### Directorio `assets/photos/`
* **Uso:** Almacena todos los archivos multimedia y recursos gráficos de los productos (fotografías en formatos `.webp`, `.jpg` o `.png`).
* **Propósito:** Mantener todos los binarios gráficos en un único punto accesible de lectura para las interfaces de usuario o aplicaciones móviles.

### Directorio `docs/`
* **`docs/reglas-precios.md`**: Documentación técnica y comercial donde se definen las políticas del negocio (impuestos aplicables, descuentos por hora feliz, reglas de precios para combos, márgenes de ganancia y cambios de precios por temporada).

### Directorio `scripts/`
* **Uso:** Alberga los archivos de código ejecutable (JavaScript, Python, etc.) encargados de procesar la lógica de negocio, cargar el menú, calcular totales con impuestos o integrar la interfaz web.

---

## 3. Ejemplo de Estructura: `menu/platos.json`

A continuación se muestra la estructura recomendada para definir los platos dentro del archivo JSON:

```json
[
  {
    "id": "plato-001",
    "nombre": "Hamburguesa Artesanal Doble",
    "categoria": "platos-fuertes",
    "precio": 12.50,
    "ingredientes": ["Carne de res", "Queso cheddar", "Tocineta", "Pan brioche"],
    "disponible": true,
    "imagen": "hamburguesa-artesanal-doble.webp"
  },
  {
    "id": "plato-002",
    "nombre": "Ensalada César con Pollo",
    "categoria": "entradas",
    "precio": 8.75,
    "ingredientes": ["Pechuga a la parrilla", "Lechuga romana", "Crutones", "Queso parmesano"],
    "disponible": true,
    "imagen": "ensalada-cesar-pollo.webp"
  }
]
```

---

## 4. ¿Por qué no conviene mezclar imágenes con datos?

La separación entre los datos estructurados (`menu/*.json`) y los recursos gráficos (`assets/photos/`) responde a buenas prácticas de desarrollo:

1. **Rendimiento y Eficiencia de Almacenamiento:** Los archivos JSON son ligeros y de texto plano, mientras que las imágenes son archivos binarios pesados. Mantenerlos separados permite consultar y transferir metadatos rápidamente sin sobrecargar las peticiones de red.
2. **Control de Versiones (Git):** Los archivos de datos (.json) se rastrean fácilmente línea por línea en herramientas como Git. Guardar imágenes junto con datos ensucia el historial de cambios y aumenta drásticamente el tamaño del repositorio.
3. **Mantenibilidad y Escalabilidad:** Si se necesita actualizar una fotografía o migrar las imágenes a un servidor CDN externo, no es necesario modificar la estructura ni los datos del menú; basta con actualizar la ruta almacenada en el atributo `"imagen"`.
4. **Reutilización de Recursos:** Una misma imagen puede ser referenciada por un plato individual y por un combo sin necesidad de duplicar el archivo físico de la imagen en el disco.
