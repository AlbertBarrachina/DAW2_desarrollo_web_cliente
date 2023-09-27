
//ejercicio 1
/*
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
*/
//ejercicio 2

class Persona {
    private Nombre: string;
    private Edad: number;
    private Dni: string;
    private Domicilio: string;
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
    private Capacidad_maxima: number;
    private Cantidad_actual: number;
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

    //llena la cafetera al tope
    Llenar_Cafetera(): void {
        this.Cantidad_actual = this.Capacidad_maxima;
    }

    //vacia la cantidad especificada o hasta que se quede a 0
    Servir_Taza(cantidad: number): void {
        if (this.Cantidad_actual >= cantidad) {
            this.Cantidad_actual -= cantidad;
        } else {
            console.log(`No hay tanto cafe, te aguantas con ${this.Cantidad_actual}ml`);
            this.Vaciar_Taza;
        }
    }

    //vacia la cafetera del todo
    Vaciar_Taza(): void {
        this.Cantidad_actual = 0;
    }

    //llena la cafetera al tope de esta
    Agregar_Cafe(cantidad: number): void {
        this.Cantidad_actual - cantidad;
        if (this.Cantidad_actual > this.Capacidad_maxima) {
            this.Cantidad_actual = this.Capacidad_maxima;
        }
    }
}


//enunciado 4
//interfaz de producto
interface Producto {
    nombre_producto: string;
    numero_lote: number;
}
//clase fresca
class ProductoFresco implements Producto {
    private fecha_envase: Date;
    private pais_origen: string;
    nombre_producto: string;
    numero_lote: number;
    constructor(fecha: Date, pais: string, nombre: string, numeroLote: number) {
        this.nombre_producto = nombre;
        this.numero_lote = numeroLote;
        this.fecha_envase = fecha;
        this.pais_origen = pais;
    }
    //getters
    get nombre(): string {
        return this.nombre_producto;
    }
    get numeroLote(): number {
        return this.numero_lote;
    }
    get fecha(): Date {
        return this.fecha_envase;
    }
    get pais(): string {
        return this.pais_origen;
    }
    //setters
    set fecha(fecha: Date) {
        this.fecha_envase = fecha;
    }
    set pais(pais: string) {
        this.pais_origen = pais;
    }
    set nombre(nombre: string) {
        this.nombre_producto = nombre;
    }
    set numeroLote(numeroLote: number) {
        this.numero_lote = numeroLote;
    }

    MostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Número de Lote: ${this.numeroLote}`);
        console.log(`Fecha de Envasado: ${this.fecha_envase.toDateString()}`);
        console.log(`País de Origen: ${this.pais_origen}`);
      }
}
//clase de refrigerados
class ProductoRefrigerado implements Producto {
    private codigo_supervisor: number;
    nombre_producto: string;
    numero_lote: number;
    constructor(supervisor: number, nombre: string, numeroLote: number) {
        this.nombre_producto = nombre;
        this.numero_lote = numeroLote;
        this.codigo_supervisor = supervisor;
    }
    //getters
    get supervisor(): number{
        return this.codigo_supervisor;
    }
    get nombre(): string {
        return this.nombre_producto;
    }
    get numeroLote(): number {
        return this.numero_lote;
    }
    //setters
    set supervisor(supervisor:number){
        this.supervisor = supervisor;
    }
    set nombre(nombre: string) {
        this.nombre_producto = nombre;
    }
    set numeroLote(numeroLote: number) {
        this.numero_lote = numeroLote;
    }

    MostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Número de Lote: ${this.numeroLote}`);
        console.log(`Código de Supervisión: ${this.codigo_supervisor}`);
      }
}
//clase de congelados
class ProductoCongelado implements Producto {
    private temp_recomendada: number;
    nombre_producto: string;
    numero_lote: number;
    constructor(temp: number, nombre: string, numeroLote: number) {
        this.nombre_producto = nombre;
        this.numero_lote = numeroLote;
        this.temp_recomendada = temp;
    }
    //getters
    get temp(): number {
        return this.temp_recomendada;
    }
    get nombre(): string {
        return this.nombre_producto;
    }
    get numeroLote(): number {
        return this.numero_lote;
    }
    //setters
    set temp(temp: number) {
        this.temp_recomendada = temp;
    }
    set nombre(nombre: string) {
        this.nombre_producto = nombre;
    }
    set numeroLote(numeroLote: number) {
        this.numero_lote = numeroLote;
    }
    //funcion para mostrar la info
    MostrarInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Número de Lote: ${this.numeroLote}`);
        console.log(`Temperatura de Congelación Recomendada: ${this.temp_recomendada}°C`);
      }
}