import voo from './voo.js';

const campoCodigo = document.getElementById("codigoVoo");
const campoOrigem = document.getElementById("origemVoo");
const campoDestino = document.getElementById("destinoVoo");
const btnRegistrar = document.getElementById("btnRegistrar");
const mensagemTela = document.getElementById("avisoSistema");

btnRegistrar.addEventListener("click", () => {
    try {
        const novoVoo = new voo(
            campoCodigo.value, 
            campoOrigem.value, 
            campoDestino.value
        );

        mensagemTela.innerText = "Voo cadastrado com sucesso.";
        mensagemTela.style.color = "green";
        
        console.log(novoVoo);

    } catch (erro) {
        mensagemTela.innerText = erro.message;
        mensagemTela.style.color = "red";
        console.log(erro);
    } finally {
        console.log("Tentativa de voo finalizada");
    }
});