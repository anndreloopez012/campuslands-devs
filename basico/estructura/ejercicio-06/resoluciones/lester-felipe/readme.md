# 🏍️ Sistema de Gestión para App de Reservas-turisticas.
### Alumno:Lester Garcia.

## Descripcion:
Una buena estructura de carpetas antes de empezar a trabajar un proyecto grande, asegura un código altamente escalable, limpio y fácil de mantener en entornos reales de desarrollo.


## Explicacion de las carpetas
```
turismo-app/
├──  src/
│   ├── 📁 pages/
│   │   ├── 📄 home.jsx                # Pantalla principal de bienvenida
│   │   ├── 📄 buscador.jsx            # Buscador avanzado de atracciones y destinos
│   │   ├── 📄 detalle-destino.jsx     # Vista detallada de un destino específico
│   │   └── 📄 reservas.jsx            # Formulario y gestión de reservas de viajes
│   │
│   ├── 📁 components/
│   │   ├── 📁 common/                 # Componentes globales reutilizables
│   │   │   ├── 📄 navbar.jsx
│   │   │   └── 📄 footer.jsx
│   │   ├── 📁 destinos/               # Componentes específicos del dominio de destinos
│   │   │   ├── 📄 card-destino.jsx    # Tarjeta visual para renderizar cada destino
│   │   │   └── 📄 card-destino.md     # Documentación técnica del componente CardDestino
│   │   └── 📁 buscador/               # Componentes de filtrado
│   │       └── 📄 barra-filtros.jsx
│   │
│   ├── 📁 services/
│   │   ├── 📄 api-destinos.js         # Consumo de datos, peticiones HTTP o lectura de JSON local
│   │   └── 📄 api-reservas.js         # Lógica de comunicación con la API de reservas
│   │
│   └── 📁 data/
│       └── 📄 destinos.json           # Base de datos local/mock con los destinos turísticos
│
├── 📄 package.json
├── 📄 README.md
└── 📄 .gitignore
