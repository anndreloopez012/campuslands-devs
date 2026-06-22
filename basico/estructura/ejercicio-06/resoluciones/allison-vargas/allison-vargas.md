# ✈️ App de Reservas Turísticas - Catálogo de Viajes 🌍
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para resolver este desafío enfocado en una **Aplicación de Reservas Turísticas**, apliqué una arquitectura frontend basada en componentes y separación de dominios. En proyectos del mundo real, mezclar la lógica de las llamadas al servidor con las pantallas y los componentes visuales genera código duplicado y muy difícil de testear.

Decidí solucionar el ordenamiento separando de forma estricta los propósitos de la aplicación:
1.  **Vistas Completas (`pages/`):** Controlan qué se muestra en toda la pantalla de inicio cuando el usuario entra a buscar viajes.
2.  **Piezas Reutilizables (`components/`):** Aíslan los elementos repetitivos (como las tarjetas de destinos), permitiendo que si cambiamos el diseño de una tarjeta, cambie en toda la app de inmediato.
3.  **Lógica Operativa (`services/`):** Controla las reglas de negocio, como la validación de asientos disponibles y el cálculo de precios por noche de hotel.
4.  **Almacén de Datos (`data/`):** Resguarda de forma externa el catálogo JSON de los destinos del mundo.

---

## 🎀 2. Arquitectura del Proyecto (Árbol de Carpetas)

Estructuré el espacio de trabajo eliminando cualquier nombre genérico o ambiguo (como "cosas" o "varios"), cumpliendo de forma estricta el estándar del aula:

```text
basico/estructura/ejercicio-06/resoluciones/allison-vargas/o
├── allison-vargas.md      
├── components/
│   └── card-destino.md     (Documentación y especificación de la tarjeta visual)
├── data/
│   └── destinos.json       (Catálogo oficial de lugares turísticos y precios)
├── pages/
│   └── home.js             (Lógica y montaje de la pantalla de bienvenida)
└── services/
    └── booking.js          (Cerebro lógico encargado de gestionar las reservas)