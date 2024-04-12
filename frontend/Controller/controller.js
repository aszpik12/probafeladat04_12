import adatModell from "../Modell/adatModell.js";
import gombView from "../View/gombView.js";

class controller{
    #adatok;
    #kozpont;
    #gomb;

    constructor(){
        this.#adatok = new adatModell();
        this.#gomb = new gombView(this.#adatok.getGombok(), $(".gombokat"));
    }
}
export default controller;