
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
    { Nombre: "Slip", Precio: 15, Oferta: true }
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

class Persona {
    Nombre: string;
    Edad: number;
    Dni: string;
    Domicilio: string;
    constructor(nombre: string = "", edad: number = 0, dni: string = "", domicilio: string = "") { 
        this.Nombre=nombre;
        this.Edad=edad;
        this.Dni=dni;
        this.Domicilio=domicilio;
    };
    //getters
    get nombre(): string {
        return this.Nombre;
    }
    get edad(): number {
        return this.Edad;
    }
    get dni(): string {
        return this.Dni;
    }
    get domicilio(): string {
        return this.Domicilio;
    }
    //setters
    set nombre(nombre: string) {
        this.Nombre = nombre;
    }
    set edad(edad: number) {
        this.Edad = edad;
    }
    set dni(dni: string) {
        this.Dni = dni;
    }
    set domicilio(Domicilio: string) {
        this.Domicilio = Domicilio;
    }
    MostrarInfo(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Dni: ${this.dni}, Domicilio: ${this.domicilio}.`;
    }
}
const persona1 = new Persona("Juan Pérez", 30, "12345678X", "Calle Principal, 123");
const persona2 = new Persona("María García", 25, "98765432Y", "Avenida Secundaria, 456");

console.log(persona1.MostrarInfo());
console.log(persona2.MostrarInfo());
