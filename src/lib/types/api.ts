import { NowPlaying } from "./movie";

export interface Response {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: NowPlaying[];
  total_pages: number;
  total_results: number;
}
