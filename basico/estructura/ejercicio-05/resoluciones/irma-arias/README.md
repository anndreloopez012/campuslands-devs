
# Sistema de Gestión para Taller de Motos

## Autor
Irma Arias

## Descripción
Este proyecto consiste en la estructuración modular de un sistema de gestión para un taller de reparación de motocicletas. El objetivo es mantener un orden jerárquico y lógico que permita escalar la aplicación y facilitar el mantenimiento.

## Estructura de módulos
- **módulos/clientes/**: Contiene la información personal y el historial de propietarios de las motocicletas.
- **módulos/motos/**: Registra los detalles técnicos, marca, modelo, VIN y estado mecánico de cada unidad.
- **módulos/ordenes/**: Gestiona el flujo completo de reparación, incluyendo diagnóstico, presupuesto y entrega.

## Configuración
- **config/settings.example.json**: Archivo de ejemplo con la configuración base necesaria para la conexión a servicios o base de datos.

## Documentación
- **docs/flujo-reparacion.md**: Guía detallada del proceso técnico que debe seguir una moto desde su ingreso al taller hasta su finalización.

## Razonamiento
He estructurado el proyecto basándome en el principio de separación de responsabilidades. Al dividir el sistema en módulos independientes, logramos que los datos no se mezclen y que cualquier integrante del equipo técnico sepa exactamente dónde encontrar la información necesaria para realizar una reparación o atender a un cliente