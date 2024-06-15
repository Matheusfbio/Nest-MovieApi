// src/movies/movies.service.ts

import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieDto } from './dto/movie.dto';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private moviesRepository: Repository<Movie>,
  ) {}

  private movies: Movie[] = [];

  public async findAll(): Promise<MovieDto[]> {
    const movie = await this.moviesRepository.find({});
    return plainToInstance(MovieDto, movie);
  }

  public async findOne(id: string): Promise<Movie> {
    const movie = await this.moviesRepository.findOneBy({
      id,
    });
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  public async create(createMovie: CreateMovieDto): Promise<MovieDto> {
    const movie = this.moviesRepository.create(createMovie);
    const dbMovie = await this.moviesRepository.save(movie);
    return plainToInstance(MovieDto, dbMovie);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.findOne(id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    // Atualize o filme com os novos dados
    Object.assign(movie, updateMovieDto);
    return await this.moviesRepository.save(movie);
  }

  public async remove(id: string): Promise<void> {
    const movie = await this.findOne(id);
    await this.moviesRepository.remove(movie);
  }
}
