
# Ejercicio 05: Sistema de Taller de Motos

**Nombre:** Irma Arias

## Estructura del Sistema
- **modulos/clientes/**: Guarda los datos de contacto y perfil de los dueños de las motos.
- **modulos/motos/**: Registra los detalles técnicos de cada vehículo (marca, modelo, chasis).
- **modulos/ordenes/**: Gestiona el ciclo de vida de las reparaciones.
- **docs/**: Contiene `flujo-reparacion.md` con la lógica del servicio técnico.
- **config/**: Contiene `settings.example.json` para las variables del entorno del taller.

## Explicación del Razonamiento
He estructurado el proyecto de forma modular para garantizar que la información sea fácil de localizar y escalar. Al separar clientes, motos y órdenes, el sistema permite gestionar múltiples reparaciones asociadas a un mismo cliente sin redundancia de datos.