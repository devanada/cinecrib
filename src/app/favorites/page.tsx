import { cookies } from "next/headers";
import React from "react";
import type { Metadata } from "next";

import MovieCard from "@/components/movie-card";
import { getFavoriteMovies } from "@/lib/apis/movie";

export const metadata: Metadata = {
  title: "Now Playing | CineCrib",
  description: "Now playing on CineCrib",
};

async function Page() {
  const cookieStore = cookies();
  const userID = cookieStore.get("userID");
  const sessionID = cookieStore.get("sessionID");
  const datas = await getFavoriteMovies(
    userID?.value ?? "",
    sessionID?.value ?? ""
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-5">
      {datas.results.map((movie) => (
        <MovieCard key={movie.id} data={movie} href={`/movies/${movie.id}`} />
      ))}
    </div>
  );
}

export default Page;
