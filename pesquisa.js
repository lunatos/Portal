//preenchendo filmes da caixa de pesquisa
let promessaPesquisa = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=139085027df5dcd94c990e13c0768b53&page=1`);
const listaDeFilmes = document.querySelector('#listagem_filmes');
promessaPesquisa.then(resposta => {
    console.log(resposta);
});
promessaPesquisa.catch(erro => console.log(erro));