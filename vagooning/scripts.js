class VooSeguro {
    #codigo;
    #combustivel;

    constructor(ultimoCodigo) {
        this.#codigo = ultimoCodigo;
        this.#combustivel = 100;
    }

    get obterInformacoes() {
        return `Avião código ${this.#codigo} possui ${this.#combustivel}% de combustível`;
    }

    get lerCombustivel() {
        return this.#combustivel;
    }

    set definirCombustivel(quantidade) {
        if (quantidade < 0 || isNaN(quantidade) || quantidade >= 100) {
            console.log('Por favor, insira uma quantidade válida de combustível');
            console.log('Combustible amount ' + this.#combustivel)
            return 0
        }

        this.#combustivel = quantidade;
        console.log(`Avião abastecido, agora com ${this.#combustivel}% de combustível`);
    }    
}

const aviao = new VooSeguro('G00-N3R')

const btnGastar = document.querySelector('#btnGastar');

btnGastar.addEventListener('click', () => {
    const combustivelFinal = aviao.lerCombustivel - 40;
    aviao.definirCombustivel = combustivelFinal;
    updatePainel(aviao.lerCombustivel);
})

function updatePainel(valor) {
    const painel = document.querySelector('#painelCombustivel');
    painel.innerHTML = `Combustível: ${valor}%`
}

const btnAbastecerSeguro = document.querySelector('#btnAbastecerSeguro');

btnAbastecerSeguro.addEventListener('click', () => {
    const combustivelFinal = aviao.lerCombustivel + 10;
    aviao.definirCombustivel = combustivelFinal;
    updatePainel(combustivelFinal);
})