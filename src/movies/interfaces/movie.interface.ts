import { MovieCommonEntityInterface } from 'src/commom/interfaces/movie-common-entity.interface';

export interface MovieInterface extends MovieCommonEntityInterface {
  title: string;
  director: string;
  releaseDate: string;
  genre: string;
}
