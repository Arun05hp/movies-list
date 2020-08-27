import http from "./httpService";
import { getGenres } from "./genreService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(id) {
  return http.get(apiEndPoint + "/" + id);
}
export async function saveMovie(movie) {
  const { data: movies } = await getMovie();
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  const genres = await getGenres();
  movieInDb.genre = genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}
