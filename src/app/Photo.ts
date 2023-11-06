
export class Photo {
    img: String;
    descripcion: String
    locked: boolean;
  
    constructor() {
      this.locked = true;
      this.img = "../assets/lock-closed.png";
      this.descripcion = "Descripcion";
    }
  
    get getImg(){
      return this.locked ? "/assets/lock-closed.png" :"https://picsum.photos/200/200";
    }
  
    changeLock(){
      this.locked = !this.locked;
    }
  }