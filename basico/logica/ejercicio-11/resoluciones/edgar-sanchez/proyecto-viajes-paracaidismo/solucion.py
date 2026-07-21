# 1. Definición del listado de reservas
reservas = [
    {"nombre": "Carlos Gómez", "destino": "Dubai", "actividad": "paracaidismo", "edad": 25, "costoBase": 450.0},
    {"nombre": "Sofía Martínez", "destino": "Interlaken", "actividad": "paracaidismo", "edad": 17, "costoBase": 400.0}, # No cumple edad
    {"nombre": "Mateo Rossi", "destino": "Hawái", "actividad": "surf de olas gigantes", "edad": 22, "costoBase": 300.0},
    {"nombre": "Ana López", "destino": "Cairns", "actividad": "paracaidismo", "edad": 18, "costoBase": 420.0},
    {"nombre": "Lucía Fernández", "destino": "Alpes Suizos", "actividad": "parente", "edad": 16, "costoBase": 250.0}
]

IMPUESTO_PORCENTAJE = 0.12 # 12% de impuesto

reservas_procesadas = []

for r in reservas:
    # 2. Validación de edad mínima (paracaidismo requiere >= 18)
    es_paracaidismo = r["actividad"].lower() == "paracaidismo"
    es_valida = not es_paracaidismo or r["edad"] >= 18
    
    # 3. Cálculo de costo total con el 12% de impuesto
    costo_impuesto = r["costoBase"] * IMPUESTO_PORCENTAJE
    costo_total = r["costoBase"] + costo_impuesto
    
    reservas_procesadas.append({
        **r,
        "costoTotal": costo_total,
        "valida": es_valida,
        "motivoRechazo": None if es_valida else "Menor de 18 años para paracaidismo"
    })

# 4. Filtrar reservas no válidas (conservamos solo las aprobadas)
reservas_aprobadas = [r for r in reservas_procesadas if r["valida"]]
reservas_rechazadas = [r for r in reservas_procesadas if not r["valida"]]

# 5. Generar resumen de reservas aprobadas
print("=== RESERVAS APROBADAS ===")
monto_total_agencia = sum(r["costoTotal"] for r in reservas_aprobadas)

for r in reservas_aprobadas:
    print(f"✓ {r['nombre']} | {r['destino']} ({r['actividad']}) | Edad: {r['edad']} | Total: ${r['costoTotal']:.2f} USD")

print("\n--- RESUMEN GENERAL ---")
print(f"Reservas aprobadas: {len(reservas_aprobadas)}")
print(f"Reservas rechazadas: {len(reservas_rechazadas)}")
print(f"Ingreso total estimado: ${monto_total_agencia:,.2f} USD")

if reservas_rechazadas:
    print("\n--- DETALLE DE RECHAZOS ---")
    for r in reservas_rechazadas:
        print(f"✗ {r['nombre']} ({r['actividad']}): {r['motivoRechazo']}")