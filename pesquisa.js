const inputPesquisa = document.querySelector('#pesquisarFilme');
const listaDeFilmes = document.querySelector('#listagem_filmes');
const montaURLImg = path => 'https://image.tmdb.org/t/p/w500' + path;
const carregaDetalhes = id => {
    window.location.href = `/detalhes.html?id=${id}`;
};   
inputPesquisa.addEventListener('input', () => {
    const promessa = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=139085027df5dcd94c990e13c0768b53&language=pt-BR&page=1&query=${inputPesquisa.value}`);
    promessa.then(resposta => {
        listaDeFilmes.innerHTML = '';
        resposta.data.results.forEach(elemento => {
            listaDeFilmes.innerHTML += `
            <div class="row elemento">
                <div class="col-lg-2 col-sm-12">
                    <img src="${montaURLImg(elemento.poster_path)}" alt="">
                </div>
                <div class="col-lg-10 col-sm-12">
                    <h1 class="title">${elemento.title}</h1>
                    <p class="overview">${elemento.overview}</p>
                </div>
            </div>
            `;  
        });
        const elementoPesquisado = document.querySelectorAll('.elemento');
        elementoPesquisado.forEach((elemento, i) => {
            elemento.addEventListener("mouseenter", elemento => {
                elemento.target.style.border = "thick solid #E8833A";
            });
            elemento.addEventListener("mouseleave", elemento => {
                elemento.target.style.border = "";
            });
            elemento.addEventListener("dblclick", () => {
                carregaDetalhes(resposta.data.results[i].id);
            });
        });
    });
});

