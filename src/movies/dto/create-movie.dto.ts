import {
  IsDate,
  IsISO8601,
  IsOptional,
  IsString,
  ValidationTypes,
} from 'class-validator';
import { MovieCreatableInterface } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto implements MovieCreatableInterface {
  @ApiProperty({
    type: 'string',
    description: 'Title',
  })
  @IsString()
  title!: string;

  @ApiProperty({
    type: 'string',
    description: 'Director Name',
  })
  @IsString()
  director!: string;

  @ApiProperty({
    type: 'string',
    description: 'Release Date',
  })
  releaseDate!: string;

  @ApiProperty({
    type: 'string',
    description: 'Genre',
  })
  @IsString()
  genre!: string;
}
