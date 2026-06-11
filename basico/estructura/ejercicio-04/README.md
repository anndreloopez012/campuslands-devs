# ✨ Catálogo de Autos de Lujo ✨
> **Estudiante:** Allison Vargas 💕  
> **Nivel:** Básico Retador ✨  
> **Rama:** `alumno/allison-vargas/ejercicio-04`  

---

## 1. Mi Razonamiento y Lógica (Thinking Process) 🧠✨

Para resolver este reto como una verdadera profesional del desarrollo, decidí diseñar la arquitectura pensando en el orden, la limpieza y la mantenibilidad. ¡Aquí te cuento mis secretos! 👇

* **🎀 Separación de Conceptos (SoC):** ¡No nos gusta el código amontonado! Por eso, mantengo los datos puros en su propia cajita dentro de `data/autos.json`. La lógica inicial arranca en `src/index.js` y todo lo que brilla y se muestra en pantalla lo aislé en `src/visualizacion.js`. ¡Así da gusto trabajar en equipo!
* **🎀 Control de Datos Críticos:** Un buen sistema jamás debe romperse. Configuré condicionales especiales para que, si un auto de lujo viene con precio en `0`, año no especificado o si el catálogo se encuentra vacío, la aplicación reaccione de forma amigable y bonita en lugar de lanzar un error feo.

---

## 2. Convenciones Estéticas para Imágenes 📸🎀

Para que la carpeta de recursos no se vuelva un caos total con el paso del tiempo, diseñé una regla estricta pero súper clara para nombrar los archivos multimedia dentro de `assets/cars/`:

✨ **Formato Obligatorio:** `[marca]_[modelo-con-guiones]_[año]_[correlativo].jpg` ✨

* **Todo en minúsculas:** ¡Evitemos las mayúsculas rebeldes!
* **Adiós espacios:** Los espacios en los nombres de los modelos se cambian por guiones medios (ej. `sf90-stradale`).
* **Año desconocido:** Si es un prototipo o coche concepto futurista y no tiene año, se usa `0000`.

> 🌸 *Ejemplo Perfecto:* `ferrari_sf90-stradale_2024_01.jpg`

---

## 3. Bitácora Mágica de Comandos Git 🚀☁️

Aquí está la evidencia de los comandos exactos que utilicé en mi terminal de VS Code para trabajar de manera limpia y profesional:

```bash
# 1. Crear y cambiarme de inmediato a mi ramita de trabajo
git checkout -b alumno/allison-vargas/ejercicio-04

# 2. Verificar que mi estructura de carpetas esté impecable y en su lugar
git status

# 3. Añadir mis cambios al área de preparación de forma limpia
git add basico/estructura/ejercicio-04/resoluciones/allison-vargas/

# 4. Crear un commit con un mensaje súper descriptivo y profesional
git commit -m "Resolver ejercicio no.4 de estructura"