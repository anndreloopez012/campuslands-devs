# 1. Definición del listado de autos hiperdeportivos
autos = [
    {"marca": "Rimac", "modelo": "Nevera", "ceroACien": 1.81, "precioUSD": 2200000, "unidades": 150},
    {"marca": "Pininfarina", "modelo": "Battista", "ceroACien": 1.86, "precioUSD": 2200000, "unidades": 150},
    {"marca": "Ferrari", "modelo": "SF90 XX Stradale", "ceroACien": 2.30, "precioUSD": 890000, "unidades": 799},
    {"marca": "Bugatti", "modelo": "Chiron Super Sport", "ceroACien": 2.40, "precioUSD": 3800000, "unidades": 500},
    {"marca": "Koenigsegg", "modelo": "Jesko Absolut", "ceroACien": 2.50, "precioUSD": 3400000, "unidades": 125},
    {"marca": "McLaren", "modelo": "750S", "ceroACien": 2.80, "precioUSD": 330000, "unidades": 1200},
    {"marca": "Porsche", "modelo": "911 GT3 RS", "ceroACien": 3.20, "precioUSD": 240000, "unidades": 1500}
]

# 2. Filtrar autos que aceleran de 0 a 100 km/h en menos de 3.0 segundos
autos_rapidos = [auto for auto in autos if auto["ceroACien"] < 3.0]

# 3. Clasificar exclusividad (< 500 unidades = "Extrema", de lo contrario "Alta")
for auto in autos_rapidos:
    auto["exclusividad"] = "Extrema" if auto["unidades"] < 500 else "Alta"

# 4. Calcular precio promedio de los autos filtrados
total_precio = sum(auto["precioUSD"] for auto in autos_rapidos)
precio_promedio = total_precio / len(autos_rapidos)

# 5. Obtener Top 3 por mejor aceleración (orden ascendente de ceroACien)
top_3_aceleracion = sorted(autos_rapidos, key=lambda x: x["ceroACien"])[:3]

# --- Salida de Resultados ---
print(f"=== AUTOS QUE HACEN 0-100 EN MENOS DE 3s ({len(autos_rapidos)}) ===")
for auto in autos_rapidos:
    print(f"- {auto['marca']} {auto['modelo']} | 0-100: {auto['ceroACien']}s | Exclusividad: {auto['exclusividad']}")

print(f"\nPrecio promedio de los filtrados: ${precio_promedio:,.2f} USD")

print("\n=== TOP 3 MÁS RÁPIDOS ===")
for idx, auto in enumerate(top_3_aceleracion, 1):
    print(f"{idx}. {auto['marca']} {auto['modelo']} - {auto['ceroACien']}s ($ {auto['precioUSD']:,} USD)")