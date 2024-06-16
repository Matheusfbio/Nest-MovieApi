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
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
  ) {}

  public async create(createMovieDto: CreateMovieDto): Promise<MovieDto> {
    try {
      // Crie um novo objeto Movie com releaseDate como instância de Date
      const movie: Movie = this.moviesRepository.create({
        ...createMovieDto,
      });

      // Salve o objeto Movie no banco de dados
      const dbMovie = await this.moviesRepository.save(movie);

      // Converta o objeto salvo para DTO usando plainToInstance
      return plainToInstance(MovieDto, dbMovie);
    } catch (error) {
      console.error('Error trying to create a new movie', error);

      // Lança uma exceção específica caso ocorra um erro ao salvar no banco de dados
      if (error.code === 'ER_DUP_ENTRY') {
        throw new InternalServerErrorException('Movie already exists');
      } else if (error instanceof InternalServerErrorException) {
        throw error; // Repassa exceções já tratadas internamente
      } else {
        throw new InternalServerErrorException('Failed to create movie');
      }
    }
  }

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
