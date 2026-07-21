# 1. Función que recibe una lista de síntomas
def diagnosticar(sintomas):
    recomendaciones = []
    
    # 4. Procesar la lista de síntomas
    for sintoma in sintomas:
        sintoma_clean = sintoma.lower().strip()
        
        # 2 y 3. Evaluación mediante condicionales
        if sintoma_clean == 'no enciende':
            recomendaciones.append("Revisar batería, bujía y sistema de encendido.")
        elif sintoma_clean == 'vibra':
            recomendaciones.append("Inspeccionar balanceo de ruedas y soportes del motor.")
        elif sintoma_clean == 'pierde aceite':
            recomendaciones.append("Verificar empaquetaduras de cárter y retenes de suspensión.")
        elif sintoma_clean == 'frena poco':
            recomendaciones.append("Inspeccionar desgaste de pastillas y nivel de líquido de frenos.")
        else:
            recomendaciones.append("Síntoma desconocido: Requiere revisión general en taller.")
            
    return recomendaciones

# 5. Generación del reporte final
def generar_reporte(piloto, sintomas):
    diagnosticos = diagnosticar(sintomas)
    
    print("=" * 50)
    print("       REPORTE DE DIAGNÓSTICO MECÁNICO")
    print("=" * 50)
    print(f"Piloto: {piloto}")
    print("-" * 50)
    print("Síntomas y Recomendaciones:")
    
    for sintoma, diagnostico in zip(sintomas, diagnosticos):
        print(f"- Síntoma: '{sintoma}'")
        print(f"  Diagnóstico: {diagnostico}")
        
    print("=" * 50)

# Pruebas
sintomas_piloto = ['no enciende', 'vibra', 'pierde aceite', 'frena poco']
generar_reporte("Carlos Sainz", sintomas_piloto)