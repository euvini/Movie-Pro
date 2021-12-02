import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os filmes salvos

export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSaved = JSON.parse(myMovies) || [];
    return moviesSaved;
}

//Salvar um novo filme

export async function saveMovie(key, newMovie) {
    let movieStored = await getMoviesSave(key)
    //Se tiver algum filme salvo com o mesmo ID precisamos ignorar.
    const hasMovie = movieStored.some(item => item.id === newMovie.id)

    if (hasMovie) {
        console.log("Já ta salvo");
        return;
    }

    movieStored.push(newMovie)

    await AsyncStorage.setItem(key, JSON.stringify(movieStored));
    console.log("Filme salvo");
}

//deletar um filme da lista

export async function deleteMovie(id) {
    let movieStored = await getMoviesSave('@movi.e');

    let myMovies = movieStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@movi.e', JSON.stringify(myMovies));
    console.log("filme deletado");
    return myMovies;
}

//filtrar filme salvo

export async function hasMovie(movie) {
    let movieStored = await getMoviesSave('@movi.e');

    const hasMovie = movieStored.find(item => item.id === movie.id)

    if (hasMovie) {
        return true;
    }

    return false;
}