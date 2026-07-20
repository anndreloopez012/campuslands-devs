# 🛡️ Sistema de Análisis de Personajes RPG

## 📖 Contexto del problema

Una party de un RPG debe preparar a sus personajes antes de entrar a una mazmorra con enemigos de diferentes niveles de dificultad.

El objetivo del programa es analizar las estadísticas de cada personaje, calcular su poder, identificar aquellos que necesitan mejorar y generar un reporte completo de la party.

---

## 🎯 Objetivo

Desarrollar un programa en JavaScript que permita:

- Calcular el poder de cada personaje.
- Detectar personajes con poder menor a 60.
- Sugerir qué atributo debe entrenar cada personaje.
- Mostrar un reporte con toda la información de la party.

---

## 📋 Requisitos

El programa debe cumplir con los siguientes puntos:

1. Definir un arreglo de personajes con los atributos:
   - Nombre
   - Clase
   - Nivel
   - Ataque
   - Defensa

2. Calcular el poder utilizando la fórmula:

```text
Poder = (Nivel × 2) + Ataque + Defensa
```

3. Filtrar los personajes cuyo poder sea menor a **60**.

4. Crear una función que indique qué atributo entrenar:
   - Si el ataque es menor que la defensa → entrenar **Ataque**.
   - Si la defensa es menor que el ataque → entrenar **Defensa**.
   - Si ambos son iguales → los atributos están equilibrados.

5. Mostrar un reporte completo de la party.

---

## 🛠️ Tecnologías utilizadas

- JavaScript (ES6)
- Visual Studio Code
- Consola del navegador o Node.js

---

## 📂 Estructura del programa

El programa contiene:

- Un arreglo llamado **personajes** con las estadísticas de cada personaje.
- Un cálculo automático del poder mediante `forEach()`.
- Un filtro utilizando `filter()` para encontrar personajes débiles.
- Una función llamada `sugerirEntrenamiento()` que recomienda mejorar ataque o defensa.
- Un reporte final utilizando `console.log()`.

---

## ⚙️ Fórmula utilizada

```javascript
poder = (level * 2) + atack + defy;
```

---

## 📌 Ejemplo de salida

```text
===== REPORTE DE LA PARTY =====

Nombre: Atalanta
Clase: Mago
Nivel: 12
Ataque: 20
Defensa: 12
Poder: 56
Sugerencia: Entrenar Defensa

-------------------------------------

Nombre: Leonidas
Clase: Guerrero
Nivel: 35
Ataque: 28
Defensa: 18
Poder: 116
Sugerencia: Entrenar Defensa

...

===== PERSONAJES CON PODER MENOR A 60 =====

Atalanta - Poder: 56
```

---

## 📊 Resultado esperado

Al ejecutar el programa se obtiene:

- El poder de cada personaje.
- Los personajes con poder menor a 60.
- Una recomendación de entrenamiento para cada integrante.
- Un reporte organizado de toda la party.

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica de JavaScript utilizando arreglos, funciones, `forEach()`, `filter()` y estructuras condicionales.  <br>

LUCAS SAMUEL PAJARITO SUREK.