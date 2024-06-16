import { ApiProperty } from '@nestjs/swagger';
import { MovieInterface } from '../interfaces';
import { IsString } from 'class-validator';
import { MovieCommomEntity } from 'src/commom/movie-commom.entity';
import { Expose } from 'class-transformer';

export class MovieDto extends MovieCommomEntity implements MovieInterface {
  title!: string;
  director!: string;
  releaseDate!: string;
  genre!: string;
}
