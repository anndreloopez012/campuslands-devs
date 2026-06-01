# Guía de Estructura del Ejercicio 01 Estructura

Este documento describe la organización de carpetas y archivos dentro del **ejercicio-01 estructura**. La estructura sigue un estándar profesional para facilitar el mantenimiento y la escalabilidad del desarrollo.

## 📂 Descripción de Directorios

### 🛠️ assets/
Contiene todos los recursos estáticos necesarios para la aplicación. Está subdividida para mantener el orden por tipo de archivo:
* **audio/**: Almacena archivos de sonido y efectos de audio.
* **imagenes/**: Repositorio de recursos gráficos, iconos y fotografías.
* **maps/**: Espacio dedicado para archivos de configuración de mapas o datos geográficos.

### 📄 docs/
Carpeta destinada a la documentación técnica del proyecto, manuales de usuario o especificaciones de requerimientos.

### 💡 resoluciones/
Espacio para el registro de soluciones, bitácoras de avance o archivos de respuesta a ejercicios específicos (ej. `edgar-sanchez.md`).

### 💻 src/
Directorio raíz del código fuente (Source Code). Aquí se alojan los scripts principales, lógica de negocio y componentes funcionales de la aplicación.

### 🧪 tests/
Contiene las pruebas unitarias y de integración para asegurar que el código en `src/` funcione correctamente y libre de errores.

---

## 📌 Notas Adicionales
* **Archivos .gitkeep**: Se utilizan para permitir que Git rastree carpetas que actualmente están vacías, asegurando que la estructura se mantenga al clonar el repositorio.
* **README.md**: Punto de entrada principal con la descripción general del proyecto.