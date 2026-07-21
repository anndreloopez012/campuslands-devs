const prendas = [
    { nombre: "Camiseta Oversize", talla: "M", stock: 3, ventasSemana: 6 },

    { nombre: "Sudadera Urbana", talla: "L", stock: 8, ventasSemana: 5 },

    { nombre: "Pantalón Cargo", talla: "S", stock: 2, ventasSemana: 4 },

    { nombre: "Chaqueta Denim", talla: "M", stock: 5, ventasSemana: 2 },

    { nombre: "Gorra Snapback", talla: "Única", stock: 1, ventasSemana: 3 }
];

const reportePorTalla = {};

for (const prenda of prendas) {

    const tieneBajoStock = prenda.stock < 5;

    const reposicionSugerida = Math.max(prenda.ventasSemana * 2 - prenda.stock, 0);

    if (!reportePorTalla[prenda.talla]) {

        reportePorTalla[prenda.talla] = [];

    }

    reportePorTalla[prenda.talla].push({

        nombre: prenda.nombre,

        stock: prenda.stock,

        ventasSemana: prenda.ventasSemana,

        bajoStock: tieneBajoStock,

        reposicion: reposicionSugerida

    });

}

for (const talla in reportePorTalla) {

    console.log(`\nTalla: ${talla}`);

    for (const prenda of reportePorTalla[talla]) {

        console.log(

            `Prenda: ${prenda.nombre} | Stock: ${prenda.stock} | Ventas: ${prenda.ventasSemana} | Bajo stock: ${prenda.bajoStock} | Reposición: ${prenda.reposicion}`

        );

    }

}