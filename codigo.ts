
//ejercicio 1
interface Producto {
    Nombre: string;
    Precio: number;
    Oferta?: boolean;
  }
  
  const productos: Producto[] = [
    { Nombre: "Camisa", Precio: 60 },
    { Nombre: "Pantalones", Precio: 45, Oferta: true },
    { Nombre: "Polo", Precio: 35 },
    { Nombre: "Slip", Precio: 15, Oferta: true },
  ];

function ProductosOferta() {
    const ProductoOferta = productos.filter(productos => ProductosOferta);
    ProductoOferta.forEach((producto) => {
        if (producto.Oferta) {
            console.log(`${producto.Nombre} ${producto.Precio}`);
        }
    });
}

function ProductosOrdenados() {
    productos.sort((a, b) => a.Precio - b.Precio);
    productos.forEach((producto) => {
        console.log(`${producto.Nombre} ${producto.Precio}`);
    });
}

//ejercicio 2


