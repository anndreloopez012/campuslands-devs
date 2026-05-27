# Guía Rápida de Git: Primeros Pasos

Este archivo explica de forma breve los cuatro comandos esenciales para empezar a controlar versiones con Git.

---

## 1. git init
**¿Qué hace?** Inicializa un nuevo repositorio local.
* **Cuándo usarlo:** Al inicio de un proyecto, dentro de la carpeta raíz de tu código.
* **Efecto:** Crea una carpeta oculta llamada `.git` donde se guardará todo el historial de cambios.

![1](/basico/git/ejercicio-01/resoluciones/lester-garcia/evidencia/1.png)

## 2. git add <archivo>
**¿Qué hace?** Añade los archivos modificados o nuevos al "Staging Area" (área de preparación).
* **Cuándo usarlo:** Después de hacer cambios en tu código y antes de guardarlos definitivamente.
* **Comando común:** Usa `git add .` para preparar **todos** los archivos modificados a la vez.
![2](/basico/git/ejercicio-01/resoluciones/lester-garcia/evidencia/2.png)

## 3. git commit -m "mensaje"
**¿Qué hace?** Guarda permanentemente los cambios que preparaste con `git add` en el historial.
* **Cuándo usarlo:** Cuando termines una tarea, corrijas un bug o completes una parte funcional del código.
* **Buenas prácticas:** El mensaje dentro de las comillas debe ser breve y descriptifco (ej: `git commit -m "Crear script inicial de Python"`).

![2](/basico/git/ejercicio-01/resoluciones/lester-garcia/evidencia/2.png)

## 4. git log --oneline
**¿Qué hace?** Muestra el historial de confirmaciones (commits) de forma compacta.
* **Cuándo usarlo:** Cuando quieras revisar qué cambios has hecho y ver los identificadores únicos (hashes) de cada commit.
* **Formato:** Muestra una línea por commit con su código corto y su mensaje.

![3](/basico/git/ejercicio-01/resoluciones/lester-garcia/evidencia/3.png)

---

## Flujo de Trabajo Básico

1. Modificas tu código.
2. `git add .` (Preparas los cambios).
3. `git commit -m "Tu mensaje"` (Guardas la foto del proyecto).
4. `git log --oneline` (Verificas tu historial).