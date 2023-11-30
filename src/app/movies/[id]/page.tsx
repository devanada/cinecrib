import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

import { getDetailMovie } from "@/lib/apis/movie";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const movie = await getDetailMovie(id);

  return {
    title: movie.title + " | CineCrib",
  };
}

async function Page({ params }: { params: { id: string } }) {
  const movie = await getDetailMovie(params.id);

  return (
    <div
      className="w-full h-full bg-no-repeat bg-center bg-cover flex items-center justify-center p-5"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
      }}
    >
      <div className="flex gap-3 bg-white/70 dark:bg-black/70 p-8 h-fit w-full md:w-3/4 lg:w-3/5 shadow-lg shadow-black">
        <Image
          className="aspect-[2/3] object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={250}
          height={300}
        />
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">{movie.title}</p>
          <div className="flex gap-2 w-full flex-wrap">
            {movie.genres.map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
            ))}
          </div>
          <p>
            {movie.vote_average} ★ <span>{`(${movie.vote_count})`}</span>
          </p>
          <p>{movie.runtime} minutes</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
