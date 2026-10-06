export const getMoviesBySearch = (movies, value) => {
  console.log({ value });
  console.log({ movies });

  const filteredMovies =
    value?.length > 0
      ? movies?.length > 0 &&
        movies.filter((movie) =>
          movie.name.tolowerCase().movie.name.includes(value.tolowerCase()),
        )
      : movies;
  return filteredMovies;
};
