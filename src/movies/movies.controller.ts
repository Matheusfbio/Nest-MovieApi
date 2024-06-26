import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieDto } from './dto/movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie> {
    return await this.moviesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiResponse({ status: 201, description: 'Movie create sucessfully.' })
  @ApiOkResponse({
    description: 'Success movie created',
  })
  async create(@Body() createMovieDto: CreateMovieDto): Promise<MovieDto> {
    return await this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<{ message: string; updatedMovie: MovieDto }> {
    const updatedMovie = await this.moviesService.update(id, updateMovieDto);
    if (!updatedMovie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
    return {
      message: 'Movie updated successfully',
      updatedMovie,
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const deleted = await this.moviesService.remove(id);
    return { message: 'OK' };
  }
}
