const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBotaoSelecionado();
        narcarBotaoSelecionado(botao);
        esconderImagemAtiva();
        mostrandoImagemDeFundo(indice);
        esconderInformacoesAtivas();
        mostrarInformacoes(indice);
    });
});

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}
function mostrandoImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}
function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function narcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}
