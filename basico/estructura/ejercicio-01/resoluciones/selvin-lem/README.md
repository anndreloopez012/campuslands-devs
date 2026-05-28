# Action & Adventure Video Game - Base de proyecto

Repositorio base de **action-and-adventure-video-game**. Este proyecto ha sido estructurado siguiendo los estándares de la industria del desarrollo de videojuegos, asegurando una arquitectura limpia, modular y fácil de escalar para cualquier equipo técnico.

La estructura está diseñada bajo el principio de separación de responsabilidades, permitiendo que el código, los recursos artísticos, las pruebas y la documentación técnica coexistan de manera ordenada sin generar conflictos en el control de versiones.

---

##  Árbol de Directorios del Proyecto

A continuación, se detalla la arquitectura del espacio de trabajo y la función técnica de cada componente:

```text
action-and-adventure-video-game/
├──assets/                  # Recursos y artefactos del videojuego (Multimedia)
│   ├──audio/               # Bandas sonoras (BGM), efectos de sonido (SFX) y doblajes
│   ├──images/              # Texturas, interfaces de usuario (UI) y gráficos
│   └──maps/                # Diseños de niveles, mallas de navegación y datos de entornos
├──docs/                    # Documentación técnica y conceptual del proyecto
│   └──designs/             # Game Design Document (GDD), mecánicas e historias (Lore)
├──src/                     # Código fuente principal (Source Code)
│   └──system/              # Sistemas centrales e infraestructura de la lógica del juego
│       ├──combat/          # Scripts de colisiones de ataque, cálculo de daño y comportamiento de armas
│       └──movement/        # Lógica cinemática del jugador (caminar, correr, saltar y físicas)
├──tests/                   # Entorno de pruebas unitarias y de integración
└──README.md                # Guía principal y documentación técnica de bienvenida (Raíz)