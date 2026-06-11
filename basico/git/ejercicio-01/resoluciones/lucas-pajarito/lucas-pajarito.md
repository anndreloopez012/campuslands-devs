# Ejercicio-01 de GIT

## Descripcion
Este ejercicio está diseñado para que practiques análisis, orden y toma de decisiones. Aunque pertenece al nivel básico, debes tratarlo como una tarea real: leer requisitos, transformar información en una solución y validar el resultado.

# Explicación del ejercicio.

Para la elaboración de este ejercicio elaboramos una simulación de trabajo en equipo utilizando comandos de  `Git`.

 ##  Creacion del Archivo

* Para poder iniciar un repositorio debemos de crear una carpeta.

 ```bash
# Navega al directorio donde desees crear el espacio (ej. Escritorio o Documentos)
cd /ruta/de/tu/preferencia

# Crea la nueva carpeta de práctica
mkdir practica-git-equipo

# Accede al directorio recién creado
cd practica-git-equipo
```

* Luego de crar la carpeta ejecutamos `git init ` para crear el repositorio
* Una vez estando dentro de la carpeta creada podemos comenzar a organizar la estructura a utilizar.

 ## Registros de cambios

 * Para guardar el estado actual de nuestro archivo en el historial de Git de forma segura, realizamos el proceso en dos etapas:
    
    * Paso A: Registrar el archivo en el Staging Area (Área de preparación)
    ``` Bash
    Git add basico/estructura/ejercicio-01/resoluciones/lucas-pajarito/

*   **Paso B: Confirmar los cambios con un mensaje descriptivo**
```bash
    git commit -m "docs: crear README.md inicial del equipo"
    ```

> **🛠️ Consejo de Mentor:** Intenta usar prefijos semánticos en tus commits (como `docs:`, `feat:`, `fix:`). Esto facilita la lectura del historial a medida que el proyecto crece.

### 5. Verificación del Historial (`git log`)
Para comprobar que nuestro flujo fue exitoso y que el commit se registró correctamente en la base de datos de Git, ejecutamos el comando de visualización simplificada:



git log --oneline

```

# Pruebas del uso de Git
![evidencia](./img/evidencia.png)

# Auto

```Bash 
Lucas Samuel Pajarito Surek
```