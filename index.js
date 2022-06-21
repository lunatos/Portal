const montaURLImg = path => 'https://image.tmdb.org/t/p/w500' + path;


    //preenchendo cards
    const promessaCard = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=139085027df5dcd94c990e13c0768b53&language=pt-BR&page=1');

    promessaCard.then(resposta => {   
        carregaCards(resposta.data.results);
    });

    const carregaDetalhes = id => {
        window.location.href = `/detalhes.html?id=${id}`;
    };   

    const carregaCards = resultados => {
        const card = document.querySelectorAll('.card');
        for (let i = 0; i < card.length; i++) {
            card[i].src = montaURLImg(resultados[i].poster_path)
            card[i].addEventListener('dblclick', () => {carregaDetalhes(resultados[i].id)});     
        }
        card.forEach(elemento => {
            elemento.addEventListener("mouseenter", elemento => {
                elemento.target.style.border = "thick solid #f09e9e";
            });
            elemento.addEventListener("mouseleave", elemento => {
                elemento.target.style.border = "";
            });
        });
    };

    //preenchendo o carrossel de tendencias

    const promessaTendencias = axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=139085027df5dcd94c990e13c0768b53&language=pt-BR');

    promessaTendencias.then(resposta => {
        preenchendoTendencias(resposta.data);
    });

    const arrumaData = americano => {
        const dataSeparada = americano.split('-');
        const novaData = dataSeparada[2] + '/' + dataSeparada[1] + '/' + dataSeparada[0];
        return novaData;
    };

    const preenchendoTendencias = (data) => {
        const imgTendencias = document.querySelectorAll('.trendImg');
        const tituloTendencias = document.querySelectorAll('.trendTitle');
        const overviewTendencias = document.querySelectorAll('.trendOverview');
        const avaliacao = document.querySelectorAll('.avaliacao');
        const lancamento = document.querySelectorAll('.lancamento');

        for (let i = 0; i < imgTendencias.length; i++) {
            imgTendencias[i].src = montaURLImg(data.results[i].poster_path);
            tituloTendencias[i].textContent = data.results[i].title;
            overviewTendencias[i].textContent = data.results[i].overview;
            avaliacao[i].textContent = 'Avaliação: ' + data.results[i].vote_average;
            lancamento[i].textContent = 'Data de lançamento: ' + arrumaData(data.results[i].release_date);
        }
    };

    
    