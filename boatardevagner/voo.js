class Voo {
    constructor(codigo, origem, destino) {
        if (origem === destino) {
            throw new Error(`Código e origem são iguais`);
        }
        if (codigo === "") {
            throw new Error(`Código vazio`);
        }

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
    }
}

export default Voo;