# Ejercicio 06 Estructura

## Estructura de carpetas
``` text
basico/estructura/ejercicio-06/resoluciones/jakelin-quino/
├── pages/                     // nuevas rutas (login, perfil, admin)
│   ├── home.js
│   ├── destinos.js
│   └── reservas.js
├── components/                // más UI (filtros, calendario, mapa)
│   ├── card-destino.md
│   ├── header.js
│   └── footer.js
├── services/                  // integración con API real, autenticación
│   ├── api.js
│   └── reservas.js
└── data/
    └── destinos.json          // más archivos JSON (usuarios, hoteles, vuelos)
```

## Comandos Git
- git checkout -b feature/app-turismo dev
- mkdir -p pages components services data
- touch pages/home.js pages/destinos.js pages/reservas.js
- touch components/card-destino.md components/header.js components/footer.js
- touch services/api.js services/reservas.js
- touch data/destinos.json
- git add .
- git commit -m "feat: estructura app reservas turísticas"