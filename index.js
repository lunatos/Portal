import axios from 'axios';

const promessa = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=139085027df5dcd94c990e13c0768b53&language=en-US&page=1');
promessa.then(resposta => {
    console.log(resposta.data);
});