# 1. Definición del listado de jugadores
jugadores = [
    {"nombre": "Carlos", "partidos": 10, "victorias": 8, "puntosFavor": 110, "puntosContra": 75},
    {"nombre": "Sofía", "partidos": 10, "victorias": 8, "puntosFavor": 115, "puntosContra": 65},
    {"nombre": "Mateo", "partidos": 0, "victorias": 0, "puntosFavor": 0, "puntosContra": 0}, # Jugador sin partidos
    {"nombre": "Ana", "partidos": 8, "victorias": 5, "puntosFavor": 88, "puntosContra": 70},
    {"nombre": "Diego", "partidos": 12, "victorias": 4, "puntosFavor": 95, "puntosContra": 120}
]

jugadores_procesados = []

for j in jugadores:
    # 5. Valida que partidos no sea 0 para evitar división por cero
    if j["partidos"] == 0:
        winrate = 0.0
        puntos_promedio_favor = 0.0
    else:
        # 2. Calcula winrate = victorias / partidos * 100
        winrate = (j["victorias"] / j["partidos"]) * 100
        puntos_promedio_favor = j["puntosFavor"] / j["partidos"]
    
    # 3. Calcula diferencia de puntos
    diferencia_puntos = j["puntosFavor"] - j["puntosContra"]
    
    jugadores_procesados.append({
        **j,
        "winrate": winrate,
        "diferenciaPuntos": diferencia_puntos,
        "puntosPromedioFavor": puntos_promedio_favor
    })

# 4. Ordena por winrate y diferencia de puntos (desempate)
ranking = sorted(
    jugadores_procesados, 
    key=lambda x: (x["winrate"], x["diferenciaPuntos"]), 
    reverse=True
)

# --- Salida del Ranking ---
print("=== RANKING Y TABLA DE RENDIMIENTO - PINGPONG ===")
print(f"{'Pos':<4} | {'Jugador':<8} | {'PJ':<3} | {'PG':<3} | {'Winrate':<8} | {'Dif Ptos':<8} | {'Prom Ptos/P':<11}")
print("-" * 65)

for pos, j in enumerate(ranking, 1):
    print(
        f"{pos:<4} | "
        f"{j['nombre']:<8} | "
        f"{j['partidos']:<3} | "
        f"{j['victorias']:<3} | "
        f"{j['winrate']:6.1f}% | "
        f"{j['diferenciaPuntos']:+8d} | "
        f"{j['puntosPromedioFavor']:11.2f}"
    )