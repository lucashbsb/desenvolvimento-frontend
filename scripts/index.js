(() => {
    function atualizaAno() {
        const anoEl = document.getElementById('ano');
        if (!!anoEl) {
            anoEl.innerText = (new Date()).getFullYear() + '';
        }
    }

    atualizaAno();
})();

function atualizaModal(json) {
    document.getElementById('titulo-modal').innerHTML = json.title;
    document.getElementById('conteudo-modal').innerHTML = json.description;
}

function abrirModal(personagem) {
    fetch('./assets/mocks/personagens.json')
        .then(res => res.json())
        .then((json) => {
            console.log(json[personagem]);
            atualizaModal(json[personagem])
        });
}
