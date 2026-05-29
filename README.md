# Campuslands Devs

Repositorio educativo para enseñar desarrollo a estudiantes de informática mediante ejercicios prácticos, modernos y organizados por fases.

El proyecto está diseñado para crecer por niveles: **básico**, **intermedio** y **avanzado**. Por ahora, el nivel desarrollado es **BÁSICO**.

## Propósito educativo

Este repositorio busca que cada estudiante practique tres áreas fundamentales del trabajo real de un desarrollador:

1. **Lógica de programación**: análisis de problemas, uso de datos, ciclos, condicionales, funciones, validaciones y cálculos.
2. **Estructura y organización de proyectos**: orden de carpetas, separación de responsabilidades, documentación y preparación de proyectos mantenibles.
3. **Uso profesional de Git**: ramas, commits, colaboración, resolución de conflictos y flujo de trabajo similar al de equipos técnicos reales.

Los ejercicios usan contextos cercanos a estudiantes jóvenes de tecnología: videojuegos, esports, motos, autos, deportes, música, películas, viajes, diseño 3D, soldadura, fórmulas químicas y más.

## Estructura general

```text
campuslands-devs/
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
├── basico/
│   ├── logica/
│   ├── estructura/
│   └── git/
└── docs/
    └── instrucciones-generales.md
```

## Metodología de trabajo

Cada ejercicio funciona como una misión técnica. El estudiante debe leer el contexto, analizar el objetivo, seguir las instrucciones paso a paso y entregar su solución dentro de una carpeta propia dentro de `resoluciones/`.

La meta no es solo obtener una respuesta que funcione. La meta es aprender a pensar, organizarse, nombrar correctamente, documentar decisiones y trabajar con Git como en un entorno profesional.

## Reglas de Git

- `main` representa producción. No se trabaja directamente sobre `main`.
- `dev` representa integración educativa. Los alumnos parten desde `dev`.
- Cada alumno debe crear su propia rama desde `dev`.
- Formato recomendado de rama: `alumno/nombre-apellido/ejercicio-XX`.
- Cada cambio debe tener commits claros y pequeños.
- No se deben modificar respuestas de otros alumnos.
- No se deben borrar archivos base del repositorio.
- No se deben subir archivos fuera de la estructura indicada.

## Flujo recomendado

```bash
git checkout dev
git pull
git checkout -b alumno/juan-perez/ejercicio-01
```

Después de resolver:

```bash
git status
git add basico/logica/ejercicio-01/resoluciones/juan-perez/
git commit -m "Resolver ejercicio 01 de logica"
git push -u origin alumno/juan-perez/ejercicio-01
```

## Cómo entregar ejercicios

Cada respuesta debe ir dentro de una carpeta propia dentro de `resoluciones/` del ejercicio correspondiente.

Formato obligatorio de carpeta:

```text
nombre-apellido/
```

Dentro de esa carpeta puedes agregar uno o varios archivos según el ejercicio.

Ejemplos correctos:

- `basico/logica/ejercicio-01/resoluciones/juan-perez/juan-perez.js`
- `basico/estructura/ejercicio-01/resoluciones/maria-lopez/README.md`
- `basico/git/ejercicio-01/resoluciones/camilo-torres/evidencia.md`

## Convenciones de nombres

- Carpetas en minúscula.
- Separar palabras con guion medio: `mi-proyecto`.
- Carpetas de solución con nombre y apellido: `resoluciones/nombre-apellido/`.
- Commits en infinitivo o pasado claro: `Agregar ranking de jugadores`, `Resolver conflicto de inventario`.

## Buenas prácticas

- Leer todo el README del ejercicio antes de escribir código.
- Dividir el problema en pasos pequeños.
- Validar entradas y casos extremos.
- Usar nombres de variables claros.
- Mantener las soluciones dentro de `resoluciones/`.
- Revisar `git status` antes de cada commit.

## Recomendaciones para commits

Buenos ejemplos:

- `Resolver ranking de jugadores battle royale`
- `Organizar estructura frontend backend de torneo`
- `Simular merge de rama de equipo esports`

Evitar:

- `cambios`
- `arreglo`
- `final`
- `asdf`
