export class Personaje {
    nombre: String;
    comunicacion: number;
    constitucion: number;
    astucia: number;
    destreza: number;
    magia: number;
    percepcion: number;
    fuerza: number;
    voluntad: number;
    info: String;

    constructor() {
        this.nombre = "";
        this.comunicacion = 3;
        this.constitucion = 3;
        this.astucia = 3;
        this.destreza = 3;
        this.magia = 3;
        this.percepcion = 3;
        this.fuerza = 3;
        this.voluntad = 3;
        this.info="Esta parte no esta hecha";
    }

    get getnombre() {
        return this.nombre;
    }
    set setnombre(nombre: String) {
        this.nombre = nombre;
    }
    get getcomunicacion() {
        return this.comunicacion;
    }
    get getconstitucion() {
        return this.constitucion;
    }
    get getastucia() {
        return this.astucia;
    }
    get getdestreza() {
        return this.destreza;
    }
    get getmagia() {
        return this.magia;
    }
    get getpercepcion() {
        return this.percepcion;
    }
    get getfuerza() {
        return this.fuerza;
    }
    get getvoluntad() {
        return this.voluntad;
    }
    get getinfo() {
        return this.info;
    }
    get getpersonaje() {
        return this;
    }

    generar() {
        let nombres: string[] = ["Lúrtzgro", "Ogthul", "Drada", "Blorgthos", "Crobu", "Tanba", "Duzdorg", "Odanti", "Uzgor", "Gashmog", "Thosbug"];
        this.nombre = nombres[this.nombreAleatorio(nombres.length)];
        this.comunicacion = this.numeroAleatorio();
        this.constitucion = this.numeroAleatorio();
        this.astucia = this.numeroAleatorio();
        this.destreza = this.numeroAleatorio();
        this.magia = this.numeroAleatorio();
        this.percepcion = this.numeroAleatorio();
        this.fuerza = this.numeroAleatorio();
        this.voluntad = this.numeroAleatorio();
    }
    reiniciar() {
        this.nombre = "";
        this.comunicacion = 3;
        this.constitucion = 3;
        this.astucia = 3;
        this.destreza = 3;
        this.magia = 3;
        this.percepcion = 3;
        this.fuerza = 3;
        this.voluntad = 3;
    }

    private nombreAleatorio(mayor: number): number {
        return Math.floor(Math.random() * (mayor));
    }
    private numeroAleatorio(): number {
        return Math.floor(Math.random() * (16) + 3);
    }
}