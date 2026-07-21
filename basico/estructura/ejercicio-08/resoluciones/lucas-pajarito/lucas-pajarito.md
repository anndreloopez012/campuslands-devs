# Ejercicio 08

# Descripcion 

Este ejercicio está diseñado para que practiques análisis, orden y toma de decisiones. Aunque pertenece al nivel básico, debes tratarlo como una tarea real: leer requisitos, transformar información en una solución y validar el resultado.

# EXPLICACION DE EJERCICIO.

# Organización de Datos e Imágenes

## Introducción

Para mantener un proyecto limpio, escalable y fácil de mantener, **los datos y los recursos multimedia deben almacenarse en directorios separados**.

Una estructura organizada facilita el desarrollo, el mantenimiento y el trabajo en equipo.

## ❌ ¿Por qué no mezclar datos con imágenes?

### 1. Separación de responsabilidades

Cada carpeta debe tener un propósito específico.

- `data/` → Archivos de datos (JSON, CSV, XML, SQLite, etc.).
- `images/` o `assets/images/` → Recursos gráficos.

Esto hace que cualquier desarrollador encuentre rápidamente lo que necesita.

---

### 2. Facilita el mantenimiento

Cuando los archivos están mezclados:

- cuesta encontrar información;
- aumenta el riesgo de borrar archivos importantes;
- es más difícil automatizar procesos.

---

### 3. Mejor escalabilidad

En proyectos pequeños puede parecer que no importa, pero conforme el proyecto crece:

- aparecen cientos o miles de imágenes;
- aumentan los archivos de datos;
- localizar recursos se vuelve complicado.

Una buena estructura evita estos problemas desde el inicio.

---

### 4. Automatización

Muchas herramientas esperan estructuras organizadas.

Ejemplos:

- scripts de respaldo;
- pipelines de entrenamiento de IA;
- sistemas de despliegue;
- herramientas de procesamiento de imágenes.

Separar los recursos permite automatizar tareas sin reglas complejas.

---

### 5. Control de versiones (Git)

Las imágenes suelen cambiar de forma diferente a los datos.

Mantenerlas separadas ayuda a:

- revisar cambios;
- reducir conflictos;
- organizar mejor los commits.

---

### 6. Seguridad

En algunos casos los datos pueden contener información sensible.

Separarlos de los recursos públicos (como imágenes) facilita:

- aplicar permisos;
- realizar respaldos selectivos;
- evitar exposiciones accidentales.

---

## ✅ Estructura recomendada

```text
proyecto/
│
├── data/
│   ├── usuarios.json
│   ├── productos.csv
│   └── configuracion.json
│
├── assets/
│   └── images/
│       ├── logo.png
│       ├── banner.jpg
│       └── iconos/
│
├── src/
│
├── docs/
│
└── README.md
```

---

## Beneficios

- Código más limpio.
- Mejor organización.
- Mayor facilidad para el mantenimiento.
- Escalabilidad.
- Automatización sencilla.
- Mejor colaboración entre desarrolladores.

---

## Conclusión

Mantener los datos y las imágenes en directorios separados es una buena práctica de ingeniería de software. Esta organización mejora la claridad del proyecto, reduce errores, facilita el mantenimiento y permite que el proyecto crezca de forma ordenada.
