# Ejercicio 10

# DESCRIPCION 
Un equipo técnico necesita preparar una base ordenada para un proyecto relacionado con animación 3D. El reto consiste en demostrar que sabes organizar archivos como lo haría un proyecto real.

Este ejercicio está diseñado para que practiques análisis, orden y toma de decisiones. Aunque pertenece al nivel básico, debes tratarlo como una tarea real: leer requisitos, transformar información en una solución y validar el resultado.

# DOCUMENTACION

# Gestión de Versiones de Archivos

## Objetivo

Mantener una organización clara de los archivos de un proyecto mediante un sistema de versionado y una correcta identificación de los archivos finales y de prueba. Esto facilita el trabajo en equipo, reduce errores y mejora el mantenimiento del proyecto.

---

# ¿Por qué versionar los archivos?

Durante el desarrollo de un proyecto es común realizar múltiples modificaciones sobre un mismo archivo. Llevar un control de versiones permite:

- Conservar el historial de cambios.
- Identificar fácilmente la versión más reciente.
- Recuperar versiones anteriores si es necesario.
- Evitar sobrescribir trabajo importante.
- Facilitar la colaboración entre varios integrantes del equipo.

---

# Buenas prácticas para nombrar versiones

Evita utilizar nombres ambiguos como:

```
diseño_final.psd
diseño_final2.psd
diseño_final_bueno.psd
diseño_final_definitivo.psd
```

En su lugar, utiliza un esquema consistente de versiones.

Ejemplo:

```
catalogo_v1.psd
catalogo_v2.psd
catalogo_v3.psd
catalogo_v4.psd
```

O bien, incluir la fecha:

```
catalogo_2026-07-20.psd
catalogo_2026-07-25.psd
catalogo_2026-08-01.psd
```

---

# Organización recomendada

Mantén separados los archivos de trabajo, las pruebas y las versiones finales.

```text
proyecto/
│
├── borradores/
│   ├── propuesta_v1.psd
│   ├── propuesta_v2.psd
│   └── propuesta_v3.psd
│
├── pruebas/
│   ├── colores.psd
│   ├── tipografias.psd
│   └── mockup.png
│
├── final/
│   ├── catalogo.pdf
│   ├── catalogo.png
│   └── logo.svg
│
└── README.md
```

---

# Cómo evitar confundir archivos finales con pruebas

## Utiliza carpetas separadas

Una buena práctica consiste en almacenar cada tipo de archivo en una carpeta específica.

Ejemplo:

```
/borradores
/pruebas
/final
```

De esta manera es sencillo identificar qué archivos aún están en desarrollo y cuáles ya fueron aprobados.

---

## Utiliza nombres descriptivos

En lugar de:

```
archivo1.psd
nuevo.psd
ultimo.psd
```

Utiliza nombres que indiquen claramente su propósito.

Ejemplo:

```
poster_borrador_v2.psd
poster_prueba_colores.psd
poster_final.pdf
```

---

## Evita múltiples archivos "final"

No es recomendable utilizar nombres como:

```
final.psd
final2.psd
final_final.psd
final_definitivo.psd
```

Esto genera confusión sobre cuál es la versión correcta.

Es preferible mantener una sola versión aprobada dentro de la carpeta `final/`.

---

## Registrar cambios importantes

Documenta las modificaciones realizadas entre versiones.

Ejemplo:

| Versión | Fecha | Cambios |
|---------|--------|----------|
| v1 | 15/07/2026 | Diseño inicial |
| v2 | 17/07/2026 | Cambio de colores |
| v3 | 19/07/2026 | Ajuste de tipografía |
| v4 | 20/07/2026 | Correcciones finales |

---

# Uso de Git

Cuando el proyecto utiliza Git, no es necesario crear múltiples copias del mismo archivo para conservar el historial.

Ejemplo de flujo de trabajo:

```bash
git add .
git commit -m "Crear diseño inicial"

git add .
git commit -m "Actualizar paleta de colores"

git add .
git commit -m "Versión final del catálogo"
```

Git almacena automáticamente el historial de cambios, permitiendo recuperar cualquier versión anterior cuando sea necesario.

---

# Recomendaciones

- Mantén una estructura de carpetas organizada.
- Utiliza nombres descriptivos para los archivos.
- Separa borradores, pruebas y entregables finales.
- Evita duplicar archivos únicamente para conservar versiones.
- Usa un sistema de control de versiones como Git para registrar el historial del proyecto.

---

# Conclusión

Una correcta gestión de versiones facilita el mantenimiento de los proyectos, mejora la colaboración entre equipos y reduce la posibilidad de trabajar sobre archivos incorrectos. Separar los archivos de prueba de los entregables finales, junto con un esquema de nombres consistente y el uso de Git, permite mantener un flujo de trabajo más claro, organizado y profesional.
