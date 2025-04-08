import MovieList from "./MovieList";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BodyHeader from "./BodyHeader";
import React, { useEffect, useState } from "react";
import PricePlans from "./PricePlans";

export default function Body() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2EzNDJmZjhkNjJhYjRkMTc3NzNhODk5NzZhYTkyYiIsIm5iZiI6MTc0MzkzMzU0OS41NzYsInN1YiI6IjY3ZjI1MDZkN2I0M2JkY2UyMGFjZTUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MnqJp4Q8MNk87Y_CbEwKMS4ufrk6o2GrnFBnJ6VVhyg",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <BodyHeader />
      <MovieList movies={movies} />
      <PricePlans />
    </div>
  );
}
