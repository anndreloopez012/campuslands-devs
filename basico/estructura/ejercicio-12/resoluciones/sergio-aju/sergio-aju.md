# Resolución: Registro de Soldadura Industrial

**Autor:** [Tu Nombre y Apellido]
**Fecha:** 3 de julio de 2026

## Razonamiento del problema
Para resolver este ejercicio, seguí un enfoque modular. Dividí la información en cuatro dominios principales:
1. **Seguridad:** Prioridad absoluta, gestionada vía checklist para asegurar cumplimiento normativo antes de iniciar.
2. **Materiales:** Catálogo centralizado para evitar errores de inventario (tipo de electrodo, amperaje, metal base).
3. **Prácticas:** Registro histórico con trazabilidad.
4. **Evidencias:** Separación estricta entre archivos de texto (datos) y archivos multimedia (imágenes/fotos) para mantener el repositorio ligero.

## Estructura de carpetas
- `practicas/`: Documenta las sesiones realizadas.
- `materiales/`: Define insumos disponibles.
- `seguridad/`: Contiene el `checklist.md` obligatorio.
- `evidencias/`: Almacena reportes en formato PDF o TXT. Las imágenes deben llevar una nomenclatura clara (ej: `img_soldadura_01.jpg`).

## Proceso de Validación
- **Caso normal:** Checklist completo -> Registro de práctica exitoso -> Reporte generado.
- **Caso límite:** Checklist incompleto -> Bloqueo de inicio de práctica -> Notificación de seguridad.