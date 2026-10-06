import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../component/Navbar/Navbar";
import MovieCard from "../../component/MovieCard/MovieCard";
import { getMovies } from "../../api/movie";
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";

const Home = () => {
  const dispatch = useDispatch();

  const {
    searchValue,
    movies = [],
    loading,
    error,
  } = useSelector((state) => state.movies);

  // const filteredMovies = getMoviesBySearch(movies, searchValue);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Movies</h1>

          {!loading && !error && movies.length > 0 && (
            <p className="mt-1 text-sm text-gray-500">
              {searchValue
                ? `${filteredMovies.length} movies found`
                : `${movies.length} movies found`}
            </p>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-gray-500">Loading movies...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex min-h-[300px] flex-col items-center justify-center">
            <p className="mb-4 text-center text-red-500">{error}</p>

            <button
              onClick={() => dispatch(getMovies())}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* No Movies */}
        {!loading && !error && movies.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-center text-gray-500">No movies found.</p>
          </div>
        )}

        {/* No Search Results */}
        {!loading &&
          !error &&
          movies.length > 0 &&
          filteredMovies.length === 0 && (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-center text-gray-500">
                No movies found for "{searchValue}".
              </p>
            </div>
          )}

        {/* Movies Grid */}
        {!loading && !error && movies.length > 0 && (
          <section
            aria-label="Movie list"
            className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
              "
          >
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
