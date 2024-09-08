let section = document.getElementById('resultados-pesquisa');
let resultado = '';

for (let dado of dados) {
    resultado += `
        <div class="caixa-resultado">
            <div class="item-resultado">
                <h2>#${dado.numero} - ${dado.nome}</h2>
                <div class="descricao">
                    <img src="${dado.imagem}" alt="${dado.nome}">
                    <div class="descricao-texto">
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p class="tipo"><strong>Tipagem:</strong> ${dado.tipagem}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}
section.innerHTML = resultado;

function procurar() {
    let pesquisa = document.getElementById('pesquisa').value;
    section.innerHTML = '';
    resultado = '';
    for (let dado of dados) {
        if (dado.numero.includes(pesquisa) || dado.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
            resultado += `
                <div class="caixa-resultado">
                    <div class="item-resultado">
                        <h2>#${dado.numero} - ${dado.nome}</h2>
                        <div class="descricao">
                            <img src="${dado.imagem}" alt="${dado.nome}">
                            <div>
                                <p class="descricao-meta">${dado.descricao}</p>
                                <p class="tipo"><strong>Tipagem:</strong> ${dado.tipagem}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
    section.innerHTML = resultado;
}