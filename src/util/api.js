const apiKey = "7badec33";
export const fetchMovies = async (title) => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
  );
  const data = await response.json();
  return data.Search || [];
};

export const fetchMoviesDetails = async (id) => {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  const data = await res.json();
  return data;
};
