
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
        this.Nombre = nombre;
        this.Edad = edad;
        this.Dni = dni;
        this.Domicilio = domicilio;
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

//ejercicio 3

class Cafetera {
    Capacidad_maxima: number;
    Cantidad_actual: number;
    constructor(maxima: number = 1000, actual: number = 0) {
        this.Capacidad_maxima = maxima;
        this.Cantidad_actual = actual;
    }
    //getters
    get maxima(): number {
        return this.Capacidad_maxima;
    }
    get actual(): number {
        return this.Cantidad_actual;
    }
    //setters
    set maxima(maxima: number) {
        this.Capacidad_maxima = maxima;
    }
    set actual(actual: number) {
        this.Cantidad_actual = actual;
    }

    Llenar_Cafetera(): void {
        this.Cantidad_actual = this.Capacidad_maxima;
    }

    Servir_Taza(cantidad: number): void {
        if (this.Cantidad_actual - cantidad < 0) {
            this.Cantidad_actual - cantidad;
        } else {
            console.log(`No hay tanto cafe, te aguantas con ${this.Cantidad_actual}ml`);
            this.Vaciar_Taza;
        }
    }

    Vaciar_Taza(): void {
        this.Cantidad_actual = 0;
    }

    Agregar_Cafe(cantidad: number): void {
        this.Cantidad_actual - cantidad;
        if (this.Cantidad_actual > this.Capacidad_maxima) {
            this.Cantidad_actual = this.Capacidad_maxima;
        }
    }
}