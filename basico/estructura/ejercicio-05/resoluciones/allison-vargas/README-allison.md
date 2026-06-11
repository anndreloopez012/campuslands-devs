# Sistema de Taller de Motos 
> **Estudiante:** Allison Vargas 
> **Nivel:** Básico Retador 🏍️💨  
> **Rama:** `alumno/allison-vargas/ejercicio-05`  

---

## 1. Mi Razonamiento y Lógica (Thinking Process) 🧠✨

Para este sistema de gestión de órdenes de reparación, enfoqué el diseño en la **modularidad**. En proyectos reales, mezclar los datos de las motos con la facturación o los clientes es un gran peligro. 

1. **Diseño Modular:** organicé el código dividiendo las responsabilidades en subcarpetas independientes dentro de `modules/`. Cada entidad tiene su propio espacio exclusivo.
2. **Seguridad y Configuración:** El archivo `config/settings.example.json` previene que subamos datos sensibles (como usuarios o contraseñas de bases de datos) al Git público, sirviendo como una hermosa plantilla para el equipo técnico.
3. **Casos Límite Controlados:** Diseñé la lógica pensando en evitar valores en cero (por ejemplo, órdenes de reparación sin costo o motos sin número de placa/chasis), asegurando la integridad del negocio.

---

## 2. ¿Qué datos guarda cada Módulo? 📦🌸

Cada subcarpeta dentro de `modules/` se encarga de una parte vital del taller:

* **📁 modules/clientes/ :** Almacena la información de los dueños de las motos.
  * *Datos:* `cliente_id`, `nombre`, `telefono`, `correo_electronico` y `fecha_registro`.
* **📁 modules/motos/ :** Registra el historial técnico de cada vehículo.
  * *Datos:* `moto_id`, `cliente_id` (quién es el dueño), `marca`, `modelo`, `cilindrada`, `anio` y `numero_placa`.
* **📁 modules/ordenes/ :** Controla el corazón del negocio (las reparaciones y costos).
  * *Datos:* `orden_id`, `moto_id`, `mecanico_asignado`, `fecha_ingreso`, `diagnostico`, `costo_repuestos`, `costo_mano_obra`, `estado_actual` (Recibida/En Progreso/Lista) y `total_pagar`.

---

## 3. Casos de Validación Identificados 🧪⭐

Para asegurar que nuestro análisis sea robusto, validamos dos escenarios críticos:

* **Caso Normal:** Una orden donde ingresa una *Yamaha R6*, se le hace cambio de aceite, el costo de mano de obra es de `$40.00`, repuestos `$35.00` y el sistema calcula correctamente el total de `$75.00` en estado "En Reparación".
* **Caso Límite (Valores en Cero):** Una orden de revisión por garantía. El costo de repuestos es `$0.00` y la mano de obra es `$0.00`. El sistema debe procesar la orden con éxito sin trabarse por los ceros, marcando la orden como "Garantía Activa / Costo Cero" en el estado.

---

## 4. Bitácora de Comandos Git Ejecutados 🚀☁️

```bash
# Crear y cambiarme a la rama de trabajo del ejercicio 05
git checkout -b alumno/allison-vargas/ejercicio-05

# Verificar el estado del espacio de trabajo
git status