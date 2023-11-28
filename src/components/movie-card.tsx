import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Movie } from "@/lib/types/movie";

interface Props {
  data: Movie;
  href: string;
}

const MovieCard = (props: Props) => {
  const { data, href } = props;
  const { title, poster_path } = data;

  return (
    <div className="flex flex-col items-center">
      <Link href={href}>
        <Image
          className="aspect-[2/3] object-cover"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={500}
          height={600}
        />
      </Link>
      <Link className="text-center" href={href}>
        {title}
      </Link>
    </div>
  );
};

export default MovieCard;
