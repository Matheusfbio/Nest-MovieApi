import { MovieUpdatableInterface } from '../interfaces';

export class UpdateMovieDto implements MovieUpdatableInterface {
  id?: string;
  title?: string;
  director?: string;
  releaseDate?: Date;
  genre?: string;
}
