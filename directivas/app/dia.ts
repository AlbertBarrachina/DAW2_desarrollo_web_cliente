
export class dia{
    dia: number;
    nacional: boolean;
    regional: boolean;
    local: boolean;
    centre: boolean;

    constructor() {
        this.dia = 1;
        this.nacional = false;
        this.regional = false;
        this.local = false;
        this.centre = false;
    }

    get getDia(){
        return this.dia;
    }

    set setDia(dia:number){
        this.dia = dia;
    }

    get getNacional(){
        return this.nacional;
    }

    set setNacional(nacional: boolean){
        this.nacional = !this.nacional;
    }

    get getRegional(){
        return this.regional;
    }

    set setRegional(regional: boolean){
        this.regional = !this.regional;
    }

    get getLocal(){
        return this.local;
    }

    set setLocal(local: boolean){
        this.local = !this.local;
    }

    get getCentre(){
        return this.centre;
    }

    set setCentre(centre: boolean){
        this.centre = !this.centre;
    }

}