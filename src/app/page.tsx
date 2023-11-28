import axios from "axios";
import React from "react";

import MovieCard from "@/components/movie-card";

import { Response } from "@/lib/types/api";

async function getData() {
  const result = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=0e6ab6977a441feefe861571f011429c&language=en-US"
  );

  return result.data as Response;
}

async function Page() {
  const datas = await getData();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5">
      {datas.results.map((movie) => (
        <MovieCard key={movie.id} data={movie} href={`/movies/${movie.id}`} />
      ))}
    </div>
  );
}

export default Page;
