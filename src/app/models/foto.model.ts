export interface Foto {
    id: number;
    titulo: string;
    imagen: string;
    categoria: string;
    descripcion: string;
    fecha: Date;
    precio?: number;
}
