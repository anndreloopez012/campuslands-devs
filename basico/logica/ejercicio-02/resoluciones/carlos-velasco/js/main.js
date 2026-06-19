function cargarArmas() {
  fetch('./data/datos.json')
    .then(res => res.json())
    .then(data => {
      const armas = data
        .filter(a => a.municion >= 30)
        .map(a => ({ ...a, recomendada: ['rara', 'epica'].includes(a.rareza) }));

      const resultado = {
        rifles: armas.filter(a => a.tipo === 'rifle'),
        pistolas: armas.filter(a => a.tipo === 'pistola'),
        francotiradores: armas.filter(a => a.tipo === 'francotirador')
      };

      console.log("Resumen:", resultado);
    });
}
cargarArmas();