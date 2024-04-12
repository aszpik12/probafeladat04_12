class gombView {
    #szuloElem
    #adatok = []
    constructor(adatok, szuloElem) {
        this.#adatok = adatok;
        this.#szuloElem = szuloElem;
        console.log("wwwwwww");

        this.gombok();
    }

    gombok() {
        console.log("aaaaaaaa");
        let txt = ` `;
        for (let index = 0; index < this.#adatok.length; index++) {
            txt += `<button class="gombok" data-index="${index}"> ${this.#adatok[index]} </button>`;

        }
        this.#szuloElem.append(txt);

        const gombok = this.#szuloElem.find('.gombok');
        gombok.each((index, gomb) => {
            $(gomb).on('click', () => {
                const gombIndex = $(gomb).data('index');
                this.#esemenyTrigger('gombKattintas', gombIndex);
            });
        });
    }

    #esemenyTrigger(esemenyNev, adat) {
        const E = new CustomEvent(esemenyNev, { detail: adat });
        window.dispatchEvent(E);
    }
}
export default gombView;