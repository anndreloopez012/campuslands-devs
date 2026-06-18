 #  EXPLICACIÓN DEL RAZONAMIENTO (Requisito Obligatorio del Entregable)

##   1. ANALISIS DEL PROBLEMA: El objetivo principal era transformar las estadísticas 
      de un torneo en una tabla clasificatoria limpia. Identifiqué que la clave 
      estaba en separar la lógica matemática del ordenamiento algorítmico.
   
##   2. DISEÑO: Diseñé la función `calcularPuntajeTotal` usando estructuras condicionales 
      `if/else` claras para evitar anidaciones confusas que dificultaran la lectura. 
      Utilicé nombres explícitos como `puntosPorBajas` para que cualquier compañero entienda el flujo.
   
##   3. CASO LÍMITE: Añadí la escuadra 'Omega Squad' con 0 bajas, posición 15 y 0 revividos 
      para validar que el programa controle correctamente valores en cero o nulos, 
      asignándole con éxito únicamente los 4 puntos base por participar.
   
##   4. EVIDENCIA DE COMPROBACIÓN CON EL EJEMPLO DEL README:
      - Entrada evaluada: {nombre:'Nova', bajas:8, posicion:1, revividos:2}
      - Operación matemática: (8 bajas * 3 pts = 24) + (Posición 1 = 20 pts) = 44 pts.
      - Salida en consola idéntica a la esperada: "1. Nova - 44 pts."
  