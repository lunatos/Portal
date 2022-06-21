const montaURLImg = path => 'https://image.tmdb.org/t/p/w500' + path;
const arrumaData = americano => {
    const dataSeparada = americano.split('-');
    const novaData = dataSeparada[2] + '/' + dataSeparada[1] + '/' + dataSeparada[0];
    return novaData;
};

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id');
const promessa = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=139085027df5dcd94c990e13c0768b53&language=pt-BR`);
promessa.then(resposta => {
    console.log(resposta);
    const titulo = document.querySelector("#tituloDoFilme");
    const imagem = document.querySelector("#imgDetalhes");
    const overview = document.querySelector("#overview");
    titulo.textContent = resposta.data.title;
    imagem.src = montaURLImg(resposta.data.poster_path);
    overview.textContent = resposta.data.overview;
});
