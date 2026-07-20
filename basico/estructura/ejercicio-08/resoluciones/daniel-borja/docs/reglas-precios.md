# Estrategia de Precios y Arquitectura Fiscal

## 1. Impuestos e Inclusiones
Todos los valores numéricos definidos en los archivos JSON de la carpeta `menu/` representan el **precio base neto**. El cálculo del impuesto al valor agregado (IVA) o impuestos locales debe ser calculado en el frontend o microservicio de facturación a través de los scripts automatizados.

## 2. Reglas de Negocio para Combos y Descuentos
- **Estrategia Combo:** Los paquetes definidos en `combos.json` deben aplicar de forma obligatoria un descuento automático de entre el 10% y el 15% en comparación con la suma individual de los artículos.
- **Casos Límites de Disponibilidad:** Si uno de los componentes de un combo tiene el atributo `"disponible": false` dentro de su respectivo archivo JSON, el combo completo debe marcarse automáticamente como "No Disponible" en la interfaz de usuario.