# solucion.
---
 * Estudiante: Estiben Ixen
 * Reto: Gestor de personajes RPG
  
---

# Explicación del razonamiento:

    para poder darle a esta parte una buena solucion se dividireon en las siguientes partes

* regisro de datos: se crea una ficha ordenada para cada jugador, guardandoi su nombre, posiscion(rol), asesinatos, muertes, asistencias, oro y objetivos asegurados.
* calculo de kda: Sumamos las bajas y asistencias, y dividimos el resultado entre las muertes; si el jugador no murió (0 muertes), el sistema lo ajusta a 1 de forma inteligente para evitar un error matemático.
* Validacion de oro: Evaluamos la economía del jugador comparando su dinero con la meta del Coach; si supera los 12,000 de oro recibe una marca positiva, y si no, una negativa.
* Calsificacon por rendimiento:Acomodamos a los integrantes del equipo en una lista ordenada de mayor a menor según su puntaje de KDA, dejando al jugador más valioso al inicio.
* Control de alertas:Escaneamos el desempeño colectivo y encendemos una alarma visual si algún rol participó en menos de 3 objetivos, avisando que necesita mejorar su control de mapa.

# codigo

    ```javascript
    
            // Clase para estructurar los datos de cada jugador
    class JugadorMOBA {
        constructor(nombre, rol, kills, deaths, assists, oro, objetivos) {
            this.nombre = nombre;
            this.rol = rol; // top, jungla, mid, adc, soporte
            this.kills = kills;
            this.deaths = deaths;
            this.assists = assists;
            this.oro = oro;
            this.objetivos = objetivos; // Torres, dragones, barones, etc.
            this.kda = this.calcularKDA();
            this.oroValidado = this.validarOro();
        }

        // Paso 2: Calcula KDA evitando la división por cero si deaths es 0
        calcularKDA() {
            const muertesEfectivas = Math.max(this.deaths, 1);
            const resultado = (this.kills + this.assists) / muertesEfectivas;
            return parseFloat(resultado.toFixed(2)); // Redondea a 2 decimales
        }

        // Paso 3: Valida si el oro supera los 12,000
        validarOro() {
            return this.oro > 12000;
        }
    }

    // Analizador del Coach para procesar a todo el equipo
    class AnalizadorEquipo {
        constructor() {
            this.equipo = [];
        }

        // Paso 1: Guardar jugadores
        agregarJugador(nombre, rol, kills, deaths, assists, oro, objetivos) {
            const nuevoJugador = new JugadorMOBA(nombre, rol, kills, deaths, assists, oro, objetivos);
            this.equipo.push(nuevoJugador);
        }

        // Paso 4: Ordenar la lista de jugadores por KDA de mayor a menor
        ordenarPorKDA() {
            return [...this.equipo].sort((a, b) => b.kda - a.kda);
        }

        // Paso 5: Mostrar alertas para roles con pocos objetivos (menos de 3 objetivos)
        generarAlertasObjetivos() {
            const alertas = [];
            this.equipo.forEach(jugador => {
                if (jugador.objetivos < 3) {
                    alertas.push(`ALERTA: El rol [${jugador.rol.toUpperCase()}] (${jugador.nombre}) tiene participación baja en objetivos (${jugador.objetivos}).`);
                }
            });
            return alertas;
        }

        // Imprimir el reporte completo en consola como lo pide el Coach
        imprimirReporte() {
            console.log("=== REPORTE DEL COACH MOBA (ORDENADO POR KDA) ===");
            const equipoOrdenado = this.ordenarPorKDA();
            
            console.table(equipoOrdenado.map(j => ({
                Nombre: j.nombre,
                Rol: j.rol.toUpperCase(),
                KDA: j.kda,
                Oro: `${j.oro} Gold`,
                "¿Supera 12k?": j.oroValidado ? "Sí" : " No",
                Objetivos: j.objetivos
            })));

            console.log("\n=== CONTROL DE OBJETIVOS ===");
            const alertas = this.generarAlertasObjetivos();
            if (alertas.length === 0) {
                console.log(" ¡Excelente control de mapa! Todo el equipo participó en objetivos.");
            } else {
                alertas.forEach(alerta => console.log(alerta));
            }
        }
        }

        // ==========================================
        // PRUEBA DE EJECUCIÓN CON DATOS REALES
        // ==========================================
        const coachAnalisis = new AnalizadorEquipo();

        // Agregamos los 5 roles tradicionales de un equipo MOBA
        coachAnalisis.agregarJugador("Faker", "mid", 8, 0, 6, 14500, 5);     // Deaths en 0 para validar Math.max
        coachAnalisis.agregarJugador("Zeus", "top", 3, 4, 2, 11200, 1);      // Oro bajo y pocos objetivos
        coachAnalisis.agregarJugador("Oner", "jungla", 4, 2, 9, 12100, 6);   
        coachAnalisis.agregarJugador("Gumayusi", "adc", 10, 1, 4, 16000, 4); 
        coachAnalisis.agregarJugador("Keria", "soporte", 1, 3, 15, 9500, 2);  // Pocos objetivos

        // Ejecutamos el análisis solicitado
        coachAnalisis.imprimirReporte();

    ```

# comandos usados
    ```

                767  git init
        768  git pull
        769  git branch -a
        770  git checkout estibenixen-ejercicio-03
        771  git checkout feateure/brandonestibenixenteleguario
        772  git checkout feature/brandonestibenixenteleguario
        773  git merge estibenixen-ejercicio-03
        774  git branch 
        775  cd basico
        776  cd logica
        777  cd ejercicio-04
        778  cd resoluciones
        779  mkdir estibenixen
        780  cd estibenixen
        781  touch estibenixen.md
        782  history

  ```

# commit:
 ```
        camper@campus-H610M-K-V2:~/Documentos/shen/ejercicio/campuslands-devs-2$ git commit -m "feat(logica) ejercicio cuatro realizado"
    [feature/brandonestibenixenteleguario c820a48] feat(logica) ejercicio cuatro realizado
    1 file changed, 141 insertions(+)
    create mode 100644 basico/logica/ejercicio-04/resoluciones/estib
 ```