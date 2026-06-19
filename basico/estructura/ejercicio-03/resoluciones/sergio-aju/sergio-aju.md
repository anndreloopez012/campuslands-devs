## Descripcion

Se diseñó una estructura básica para un backend de un videojuego battle royale.

## Autor 

Sergio Ajú

## Estructura

```text
sergio-aju/
├── src/
│   ├── controllers/
│   │   └── weaponController.js
│   ├── models/
│   │   └── weaponModel.js
│   ├── routes/
│   │   └── weaponRoutes.js
│   └── services/
│       └── weaponService.js
└── sergio-aju.md

```
## Responsabilidad de cada carpeta

## controllers
Responsable de manejar las peticiones del usuario.

## services
Contiene la lógica de negocio del sistema.

## models
Define la estructura de los datos.

## routes
Define las rutas disponibles del sistema.

## Razonamiento

Primero identifiqué los componentes principales de un backend.  
Después separé cada responsabilidad en carpetas independientes para mantener el código organizado y fácil de mantener.

## Validación

### Caso normal
La estructura contiene todas las carpetas solicitadas.

### Caso límite
El proyecto puede crecer agregando más controladores, servicios, modelos y rutas sin modificar la organización principal.