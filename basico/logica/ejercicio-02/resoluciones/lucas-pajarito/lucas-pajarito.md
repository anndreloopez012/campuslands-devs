
# 🛡️ Ejercicio 02: Sistema de Filtro para Inventario de Armas

Este proyecto es una página web sencilla que toma una lista completa de armas, selecciona solo las que cumplen ciertos requisitos y las muestra ordenadas en una tabla. Todo esto se hace de forma automática usando JavaScript.

---

## 📝 Proceso de Elaboración (Paso a Paso)

Para construir este proyecto, seguimos una serie de pasos ordenados para mantener el código limpio y fácil de entender:

### 1. Preparar la estructura visual (HTML)
Primero, creamos el archivo `index.html`. Aquí no pusimos datos directamente, solo armamos el "esqueleto" de una tabla vacía con sus columnas (Nombre, Tipo, Rareza, etc.). También dejamos un espacio especial (`<tbody>`) donde más adelante insertaríamos las armas.

### 2. Conectar los archivos de JavaScript
Para no tener todo el código amontonado, dividimos el trabajo:
* Un archivo guarda los datos de las armas (`armas.js`).
* Otro archivo hace las operaciones lógicas (`app.js`).
Para que pudieran "hablar" entre ellos, usamos un sistema de importación y le avisamos al HTML que estábamos usando este sistema agregando `type="module"` en la etiqueta del script.

### 3. Primer filtro: Descartar armas que no sirven
En nuestro archivo `app.js`, tomamos la lista completa y la pasamos por un "colador" (usando la herramienta `.filter()`). Le dijimos a JavaScript que solo queríamos guardar las armas que cumplieran dos reglas al mismo tiempo:
* Tener 30 balas o más.
* Ser de tipo "Rifle", "Pistola" o "Francotirador".

### 4. Segundo paso: Marcar las armas recomendadas
Una vez que teníamos nuestra lista limpia, la revisamos una por una (usando `.map()`). La idea era agregarle una etiqueta nueva a cada arma llamada "Recomendada". 
* Si el arma era "rara" o "épica", le poníamos un "Sí ⭐". 
* Si no, le poníamos un "No".

### 5. Mostrar los resultados en la pantalla
Finalmente, tomamos esa lista ya filtrada y con sus estrellas de recomendación, y le dijimos a JavaScript que creara las filas de la tabla de forma automática. Por cada arma en nuestra lista final, se generó una fila (`<tr>`) con sus datos y se inyectó en el espacio vacío que habíamos dejado en el HTML.

---

## 💡 Qué aprendimos en este proyecto
* **Dividir para ganar:** Es mejor tener los datos en un lado y la lógica en otro.
* **Cuidar los datos originales:** Filtramos y modificamos la lista visual, pero el inventario original de armas nunca se dañó ni se borró.
* **Automatización:** No tuvimos que escribir las filas de la tabla a mano en el HTML; JavaScript lo hizo por nosotros basándose en los datos.

---
**Nota para la revisión:** Para que este proyecto funcione correctamente en tu computadora y los archivos se puedan conectar sin errores de seguridad del navegador, es necesario abrirlo utilizando una extensión como **Live Server**.

# 👤Autor
Lucas Samuel Pajarito Surek