# 🍔 Sistema de Arquitectura - Gestión de Menú Urbano 🍟
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para resolver este desafío enfocado en la **Gestión de un Menú Urbano**, implementé una estructura basada en el principio de **Separación Homogénea de Activos y Tipos de Datos**. En la industria de aplicaciones de entrega de comida o restaurantes, mezclar los archivos de código binario (como las fotografías de alta resolución) en las mismas carpetas donde se leen las consultas del menú ralentiza el despliegue del software y satura los servidores.

Diseñé la distribución dividiendo el problema de la siguiente forma:
1.  **Segmentación de Menú (`menu/`):** Dividí el menú en tres subcarpetas especializadas (platos, bebidas y combos). Esto evita archivos JSON masivos y permite que el sistema consulte únicamente la sección que el comensal desea visualizar.
2.  **Aislamiento Multimedia (`assets/photos/`):** Las fotografías de los platillos se almacenan en un directorio independiente, vinculándolas con la base de datos únicamente a través de referencias de cadena de texto (`archivoFoto`).
3.  **Gobernanza Comercial (`docs/`):** Las reglas de margen de ganancia e impuestos viven fuera del código para que el equipo administrativo pueda editarlas sin alterar la programación.

---

## 🎀 2. Justificación Técnica: ¿Por qué no mezclar imágenes con datos?

Como desarrolladora, es crucial entender que **las imágenes jamás deben guardarse dentro de los archivos de datos planos (JSON)** o en sus mismas carpetas operativas por las siguientes razones de rendimiento:
* **Peso y Ancho de Banda:** Los archivos JSON están hechos para transportar texto ligero a gran velocidad. Si incrustáramos imágenes codificadas en ellos, los archivos pasarían de pesar kilobytes a pesar megabytes, colapsando la velocidad de carga de la aplicación.
* **Mantenibilidad y Almacenamiento:** Almacenar las imágenes en la ruta de assets permite delegar el contenido multimedia a servidores de distribución dedicados (como un CDN), optimizando el almacenamiento y permitiendo que los diseñadores actualicen las fotos de la comida sin tocar una sola línea de código del backend.

---

## 🧪 3. Control de Casos de Validación Ejecutados

Para certificar la integridad y el correcto funcionamiento del sistema, se plantearon dos escenarios en la capa lógica:

1.  **Caso Normal (Cálculo de Combo Promocional) 💕:** Cuando el administrador introduce un plato de Q45 y una bebida de Q15 aplicando un beneficio del 15% de descuento, la función contenida en `menu-manager.js` procesa el precio acumulado de Q60 y deduce exitosamente el costo promocional final de Q51, listando el combo en la base de datos de forma impecable.
2.  **Caso Límite (Precios en Cero o Negativos) ⚠️:** Si por un error humano de digitación se intenta cargar un platillo con precio de Q0 o un valor negativo en el sistema, las cláusulas de guarda implementadas en los controladores (`if (precioPlato <= 0)`) detienen el flujo en seco, cancelan la creación de la promoción y emiten una alerta técnica en la consola para salvaguardar las finanzas del restaurante.

---

