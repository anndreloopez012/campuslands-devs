# EJERCICIO No.2 DE ESTRUCURA

## AUTOR

* <b> Lucas Samuel Pajarito Surek </b>

## Explicacion de trabajo.

<b> CONEXION DE LOS ARCHIVOS.</b>

# Guía de Enlace de Archivos

Este documento detalla estrictamente la sintaxis y los pasos requeridos para conectar los archivos del proyecto según la estructura de carpetas establecida.

---

## 1. Uso de Rutas Relativas (`./` y `../`)

Para enlazar archivos dentro del proyecto, se utilizan rutas relativas que toman como referencia la ubicación del archivo desde donde se hace la llamada:

* **`./` (Mismo directorio):** Se utiliza cuando el archivo al que deseas apuntar o la carpeta que lo contiene se encuentran al mismo nivel que el archivo actual.
* **`../` (Subir un nivel):** Se utiliza cuando necesitas salir de la carpeta actual hacia el directorio padre para buscar un archivo en otra ubicación o carpeta vecina.

---

## 2. Cómo enlazar `styles.css` a `index.html`

Dado que `index.html` está en la raíz y el archivo de estilos se encuentra dentro de la carpeta `css`, debes ingresar a ella desde el mismo nivel utilizando `./`. 

Esta conexión se realiza agregando la siguiente etiqueta dentro de la sección `<head>` de tu archivo `index.html`:

```html
<link rel="stylesheet" href="./css/styles.css">

```
## 3.Cómo enlazar los archivos JS (`players.js` y `app.js`) a index.html

Dado que index.html está en la raíz, los archivos de JavaScript se encuentran dentro de sus respectivas carpetas (data y js). Debes ingresar a cada una desde el mismo nivel utilizando ./.

Estas conexiones se realizan agregando las etiquetas 
 dentro de la sección `body` preferiblemente justo antes de la etiqueta de cierre  en tu archivo index.html de la siguiente manera:

 ```html
 <script src="./data/players.js"></script>

<script src="./js/app.js"></script>
 ```