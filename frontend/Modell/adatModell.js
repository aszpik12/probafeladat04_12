import { adatbazis, gombok } from "./adatok.js";

class adatModell {
    #adatbazis;
    #gombok

    constructor() {
        this.#adatbazis = adatbazis
        this.#gombok = gombok
    }

    getAdatbazis() {
        return [...this.#adatbazis];
    }

    getGombok() {
        return [...this.#gombok];
    }
}
export default adatModell;