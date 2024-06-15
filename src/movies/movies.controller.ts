import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieDto } from './dto/movie.dto';
import { IsUUIDParam } from 'src/commom/decorators/is-uuidparam/is-uuidparam.decorator';
import { UpdateMovieDto } from './dto/update-movie.dto';

@ApiTags('movies')
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
  @ApiBody({ description: 'Data of the new movie', type: CreateMovieDto })
  @ApiResponse({ status: 201, description: 'Movie create sucessfully.' })
  async create(@Body() createMovieDto: CreateMovieDto): Promise<MovieDto> {
    return await this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  async update(
    @IsUUIDParam('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<MovieDto> {
    return await this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.moviesService.remove(id);
  }
}
