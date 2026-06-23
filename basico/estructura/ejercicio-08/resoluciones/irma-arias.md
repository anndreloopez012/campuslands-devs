# Ejercicio 08: Gestión de Menú Urbano

**Nombre:** Irma Arias

## Arquitectura del Proyecto
- **menu/**: Carpeta raíz para los datos estructurados (platos, bebidas, combinaciones).
- **recursos/fotos/**: Almacena los archivos de imagen.
- **docs/**: Documentación técnica y reglas de precios.
- **scripts/**: Lógica de procesamiento del menú.

## ¿Por qué separar imágenes de datos?
No conviene mezclar imágenes con datos porque son archivos binarios pesados. Mantenerlos separados optimiza el control de versiones con Git y mejora el rendimiento al cargar solo los recursos necesarios.

## Ejemplo de Datos (platos.json)
```json
{
  "id": "p-001",
  "nombre": "Tacos al Pastor",
  "precio": 45.00,
  "categoria": "Plato fuerte"
}