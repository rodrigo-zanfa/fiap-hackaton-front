import api from "../Common/api";

const getMovies = (search: string) => api.get("/movies?searchTerm=" + search);
const getMovieInfo = (prodID: string) => api.get("/movies/" + prodID);

export default {
  getMovies,
  getMovieInfo,
};
