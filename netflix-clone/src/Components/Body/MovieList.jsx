export default function MovieList({ movies }) {
  const baseImageURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="w-full dark:bg-gray-800">
      <div className="w-full mx-auto px-6 lg:px-8 pt-8">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trending
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Dive into the latest in entertainment with trending movies and
            shows.
          </p>
        </div>
        <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-3">
          {movies?.map((movie) => (
            <article
              key={movie.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80"
            >
              <img
                src={baseImageURL + movie.poster_path}
                alt={movie.title || movie.name}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {movie.title || movie.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
