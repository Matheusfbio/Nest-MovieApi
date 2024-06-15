import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesRepository {
  public movies: Movie[];
  constructor() {
    this.movies = [];
  }

  /**
   * Method to convert dto to user entity
   * @param createMovie dto
   * @returns Movie
   */
  private convertToMovie(createMovie: CreateMovieDto): Movie {
    const movie = new Movie();

    movie.title = createMovie.title;
    movie.director = createMovie.director;
    movie.releaseDate = createMovie.releaseDate;
    movie.genre = createMovie.genre;

    return movie;
  }

  public create(createMovie: CreateMovieDto): Movie {
    const movie = this.convertToMovie(createMovie);
    movie.id = randomUUID();
    this.movies.push(movie);
    return movie;
  }

  public findAll() {
    return this.movies;
  }

  public findOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) throw new NotFoundException();
    return movie;
  }

  public update(id: string, updateMovieDto: UpdateMovieDto) {
    const movies = this.findOne(id);
    if (updateMovieDto.title) movies.title = updateMovieDto.title;
    if (updateMovieDto.director) movies.director = updateMovieDto.director;
    if (updateMovieDto.releaseDate)
      movies.releaseDate = updateMovieDto.releaseDate;
    if (updateMovieDto.genre) movies.genre = updateMovieDto.genre;
    return movies;
  }

  public remove(id: string) {
    const index = this.movies.findIndex((prop) => prop.id === id);
    if (index < 0) throw new NotFoundException();
    this.movies.splice(index, 1);
  }
}
