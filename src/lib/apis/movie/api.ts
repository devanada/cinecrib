import axiosWithConfig from "@/lib/apis/axiosWithConfig";
import { Response } from "@/lib/types/api";
import { MovieDetail } from "@/lib/apis/movie";

export const getNowPlaying = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/now_playing`);

    return response.data as Response;
  } catch (error: any) {
    throw Error("Failed to get now playing movies");
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/top_rated`);

    const { results } = response.data as Response;

    return results[Math.floor(Math.random() * results.length)];
  } catch (error: any) {
    throw Error("Failed to get top rated movies");
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axiosWithConfig.get(`/movie/upcoming`);

    return response.data as Response;
  } catch (error: any) {
    throw Error("Failed to get upcoming movies");
  }
};

export const getDetailMovie = async (movie_id: string) => {
  try {
    const response = await axiosWithConfig.get(
      `/movie/${movie_id}?append_to_response=videos`
    );

    return response.data as MovieDetail;
  } catch (error: any) {
    throw Error("Failed to get detail movie");
  }
};

export const getSimilarMovies = async (movie_id: string) => {
  try {
    const response = await axiosWithConfig.get(`/movie/${movie_id}/similar`);

    return response.data as Response;
  } catch (error: any) {
    throw Error("Failed to get similar movies");
  }
};

export const getFavoriteMovies = async (
  user_id: string,
  session_id: string
) => {
  console.log("TEST", user_id);
  try {
    const response = await axiosWithConfig.get(
      `/account/${user_id}/favorite/movies?sort_by=created_at.desc&session_id=${session_id}`
    );

    return response.data as Response;
  } catch (error: any) {
    console.log(error);
    throw Error("Failed to get favorite movies");
  }
};
